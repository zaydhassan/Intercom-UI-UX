import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import { ChatProvider } from "./contexts/ChatContext";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <ChatProvider>
      <div className="h-screen flex flex-col">
        <header className="flex items-center justify-between p-4 bg-white dark:bg-intercom-darkAccent border-b dark:border-gray-700">
          <h1 className="text-xl font-bold">ADMIN PANEL</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </header>
        <Dashboard />
      </div>
    </ChatProvider>
  );
}

export default App;