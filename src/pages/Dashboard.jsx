import Sidebar from "../components/Sidebar";
import InboxList from "../components/InboxList";
import ChatWindow from "../components/ChatWindow";
import AICopilotPanel from "../components/AICopilotPanel";
import { useChat } from "../contexts/ChatContext";
import { AnimatePresence, motion } from "framer-motion";

const Dashboard = () => {
  const { selectedChat } = useChat();

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="hidden md:grid md:grid-cols-[4rem_18rem_1fr_22rem] h-full">
        <Sidebar />
        <InboxList />
        <ChatWindow />
        <AICopilotPanel />
      </div>

      <div className="md:hidden relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {selectedChat === null || selectedChat === undefined ? (
            <motion.div
              key="inbox"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-full h-full top-0 left-0"
            >
              <InboxList />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-full h-full top-0 left-0"
            >
              <ChatWindow />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;