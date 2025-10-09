"use client";
import { Project, projectList } from "./projectsList";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

import { useState } from "react";
import ProjectView from "../components/projectView/ProjectView";

const Projects = () => {
  const { i18n, t } = useTranslation();
  const [activProject, setActivProject] = useState<Project>(projectList[0]);

  return (
    <div className="mt-[-30px]">
      {/* <h3>$ {t("projects")}</h3>
      <p className="sm:text-base text-sm">{t("projectsDescription")}</p> */}

      {/* Projects links */}
      <div className=" flex flex-wrap gap-3 sm:gap-5 sm:mt-10 mt-7">
        {projectList.map((project) => (
          <button
            key={project.id}
            className="cursor-pointer hover:border-green-700 sm:px-5 sm:py-2 px-3 py-1 sm:text-base text-sm rounded-md bg-[var(--main-light-transparent)] border border-[var(--main-light-transparent)]"
            onClick={() => setActivProject(project)}
          >
            {project.name[i18n.language as keyof typeof project.name] ||
              project.name["en"]}
          </button>
        ))}
      </div>

      {/* ProjectView  - all about Project*/}
      <div className="mt-10 relative min-h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activProject.id}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20, scale: 0.5 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", y: -140, scale: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ProjectView project={activProject} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
