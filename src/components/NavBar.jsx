import React, { useState } from "react";

// icons
import HomeIcon from "../assets/icons/HomeIcon";
import WorkIcon from "../assets/icons/WorkIcon";
import BlogIcon from "../assets/icons/BlogIcon";
import LanguageIcon from "../assets/icons/LanguageIcon";

// Images
import Ind from "../assets/images/flag-in.png";
import Jp from "../assets/images/jp.png";
import Uk from "../assets/images/gb.png";

// language
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../locale/i18n";

const NavBar = ({ active, setActive }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Function to toggle language
  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "jp" : "en";
    setLanguage(newLanguage);
    changeLanguage(newLanguage); // Update i18n language
    localStorage.setItem("language", newLanguage); // Store in localStorage
  };

  return (
    <div className="flex justify-between items-center p-4 text-[#fff]">
      {/* Left Section */}
      <div
        className="flex space-x-3 flex-row justify-center cursor-pointer"
        onClick={() => setActive("home")}
      >
        <p className="text-xl visible max-sm:hidden">{t("navbarName")}</p>
        <img src={Ind} alt="Indian-flag" className="w-8 object-contain" />
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex space-x-4 items-center justify-center">
        <ul className="flex space-x-9 mr-9">
          {/* Home Icon */}
          <li
            className={`${
              active === "home" ? "text-blue-400" : ""
            } cursor-pointer group relative`}
            onClick={() => setActive("home")}
          >
            <HomeIcon color={"#fff"} />
            <p className="absolute top-full mt-2 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300">
              {t("home")}
            </p>
          </li>

          {/* Work Icon */}
          <li
            className={`${
              active === "work" ? "text-blue-400" : ""
            } cursor-pointer group relative`}
            onClick={() => setActive("work")}
          >
            <WorkIcon color={"#fff"} />
            <p className="absolute top-full mt-2 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300">
              {t("works")}
            </p>
          </li>

          {/* Blog Icon */}
          <li
            className={`${
              active === "blog" ? "text-blue-400" : ""
            } cursor-pointer group relative`}
            onClick={() => setActive("blog")}
          >
            <BlogIcon color={"#fff"} />
            <p className="absolute top-full mt-2 opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300">
              {t("blog")}
            </p>
          </li>

          {/* Language Toggle */}
          {/* <li className="cursor-pointer group relative" onClick={handleLanguageToggle}>
            <LanguageIcon color={"#fff"} />
            <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {language === "en" ? (
                <img src={Uk} alt="English" className="w-6" />
              ) : (
                <img src={Jp} alt="日本語" className="w-6" />
              )}
            </div>
          </li> */}
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
        <div className="md:hidden flex flex-col items-start absolute top-14 left-0 w-full p-4 space-y-4 bg-[#303030d9]">
          <ul className="flex flex-row justify-between items-center space-x-10">
            <li
              className={`${
                active === "home" ? "text-blue-400" : ""
              } cursor-pointer place-items-center`}
              onClick={() => {
                setActive("home");
                handleMenuToggle();
              }}
            >
              <HomeIcon color={"#fff"} />
              <p>{t("home")}</p>
            </li>
            <li
              className={`${
                active === "work" ? "text-blue-400" : ""
              } cursor-pointer`}
              onClick={() => {
                setActive("work");
                handleMenuToggle();
              }}
            >
              <WorkIcon color={"#fff"} />
              <p>{t("works")}</p>
            </li>
            <li
              className={`${
                active === "blog" ? "text-blue-400" : ""
              } cursor-pointer`}
              onClick={() => {
                setActive("blog");
                handleMenuToggle();
              }}
            >
              <BlogIcon color={"#fff"} />
              <p>{t("blog")}</p>
            </li>

            {/* <li className="cursor-pointer" onClick={handleLanguageToggle}>
              <LanguageIcon color={"#fff"} />
              <p>{language === "en" ? "日本語" : "English"}</p>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
