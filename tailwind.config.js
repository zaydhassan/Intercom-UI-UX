// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'intercom-dark': '#1f2430',          // Sidebar, dark backgrounds
        'intercom-darkAccent': '#2b3245',    // Header, accent backgrounds
        'intercom-blue': '#4a8df8',          // Selected, buttons, bubbles
        'intercom-userBubble': '#4a8df8',    // User chat bubble (same as blue)
        'intercom-agentBubble': '#f1f5f9',   // Agent chat bubble (light)
      },
      animation: {
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
