"use client";
import { projectList } from "./projectsList";

import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectView from "../components/projectView/ProjectView";

const Projects = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="mt-[-30px]">
      <h1 className="text-3xl font-bold">{t("projects")}</h1>
      <p>{t("projectsDescription")}</p>

      {/* Projects links */}
      <div className=" flex flex-wrap gap-5 mt-10">
        {projectList.map((project) => (
          <button key={project.id} className="cursor-pointer hover:border-green-700 px-5 py-2 rounded-md bg-[var(--main-light-transparent)] border border-[var(--main-light-transparent)]">
            {project.name[i18n.language as keyof typeof project.name]}
          </button>
        ))}
      </div>

      {/* ProjectView  - all about Project*/}
      <div className="mt-10">
         <ProjectView project={projectList[0]}/>
      </div>
     
    </div>
  );
};

export default Projects;
