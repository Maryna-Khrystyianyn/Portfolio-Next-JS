"use client";
import { MySkills } from "./skills";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import "../../i18n";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-5">
      <h3>$ {t("skills")}</h3>

      <div className="flex flex-wrap gap-3 my-2">
        {MySkills.map((skill) => {
          return (
            <div
              key={skill}
              className="px-5 py-2 rounded-md bg-[var(--main-light-transparent)] border border-[var(--main-light-transparent)]"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
