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
    <section
      style={{
        fontFamily: "poppins, sans-serif",
        minHeight: "70vh",
      }}
      className="w-full max-w-[1600px] 3xl:max-w-[2200px] mx-auto flex flex-col items-center pb-10 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <p className="text-center text-2xl md:text-3xl 3xl:text-4xl mt-6 3xl:mt-12 font-medium underline decoration-gray-300 dark:decoration-[#ffffff50] underline-offset-4">
        {textData?.socialNetwork}
      </p>

      <div className="w-full px-4 sm:px-8 lg:px-16 3xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-6 xl:gap-8 3xl:gap-10 place-items-center mt-10 3xl:mt-16">
        {textData?.events.map((event, index) => (
          <div className="w-full h-full" key={index}>
            <div className="border border-gray-300 dark:border-[#ffffff40] bg-gray-50/50 dark:bg-[#ffffff05] backdrop-blur-sm rounded-xl p-5 3xl:p-8 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-gray-100 dark:hover:bg-[#ffffff10] hover:shadow-xl hover:border-gray-400 dark:hover:border-[#ffffff80]">
              <div className="flex flex-row justify-between items-start gap-4">
                <div className="w-full 3xl:text-xl flex flex-col">
                  <p className="font-semibold text-lg leading-snug 3xl:mb-2 text-gray-900 dark:text-white">
                    {event?.event}
                  </p>
                  <p className="text-sm 3xl:text-lg text-blue-600 dark:text-blue-300 mt-1">
                    {event?.category}
                  </p>
                  <p className="italic text-xs text-gray-500 dark:text-gray-400 mt-1 3xl:text-base">
                    {event?.eventDate}
                  </p>
                </div>

                <img
                  src={event?.eventLogo}
                  alt="event logo"
                  className="rounded-lg border border-gray-200 dark:border-[#ffffff30] bg-white object-cover w-16 h-16 sm:w-20 sm:h-20 3xl:w-28 3xl:h-28 shrink-0"
                />
              </div>

              <div className="w-full h-[1px] bg-gray-200 dark:bg-[#ffffff20] my-4 3xl:my-6"></div>

              <div className="flex flex-row justify-between items-end mt-auto gap-2">
                <div className="flex flex-row items-center w-2/3">
                  <div className="3xl:scale-125 origin-left shrink-0 text-red-500 dark:text-red-400">
                    <LocationIcon />
                  </div>
                  <p className="ml-2 3xl:ml-4 text-xs sm:text-sm 3xl:text-lg text-gray-600 dark:text-gray-300 leading-tight">
                    {event?.location}
                  </p>
                </div>

                <a
                  href={event?.externalLink}
                  target="_blank"
                  className="cursor-pointer text-xs sm:text-sm 3xl:text-lg border shrink-0 text-center px-3 py-1.5 3xl:py-2 3xl:px-5 rounded-md transition-colors font-medium border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white dark:border-[#ffffff60] dark:text-white dark:hover:bg-white dark:hover:text-black"
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
