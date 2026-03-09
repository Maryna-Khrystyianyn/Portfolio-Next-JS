"use client";
import { useParams, useRouter } from "next/navigation";
import { projectList } from "../projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt, faCode, faLayerGroup, faStore } from "@fortawesome/free-solid-svg-icons";

const StayTimeProject = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const project = projectList.find((p) => p.slug === "stay-time");

  if (!project) return null;

  const lang = i18n.language as keyof typeof project.name;
  const name = project.name[lang] || project.name["en"];
  const description = project.description[lang] || project.description["en"];

  const techStack = [
    { name: "Vanilla JavaScript", icon: faCode, desc: t("stayTimeVanilla") },
    { name: "DOM Manipulation", icon: faLayerGroup, desc: t("stayTimeDOM") },
    { name: "Local Storage", icon: faStore, desc: t("stayTimeStorage") },
    { name: "SASS / SCSS", icon: faCode, desc: t("stayTimeSass") },
    { name: "TypeScript", icon: faCode, desc: t("stayTimeTS") },
    { name: "Stripe API", icon: faExternalLinkAlt, desc: t("stayTimeStripe") }
  ];

  return (
    <div className="pb-20">
      <button
        onClick={() => router.push("/projects")}
        className="flex items-center gap-2 mb-8 text-[var(--muted)] hover:text-[var(--main-light)] transition-colors"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>{t("backToProjects") || "Back to Projects"}</span>
      </button>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col xl:flex-row gap-12 mb-10 items-center"
      >
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/projects/stay-time/logo.png"
              alt="StayTime Logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg border-2 border-[var(--main-light-transparent)]"
            />
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[var(--main-light-transparent)] text-[var(--main-light)] font-bold text-xs border border-[var(--main-light-transparent)]">
                <FontAwesomeIcon icon={faCode} />
                <span>Vanilla JS Fundamental Project</span>
              </div>
              <h1 className="font-black leading-tight mt-2">
                <p className="text-4xl sm:text-6xl lg:text-4xl xl:text-6xl">
                  StayTime <span className="text-[var(--main-light)]">Store</span>
                </p>
              </h1>
            </div>
          </div>
          
          <div className="text-lg flex flex-col gap-2 mb-6 text-[var(--muted)]">
            <p><span className="font-bold text-[var(--main-light)]">{t("projectAuthor") || "Project by"}:</span> Maryna Khrystyianyn</p>
            <p><span className="font-bold text-[var(--main-light)]">Inspiration:</span> My son&apos;s passion for Minecraft</p>
          </div>

          <p className=" my-10 ml-10 text-xl lg:text-2xl italic text-[var(--muted)] border-l-4 border-[var(--main-light-transparent)] pl-6 py-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[var(--main-light)] text-white font-semibold rounded-lg hover:bg-[#1a7a3d] transition-all flex items-center gap-2 shadow-lg"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span>{t("visit") || "Visit Website"}</span>
            </a>
          </div>
        </div>
        <div className="flex-1 relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[var(--main-light-transparent)] bg-[var(--bg-main)]">
          <Image
            src={`/projects/${project.img}`}
            alt={name}
            fill
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Description Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="my-16 bg-[var(--main-light-transparent)] p-10 rounded-[3rem] border border-[var(--main-light-transparent)] shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-[var(--main-light)]">{t("projectPhilosophy") || "Project Philosophy"}</h2>
        <p className="text-xl lg:text-2xl leading-relaxed mb-6 italic">
          &quot;{t("stayTimePhilosophy")}&quot;
        </p>
        <p className="text-lg lg:text-xl leading-relaxed text-[var(--muted)]">
          {t("stayTimeLearning")}
        </p>
      </motion.section>

      {/* Core Functions / Technical Highlights */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="mt-24"
      >
        <h2 className="text-center text-[var(--main-light)] font-mono mb-12 text-4xl font-bold tracking-tight">
          {t("stayTimeFeaturesTitle") || "Key Technical Features"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, idx) => (
            <motion.div 
              key={idx}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="p-8 bg-[var(--bg-main)] rounded-[2.5rem] border border-[var(--main-light-transparent)] flex flex-col items-center text-center gap-6 hover:translate-y-[-10px] transition-all shadow-lg group"
            >
              <div className="w-16 h-16 bg-[var(--main-light-transparent)] rounded-2xl flex items-center justify-center group-hover:bg-[var(--main-light)] transition-colors">
                <FontAwesomeIcon icon={tech.icon} className="text-2xl text-[var(--main-light)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-xl text-[var(--main-light)]">{tech.name}</h3>
              <p className="text-[var(--muted)] leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default StayTimeProject;
