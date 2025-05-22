import { FaComments, FaCog, FaHome } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(1); 

  const items = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaComments />, label: "Inbox" },
    { icon: <FaCog />, label: "Settings" },
  ];

  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col justify-between h-full items-center bg-white dark:bg-intercom-dark text-black dark:text-white py-4 w-full md:w-16 border-r border-gray-200 dark:border-gray-900"
    >
      <div className="hidden md:flex flex-1" />
      <div className="flex md:flex-col flex-row gap-4 items-center justify-center mt-4 md:mt-0">
        {items.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={`p-3 rounded-2xl transition-all flex items-center justify-center w-10 h-10
              ${activeIndex === index
                ? "bg-intercom-blue text-white shadow"
                : "text-gray-400 hover:bg-gray-100 dark:hover:bg-intercom-darkAccent hover:text-black dark:hover:text-white"}
            `}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;