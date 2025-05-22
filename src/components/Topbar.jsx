import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Topbar = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      className="h-14 px-6 bg-white dark:bg-intercom-darkAccent border-b border-gray-200 dark:border-gray-700 flex items-center justify-between shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="font-semibold text-lg text-gray-800 dark:text-white">
          Inbox
        </span>
        <span className="text-xs text-green-500 font-medium hidden sm:inline">● Online</span>
      </div>

      <div className="relative hidden sm:block">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 dark:border-gray-700 pl-9 pr-3 py-2 rounded-md bg-gray-100 dark:bg-intercom-dark text-sm text-black dark:text-white focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xs" />
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative transition cursor-pointer">
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform transition-all dark:translate-x-4" />
        </div>

        <img
          src="/agent-avatar.png"
          alt="Agent"
          className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 shadow"
        />
      </div>
    </motion.div>
  );
};

export default Topbar;