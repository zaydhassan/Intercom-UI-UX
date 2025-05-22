import { useState } from "react";
import {
  FaRobot, FaLink, FaMagic, FaRegCopy, FaUserCircle, FaEnvelope,
  FaMapMarkerAlt, FaMobileAlt, FaGlobe, FaBuilding, FaBriefcase,
  FaTag, FaUserTie, FaUsers
} from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useChat } from "../contexts/ChatContext";
import { motion, AnimatePresence } from "framer-motion";

const AICopilotPanel = () => {
  const [tab, setTab] = useState("copilot");
  const [query, setQuery] = useState("");
  const [suggested, setSuggested] = useState("How do I get a refund?");
  const [answer, setAnswer] = useState(null);
  const { setComposerText } = useChat();

  const sources = [
    "Getting a refund",
    "Refund for an order placed by mistake",
    "Refund for an unwanted gift"
  ];

  const generateAIAnswer = () => {
    setAnswer(`We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund.

To assist you, please provide your order ID and proof of purchase.

Note: We can only refund orders placed within the last 60 days. Your item must meet return conditions.`);
  };

  const copyToClipboard = () => {
    if (answer) navigator.clipboard.writeText(answer);
  };

  const renderCopilotTab = () => (
    <div className="p-4 flex-1 overflow-y-auto space-y-4 text-sm text-gray-800 dark:text-gray-200">
      {!answer ? (
        <>
          <div className="text-gray-600 dark:text-gray-400 italic mb-4">
            Hi, I’m Fin AI Copilot<br />Ask me anything about this conversation.
          </div>
          <button
            onClick={generateAIAnswer}
            className="inline-flex items-center text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 px-3 py-2 rounded-full text-gray-700 dark:text-gray-200 transition"
          >
            💡 Suggested: <span className="ml-1 font-semibold">{suggested}</span>
          </button>
        </>
      ) : (
        <>
          <div className="space-y-1">
            <p className="text-gray-500 dark:text-gray-400 font-semibold">You</p>
            <p>{suggested}</p>
          </div>
          <div className="space-y-2 mt-4">
            <p className="flex items-center gap-2 text-intercom-blue font-bold text-sm">
              <FaRobot /> Fin
            </p>
            <p className="whitespace-pre-line text-sm">{answer}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setComposerText(answer)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs border rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <IoIosAddCircleOutline /> Add to composer
              </button>
              <button
                className="flex items-center gap-1 px-3 py-1.5 text-xs border rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <FaMagic /> Rephrase
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 px-3 py-1.5 text-xs border rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <FaRegCopy /> Copy
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {sources.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-sm cursor-pointer hover:underline text-gray-600 dark:text-gray-300">
                <FaLink className="text-gray-400" />
                {s}
              </div>
            ))}
            <div className="text-xs text-gray-500 mt-1 hover:underline cursor-pointer">See all →</div>
          </div>
        </>
      )}
    </div>
  );

  const renderDetailsTab = () => (
    <div className="p-4 flex-1 overflow-y-auto space-y-6 text-sm text-gray-800 dark:text-gray-200">
   
      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-1">
            <FaUserCircle className="text-gray-400 text-sm" />
            Jane Doe
          </p>
          <p className="text-xs text-green-500 font-medium">● Online</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="uppercase text-[11px] text-gray-400 dark:text-gray-500 tracking-wide mb-1">Assignee</p>
        <div className="flex items-center gap-2">
          <FaUserTie className="text-gray-500 dark:text-gray-400" />
          <img src="/agent-avatar.png" alt="Agent" className="w-6 h-6 rounded-full" />
          <span className="text-gray-800 dark:text-gray-300">Brian Byrne</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="uppercase text-[11px] text-gray-400 dark:text-gray-500 tracking-wide mb-1">Team</p>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <FaUsers /> Unassigned
        </div>
      </div>

      <hr className="border-t border-gray-200 dark:border-gray-700 my-3" />

      <div className="space-y-2">
        <p className="uppercase text-[11px] text-gray-400 dark:text-gray-500 tracking-wide mb-1">User Info</p>
        <div className="space-y-1 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-2 -mx-2 py-1 transition">
            <FaEnvelope className="text-gray-500" /> jane@example.com
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-2 -mx-2 py-1 transition">
            <FaMapMarkerAlt className="text-gray-500" /> New York
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-2 -mx-2 py-1 transition">
            <FaMobileAlt className="text-gray-500" /> iPhone
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-2 -mx-2 py-1 transition">
            <FaGlobe className="text-gray-500" /> Safari
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="uppercase text-[11px] text-gray-400 dark:text-gray-500 tracking-wide mb-1">Company</p>
        <div className="space-y-1 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <FaBuilding className="text-gray-500" /> Acme Corp
          </div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-gray-500" /> E-commerce
          </div>
          <div className="flex items-center gap-2">
            <FaTag className="text-gray-500" /> Plan: Pro
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[22rem] bg-white dark:bg-intercom-darkAccent border-l border-gray-200 dark:border-gray-700 flex flex-col h-full">
      <div className="flex border-b border-gray-200 dark:border-gray-600 text-sm">
        <button
          onClick={() => setTab("copilot")}
          className={`w-1/2 py-3 font-medium ${
            tab === "copilot"
              ? "text-intercom-blue border-b-2 border-intercom-blue"
              : "text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white"
          }`}
        >
          AI Copilot
        </button>
        <button
          onClick={() => setTab("details")}
          className={`w-1/2 py-3 font-medium ${
            tab === "details"
              ? "text-intercom-blue border-b-2 border-intercom-blue"
              : "text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white"
          }`}
        >
          Details
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="flex-1"
        >
          {tab === "copilot" ? renderCopilotTab() : renderDetailsTab()}
        </motion.div>
      </AnimatePresence>

      {tab === "copilot" && (
        <div className="border-t border-gray-200 dark:border-gray-600 p-3">
          <input
            type="text"
            placeholder="Ask a question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-1 focus:ring-intercom-blue transition"
          />
        </div>
      )}
    </div>
  );
};

export default AICopilotPanel;