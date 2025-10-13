"use client";
import { MySkills } from "./skills";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react"


const SkillsMobile = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-5">
      <h3>$ {t("skills")}</h3>

      <div className="flex flex-wrap gap-3 my-1">
        {MySkills.map((skill, index) => {
          return (
            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:0.5, delay:index*0.4}}
              key={skill.title}
              className="px-3 text-sm py-1 rounded-md bg-[var(--main-light-transparent)] border border-[var(--main-light-transparent)]"
            >
              <div>
                <span>{skill.img}</span> <span>{skill.title}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsMobile;