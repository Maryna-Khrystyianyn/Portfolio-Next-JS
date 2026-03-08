"use client";
import { useRouter } from "next/navigation";
import { projectList } from "../projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMobileAlt, faCamera, faBell, faWifi, faBook, faCode, faLayerGroup, faTrophy, faCheckCircle, faMoon, faGlobe, faHourglassHalf, faChartBar, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const CheeseMobileDiaryProject = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const project = projectList.find((p) => p.slug === "cheese-mobile-diary");

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

      <div className="flex w-full md:flex-row flex-col justify-around mb-16">
        {/* Logo and Title and project info*/}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
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
                        mit Liebe Tagebuch
                      </span>
                    </p>
                    </div>
          </div>
          
         <div className="text-xl lg:text-2xl max-w-3xl my-10">
           <p className="mb-6">
             {t("mobileAppIntro1")}
             <a 
               href="https://kease-mit-liebe-cheese-with-love.vercel.app" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[var(--main-light)] underline hover:text-[var(--main-light-bright)] transition-colors"
             >
               {t("website")}
             </a>
             {t("mobileAppIntro2")}
           </p>
           <p className="italic text-[var(--muted)] border-l-4 border-[var(--main-light-transparent)] pl-6 py-2">
             {t("mobileAppPersonal")}
           </p>
        </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="flex items-center justify-center md:my-0 my-10 relative">
          <div className="absolute -inset-4 bg-[var(--main-light-transparent)] blur-3xl rounded-full opacity-30"></div>
          <Image
            src="/projects/mobileKease/kasemitliebe.jpg"
            alt="Käse mit Liebe Tagebuch"
            width={300}
            height={600}
            className="w-64 md:w-80 rounded-[3rem] shadow-2xl border-8 border-gray-800 relative z-10"
          />
        </div>
      </div>

      {/* Description */}
      <section className="my-16 bg-[var(--main-light-transparent)] p-10 rounded-3xl border border-[var(--main-light-transparent)] shadow-xl">  
        <p className="text-xl lg:text-2xl leading-relaxed text-center italic">
          {description}
        </p>
      </section>

      {/* Core Functions */}
      <section className="mt-20">
        <h2 className="text-center text-[var(--main-light)] font-mono mb-12 text-4xl font-bold tracking-tight">
          {t("coreFunctions") || "Core Functions"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: faBook, text: t("mobileDiary") || "On-the-go diary" },
            { icon: faCamera, text: t("mobilePhotos") || "Instant photos" },
            { icon: faMoon, text: t("themeSupport") || "Theme support" },
            { icon: faHourglassHalf, text: t("ripeningTracker") || "Ripening Tracker" },
            { icon: faChartBar, text: t("cheesemakerStats") || "Cheesemaker Stats" },
            { icon: faBookOpen, text: t("recipeReference") || "Recipe Reference" }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-[var(--bg-main)] rounded-3xl border border-[var(--main-light-transparent)] flex flex-col items-center text-center gap-6 hover:translate-y-[-10px] transition-all shadow-lg">
              <div className="w-16 h-16 bg-[var(--main-light-transparent)] rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon icon={item.icon} className="text-3xl text-[var(--main-light)]" />
              </div>
              <p className="font-bold text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-24">
        <h2 className="text-center text-[var(--main-light)] font-mono mb-12 text-4xl font-bold tracking-tight">
          {t("techStack") || "Technology Stack"}
        </h2>
        <div className="overflow-hidden rounded-3xl border border-[var(--main-light-transparent)] bg-[var(--bg-main)] shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--main-light-transparent)]">
                <th className="p-6 font-bold text-[var(--main-light)] text-xl">{t("technologie") || "Technology"}</th>
                <th className="p-6 font-bold text-[var(--main-light)] text-xl">{t("purpose") || "Purpose"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "React Native", desc: t("reactNativeDesc") || "Mobile Application Framework" },
                { name: "Expo", desc: t("expoDesc") || "Platform for Universal React Apps" },
                { name: "TypeScript", desc: t("typescriptDesc") || "Type safety" },
                { name: "React Navigation", desc: i18n.language === "uk" ? "Навігація в додатку" : "App Navigation" },
                { name: "Axios", desc: i18n.language === "uk" ? "Запити до API" : "API requests" },
                { name: "NativeWind", desc: i18n.language === "uk" ? "Стилізація (Tailwind для Mobile)" : "Styling (Tailwind for Mobile)" }
              ].map((tech, idx) => (
                <tr key={idx} className="border-b border-[var(--main-light-transparent)]">
                  <td className="p-6 font-bold text-[var(--main-light)] flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-sm opacity-50" />
                    {tech.name}
                  </td>
                  <td className="p-6 text-lg">{tech.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

 
    </div>
  );
};

export default CheeseMobileDiaryProject;
