import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
  onClick={toggleTheme}
  className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative transition"
>
  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transform transition-all dark:translate-x-4" />
</button>
  );
};

export default ThemeToggle;