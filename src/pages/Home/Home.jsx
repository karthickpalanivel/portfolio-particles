// Blog, short intro

import React, { useState, useEffect } from "react";
import Face from "../../assets/images/face.png";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
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
        console.log(text);
      } catch (error) {
        console.error("Error Loading langauge FILE", error);
      }
    };
    loadLanguageText();
  }, [langCode]);

  return (
    <>
      <section
        style={{ color: "#fff", fontFamily: "poppins, sans-serif" }}
        className="flex flex-col justify-center items-center max-sm:w-full"
      >
        <div className="flex lg:flex-row lg:justify-evenly max-sm:flex-col items-center">
          <div className="max-sm:w-9/12">
            <p className={`${langCode === 'en' ? "lg:text-4xl" : "lg:text-2xl"} max-sm:text-xl lg:my-5 max-sm:mt-5`}>
              {textData?.greeting}{" "}
              <span className="font-bold underline">{textData?.name}</span>
            </p>
            <p className="lg:text-2xl max-sm:mb-8 sm:text-center">
              {textData?.title}
            </p>
          </div>
          <img src={Face} alt="face-logo" className="rounded-full w-1/5" />
        </div>

        {/* 🇯🇵🇬🇧 about me */}

        <p className="lg:pt-10 lg:px-60 max-sm:px-5 max-sm:my-4 text-lg min-lg:text-center">
          {textData?.versatile}{" "}
          <span className="bg-gradient-to-r from-[#ff3535] via-[#e79a9a] to-[#3e3eb7] px-1 rounded-sm text-transparent bg-clip-text underline ">
            {textData?.bilingual}
          </span>{" "}
          {textData?.experience}{" "}
          {/* <span className="underline">2+ years</span>  */}
          {textData?.skills}
        </p>

        <p>
          <span className="underline">{textData?.availability}</span>{" "}
        </p>

        <div className="lg:mt-10 max-sm:mt-10 max-sm:grid max-sm:grid-col-2">
          <a
            href="https://drive.google.com/drive/folders/1_EI-DzhH-kzUvejiO3qs0dVYe6XwS5pc?usp=sharing"
            target="_blank"
            className="border text-center border-[#fff] px-6 py-2 rounded-md mx-10 transition-all hover:bg-[#fff] hover:text-[#000] hover:shadow-lg hover:px-8"
            rel="noreferrer"
          >
            {textData?.resume}
          </a>
          <a
            href="https://linktr.ee/KarthickPalanivel"
            target="_blank"
            rel="noreferrer"
            className="max-sm:my-4 border text-center text-white border-[#fff] px-6 py-2 rounded-md mx-10 transition-all hover:bg-[#fff] hover:text-[#000] hover:shadow-lg hover:px-8"
          >
            {textData?.contact}
          </a>
        </div>

        <p className="mt-10 max-sm:px-4">{textData?.opportunity}</p>
      </section>
    </>
  );
};

export default Home;
