"use client";
import { projectList } from "./projectsList";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import ProjectView from "../components/projectView/ProjectView";
import { motion } from "framer-motion";

const Projects = () => {
  const { i18n, t } = useTranslation();

  // Refs für jedes Projekt
  const projectRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const scrollToProject = (id: number) => {
    const ref = projectRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mt-[-30px] sm:mt-[-70px] mb-10 ">
      {/* <h3>{t("projects")}</h3>
      <p className="sm:text-base text-sm">{t("projectsDescription")}</p> */}

      {/* Projekt-Links */}
      <div className="flex flex-wrap gap-3 sm:gap-5 sm:mt-10 mt-7">
        {projectList.map((project) => (
          <button
            key={project.id}
            className="cursor-pointer hover:border-green-700 sm:px-5 sm:py-2 px-3 py-1 sm:text-base text-[11px] rounded-md bg-[var(--main-light-transparent)] border border-[var(--main-light-transparent)]"
            onClick={() => scrollToProject(project.id)}
          >
            {project.name[i18n.language as keyof typeof project.name] ||
              project.name["en"]}
          </button>
        ))}
      </div>

      {/* Alle Projekte anzeigen */}
      <motion.div 
      initial={{ opacity: 0, y: 20, filter:"blur(5px)"}} animate={{ opacity: 1, y: 0, filter:"blur(0px)"  }} transition={{duration:0.8}}
      >
 <div className="mt-5 space-y-30 overflow-auto max-h-[540px] sm:max-h-[500px] md:max-h-[450px] pb-[100px] mb-[-80px] no-scrollbar">
        {projectList.map((project) => (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[project.id] = el;
            }}
            className="scroll-mt-5"
          >
            <ProjectView project={project} />
          </div>
        ))}
      </div>

      </motion.div>
     
    </div>
  );
};

export default Projects