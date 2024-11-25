/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

//icons
import XcloseIcon from "../../assets/icons/XcloseIcon";
import BlogIcon from "../../assets/icons/BlogIcon";

import "../../styles/modal.css";
import OrganizationIcon from "../../assets/icons/OrganizationIcon";

const Work = () => {
  const { t } = useTranslation();
  const [selectProject, setSelectProject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

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
        style={{
          color: "#fff",
          fontFamily: "poppins, sans-serif",
          overflowX: "hidden",
        }}
        className="lg:p-2/12"
      >
        <p className="text-center underline text-2xl my-5">
          {textData?.developments}
        </p>

        {/* projects */}
        <div className="works-section grid lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-8">
          {textData?.projects.map((project, index) => (
            <div className="lg:p-3 max-sm:py-3" key={index}>
              <div className="border border-white bg-[#7f7f7f21] rounded-md p-4 h-fit">
                {/* project header */}
                <div className="flex flex-row justify-between">
                  <h1 className="w-1/2 text-xl underline max-sm:mb-2">
                    {project.title}
                  </h1>
                  <p className="my-1 text-right">{project.category}</p>
                </div>

                <div className="mt-2 lg:flex flex-row justify-between">
                  <div className="flex flex-row space-x-3 items-center">
                    <OrganizationIcon colors={"#fff"} />
                    <p className="text-sm">{project.workedMode}</p>
                  </div>

                  <div className="flex flex-row space-x-3 items-center max-sm:my-2">
                    <BlogIcon />
                    <p className="text-right italic">{project.year}</p>
                  </div>
                </div>

                <p className={`my-1 ${langCode === "en" && "italic"}`}>
                  {/* <span>{textData?.description} </span> */}
                  {project.shortDescription}
                </p>

                {/* technologies and modal trigger */}
                <div className="lg:flex lg:flex-wrap justify-between items-center">
                  <div className="flex flex-wrap items-center">
                    {/* <p className="mr-2">Tech Stack: </p> */}
                    {project.technologies.map((items) => (
                      <div
                        key={items}
                        className="mr-3 my-2 py-1 px-2 w-fit h-fit border border-white rounded-full"
                      >
                        <p className="text-xs text-center">{items}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* project buttons */}
                <div className="my-4">
                  {project.demoLink === null &&
                    project.githubLink === null &&
                    project.socialLink === null && <p>Links Adding soon</p>}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="px-3 py-1 text-[#fff] border rounded-md border-[#fff] cursor-pointer"
                    >
                      {textData?.demo}
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className={`${
                        project.demoLink ? "ml-5" : ""
                      } px-3 py-1 text-[#fff] border rounded-md border-[#fff] cursor-pointer`}
                    >
                      {textData?.githubLink}
                    </a>
                  )}

                  {project.socialLink && (
                    <a
                      href={project.socialLink}
                      className={`${
                        project.demoLink || project.githubLink ? "ml-5" : ""
                      } px-2 py-1 text-[#fff] border rounded-md border-[#fff] cursor-pointer`}
                    >
                      {textData?.externalLink}
                    </a>
                  )}

                  <p
                    className="cursor-pointer w-fit border my-4 border-white rounded-md px-2 py-1"
                    onClick={() => {
                      setSelectProject(project);
                      setModalVisible(true);
                    }}
                  >
                    {textData?.readMore}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalVisible && selectProject && (
          <div className={`modal ${modalVisible && "active-modal"}`}>
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content z-30">
              <div
                className="place-items-end cursor-pointer"
                onClick={toggleModal}
              >
                <XcloseIcon />
              </div>
              <h1>
                {textData.projectName}: {selectProject.title}
              </h1>
              <div className="flex flex-row mt-2">
                <BlogIcon />
                <p className="mx-3 text-white">{selectProject.year}</p>
              </div>
              <p className="my-2">
                {textData?.category}: {selectProject.category}
              </p>
              <ol className="mt-5">
                {selectProject.description.map((desc, index) => (
                  <li key={index} className="mt-2 list-outside list-disc ml-5">
                    {desc}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        <p className="skill-set text-2xl underline text-center mt-9">
          {textData?.proficiencies}
        </p>
        {/* skills */}
        <div className="lg:flex lg:flex-wrap grid grid-cols-3 items-center justify-center">
          {textData?.skills.map((skills, index) => (
            <div
              key={index}
              className="w-32 flex flex-col items-center justify-center"
            >
              <img
                src={skills.imageLink}
                alt={skills.imageName}
                className="w-24 h-24 p-4 mx-5 object-contain"
              />
              <p className="text-[#fff] text-center max-sm:text-xs">
                {skills.imageName}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
