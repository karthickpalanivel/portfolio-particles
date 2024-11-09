import React from "react";

// icons

import LinkedinIcon from "../assets/icons/LinkedinIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

const Footer = () => {
  return (
    <>
      <footer style={{ color: "white", paddingTop:"5vh"}}>
        <div className="grid grid-cols-3 sm:flex-col items-center">
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/karthick-palanivel/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 items-center sm:my-5 justify-center"
          >
            <LinkedinIcon colors={"white"} />
            <p className="lg:visible max-sm:hidden">
              linkedin.com/karthickpalanivel
            </p>
            <p className="lg:hidden max-sm:visible">LinkedIn</p>
          </a>

          {/* github */}
          <a
            href="https://github.com/karthickpalanivel/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 items-center sm:my-5 justify-center"
          >
            <GitHubIcon colors={"white"} />
            <p className="lg:visible max-sm:hidden">
              github.com/karthickpalanivel
            </p>
            <p className="lg:hidden max-sm:visible">GitHub</p>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/KarthickWords"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row space-x-2 items-center sm:my-5 justify-center"
          >
            <TwitterIcon colors={"#fff"} />
            <p className="lg:visible max-sm:hidden">x.com/KarthickWords</p>
            <p className="lg:hidden max-sm:visible">X.com</p>
          </a>
        </div>

        <div className="my-6 text-center text-gray-400 text-sm ">
          Designed and developed by Karthick Palanivel
        </div>
      </footer>
    </>
  );
};

export default Footer;
