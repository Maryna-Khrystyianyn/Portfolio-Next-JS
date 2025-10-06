"use client";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import TypeWriter from "../components/typeWriter/TypeWriter";
import MyFoto from "../components/myFoto/MyFoto";
import BtnSci from "../components/btnSci/BtnSci";

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
    <div className="flex flex-col-reverse items-center md:flex-row lg:gap-30">
      {/* Title und typing text */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-4xl font-bold flex w-[300px] sm:w-[400px] items-end">
          <Image src={imgUrl} width={50} height={50} alt="m" className="pb-1" />
          <div>{t("name")}</div>
        </h1>

        <div className="h-10 text-xl">
          I am{" "}
          <TypeWriter
            texts={[
              "a Web Developer",
              "a team player",
              "a visionary thinker",
              "a dreamer with a plan",
              "a beliver in growth",
            ]}
          />
        </div>
        <div className="hidden md:block">
            <BtnSci/>
        </div>
        
      </div>
      {/* foto */}
      <div className="flex justify-center items-center gap-10">
        <MyFoto/>
        <div className="md:hidden"> <BtnSci/></div>
      </div>



    </div>
  );
};

export default About;
