/* eslint-disable react/prop-types */
import React, { useState } from "react";

// icons
import HomeIcon from "../assets/icons/HomeIcon";
import WorkIcon from "../assets/icons/WorkIcon";
import BlogIcon from "../assets/icons/BlogIcon";
import LanguageIcon from "../assets/icons/LanguageIcon";

// components
import DarkMode from "./DarkMode";

// Images
import Ind from "../assets/images/flag-in.png";
import Jp from "../assets/images/jp.png";
import Uk from "../assets/images/gb.png";

// language
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../locale/i18n";

const NavBar = ({ active, setActive, theme, toggleTheme }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleLanguageToggle = () => {
    const langCode = language === "en" ? "jp" : "en";
    setLanguage(langCode);
    changeLanguage(langCode);
    localStorage.setItem("language", langCode);
  };

  return (
    <div
      className="w-full flex justify-center px-4 py-4 3xl:py-8 text-gray-900 dark:text-white transition-colors duration-300"
      // Removed inline style={{ color: "#fff" }}
    >
      <div className="w-full max-w-[1600px] 3xl:max-w-[2200px] flex justify-between items-center mx-auto">
        {/* Left Section */}
        <div
          className="flex space-x-3 3xl:space-x-6 flex-row items-center cursor-pointer"
          onClick={() => setActive("home")}
        >
          <p className="text-xl 3xl:text-3xl visible max-sm:hidden font-medium">
            {t("navbarName")}
          </p>
          <img
            src={Ind}
            alt="Indian-flag"
            className="w-8 3xl:w-12 object-contain"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center justify-center">
          <ul className="flex items-center space-x-9 3xl:space-x-16 mr-9 3xl:mr-4">
            {/* Home Icon */}
            <li
              className={`${
                active === "home" ? "text-blue-600 dark:text-blue-400" : ""
              } cursor-pointer group relative 3xl:scale-150 origin-center transition-all`}
              onClick={() => setActive("home")}
            >
              <HomeIcon />
              <p className="absolute top-full mt-2 opacity-0 text-center text-sm group-hover:opacity-100 transition-opacity duration-300">
                {t("home")}
              </p>
            </li>

            {/* Work Icon */}
            <li
              className={`${
                active === "work" ? "text-blue-600 dark:text-blue-400" : ""
              } cursor-pointer group relative 3xl:scale-150 origin-center transition-all`}
              onClick={() => setActive("work")}
            >
              <WorkIcon />
              <p className="absolute top-full mt-2 opacity-0 text-center text-sm group-hover:opacity-100 transition-opacity duration-300">
                {t("works")}
              </p>
            </li>

            {/* Blog Icon */}
            <li
              className={`${
                active === "blog" ? "text-blue-600 dark:text-blue-400" : ""
              } cursor-pointer group relative 3xl:scale-150 origin-center transition-all`}
              onClick={() => setActive("blog")}
            >
              <BlogIcon />
              <p className="absolute top-full mt-2 opacity-0 text-center text-sm group-hover:opacity-100 transition-opacity duration-300">
                {t("blog")}
              </p>
            </li>

            {/* Language Toggle */}
            <li
              className="cursor-pointer group relative 3xl:scale-150 origin-center transition-all"
              onClick={handleLanguageToggle}
            >
              <LanguageIcon />
              <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {language === "en" ? (
                  <img src={Jp} alt="日本語" className="w-6 3xl:w-8" />
                ) : (
                  <img src={Uk} alt="English" className="w-6 3xl:w-8" />
                )}
              </div>
            </li>

            {/* Dark Mode Toggle Component */}
            <li>
              <DarkMode theme={theme} toggleTheme={toggleTheme} />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className={`text-xl transition-colors ${
              !menuOpen
                ? "border border-gray-900 dark:border-white rounded-md py-1 px-2"
                : "mr-3"
            }`}
          >
            {menuOpen ? "x" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start absolute top-16 left-0 w-full p-4 space-y-4 bg-white/95 dark:bg-[#303030f2] backdrop-blur-md z-50 border-b border-gray-200 dark:border-[#ffffff30] shadow-lg">
            <ul className={`flex flex-row w-full items-center`}>
              <li
                className={`${
                  active === "home" ? "text-blue-600 dark:text-blue-400" : ""
                } cursor-pointer flex flex-col items-center justify-center w-1/5`}
                onClick={() => {
                  setActive("home");
                  handleMenuToggle();
                }}
              >
                <HomeIcon />
                <p className="mt-1 text-sm">{t("home")}</p>
              </li>
              <li
                className={`${
                  active === "work" ? "text-blue-600 dark:text-blue-400" : ""
                } cursor-pointer flex flex-col items-center justify-center w-1/5`}
                onClick={() => {
                  setActive("work");
                  handleMenuToggle();
                }}
              >
                <WorkIcon />
                <p className="mt-1 text-sm">{t("works")}</p>
              </li>
              <li
                className={`${
                  active === "blog" ? "text-blue-600 dark:text-blue-400" : ""
                } cursor-pointer flex flex-col items-center justify-center w-1/5`}
                onClick={() => {
                  setActive("blog");
                  handleMenuToggle();
                }}
              >
                <BlogIcon />
                <p className="mt-1 text-sm">{t("blog")}</p>
              </li>

              <li
                className="cursor-pointer flex flex-col items-center justify-center w-1/5"
                onClick={() => {
                  handleMenuToggle();
                  handleLanguageToggle();
                }}
              >
                {language === "en" ? (
                  <>
                    <img
                      src={Jp}
                      alt="japanFlag"
                      className="w-8 h-8 object-contain"
                    />
                    <p className="mt-1 text-sm">日本語</p>
                  </>
                ) : (
                  <>
                    <img
                      src={Uk}
                      alt="UkFlag"
                      className="w-8 h-8 object-contain"
                    />
                    <p className="mt-1 text-sm">English</p>
                  </>
                )}
              </li>

              {/* Dark Mode Toggle for Mobile */}
              <li className="flex flex-col items-center justify-center w-1/5">
                <DarkMode theme={theme} toggleTheme={toggleTheme} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
