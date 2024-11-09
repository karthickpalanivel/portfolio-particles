import React, { useState } from "react";

// icons
import HomeIcon from "../assets/icons/HomeIcon";
import WorkIcon from "../assets/icons/WorkIcon";
import BlogIcon from "../assets/icons/BlogIcon";
import LanguageIcon from "../assets/icons/LanguageIcon";

//Images
import Ind from "../assets/images/flag-in.png";
import Jp from "../assets/images/jp.png";
import Uk from "../assets/images/gb.png";

const NavBar = ({ active, setActive }) => {
  const [language, setLanguage] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const changeLangauge = () => {
    setLanguage((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center p-4 text-[#fff]">
      <div className="flex space-x-3 flex-row justify-center">
        <p className="text-xl visible max-sm:hidden">Palanivel Jr.</p>
        <img src={Ind} alt="Indian-flag" className="w-8 object-contain" />
      </div>

      <div className="hidden md:flex space-x-4 items-center justify-center">
        <ul className="flex space-x-9 mr-9">
          {/* Home Icon */}
          <li
            className={`justify-center ${
              active === "home" ? "text-blue-400" : ""
            } cursor-pointer group relative justify-center`}
            onClick={() => setActive("home")}
          >
            <HomeIcon color={"#fff"} />
            <p className="absolute top-full mt-2 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300">
              Home
            </p>
          </li>

          {/* Work icon */}
          <li
            className={`${
              active === "work" ? "text-blue-400" : ""
            } cursor-pointer group relative justify-center`}
            onClick={() => setActive("work")}
          >
            <WorkIcon color={"#fff"} />
            <p className="absolute top-full mt-2 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300">
              Works
            </p>
          </li>

          {/* Blog Icon */}
          <li
            className={`${
              active === "blog" ? "text-blue-400" : ""
            } cursor-pointer group relative justify-center`}
            onClick={() => setActive("blog")}
          >
            <BlogIcon color={"#fff"} />
            <p className="absolute top-full mt-2 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300">
              Blog
            </p>
          </li>

          <li
            className="cursor-pointer group relative justify-center"
            onClick={changeLangauge}
          >
            <LanguageIcon color={"#fff"} className="hover:scale-110 group" />
            <p className="absolute top-full mt-2 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300">
              {language ? (
                <>
                  <img src={Uk} alt="English" />
                </>
              ) : (
                <>
                  <img src={Jp} alt="日本語" />
                </>
              )}
            </p>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={handleMenuToggle} className="text-xl">
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start absolute top-14 left-0 w-full p-4 space-y-4 bg-[#7f7e7ed9]">
          <ul className="flex justify-between space-x-10">
            <li
              className={`${
                active === "home" ? "text-blue-400" : ""
              } cursor-pointer items-center flex-col`}
              onClick={() => {
                setActive("home");
                handleMenuToggle();
              }}
            >
              <HomeIcon color={"#fff"} />
              <p>Home</p>
            </li>
            <li
              className={`${
                active === "work" ? "text-blue-400" : ""
              } cursor-pointer items-center justify-center`}
              onClick={() => {
                setActive("work");
                handleMenuToggle();
              }}
            >
              <WorkIcon color={"#fff"} />
              <p>Work</p>
            </li>
            <li
              className={`${
                active === "blog" ? "text-blue-400" : ""
              } cursor-pointer items-center justify-center`}
              onClick={() => {
                setActive("blog");
                handleMenuToggle();
              }}
            >
              <BlogIcon color={"#fff"} />
              <p>Events</p>
            </li>

            {/* Language context */}
            <li
              className="cursor-pointer"
              onClick={() => {
                changeLangauge();
                handleMenuToggle();
              }}
            >
              <LanguageIcon color={"#fff"} />
              <p>{language ? "日本語を返す" : "Switch English"}</p>
            </li>
            {/* <li onClick={toggleTheme} className="cursor-pointer">
              {theme === "light" ? (
                <SunIcon color={"#000"} />
              ) : (
                <MoonIcon color={"#fff"} />
              )}
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
