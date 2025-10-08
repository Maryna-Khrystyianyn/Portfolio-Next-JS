import { type Project } from "@/app/projects/projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";

type ProjectHomeMobileProps = {
  project: Project;
};

const ProjectHomeMobile = ({ project }: ProjectHomeMobileProps) => {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <h3 className="text-center text-3xl font-bold">
        {project.name[i18n.language as keyof typeof project.name]}
      </h3>
      <div className="mt-5 flex flex-col md:flex-row gap-5">
        <div className=" relative min-w-[300px] min-h-[200px] sm:min-w-[360px] sm:min-h-[200px] md:min-w-[500px] md:min-h-[280px]">
          <a href={project.url}>
            <Image
              className=" object-cover object-top cursor-pointer hover:border-green-700  rounded-md bg-[var(--main-light-transparent)] border-2 border-[var(--main-light-transparent)]"
              src={`/projects/${project.img}`}
              alt={project.name[i18n.language as keyof typeof project.name]}
              fill
            />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectHomeMobile;
