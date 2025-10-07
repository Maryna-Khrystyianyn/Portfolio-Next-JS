"use client";
import { MySkills } from "./skills";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react"


const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-5">
      <h3>$ {t("skills")}</h3>

      <div className="flex flex-wrap gap-3 my-2">
        {MySkills.map((skill, index) => {
          return (
            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:0.5, delay:index*0.4}}
              key={skill}
              className="px-5 py-2 rounded-md bg-[var(--main-light-transparent)] border border-[var(--main-light-transparent)]"
            >
              {skill}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
