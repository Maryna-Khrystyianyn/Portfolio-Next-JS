"use client";
import { useRouter } from "next/navigation";
import { projectList } from "../projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt, faUserShield, faCalendarCheck, faEdit, faCheckCircle, faBolt, faDatabase, faGlobe, faShieldAlt, faFileCode, faLanguage, faWrench } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";


const NailStudioProject = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const project = projectList.find((p) => p.slug === "nail-studio");

  if (!project) return null;

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
        className="flex flex-col xl:flex-row gap-12 mb-16 items-center"
      >
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--main-light-transparent)] text-[var(--main-light)] font-bold text-sm mb-6 border border-[var(--main-light-transparent)]">
            <FontAwesomeIcon icon={faBolt} />
            <span>Built in 3 Days with AI</span>
          </div>
          <h1 className=" font-black mb-6 leading-tight">
            <p className="text-6xl sm:text-7xl ">Nail <span className="text-[var(--main-light)]">Studio</span></p>
          </h1>
          <p className="my-10 ml-10 text-xl lg:text-2xl italic text-[var(--muted)] border-l-4 border-[var(--main-light-transparent)] pl-6 py-2">
            {t("nailDescription")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--main-light)] text-white font-bold rounded-2xl hover:bg-[#1a7a3d] transition-all flex items-center gap-3 shadow-xl hover:translate-y-[-2px]"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span>{t("visit") || "Visit Website"}</span>
            </a>
          </div>
        </div>
        <div className="flex-1 relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[var(--main-light-transparent)]">
          <Image
            src={`/projects/${project.img}`}
            alt="Nail Studio Preview"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Development Highlight */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-24 bg-gradient-to-br from-[var(--main-light-transparent)] to-transparent p-12 rounded-[4rem] border border-[var(--main-light-transparent)] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <FontAwesomeIcon icon={faBolt} className="text-[12rem] text-[var(--main-light)]" />
        </div>
        <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <FontAwesomeIcon icon={faBolt} className="text-[var(--main-light)]" />
                {i18n.language === "uk" ? "Швидкість та Ефективність" : i18n.language === "de" ? "Geschwindigkeit & Effizienz" : "Speed & Efficiency"}
            </h2>
            <p className="text-2xl italic leading-relaxed max-w-4xl text-[var(--text)] opacity-90">
                {i18n.language === "uk" 
                    ? "Цей проєкт є доказом того, як поєднання професійних навичок розробки та сучасних ШІ-інструментів (Antigravity) дозволяє створювати складні full-stack рішення за рекордно короткий термін. Те, що раніше займало тижні, тепер реалізовано за 3 дні без втрати якості."
                    : i18n.language === "de"
                    ? "Dieses Projekt beweist, wie die Kombination aus professionellen Entwicklungsfähigkeiten and modernen KI-Tools (Antigravity) es ermöglicht, komplexe Full-Stack-Lösungen in Rekordzeit zu erstellen. Was früher Wochen dauerte, wurde nun in 3 Tagen ohne Qualitätsverlust realisiert."
                    : "This project stands as proof of how combining professional development skills with modern AI tools (Antigravity) allows for the creation of complex full-stack solutions in record time. What used to take weeks is now realized in 3 days without sacrificing quality."}
            </p>
        </div>
      </motion.section>

      {/* Core Functions */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="mb-24"
      >
        <h2 className="text-center text-[var(--main-light)] font-mono mb-12 text-4xl font-bold tracking-tight">
          {t("coreFunctions") || "Core Functions"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: faCalendarCheck, text: t("nailBooking") },
            { icon: faUserShield, text: t("nailAdmin") },
            { icon: faEdit, text: t("nailGallery") },
            { icon: faDatabase, text: t("nailAppointments") },
            { icon: faGlobe, text: t("nailMultilingual") || "Multilingual Support" },
            { icon: faBolt, text: t("nailThreeDays") }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="p-8 bg-[var(--bg-main)] rounded-[2.5rem] border border-[var(--main-light-transparent)] flex flex-col items-center text-center gap-6 hover:translate-y-[-10px] transition-all shadow-lg group"
            >
              <div className="w-16 h-16 bg-[var(--main-light-transparent)] rounded-2xl flex items-center justify-center group-hover:bg-[var(--main-light)] transition-colors">
                <FontAwesomeIcon icon={item.icon} className="text-2xl text-[var(--main-light)] group-hover:text-white transition-colors" />
              </div>
              <p className="font-bold text-lg leading-snug">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

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
            {["n1.png", "n2.png", "n3.png", "n4.png", "n5.png", "n6.png"].map((img, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center pb-12" style={{ width: '80%'}}>
                <div className="relative w-[800px] h-[500px]  rounded-2xl  shadow-2xl">
                  <Image
                    src={`/projects/nail/${img}`}
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

      {/* Tech Stack */}
      <section>
        <h2 className="text-center text-[var(--main-light)] font-mono mb-10 text-4xl font-bold tracking-tight">
          {t("techStack") || "Technology Stack"}
        </h2>
        <div className="overflow-x-auto rounded-[2.5rem] border border-[var(--main-light-transparent)] bg-[var(--bg-main)] shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--main-light-transparent)]">
                <th className="p-6 font-bold text-[var(--main-light)] border-b border-[var(--main-light-transparent)]">{t("technologie") || "Technology"}</th>
                <th className="p-6 font-bold text-[var(--main-light)] border-b border-[var(--main-light-transparent)]">{t("purpose") || "Purpose"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Next.js 16", desc: t("nextjsDesc") },
                { name: "PostgreSQL", desc: t("postgresqlDesc") },
                { name: "Prisma", desc: t("prismaDesc") },
                { name: "Supabase", desc: t("supabaseDesc") },
                { name: "NextAuth.js", desc: t("nextauthDesc") },
                { name: "Zod", desc: t("zodDesc") },
                { name: "Next-Intl", desc: t("nextintlDesc") },
                { name: "Tailwind CSS 4", desc: t("tailwindDesc") },
                { name: "React Hook Form", desc: t("reacthookformDesc") },
                { name: "Antigravity AI", desc: i18n.language === "uk" ? "Розробка full-stack логіки за 3 дні" : i18n.language === "de" ? "Full-Stack-Logik-Entwicklung in 3 Tagen" : "Full-stack logic development in 3 days" }
              ].map((tech, idx) => (
                <tr key={idx} className="border-b border-[var(--main-light-transparent)] hover:bg-[var(--main-light-transparent)] transition-colors">
                  <td className="p-6 font-bold text-[var(--main-light)] flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-sm opacity-50" />
                    {tech.name}
                  </td>
                  <td className="p-6">{tech.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default NailStudioProject;
