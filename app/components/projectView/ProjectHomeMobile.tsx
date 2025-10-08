"use client";

import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

import { projectList } from "@/app/projects/projectsList";
import ProjectHomeMobileViev from "./ProjectHomeMobileView";

const ProjectHomeMobile = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="mt-15">
      <h3>$ {t("projects")}</h3>
      

      {/* Projects links */}
      <div className=" flex flex-wrap gap-5 mt-1">
        {projectList.map((project) => (
          <ProjectHomeMobileViev key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectHomeMobile;
