import { type Project } from "@/app/projects/projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";

type ProjectViewProps = {
  project: Project;
};

const ProjectView = ({ project }: ProjectViewProps) => {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <h3 className="text-center text-3xl font-bold">
        {project.name[i18n.language as keyof typeof project.name]}
      </h3>
      <div className="mt-5 flex flex-col md:flex-row gap-5">
        <div className=" relative min-w-[300px] min-h-[250px] sm:min-w-[360px] sm:min-h-[250px] md:min-w-[500px] md:min-h-[280px]">
          <a href={project.url}>
            <Image
              className=" object-cover object-top cursor-pointer hover:border-green-700  rounded-md bg-[var(--main-light-transparent)] border-2 border-[var(--main-light-transparent)]"
              src={`/projects/${project.img}`}
              alt={project.name[i18n.language as keyof typeof project.name]}
              fill
            />
          </a>
        </div>
        <p className="sm:text-base text-sm" >
          {
            project.description[
              i18n.language as keyof typeof project.description
            ]
          }
          <a
            href={project.url}
            className="block font-bold mt-5 w-60 text-center cursor-pointer hover:border-green-700  p-2 rounded-md bg-[var(--main-light-transparent)] border border-[var(--main-light-transparent)]"
          >
            {t("visit")}
            <span className="text-[#ed453c]">{` > `}</span>
            <span className="text-[#eeb810]">{` > `}</span>
            <span className="text-[#1fc25f]">{` > `}</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectView;
