import React from "react";

// icons

import LinkedinIcon from "../assets/icons/LinkedinIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import MailIcon from "../assets/icons/MailIcon";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const langCode = localStorage.getItem("language") || "en";

  const [textData, setTextData] = useState();

  const date = new Date();
  const year = date.getFullYear();
  useEffect(() => {
    const langMap = {
      en: () => import("./Languages/english.json"),
      jp: () => import("./Languages/japanese.json"),
    };

    const loadLanguageText = async () => {
      const loadText = (await langMap[langCode]) || langMap.en;
      try {
        const text = await loadText();
        setTextData(text);
        console.log(text);
      } catch (error) {
        console.error("Error Loading langauge FILE", error);
      }
    };

    loadLanguageText();
  }, [langCode]);

  return (
    <>
      <footer
        style={{
          color: "white",
          paddingTop: "5vh",
          paddingRight: "2vw",
          paddingLeft: "2vw",
          fontFamily: "poppins, sans-serif",
        }}
      >
        <div className="grid lg:grid-cols-4 max-sm:grid-cols-2 sm:flex-col items-center">
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/karthick-palanivel/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:justify-center max-sm:pl-3 max-sm:my-2"
          >
            <LinkedinIcon colors={"white"} />
            <p className="lg:visible max-sm:hidden">
              linkedin.com/karthickpalanivel
            </p>
            <p className="lg:hidden max-sm:visible">
              {textData?.smallLinkedin}
            </p>
          </a>

          <a
            href="mailto:karthickpalanivelit@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:items-center max-sm:pl-3 lg:justify-center max-sm:my-2"
          >
            <MailIcon colors={"#fff"} />
            <p className="lg:visible max-sm:hidden">
              karthickpalanivelit@gmail.com
            </p>
            <p className="lg:hidden max-sm:visible">{textData?.smallGmail}</p>
          </a>

          {/* github */}
          <a
            href="https://github.com/karthickpalanivel/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:items-center max-sm:pl-3 lg:justify-center max-sm:my-2"
          >
            <GitHubIcon colors={"white"} />
            <p className="lg:visible max-sm:hidden">
              github.com/karthickpalanivel
            </p>
            <p className="lg:hidden max-sm:visible">{textData?.smallGithub}</p>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/KarthickWords"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:items-center max-sm:pl-3 lg:justify-center max-sm:my-2"
          >
            <TwitterIcon colors={"#fff"} />
            <p className="lg:visible max-sm:hidden">x.com/KarthickWords</p>
            <p className="lg:hidden max-sm:visible">{textData?.smallTwitter}</p>
          </a>
        </div>

        <div className="mb-3 mt-10 text-center text-gray-400 text-sm ">
          {textData?.footer} &copy; {year}
        </div>
      </footer>
    </>
  );
};

export default Footer;
