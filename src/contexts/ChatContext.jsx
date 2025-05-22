import { createContext, useState, useContext } from "react";
import { inbox, messages as messageMap } from "../data/messages";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(inbox[0]?.id ?? null);
  const [composerText, setComposerText] = useState("");

  const [chats, setChats] = useState(
    inbox.map((entry) => ({
      id: entry.id,
      name: entry.user,
      avatar: entry.avatar,
      lastMessage: entry.lastMessage,
      timeAgo: entry.time,
      status: "online", 
      closed: false,
      messages: messageMap[entry.id] || [],
      email: `${entry.user.split(" ").join(".").toLowerCase()}@example.com`,
      location: "New York, USA", 
      device: "iPhone",           
      browser: "Safari",          
    }))
  );

  const sendMessage = (chatId, message) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [...chat.messages, message],
              lastMessage: message.text,
            }
          : chat
      )
    );
  };

  const closeChat = (chatId) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === chatId ? { ...chat, closed: true } : chat
      )
    );
  };

  const reopenChat = (chatId) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === chatId ? { ...chat, closed: false } : chat
      )
    );
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        selectedChat,
        setSelectedChat,
        sendMessage,
        closeChat,
        reopenChat,
        composerText,
        setComposerText,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);