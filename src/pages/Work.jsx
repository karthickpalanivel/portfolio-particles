import React, { useState } from "react";

//json data
import Skills from "../data/SkillsImages.json";
import Projects from "../data/Works.json";

//icons
import TagIcon from "../assets/icons/TagIcon";
import { useTranslation } from "react-i18next";
import XcloseIcon from "../assets/icons/XcloseIcon";
import BlogIcon from "../assets/icons/BlogIcon";

import "../styles/modal.css";

const Work = () => {
  const { t } = useTranslation();

  const [selectProject, setSelectProject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <section
        style={{
          color: "#fff",
          fontFamily: "poppins, sans-serif",
        }}
        className="lg:p-2/12"
      >
        <p className="text-center underline text-2xl my-5">
          {t("developments")}
        </p>

        {/* projects */}
        <div className="works-section grid lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-8">
          {Projects.map((project, index) => (
            <div className="lg:p-3 max-sm:py-3" key={index}>
              <div className="border border-white bg-[#ffffff21] rounded-md p-4 h-fit">
                {/* project header */}
                <div className="flex flex-row justify-between">
                  <h1 className="w-1/2 text-xl underline max-sm:mb-2">
                    {project.title}
                  </h1>
                  <p className="text-right italic">{project.year}</p>
                </div>

                <div className="flex flex-row space-x-3 items-center">
                  <TagIcon />
                  <p className="my-1">{project.category}</p>
                </div>

                <p className="my-1">
                  <span>Description: </span>
                  {project.shortDescription}
                </p>

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
                      {t("demo")}
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className={`${
                        project.demoLink ? "ml-5" : ""
                      } px-3 py-1 text-[#fff] border rounded-md border-[#fff] cursor-pointer`}
                    >
                      {t("githubLink")}
                    </a>
                  )}

                  {project.socialLink && (
                    <a
                      href={project.socialLink}
                      className={`${
                        project.demoLink || project.githubLink ? "ml-5" : ""
                      } px-2 py-1 text-[#fff] border rounded-md border-[#fff] cursor-pointer`}
                    >
                      {t("externalLink")}
                    </a>
                  )}
                </div>

                {/* technologies and modal trigger */}
                <div className="lg:flex lg:flex-row justify-between items-center">
                  <div className="w-10/12 lg:flex lg:flex-row">
                    {project.technologies.map((items) => (
                      <div
                        key={items}
                        className="mr-3 my-2 py-1 px-2 w-fit h-fit border border-white rounded-full"
                      >
                        <p className="text-xs text-center">{items}</p>
                      </div>
                    ))}
                  </div>
                  <p
                    className="cursor-pointer w-fit border border-white rounded-md px-2 py-1"
                    onClick={() => {
                      setSelectProject(project);
                      setModalVisible(true); // Show modal
                    }}
                  >
                    {t("readmore")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalVisible && selectProject && (
          <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content z-30">
              <div className="place-items-end" onClick={toggleModal}>
                <XcloseIcon />
              </div>
              <h1>Project Name: {selectProject.title}</h1>
              <div className="flex flex-row mt-2">
                <BlogIcon />
                <p className="mx-3 text-white">{selectProject.year}</p>
              </div>
              <p className="my-2">
                {t("category")}: {selectProject.category}
              </p>
              <p className="mt-5">{selectProject.description}</p>

              {/* <button className="close-btn mt-5 text-[#fff] border border-white rounded-md px-4 py-1"></button> */}
            </div>
          </div>
        )}

        <p className="skill-set text-2xl underline text-center mt-9">
          {t("proficiencies")}
        </p>
        {/* skills */}
        <div className="lg:flex lg:flex-row grid grid-cols-3 items-center justify-center">
          {Skills.map((skills, index) => (
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
