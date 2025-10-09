"use client";

import Whomi from "./components/whoami/Whomi";
import "./lib/i18n";
import Skills from "./components/skills/Skills";
import { projectList } from "./projects/projectsList";
import SkillsMobile from "./components/skills/SkilsMobile";
import ProjectHomeMobile from "./components/projectView/ProjectHomeMobile";
import TypeWriter from "./components/typeWriter/TypeWriter";
import { useTranslation } from "react-i18next";
import DownloadCV from "./components/downloadCV/DownloadCV";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="sm:block hidden">
        <Whomi />
        <div className="h-10 text-xl sm:mt-0 mt-15 sm:text-left text-center">
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

        <DownloadCV />
      </div>
      <div className="sm:hidden ">
        <div className="h-10 text-xl sm:mt-0 mt-7 sm:text-left text-center">
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
        {/*  <SkillsMobile /> */}
        <DownloadCV />

        <ProjectHomeMobile />
      </div>
    </div>
  );
}
