"use client";
import { MySkills } from "./skills";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";


const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-5">
      <h3>$ {t("skills")}</h3>

      <div className="flex flex-wrap gap-3 my-2">
        {MySkills.map((skill, index) => {
          return (
            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:0.5, delay:index*0.4}}
              key={skill.title}
              className="px-5 py-2 "
            >
               <div className="flex justify-center gap-1">
                <div className={`w-7 h- flex items-center justify-center rounded-full ${skill.bg}`}>
                  <Image src={skill.img} width={16} height={16} alt={skill.title}  unoptimized/> 
                </div>
                
                <span>{skill.title}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;