/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

//icons
import XcloseIcon from "../../assets/icons/XcloseIcon";
import BlogIcon from "../../assets/icons/BlogIcon";

import "../../styles/modal.css";

const Work = () => {
  const { t } = useTranslation();
  const langCode = localStorage.getItem("language") || "en";

  const [modalVisible, setModalVisible] = useState(false);
  const [selectProject, setSelectProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState(-1);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [textData, setTextData] = useState();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    const langMap = {
      en: () => import("./Languages/english.json"),
      jp: () => import("./Languages/japanese.json"),
      ta: () => import("./Languages/Tamil.json"),
    };

    const loadLanguageText = async () => {
      const loadText = (await langMap[langCode]) || langMap.en;
      try {
        const text = await loadText();
        setTextData(text);
        setFilteredProjects(text.projects);
      } catch (error) {
        console.error("Error Loading language FILE", error);
      }
    };

    loadLanguageText();
  }, [langCode]);

  useEffect(() => {
    if (textData && textData.projects) {
      if (projectFilter === -1) {
        setFilteredProjects(textData.projects);
      } else {
        const selectedCategory = textData.categories[projectFilter];
        const filtered = textData.projects.filter(
          (project) => project.selectCategory === selectedCategory,
        );
        setFilteredProjects(filtered);
      }
    }
  }, [projectFilter, textData]);

  useEffect(() => {
    if (modalVisible && selectProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalVisible, selectProject]);

  return (
    <>
      <section
        style={{
          fontFamily: "poppins, sans-serif",
          overflowX: "hidden",
        }}
        className="w-full max-w-[1600px] 3xl:max-w-[2200px] mx-auto px-4 sm:px-8 lg:px-16 3xl:px-24 pb-10 text-gray-900 dark:text-white transition-colors duration-300"
      >
        <p className="text-center underline text-2xl 3xl:text-4xl mt-5 mb-8 3xl:my-10 font-medium tracking-wide">
          {textData?.developments}
        </p>

        {/* Project category section */}
        <div className="flex flex-wrap my-5 3xl:my-10 justify-center gap-2 sm:gap-4 items-center">
          <button
            className={`border rounded-full px-4 py-2 text-sm sm:text-base 3xl:px-8 3xl:py-3 3xl:text-xl cursor-pointer transition-colors duration-300 ${
              projectFilter === -1
                ? "bg-gray-900 text-white dark:bg-white dark:text-black border-gray-900 dark:border-white"
                : "bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-[#ffffff20]"
            }`}
            onClick={() => setProjectFilter(-1)}
          >
            {langCode === "jp" ? "すべて" : "All"}
          </button>
          {textData?.categories.map((category, index) => (
            <button
              key={index}
              className={`border rounded-full px-4 py-2 text-sm sm:text-base 3xl:px-8 3xl:py-3 3xl:text-xl cursor-pointer transition-colors duration-300 ${
                index === projectFilter
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black border-gray-900 dark:border-white"
                  : "bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-[#ffffff20]"
              }`}
              onClick={() => setProjectFilter(index)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* projects */}
        <div className="works-section grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 gap-6 3xl:gap-10 mt-10">
          {filteredProjects.map((project, index) => (
            <div
              className="border border-gray-300 dark:border-[#ffffff40] bg-gray-50/50 dark:bg-[#aeaeae10] backdrop-blur-sm rounded-xl p-5 3xl:p-8 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-[#ffffff10]"
              key={index}
            >
              <div>
                {/* project header */}
                <div className="flex flex-row justify-between items-start gap-4">
                  <h1 className="text-xl 3xl:text-3xl font-semibold underline decoration-gray-300 dark:decoration-[#ffffff50] underline-offset-4">
                    {project.title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-right shrink-0 3xl:text-xl">
                    {project.category}
                  </p>
                </div>
                <p
                  className={`mt-3 mb-4 3xl:my-5 text-gray-700 dark:text-gray-200 3xl:text-lg leading-relaxed ${langCode === "en" && "italic"}`}
                >
                  {project?.shortDescription}
                </p>

                {/* technologies */}
                <div className="flex flex-wrap items-center gap-2 mt-2 3xl:mt-4">
                  {project.technologies.map((items) => (
                    <span
                      key={items}
                      className="py-1 px-3 3xl:px-4 3xl:py-2 bg-gray-200/50 dark:bg-[#ffffff15] border border-gray-300 dark:border-[#ffffff30] rounded-full text-xs 3xl:text-base text-center"
                    >
                      {items}
                    </span>
                  ))}
                </div>
              </div>

              {/* project buttons */}
              <div className="mt-6 3xl:mt-8 flex flex-wrap gap-3 items-center">
                {project.demoLink === null &&
                  project.githubLink === null &&
                  project.socialLink === null && (
                    <p
                      className={`text-sm text-gray-500 dark:text-gray-400 ${langCode === "en" && "italic"} 3xl:text-lg`}
                    >
                      {textData?.linkedAddingSoon}
                    </p>
                  )}

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 3xl:px-6 3xl:py-2 text-sm 3xl:text-lg border rounded-md transition-colors text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                  >
                    {textData?.demo}
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 3xl:px-6 3xl:py-2 text-sm 3xl:text-lg border rounded-md transition-colors text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                  >
                    {textData?.githubLink}
                  </a>
                )}

                {project.socialLink && (
                  <a
                    href={project.socialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-1.5 3xl:px-6 3xl:py-2 text-sm 3xl:text-lg border rounded-md transition-colors text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                  >
                    {textData?.externalLink}
                  </a>
                )}

                <button
                  className="w-fit border rounded-md px-4 py-1.5 3xl:px-6 3xl:py-2 text-sm 3xl:text-lg ml-auto transition-colors border-gray-300 hover:bg-gray-200 dark:border-white dark:hover:bg-[#ffffff20]"
                  onClick={() => {
                    setSelectProject(project);
                    setModalVisible(true);
                  }}
                >
                  {textData?.readMore}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalVisible && selectProject && (
          <div
            className={`modal ${modalVisible && "active-modal"} flex justify-center items-center fixed inset-0 z-50`}
          >
            {/* The overlay stays dark even in light mode to dim the background */}
            <div
              className="overlay absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={toggleModal}
            ></div>
            <div className="modal-content relative bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#ffffff30] rounded-xl p-6 md:p-8 w-[90%] md:max-w-2xl lg:max-w-3xl 3xl:max-w-4xl 3xl:p-10 max-h-[85vh] overflow-y-auto z-30 text-gray-900 dark:text-white">
              <div
                className="absolute top-4 right-4 cursor-pointer hover:opacity-70 3xl:scale-150 origin-top-right text-gray-500 dark:text-white"
                onClick={toggleModal}
              >
                <XcloseIcon />
              </div>
              <h1 className="text-2xl font-bold mb-2 3xl:text-3xl pr-8">
                {textData.projectName}: {selectProject.title}
              </h1>
              <div className="flex flex-row items-center mt-2 3xl:mt-4 text-gray-600 dark:text-gray-300 3xl:text-xl">
                <BlogIcon />
                <p className="mx-3">{selectProject.year}</p>
              </div>
              <p className="my-3 text-blue-600 dark:text-blue-300 font-medium 3xl:my-4 3xl:text-xl">
                {textData?.category}: {selectProject.category}
              </p>
              <div className="w-full h-[1px] bg-gray-200 dark:bg-[#ffffff20] my-4"></div>
              <ol className="mt-4 3xl:mt-8 text-gray-700 dark:text-gray-200 3xl:text-lg space-y-3">
                {selectProject.description.map((desc, index) => (
                  <li
                    key={index}
                    className="list-outside list-disc ml-5 leading-relaxed"
                  >
                    {desc}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        <p className="skill-set text-2xl 3xl:text-4xl underline decoration-gray-300 dark:decoration-white/50 text-center mt-16 3xl:mt-24 mb-8">
          {textData?.proficiencies}
        </p>

        {/* skills */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 3xl:gap-16">
          {textData?.skills.map((skills, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 w-[100px] sm:w-[120px] 3xl:w-[160px] group"
            >
              <div className="p-4 bg-gray-200/50 dark:bg-[#ffffff05] rounded-full group-hover:bg-gray-300 dark:group-hover:bg-[#ffffff15] transition-colors duration-300">
                <img
                  src={skills.imageLink}
                  alt={skills.imageName}
                  className="w-16 h-16 sm:w-20 sm:h-20 3xl:w-32 3xl:h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-900 dark:text-white text-center mt-3 text-xs sm:text-sm 3xl:text-xl font-medium tracking-wide transition-colors">
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
