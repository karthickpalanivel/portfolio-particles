/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

const DarkMode = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="text-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-12 cursor-pointer focus:outline-none"
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      aria-label="Toggle Theme"
    >
      {/* Renders Sun in light mode, Moon in dark mode */}
      {theme === "light" ? "☀️" : "🌒"}
    </button>
  );
};

export default DarkMode;
