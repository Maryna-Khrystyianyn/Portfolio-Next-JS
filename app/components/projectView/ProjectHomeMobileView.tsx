"use client";
import { type Project } from "@/app/projects/projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";

type ProjectHomeMobileVievProps = {
  project: Project;
};

const ProjectHomeMobileViev = ({ project }: ProjectHomeMobileVievProps) => {
  const { i18n, t } = useTranslation();
  return (
    <div className="w-full p-4  flex justify-center">
      <div className="relative">
        <a href={project.url} className=" items-center">
          <Image
            className="  object-cover object-top cursor-pointer hover:border-green-700  rounded-md bg-[var(--main-light-transparent)] border-2 border-[var(--main-light-transparent)]"
            src={`/projects/${project.img}`}
            alt={project.name[i18n.language as keyof typeof project.name]}
            width={300}
            height={200}
          />
        </a>{" "}
        <h3 className="absolute min-w-[300px] rotate-90 origin-bottom-left top-0 left-[100%]">
          {" "}
          {project.name[i18n.language as keyof typeof project.name] ||
            project.name["en"]}{" "}
        </h3>
      </div>
    </div>
  );
};

export default ProjectHomeMobileViev;
