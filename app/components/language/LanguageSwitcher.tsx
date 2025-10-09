"use client";

import { useTranslation } from "react-i18next";
import "../../lib/i18n";
import Image from "next/image";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className=" flex gap-3">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className="flex justify-center items-center cursor-pointer transition-transform duration-400 hover:scale-125"
      >
        <Image src={"/locales/en.png"} width={25} height={25} alt="en" />
      </button>
      <button
        onClick={() => i18n.changeLanguage("de")}
        className="flex justify-center items-center cursor-pointer transition-transform duration-400 hover:scale-125"
      >
        <Image src={"/locales/de.png"} width={25} height={25} alt="en" />
      </button>
      <button
        onClick={() => i18n.changeLanguage("uk")}
        className="flex justify-center items-center cursor-pointer transition-transform duration-400 hover:scale-125"
      >
        <Image src={"/locales/uk.png"} width={25} height={25} alt="en" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
