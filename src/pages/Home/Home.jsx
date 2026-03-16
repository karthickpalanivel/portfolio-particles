import { useState, useEffect } from "react";

const Home = () => {
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
        className="text-white font-poppins flex flex-col justify-center items-center w-full px-4 sm:px-8 md:px-12 lg:px-16 3xl:px-24"
      >
        <div className="flex w-full max-w-[1600px] 3xl:max-w-[2200px] flex-col md:flex-row md:justify-between md:items-center">
          <div className="w-full max-sm:w-9/12 md:w-2/3 lg:w-3/5 3xl:w-1/2">
            <p
              className={`${
                langCode === "en" ? "lg:text-4xl" : "lg:text-2xl"
              } text-xl md:text-3xl lg:my-5 max-sm:mt-5 3xl:text-5xl`}
            >
              {textData?.greeting}{" "}
              <span className="font-bold underline">{textData?.name}</span>
            </p>
            <p className="md:text-xl lg:text-2xl max-sm:mb-8 sm:text-center md:text-left 3xl:text-3xl">
              {textData?.title}
            </p>
          </div>
          {/* <img src={Face} alt="face-logo" className="rounded-full w-1/5" /> */}
        </div>

        {/* 🇯🇵🇬🇧 about me */}

        <p className="w-full max-w-[1600px] 3xl:max-w-[2200px] pt-8 md:pt-10 px-5 md:px-8 lg:px-20 xl:px-32 2xl:px-52 3xl:px-72 max-sm:my-4 text-base md:text-lg 3xl:text-2xl text-justify">
          {textData?.versatile}{" "}
          <span className="bg-gradient-to-r from-[#ff3535] via-[#e79a9a] to-[#3e3eb7] px-1 rounded-sm text-transparent bg-clip-text underline ">
            {textData?.bilingual}
          </span>{" "}
          {textData?.experience}{" "}
          <span className="underline">{textData?.skills}</span>{" "}
          {textData?.skills2}{" "}
          <span className="underline">{textData?.opportunity}</span>
        </p>

        <div className="w-full max-w-[1600px] 3xl:max-w-[2200px] mt-10 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 lg:gap-0">
          {/* <a
            href="https://drive.google.com/drive/folders/1dFSaz3Nv61tONSqbFXhVGvsgXXv5SSy2?usp=drive_link"
            target="_blank"
            className="max-sm:mb-2 border text-center border-[#fff] px-6 py-2 rounded-md mx-10 transition-all hover:bg-[#fff] hover:text-[#000] hover:shadow-lg hover:px-8"
            rel="noreferrer"
          >
            {textData?.resume}
          </a> 
          
          <a
            href="https://linktr.ee/KarthickPalanivel"
            target="_blank"
            rel="noreferrer"
            className="max-sm:my-2 border text-center text-white border-[#fff] px-6 py-2 rounded-md mx-10 transition-all hover:bg-[#fff] hover:text-[#000] hover:shadow-lg hover:px-8"
          >
            {textData?.contact}
          </a>
          <a
            href="https://topmate.io/karthick_palanivel/"
            target="_blank"
            rel="noreferrer"
            className="max-sm:my-2 border text-center text-white border-[#fff] px-6 py-2 rounded-md mx-10 transition-all hover:bg-[#fff] hover:text-[#000] hover:shadow-lg hover:px-8"
          >
            {textData?.topmate}
          </a>
          <a
            href="https://calendly.com/karthickpalanivelit/30min"
            target="_blank"
            rel="noreferrer"
            className="max-sm:my-2 border text-center text-white border-[#fff] px-6 py-2 rounded-md mx-10 transition-all hover:bg-[#fff] hover:text-[#000] hover:shadow-lg hover:px-8"
          >
            {textData?.bookings}
          </a> */}
          {textData?.booking.map((contactMedium) => (
            <a
              key={contactMedium.link}
              href={contactMedium.link}
              target="_blank"
              rel="noreferrer"
              className="max-sm:my-2 border text-center text-white border-[#fff] px-6 py-2 rounded-md mx-10 transition-all hover:bg-[#fff] hover:text-[#000] hover:shadow-lg hover:px-8"
            >
              {contactMedium.linkSite}
            </a>
          ))}
        </div>

        <p className="mt-10 max-sm:px-4 text-center md:text-lg 3xl:text-2xl">
          {textData?.availability}
        </p>
      </section>
    </>
  );
};

export default Home;
