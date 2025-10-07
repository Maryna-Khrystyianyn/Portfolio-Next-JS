"use client";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import TypeWriter from "../components/typeWriter/TypeWriter";
import MyFoto from "../components/myFoto/MyFoto";
import BtnSci from "../components/btnSci/BtnSci";
import CarouselAbout from "./CarouselAbout";

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
    <div className="flex flex-col gap-3">
      
      <div className="flex flex-col-reverse items-center md:flex-row   ">
        {/* Title und typing text und social media Btn*/}
        <div className="flex flex-col gap-2 w-full md:w-[400px] lg:w-[500px]">
          {/* title */}
          <h1 className="text-2xl sm:text-4xl font-bold flex w-[300px] sm:w-[400px] items-end">
            <Image
              src={imgUrl}
              width={50}
              height={50}
              alt="m"
              className="pb-1"
            />
            <div>{t("name")}</div>
          </h1>
          {/* taiping */}
          <div className="h-10 text-xl ">
            {t("iam")}
            <TypeWriter
              texts={[
                `${t("typeText1")}`,
                `${t("typeText2")}`,
                `${t("typeText3")}`,
                `${t("typeText4")}`,
                `${t("typeText5")}`,
              ]}
            />
          </div>
          {/* social media Btn */}
          <div className="hidden md:block mt-10">
            <BtnSci />
          </div>
        </div>
        {/* foto */}
        <div className="flex justify-center items-center gap-10">
          <MyFoto />
          <div className="md:hidden">
            <BtnSci />
          </div>
        </div>
      </div>
      {/* main text */}
      <h2 className="mt-10 text-xl font-bold">{t("aboutTitel")} </h2>
      <p>{t("aboutText")}</p>
      <h3>$  {t("aboutPhilosophyTitle")}</h3>
      <p>{t("aboutPhilosophy1")}</p>
      <a className="hover:border-green-700 border rounded-md bg-[var(--main-light-transparent)] border-[var(--main-light-transparent)] w-40 p-2 flex justify-center" href="/CV-Khrystyianyn.pdf" download>Download CV</a>
      <p>{t("aboutPhilosophy2")}</p>
      <p>{t("aboutPhilosophy3")}</p>
      <CarouselAbout/>
      <p>{t("aboutPhilosophy4")}</p>
      <p>{t("aboutPhilosophy5")}</p>
      <p>{t("aboutPhilosophy6")}</p>
      <p className="text-center font-bold">{t("aboutPhilosophy7")}</p>


    </div>
  );
};

export default About;
