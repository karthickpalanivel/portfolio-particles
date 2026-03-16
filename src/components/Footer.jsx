/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
//
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import MailIcon from "../assets/icons/MailIcon";
import MediumIcon from "../assets/icons/MediumIcon";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const langCode = localStorage.getItem("language") || "en";

  const [textData, setTextData] = useState();
  const langMap = {
    en: () => import("./Languages/english.json"),
    jp: () => import("./Languages/japanese.json"),
  };

  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    const loadLanguageText = async () => {
      const loadText = (await langMap[langCode]) || langMap.en;
      try {
        const text = await loadText();
        setTextData(text);
      } catch (error) {
        console.error("Error Loading language FILE", error);
      }
    };

    loadLanguageText();
  }, [langCode]);

  return (
    <>
      <footer
        className="w-full flex justify-center mt-10 text-gray-900 dark:text-white transition-colors duration-300"
        style={{
          paddingTop: "4vh",
          paddingBottom: "2vh",
          paddingRight: "4vw",
          paddingLeft: "4vw",
          fontFamily: "poppins, sans-serif",
        }}
      >
        <div className="w-full max-w-[1600px] 3xl:max-w-[2200px] mx-auto flex flex-col border-t border-gray-300 dark:border-[#ffffff20] pt-8">
          {/* Responsive Layout combined with Dark Mode */}
          <div className="w-full grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10 lg:justify-between 3xl:px-10">
            <a
              href="https://www.linkedin.com/in/karthickpalanivel/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row space-x-3 3xl:space-x-4 items-center justify-start sm:justify-center hover:opacity-80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="3xl:scale-125 origin-left">
                <LinkedinIcon />
              </div>
              <p className="3xl:text-xl font-light">
                {textData?.smallLinkedin}
              </p>
            </a>

            <a
              href="mailto:karthickpalanivelit@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row space-x-3 3xl:space-x-4 items-center justify-start sm:justify-center hover:opacity-80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="3xl:scale-125 origin-left">
                <MailIcon />
              </div>
              <p className="3xl:text-xl font-light">{textData?.smallGmail}</p>
            </a>

            <a
              href="https://github.com/karthickpalanivel/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row space-x-3 3xl:space-x-4 items-center justify-start sm:justify-center hover:opacity-80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="3xl:scale-125 origin-left">
                <GitHubIcon />
              </div>
              <p className="3xl:text-xl font-light">{textData?.smallGithub}</p>
            </a>

            <a
              href="https://twitter.com/KarthickWords"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row space-x-3 3xl:space-x-4 items-center justify-start sm:justify-center hover:opacity-80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="3xl:scale-125 origin-left">
                <TwitterIcon />
              </div>
              <p className="3xl:text-xl font-light">{textData?.smallTwitter}</p>
            </a>

            <a
              href="https://medium.com/@karthickpalanivelit"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row space-x-3 3xl:space-x-4 items-center justify-start sm:justify-center hover:opacity-80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="3xl:scale-125 origin-left">
                <MediumIcon />
              </div>
              <p className="3xl:text-xl font-light">{textData?.medium}</p>
            </a>
          </div>

          <div className="mt-10 3xl:my-10 text-center text-gray-500 dark:text-gray-400 text-sm 3xl:text-lg tracking-wide">
            {textData?.footer} &copy; {year} {textData?.rights}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
