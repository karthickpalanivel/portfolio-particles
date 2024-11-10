// Blog, short intro

import React from "react";
import { useTheme } from "../hooks/ThemeContext";
import { lightTheme, darkTheme } from "../hooks/ColorStyles";
import Face from "../assets/images/face.png";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const styles = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <section
        style={{ color: "#fff", fontFamily: "poppins, sans-serif" }}
        className="flex flex-col justify-center items-center max-sm:w-full"
      >
        {/* style={{ ...styles, padding: "20px", minHeight: "100vh" }} */}

        <div className="flex lg:flex-row lg:justify-evenly max-sm:flex-col items-center">
          <div className="">
            <p className="text-[#fff] lg:text-4xl max-sm:text-xl lg:my-5 max-sm:mt-5">
              Hi, I'm <span className="font-bold">Karthick Palanivel</span>
            </p>
            <p className="lg:text-2xl max-sm:mb-8 sm:text-center">
              A Software Developer
            </p>
          </div>
          <img src={Face} alt="face-logo" className="rounded-full w-1/5" />
        </div>

        {/* 🇯🇵🇬🇧 about me */}

        <p className="lg:pt-10 lg:px-60 max-sm:px-5 max-sm:my-4 text-lg min-lg:text-center">
          Versatile{" "}
          <span className="bg-gradient-to-r from-[#ff3535] via-[#e79a9a] to-[#3e3eb7] px-1 rounded-sm text-transparent bg-clip-text underline ">
            Bilingual Japanese Software Engineer
          </span>{" "}
          experienced <span className="underline">2+ years</span> in both Web🌐
          & Mobile📱 Application Development. Ample experience in full-stack
          development, delivering well-documented, responsive, and dynamic
          development with code.
        </p>

        <p>
          <span className="underline">#Open to Work</span>{" "}
        </p>

        <div className="lg:mt-10 max-sm:mt-10 max-sm:grid max-sm:grid-col-2">
          <a
            href="https://drive.google.com/file/d/1diPYc134OSVa5Xof3FQSrsuxv8U4G7C0/view?usp=sharing"
            target="_blank"
            className="border text-center border-white px-6 py-2 rounded-md mx-10 transition-all hover:bg-white hover:text-[#000000] hover:shadow-lg hover:px-8"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href="https://linktr.ee/KarthickPalanivel"
            target="_blank"
            rel="noreferrer"
            className="max-sm:my-4 border text-center border-white px-6 py-2 rounded-md mx-10 transition-all hover:bg-white hover:text-[#000000] hover:shadow-lg hover:px-8"
          >
            Get In Touch
          </a>
        </div>

        <p className="mt-10 max-sm:px-4">
          I’m currently open to new opportunities, reach out via email or
          connect with me on my social media.
        </p>
      </section>
    </>
  );
};

export default Home;
