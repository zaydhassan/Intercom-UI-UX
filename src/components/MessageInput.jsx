import { useState, useEffect, useRef } from "react";
import { useChat } from "../contexts/ChatContext";
import {
  FaMagic,
  FaBold,
  FaItalic,
  FaCode,
  FaLink,
  FaHeading,
  FaUndo,
  FaChevronDown,
  FaRegCommentDots,
} from "react-icons/fa";

const MessageInput = () => {
  const {
    selectedChat,
    sendMessage,
    composerText,
    setComposerText,
  } = useChat();

  const [text, setText] = useState("");
  const textareaRef = useRef();

  useEffect(() => {
    if (composerText) {
      setText(composerText);
    }
  }, [composerText]);

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(selectedChat, {
      text,
      from: "agent",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    setText("");
    setComposerText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const insertAtCursor = (startTag, endTag = startTag) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = text.slice(start, end);
    const newText =
      text.slice(0, start) +
      startTag + selected + endTag +
      text.slice(end);
    setText(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd =
        start + startTag.length + selected.length + endTag.length;
    }, 0);
  };

  return (
    <div className="p-4 bg-white dark:bg-intercom-darkAccent border-t border-gray-200 dark:border-gray-700">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <FaRegCommentDots className="text-gray-400" />
            Chat
          </div>
          <FaChevronDown className="text-xs opacity-50" />
        </div>

        {text.trim() && (
          <div className="flex flex-wrap gap-3 items-center px-4 py-2 text-gray-600 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
            <button title="AI Suggestion" onClick={() => insertAtCursor("AI Suggestion: ")}><FaMagic /></button>
            <button title="Bold" onClick={() => insertAtCursor("**", "**")}><FaBold /></button>
            <button title="Italic" onClick={() => insertAtCursor("_", "_")}><FaItalic /></button>
            <button title="Code" onClick={() => insertAtCursor("`", "`")}><FaCode /></button>
            <button title="Link" onClick={() => insertAtCursor("[", "](url)")}><FaLink /></button>
            <button title="Heading" onClick={() => insertAtCursor("## ")}><FaHeading className="text-xs" /></button>
            <button title="Undo" onClick={() => setText("")}><FaUndo /></button>
          </div>
        )}

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a reply..."
          rows={Math.max(2, text.split("\n").length)}
          className="w-full px-4 py-3 text-sm resize-none border-0 focus:ring-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
        />

        <div className="flex justify-end items-center px-4 py-2 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-4 py-2 rounded font-medium flex items-center gap-2 text-sm"
          >
            Send <FaChevronDown className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;