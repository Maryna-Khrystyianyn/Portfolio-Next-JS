"use client";
import { useParams, useRouter } from "next/navigation";
import { projectList } from "../projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt, faUserShield, faUserCheck, faUser, faBook, faClock, faStore, faImage, faRobot, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const CheeseWithLoveProject = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const project = projectList.find((p) => p.slug === "cheese-with-love");

  if (!project) return null;

  const lang = i18n.language as keyof typeof project.name;
  const name = project.name[lang] || project.name["en"];
  const description = project.description[lang] || project.description["en"];

  return (
    <div className="pb-20">
      <button
        onClick={() => router.push("/projects")}
        className="flex items-center gap-2 mb-8 text-[var(--muted)] hover:text-[var(--main-light)] transition-colors"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>{t("backToProjects") || "Back to Projects"}</span>
      </button>
      
      {/* main section with foto*/}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex w-full md:flex-row flex-col justify-around mb-10"
      >
        {/* Logo and Title and project info*/}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
          <Image
            src="/projects/kease/logo.png"
            alt="Käse mit Liebe Logo"
            width={260}
          height={260}
         className="lg:w-40 lg:h-40 w-20 h-20 "
        />
        <p className="flex flex-col font-bold leading-none lg:text-8xl text-4xl">
          Käse
          <span className="lg:text-6xl text-2xl">
            mit Liebe
          </span>
        </p>
        </div>
        <div className="text-xl flex flex-col gap-2 my-5">
          <p > <span className="font-bold">{t("institute") || "Institut"}:</span> DCI – Digital Career Institute </p>
          <p>
          <span className="font-bold">{t("projectAuthor") || "Projektarbeit von"}:</span> Maryna Khrystyianyn</p>
          <p>
          <span className="font-bold">{t("course") || "Kurs"}:</span> {i18n.language === "uk" ? "Веброзробка" : i18n.language === "en" ? "Web Development" : "Webentwicklung"}
          </p>
          <p>
          <span className="font-bold">{t("projectDuration") || "Projektlaufzeit"}:</span> {i18n.language === "uk" ? "2 місяці" : i18n.language === "en" ? "2 months" : "2 Monate"}</p>
        </div>
         <div className="mt-auto pt-6 flex flex-wrap gap-4">
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

        {/* foto1*/}
        <div className="flex items-start justify-center md:my-0 my-10 ">
        <Image
          src="/projects/kease/foto1.png"
          alt="Käse mit Liebe Logo"
          width={600}
          height={400}
         className=" 2xl:w-200 xl:w-160 lg:w-120 md:w-80  rounded-4xl  "
        /></div>
      </motion.div>
      {/* description*/}
      <section className="my-10 ml-10 text-xl lg:text-2xl italic text-[var(--muted)] border-l-4 border-[var(--main-light-transparent)] pl-6 py-2">  
        <p className="text-xl lg:text-2xl">{description} </p>
      </section>

     
      {/*structure of the project*/}
     <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center justify-center pt-10"
      >
       <h2 className="text-center text-[var(--main-light)] font-mono mb-8 text-4xl font-bold tracking-tight">{t("projectStructure") || "Project Structure"}</h2>
       <Image
         src="/projects/kease/structure.png"
         alt="Käse mit Liebe structure"
         width={1200}
         height={800}
         className=" rounded-4xl "
       />
     </motion.div>
 




      {/* Roles & Access Rights */}
      <section className="mt-16">
        <h2 className="text-center text-[var(--main-light)] font-mono mb-8 text-4xl font-bold tracking-tight">
          {t("rolesTitle") || "Roles & Access Rights"}
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[var(--main-light-transparent)] bg-[var(--bg-main)] shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--main-light-transparent)]">
                <th className="p-4 font-bold text-[var(--main-light)] border-b border-[var(--main-light-transparent)]">{t("role") || "Role"}</th>
                <th className="p-4 font-bold text-[var(--main-light)] border-b border-[var(--main-light-transparent)]">{t("description") || "Description"}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--main-light-transparent)] hover:bg-[var(--main-light-transparent)] transition-colors">
                <td className="p-4 flex items-center gap-3 font-semibold">
                  <FontAwesomeIcon icon={faUserShield} className="text-[var(--main-light)]" />
                  {t("admin") || "Administrator"}
                </td>
                <td className="p-4">{t("adminDesc") || "Manage recipes and products, process orders, change statuses"}</td>
              </tr>
              <tr className="border-b border-[var(--main-light-transparent)] hover:bg-[var(--main-light-transparent)] transition-colors">
                <td className="p-4 flex items-center gap-3 font-semibold">
                  <FontAwesomeIcon icon={faUserCheck} className="text-[var(--main-light)]" />
                  {t("regUser") || "Registered User"}
                </td>
                <td className="p-4">{t("regUserDesc") || "Create own cheese batches, track ripening, view recipes and add to favorites"}</td>
              </tr>
              <tr className="hover:bg-[var(--main-light-transparent)] transition-colors">
                <td className="p-4 flex items-center gap-3 font-semibold">
                  <FontAwesomeIcon icon={faUser} className="text-[var(--main-light)]" />
                  {t("unregUser") || "Unregistered User"}
                </td>
                <td className="p-4">{t("unregUserDesc") || "View recipes & general information, buy products"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Core Functions */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="mt-20"
      >
        <h2 className="text-center text-[var(--main-light)] font-mono mb-10 text-4xl font-bold tracking-tight">
          {t("coreFunctions") || "Core Functions"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: faBook, text: t("diary") },
            { icon: faClock, text: t("timeline") },
            { icon: faStore, text: t("shop") },
            { icon: faImage, text: t("personalPages") },
            { icon: faBook, text: t("recipeDb") },
            { icon: faRobot, text: t("aiChatbot") }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="p-6 bg-[var(--main-light-transparent)] rounded-2xl border border-[var(--main-light-transparent)] flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform"
            >
              <FontAwesomeIcon icon={item.icon} className="text-4xl text-[var(--main-light)]" />
              <p className="font-semibold text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

       {/* Project Gallery Carousel */}
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
            {["k1.png", "k2.png", "k3.png", "k4.png", "k5.png", "k6.png"].map((img, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center pb-12" style={{ width: '80%'}}>
                <div className="relative w-[800px] h-[500px]  rounded-2xl  shadow-2xl">
                  <Image
                    src={`/projects/kease/${img}`}
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
      <section className="mt-20">
        <h2 className="text-center text-[var(--main-light)] font-mono mb-10 text-4xl font-bold tracking-tight">
          {t("techStack") || "Technology Stack"}
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[var(--main-light-transparent)] bg-[var(--bg-main)] shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--main-light-transparent)]">
                <th className="p-4 font-bold text-[var(--main-light)] border-b border-[var(--main-light-transparent)]">{t("technologie") || "Technology"}</th>
                <th className="p-4 font-bold text-[var(--main-light)] border-b border-[var(--main-light-transparent)]">{t("purpose") || "Purpose"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Next.js", desc: t("nextjsDesc") },
                { name: "TypeScript", desc: t("typescriptDesc") },
                { name: "PostgreSQL", desc: t("postgresqlDesc") },
                { name: "Prisma", desc: t("prismaDesc") },
                { name: "Tailwind CSS", desc: t("tailwindDesc") },
                { name: "Swiper.js", desc: t("swiperDesc") },
                { name: "Framer Motion", desc: t("framerDesc") },
                { name: "Quill / React-Quill", desc: t("quillDesc") },
                { name: "Cloudinary", desc: t("cloudinaryDesc") },
                { name: "Google Cloud Storage", desc: t("gcsDesc") },
                { name: "Vis-Timeline", desc: t("visDesc") },
                { name: "Python", desc: t("pythonDesc") },
                { name: "FastAPI", desc: t("fastapiDesc") },
                { name: "LlamaIndex", desc: t("llamaindexDesc") },
                { name: "OpenAI", desc: t("openaiDesc") }
              ].map((tech, idx) => (
                <tr key={idx} className="border-b border-[var(--main-light-transparent)] hover:bg-[var(--main-light-transparent)] transition-colors">
                  <td className="p-4 font-bold text-[var(--main-light)]">{tech.name}</td>
                  <td className="p-4">{tech.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    
    </div>
  );
};

export default CheeseWithLoveProject;
