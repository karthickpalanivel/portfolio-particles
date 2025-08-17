import { useState } from "react";

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
      <div className="flex flex-col min-h-screen bg-transparent">
        <div className="h-[15vh]">
          <NavBar active={active} setActive={handleTabChange} />
        </div>
        <div className="min-h-[70vh] flex items-center justify-center">
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
