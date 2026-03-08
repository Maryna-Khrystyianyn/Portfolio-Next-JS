"use client";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import TypeWriter from "../components/typeWriter/TypeWriter";
import MyFoto from "../components/myFoto/MyFoto";
import BtnSci from "../components/btnSci/BtnSci";
import CarouselAbout from "./CarouselAbout";
import Skills from "../components/skills/Skills";
import GrowthChart from "./GrowthChart";
import BtnSciRow from "../components/btnSci/BtnSciRow";
import BtnSciColumn from "../components/btnSci/BtnSciColumn";
import Whomi from "../components/whoami/Whomi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme(); // <== wichtig
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // true nach dem ersten Client-Render
  }, []);

  if (!mounted) {
    // noch kein echtes Theme bekannt, also nichts anzeigen
    return null;
  }

  const imgUrl = resolvedTheme === "dark" ? "/m.png" : "/m-light.png";

  return (
    <div className="flex flex-col gap-3 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-5">
        {/* Photo & Social section - First on mobile */}
        <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-center lg:justify-start order-1 lg:order-2 gap-10">
          <MyFoto />
          <div className="sm:block hidden">
            <BtnSciColumn />
          </div>
          <div className="sm:hidden">
            <BtnSciRow />
          </div>
        </div>

        {/* Content section */}
        <div className="px md:px-10 lg:px-20 order-2 lg:order-1">
         
          <div className="">
            <h1 className="text-3xl mb-6 2xl:text-6xl xl:text-5xl md:text-4xl font-bold flex flex-wrap items-end gap-2">
              <Image
                src={imgUrl}
                width={70}
                height={70}
                alt="m"
                className="pb-1 w-12 sm:w-20"
              />
              <span>{t("name")}</span>
            </h1>
          </div>
          
         
          <div className="font-mono text-xl 2xl:text-4xl xl:text-3xl lg:text-2xl mb-10 tracking-widest text-[var(--muted)] py-1">
            {t("webdev")}
          </div>
        </div>
        <div className="px-5 md:px-10 lg:px-20 col-span-full order-3 ">
          <Skills />
        </div>
      </div>
      {/* main text section */}
      <section className="mt-12 p-8 bg-[var(--main-light-transparent)] rounded-2xl border border-[var(--main-light-transparent)] backdrop-blur-sm shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <h2 className="font-mono text-2xl sm:text-4xl font-bold mb-4 tracking-tight">
              {t("aboutTitel")} 
            </h2>
            <div className="text-lg sm:text-2xl leading-relaxed text-[var(--text)] opacity-90">
              <p className="mb-4">{t("aboutText")}</p>
              <p>{t("aboutPhilosophy1")}</p>
            </div>
          </div>
          
          <div className="w-full md:w-auto self-end md:self-center">
            <a
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[var(--main-light)] text-white font-semibold rounded-xl hover:bg-[#1a7a3d] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 w-full md:w-56"
              href="/CV-Khrystyianyn.pdf"
              download
            >
              <FontAwesomeIcon icon={faFileArrowDown} className="text-xl group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>

      <GrowthChart />
<div className="px-5 sm:px-20">

   <h3 className="pt-7 text-2xl">$ {t("aboutPhilosophyTitle")}</h3>
      <p className="sm:text-2xl">{t("aboutPhilosophy2")}</p>
      <p className="sm:text-2xl">{t("aboutPhilosophy3")}</p>
      <CarouselAbout />
      <p className="sm:text-2xl">{t("aboutPhilosophy4")}</p>
      <p className="sm:text-2xl">{t("aboutPhilosophy5")}</p>
      <p className="sm:text-2xl">{t("aboutPhilosophy6")}</p>
      <p className="text-center font-bold sm:text-4xl pt-10">{t("aboutPhilosophy7")}</p>
</div>
     
    </div>
  );
};

export default About;
