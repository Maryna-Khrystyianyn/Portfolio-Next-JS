"use client";
import { useRouter } from "next/navigation";
import { projectList } from "../projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt, faLayerGroup, faRoute, faBolt, faPalette, faHistory } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";


const TodoReactProject = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const project = projectList.find((p) => p.slug === "todo-react");

  if (!project) return null;

  const lang = i18n.language as keyof typeof project.name;
  const name = project.name[lang] || project.name["en"];
  const description = project.description[lang] || project.description["en"];

  const techStack = [
    { name: t("todoFeaturesTitle") || "Technical Foundation", icon: faLayerGroup, desc: t("todoState") },
    { name: "React Router", icon: faRoute, desc: t("todoRouting") },
    { name: "Tailwind CSS", icon: faPalette, desc: t("todoStyling") },
    { name: "Vite & TS", icon: faBolt, desc: t("todoVite") }
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
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-[var(--main-light-transparent)] text-[var(--main-light)] font-bold text-xs border border-[var(--main-light-transparent)]">
            <FontAwesomeIcon icon={faHistory} />
            <span>The Beginning of My Journey</span>
          </div>
          <h1 className="font-black leading-tight mb-6">
            <p className="text-5xl sm:text-7xl">
              ToDo <span className="text-[var(--main-light)]">React</span>
            </p>
          </h1>
          
          <div className="text-lg flex flex-col gap-2 mb-6 text-[var(--muted)]">
            <p><span className="font-bold text-[var(--main-light)]">{t("projectAuthor") || "Project by"}:</span> Maryna Khrystyianyn</p>
            <p><span className="font-bold text-[var(--main-light)]">Milestone:</span> My very first React application</p>
          </div>

          <p className="my-10 ml-10 text-xl lg:text-2xl italic text-[var(--muted)] border-l-4 border-[var(--main-light-transparent)] pl-6 py-2">
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

      {/* Philosophy Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="my-16 bg-[var(--main-light-transparent)] p-10 rounded-[3rem] border border-[var(--main-light-transparent)]"
      >
        <h2 className="text-3xl font-bold mb-6 text-[var(--main-light)]">{t("projectPhilosophy") || "Project Philosophy"}</h2>
        <p className="text-xl lg:text-2xl leading-relaxed mb-6 italic">
          &quot;{t("todoPhilosophy")}&quot;
        </p>
        <p className="text-lg lg:text-xl leading-relaxed text-[var(--muted)]">
          {t("todoSoftSkills")}
        </p>
      </motion.section>

 {/* Philosophy Section */}
      <section className="my-20">
        <h2 className="text-center text-[var(--main-light)] font-mono mb-12 text-4xl font-bold tracking-tight">
          {t("projectGallery") || "Project Gallery"}
        </h2>
        <div className="w-full max-w-5xl mx-auto px-4">
          <Swiper
            effect={"coverflow"}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className=""
          >
            {["t3.png", "t1.png", "t2.png", "t4.png"].map((img, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center pb-12" style={{ width: '80%'}}>
                <div className="relative w-[800px] h-[500px]  rounded-2xl  shadow-2xl">
                  <Image
                    src={`/projects/todoReact/${img}`}
                    alt={`Project Screenshot ${index + 1}`}
                    width={800}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Projects Grid Spacing Refinement */}
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
          {t("todoFeaturesTitle") || "Technical Foundation"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <p className="text-xs text-[var(--muted)] leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default TodoReactProject;
