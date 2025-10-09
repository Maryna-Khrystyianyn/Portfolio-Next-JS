"use client";
import { type Project } from "@/app/projects/projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ProjectHomeMobileVievProps = {
  project: Project;
};

const ProjectHomeMobileViev = ({ project }: ProjectHomeMobileVievProps) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full p-4  flex justify-center">
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className=" items-center"
        >
          <Image
            className="  object-cover object-top cursor-pointer hover:border-green-700  rounded-md bg-[var(--main-light-transparent)] border-2 border-[var(--main-light-transparent)]"
            src={`/projects/${project.img}`}
            alt={project.name[i18n.language as keyof typeof project.name]}
            width={300}
            height={200}
          />
        </button>{" "}
        <h3 className="absolute min-w-[300px] rotate-90 origin-bottom-left top-[-24px] left-[100%]">
          {" "}
          {project.name[i18n.language as keyof typeof project.name] ||
            project.name["en"]}{" "}
        </h3>
      </div>

      <div
        className={`absolute transition-all duration-500 w-full z-30 ${
          isOpen ? "scale-100 translate-y-0" : "scale-0 -translate-y-[300px]"
        }`}
      >
        <div className="flex flex-col w-[80%] mx-auto bg-[var(--project-transparent)] rounded p-5 border border-[var(--main-light)]">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full text-right text-2xl"
          >
            <FontAwesomeIcon icon={faXmark} />{" "}
          </button>
          <p className="">
            {
              project.description[
                i18n.language as keyof typeof project.description
              ]
            }
          </p>
<a href={project.url} className="text-[var(--main-light)] py-5"> {t("visit")}</a>

        </div>
      </div>
    </div>
  );
};

export default ProjectHomeMobileViev;
