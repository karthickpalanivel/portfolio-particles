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
    jp: () => import("./Languages/japanese.json")
  };


  const date = new Date();
  const year = date.getFullYear();
  useEffect(() => {
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
        <div className="lg:flex lg:flex-row lg:justify-between max-sm:grid max-sm:grid-cols-2 max-sm:gap-5">
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/karthick-palanivel/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:justify-center items-center max-sm:pl-3 sm:my-2"
          >
            <LinkedinIcon colors={"white"} />
            <p className="">{textData?.smallLinkedin}</p>
          </a>

          <a
            href="mailto:karthickpalanivelit@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:justify-center items-center max-sm:pl-3 sm:my-2"
          >
            <MailIcon colors={"#fff"} />
            <p className="">{textData?.smallGmail}</p>
          </a>

          <a
            href="https://github.com/karthickpalanivel/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:justify-center items-center max-sm:pl-3 sm:my-2"
          >
            <GitHubIcon colors={"white"} />
            <p className="">{textData?.smallGithub}</p>
          </a>

          <a
            href="https://twitter.com/KarthickWords"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:justify-center items-center max-sm:pl-3 sm:my-2"
          >
            <TwitterIcon colors={"#fff"} />
            <p className="">{textData?.smallTwitter}</p>
          </a>

          <a
            href="https://medium.com/@karthickpalanivelit"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 lg:justify-center items-center max-sm:pl-3 sm:my-2"
          >
            <MediumIcon colors={"#fff"} />
            <p className="">{textData?.medium}</p>
          </a>
        </div>

        <div className="my-3 text-center text-gray-400 text-sm ">
          {textData?.footer} &copy; {year}
          {textData?.rights}
        </div>
      </footer>
    </>
  );
};

export default Footer;
/*

          
*/