import { useState, useEffect } from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import Home from "./pages/Home";
import ConnectWithMe from "./pages/ConnectWithMe";
import NavBar from "./components/NavBar";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import ParticlesComponent from "./components/Particles";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    handleTabChange("home");
  }, []);

  const handleTabChange = (tab) => {
    setActive(tab);
  };

  return (
    <ThemeProvider>
      <ParticlesComponent id="particle-js" />

      <div>
        <NavBar active={active} setActive={handleTabChange} />

        <div style={{ minHeight: "fit-content" }}>
          {active === "home" && <Home />}
          {active === "work" && <Work />}
          {/* {active === "connect" && <ConnectWithMe />} */}
          {active === "blog" && <Blog />}
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
