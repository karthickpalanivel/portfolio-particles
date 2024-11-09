// 1. Create a ThemeContext
// 2. Initialize theme state (dark by default, change if needed)
// 3. Toggle functions
// 4. Provide theme state and toggle function
// Custom hook to use theme context


import React, { createContext, useState, useContext } from "react";
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
