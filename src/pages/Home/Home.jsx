/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {

  const {t} = useTranslation();  
  const langCode = localStorage.getItem("language") || "en";

  const [textData, setTextData] = useState();
  const langMap = {
    en: () => import("./Languages/english.json"),
    jp: () => import("./Languages/japanese.json"),
  };

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
      <section
        style={{ fontFamily: "poppins, sans-serif" }} // Removed hardcoded white color here
        className="text-gray-900 dark:text-white font-poppins flex flex-col justify-center items-center w-full px-4 sm:px-8 md:px-12 lg:px-16 3xl:px-24 transition-colors duration-300"
      >
        <div className="flex w-full max-w-[1600px] 3xl:max-w-[2200px] mx-auto flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center">
            <p
              className={`${
                langCode === "en" ? "lg:text-4xl" : "lg:text-2xl"
              } text-2xl sm:text-3xl lg:mt-3 mt-5 3xl:text-5xl text-center`}
            >
              {textData?.greeting}{" "}
              <span className="font-bold underline">{textData?.name}</span>
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl mt-2 mb-8 text-center 3xl:text-4xl 3xl:mt-4 text-gray-700 dark:text-gray-300 transition-colors">
              {textData?.title}
            </p>
          </div>
        </div>

        {/* about me */}
        <p className="w-full max-w-[1200px] 3xl:max-w-[1800px] mx-auto pt-4 md:pt-10 px-2 sm:px-5 lg:px-20 3xl:px-32 text-base md:text-lg 3xl:text-2xl text-center sm:text-justify md:text-center 3xl:leading-relaxed leading-relaxed">
          {textData?.versatile}{" "}
          <span className="bg-gradient-to-r from-[#ff3535] via-[#e79a9a] to-[#3e3eb7] px-1 rounded-sm text-transparent bg-clip-text underline font-medium">
            {textData?.bilingual}
          </span>{" "}
          {textData?.experience}{" "}
          <span className="underline font-medium">{textData?.skills}</span>{" "}
          {textData?.skills2}{" "}
          <span className="underline font-medium">{textData?.opportunity}</span>
        </p>

        {/* Buttons - Updated for light/dark hover inversion */}
        <div className="w-full max-w-[1600px] 3xl:max-w-[2200px] mx-auto mt-10 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 3xl:mt-16">
          {textData?.booking.map((contactMedium) => (
            <a
              key={contactMedium.link}
              href={contactMedium.link}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center border px-6 py-3 3xl:px-10 3xl:py-4 3xl:text-xl rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              {contactMedium.linkSite}
            </a>
          ))}
        </div>

        <p className="mt-12 md:mt-16 max-sm:px-4 text-center text-sm sm:text-base md:text-lg 3xl:text-2xl 3xl:mt-20 text-gray-600 dark:text-gray-400">
          {textData?.availability}
        </p>
      </section>
    </>
  );
};

export default Home;
