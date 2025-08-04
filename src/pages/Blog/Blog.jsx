import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LocationIcon from "../../assets/icons/LocationIcon";

const Blog = () => {
  const { t } = useTranslation();
  const langCode = localStorage.getItem("language") || "en";
  const [textData, setTextData] = useState();
  
  useEffect(() => {
    const langMap = {
      en: () => import("./Languages/english.json"),
      jp: () => import("./Languages/japanese.json"),
    };
    console.log(langCode);
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
    <section
      style={{
        color: "#fff",
        fontFamily: "poppins, sans-serif",
        minHeight: "70vh",
      }}
    >
      <p className="text-center text-xl">{textData?.socialNetwork}</p>

      <div className="lg:grid lg:grid-cols-4 place-items-center">
        {textData?.events.map((event, index) => (
          <div className="p-5" key={index}>
            <div className="border border-[#ffffff7a] rounded-md p-3">
              <div className="flex flex-row justify-between">
                <div className="w-4/6">
                  <p>{event.event}</p>
                  <p>{event.category}</p>
                  <p className="italic">{event.eventDate}</p>
                </div>

                <img
                  src={event.eventLogo}
                  alt="event logo"
                  className="w-3/12 h-auto rounded-lg border border-[#ffffff50]"
                />
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <div className="flex flex-row items-center w-2/3">
                  <LocationIcon />
                  <p className="ml-2">{event.location}</p>
                </div>
                <a
                  href={event.externalLink}
                  target="_blank"
                  className="cursor-pointer border border-[#ffffff68] w-1/3 text-center px-2 py-1 rounded-md mt-2 place-items-end"
                  rel="noreferrer"
                >
                  {textData?.moreInfo}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
