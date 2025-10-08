"use client"
import { type Project } from "@/app/projects/projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";

type ProjectHomeMobileVievProps = {
  project: Project;
};

const ProjectHomeMobileViev = ({ project }: ProjectHomeMobileVievProps) => {
  const { i18n, t } = useTranslation();
  return (
    <div className="w-full p-4">
      <a href={project.url} className=" flex flex-col w-ful items-center">
            <Image
              className=" object-cover object-top cursor-pointer hover:border-green-700  rounded-md bg-[var(--main-light-transparent)] border-2 border-[var(--main-light-transparent)]"
              src={`/projects/${project.img}`}
              alt={project.name[i18n.language as keyof typeof project.name]}
              width={300} height={200}
            />
            <p className=""> {project.name[i18n.language as keyof typeof project.name] ||
              project.name["en"]} </p>
          </a>
     
    </div>
  );
};

export default ProjectHomeMobileViev;
