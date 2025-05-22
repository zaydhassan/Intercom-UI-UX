import { useChat } from "../contexts/ChatContext";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const InboxList = () => {
  const { chats, selectedChat, setSelectedChat } = useChat();
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full sm:w-[18rem] md:w-72 border-r md:border-r border-b md:border-b-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-intercom-darkAccent flex flex-col">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center text-sm text-gray-500 dark:text-gray-300">
        <div className="flex items-center gap-1 font-medium cursor-pointer">
          5 Open <IoChevronDownSharp className="text-xs" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Waiting longest <IoChevronDownSharp className="text-xs" />
        </div>
      </div>

      <div className="px-4 py-3 border-b border-gray-200">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-intercom-dark text-black dark:text-white"
        />
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => {
             if (selectedChat !== chat.id) {
           setSelectedChat(chat.id);
            } else {

        requestAnimationFrame(() => {
         setSelectedChat(null);
        requestAnimationFrame(() => setSelectedChat(chat.id));
            });
            }   
            }}
            className={`flex gap-3 items-start px-4 py-3 cursor-pointer
              ${chat.closed
                ? "opacity-50 pointer-events-none bg-gray-100 dark:bg-gray-800"
                : selectedChat === chat.id
                ? "bg-intercom-blue text-white"
                : "hover:bg-gray-100 dark:hover:bg-intercom-darkAccent text-gray-800 dark:text-gray-100"}`}
          >
           
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
              <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
              <span
                className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-800
                ${chat.status === "online" ? "bg-green-500" : "bg-yellow-400"}`}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <p className="font-medium truncate">{chat.name}</p>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full px-2 py-0.5">
                  {chat.timeAgo || "3m"}
                </span>
              </div>
              <p className="text-sm opacity-80 truncate">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxList;