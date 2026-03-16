/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";

//components
import ParticlesComponent from "./components/Particles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home/Home.jsx";
import Work from "./pages/Work/Work.jsx";
import Blog from "./pages/Blog/Blog";

//components
import "./App.css";

function App() {
  const [active, setActive] = useState("home");

  // STEP 1: Lift theme state here. Default to 'dark' if nothing is in local storage.
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleTabChange = (tab) => {
    setActive(tab);
  };

  // STEP 1: Toggle function to switch themes and save to local storage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // STEP 1: Add or remove the 'dark' class on the HTML element for Tailwind
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {/* Pass theme to Particles so it can react to the change later */}
      <ParticlesComponent id="particle-js" theme={theme} />

      {/* The main wrapper of your app */}
      <div className="flex flex-col min-h-screen bg-transparent transition-colors duration-300">
        <div className="h-[15vh]">
          {/* Pass theme and toggleTheme to NavBar */}
          <NavBar
            active={active}
            setActive={handleTabChange}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
        <div className="min-h-[70vh] flex">
          {active === "home" && <Home />}
          {active === "work" && <Work />}
          {active === "blog" && <Blog />}
        </div>
        <div className="flex-1">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;