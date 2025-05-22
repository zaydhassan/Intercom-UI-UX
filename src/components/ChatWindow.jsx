import { useChat } from "../contexts/ChatContext";
import MessageInput from "./MessageInput";
import { motion } from "framer-motion";

const ChatWindow = () => {
  const { chats, selectedChat, closeChat, reopenChat, setSelectedChat } = useChat();

  const chat = chats.find((c) => c.id === selectedChat) ?? null;

  if (!chat) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500">
        No chat selected.
      </div>
    );
  }

  const handleClose = () => closeChat(chat.id);
  const handleReopen = () => reopenChat(chat.id);
  const messages = Array.isArray(chat.messages) ? chat.messages : [];

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-intercom-dark transition-all">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-intercom-darkAccent"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Mobile back button */}
          <div className="sm:hidden mb-1">
            <button
              onClick={() => setSelectedChat(null)}
              className="text-sm text-blue-600 dark:text-blue-400 underline"
            >
              ← Back to Inbox
            </button>
          </div>

          <h2 className="text-base font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <img src={chat.avatar} className="w-6 h-6 rounded-full" alt={chat.name} />
            {chat.name}
            {chat.closed && (
              <span className="ml-2 text-xs font-medium text-red-500">(Closed)</span>
            )}
          </h2>

          <div className="flex flex-wrap gap-2 text-gray-500 dark:text-gray-300 text-sm">
            <button title="Star">⭐</button>
            <button title="More">⋯</button>
            <button className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded">📞 Call</button>
            <button className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded">😴 Snooze</button>
            {chat.closed ? (
              <button
                onClick={handleReopen}
                className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
              >
                Reopen
              </button>
            ) : (
              <button
                onClick={handleClose}
                className="bg-red-500 text-white px-2 py-1 rounded text-xs"
              >
                ✖ Close
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm italic">
            Start the conversation...
          </div>
        ) : (
          messages.map((msg, idx) => {
            const isAgent = msg.from === "agent";
            const isLast = idx === messages.length - 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.02 }}
                className={`flex ${isAgent ? "justify-end" : "justify-start"}`}
              >
                <div className="flex items-end gap-2 max-w-[90%] sm:max-w-[70%]">
                  {!isAgent && (
                    <img
                      src={chat.avatar}
                      className="w-6 h-6 rounded-full"
                      alt="User"
                    />
                  )}

                  <div
                    className={`px-4 py-2 rounded-2xl text-sm shadow-sm ${
                      isAgent
                        ? "bg-blue-100 dark:bg-intercom-blue text-black dark:text-white rounded-br-none"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-[11px] block mt-1 text-right opacity-60">{msg.time}</span>
                  </div>

                  {isAgent && (
                    <img
                      src="/agent-avatar.png"
                      className="w-6 h-6 rounded-full"
                      alt="Agent"
                    />
                  )}
                </div>

                {/* Seen indicator for last agent message */}
               {isAgent && isLast && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-xs text-gray-400 mt-1 pr-1 italic flex items-center justify-end gap-1 ml-auto"
  >
    Seen •
    <img
      src="/agent-avatar.png"
      alt="Agent Avatar"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://i.pravatar.cc/100?img=65";
      }}
      className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
    />
  </motion.div>
)}

              </motion.div>
            );
          })
        )}
      </div>

      {/* Input or Closed Message */}
      {!chat.closed ? (
        <MessageInput />
      ) : (
        <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400 italic">
          Conversation is closed.
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
