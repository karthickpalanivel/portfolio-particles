import React from "react";

//json data
import Skills from "../data/SkillsImages.json";
import Projects from "../data/Works.json";

const Work = () => {
  return (
    <>
      <section
        style={{
          padding: "0 2.5vw",
          color: "#fff",
        }}
      >
        <p className="text-center underline text-2xl my-5">Projects</p>

        {/* projects */}
        <div className="works-section grid lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-12">
          {Projects.map((project, index) => (
            <div className="p-3">
              <div className="border border-white bg-[#ffffff21] rounded-md p-4 h-fit">
                {/* project header */}

                <div className="flex flex-row justify-between">
                  <h1 className="w-1/2 text-xl underline">{project.title}</h1>
                  <p className="text-right italic">{project.year}</p>
                </div>

                <p className="my-2">{project.category}</p>

                <p className="my-2">
                  <span>Description: </span>
                  {project.shortDescription}
                </p>

                {/* project buttons */}
                <div className="my-4 ">
                  {project.demoLink === null &&
                    project.githubLink === null &&
                    project.socialLink === null && (
                      <>
                        <p>Links Adding soon</p>
                      </>
                    )}

                  {project.demoLink !== null && (
                    <a
                      href={project.demoLink}
                      className="px-3 py-1 text-[#fff] bg-[#00000000] border rounded-md border-[#fff] cursor-pointer"
                    >
                      Demo
                    </a>
                  )}

                  {project.githubLink !== null && (
                    <a
                      href={project.githubLink}
                      className={`${
                        project.demoLink === null ? "" : "ml-5"
                      } px-3 py-1 text-[#fff] bg-[#00000000] border rounded-md border-[#fff] cursor-pointer`}
                    >
                      Github link
                    </a>
                  )}

                  {project.socialLink !== null && (
                    <a
                      href={project.socialLink}
                      className={`${
                        project.demoLink === null && project.githubLink === null
                          ? ""
                          : "ml-5"
                      } px-3 py-1 text-[#fff] bg-[#00000000] border rounded-md border-[#fff] cursor-pointer`}
                    >
                      External Link
                    </a>
                  )}
                </div>

                <div className="w-10/12 lg:flex lg:flex-row">
                  {project.technologies.map((items) => (
                    <div className="mr-3 my-2 py-1 px-2 w-fit h-fit border border-white rounded-full">
                      <p key={items} className="text-xs text-center">
                        {items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="skill-set text-2xl underline text-center mt-9">
          Skill set
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
              <p className="text-[#fff] text-center">{skills.imageName}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
