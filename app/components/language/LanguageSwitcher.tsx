"use client";

import { useTranslation } from "react-i18next";
import "../../i18n"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className=" flex gap-3">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className="flex justify-center items-center bg-[#ed453c] h-6 w-6  rounded-full text-[12px] text-white"
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("de")}
        className="flex justify-center items-center bg-[#eeb810] h-6 w-6  rounded-full text-[12px] text-white"
      >
        DE
      </button>
      <button
        onClick={() => i18n.changeLanguage("uk")}
        className="flex justify-center items-center bg-[#1fc25f] h-6 w-6  rounded-full text-[12px] text-white"
      >
        UA
      </button>
    </div>
  );
};

export default LanguageSwitcher;
