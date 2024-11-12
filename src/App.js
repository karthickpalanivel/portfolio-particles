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

  const handleTabChange = (tab) => {
    setActive(tab);
  };

  return (
    <>
      <ParticlesComponent id="particle-js" />
      <NavBar active={active} setActive={handleTabChange} />
      <div style={{ minHeight: "fit-content" }}>
        {active === "home" && <Home />}
        {active === "work" && <Work />}
        {active === "blog" && <Blog />}
      </div>
      <Footer />
    </>
  );
}

export default App;
