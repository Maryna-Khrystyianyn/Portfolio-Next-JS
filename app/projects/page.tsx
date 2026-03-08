"use client";
import { projectList, type Project } from "./projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

const ProjectCard = ({ project }: { project: Project }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as keyof typeof project.name;
  
  const name = project.name[lang] || project.name["en"];
  const description = project.description[lang] || project.description["en"];
  const shortDescription = description.length > 150 ? description.substring(0, 150) + "..." : description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[var(--bg-menu)] rounded-2xl overflow-hidden border border-[var(--main-light-transparent)] shadow-sm hover:shadow-md transition-all flex flex-col"
    >
      <Link href={`/projects/${project.slug}`} className="relative w-full h-48 sm:h-64 overflow-hidden group cursor-pointer block">
        <Image
          src={`/projects/${project.img}`}
          alt={name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
           {/* Quick action buttons on hover if needed */}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 text-[var(--main-light)]">{name}</h3>
        <p className="text-sm sm:text-base text-[var(--muted)] mb-6 flex-1">
          {shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] py-2 px-4 bg-[var(--main-light)] text-white text-center rounded-lg hover:bg-[#1a7a3d] transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
              {t("visit") || "Visit"}
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 min-w-[120px] py-2 px-4 border border-[var(--main-light)] text-[var(--main-light)] text-center rounded-lg hover:bg-[var(--main-light-transparent)] transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="text-xs" />
            {t("details") || "Details"}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme(); // <== wichtig
const imgUrl = resolvedTheme === "dark" ? "/m.png" : "/m-light.png";

  return (
    <div className="pb-20">
      <div className="mb-12">
        <div className="flex items-end gap-2 mb-5"> 
           <Image
                          src={imgUrl}
                          width={50}
                          height={50}
                          alt="m"
                          className="pb-1 w-12 sm:w-16"
                        />
          <h2 className="text-3xl sm:text-5xl font-bold tracking-widest">
            {t("projectsTitle") || "y Projects"}
          </h2>

        </div>
       
        <p className="text-lg text-[var(--muted)] max-w-2xl">
          {t("projectsDescription") || "A showcase of some of my most recent work and learning projects."}
        </p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20"
      >
        {projectList.map((project, index) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;