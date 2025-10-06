"use client";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import "../../i18n";
import TypeWriter from "../typeWriter/TypeWriter";
import Image from "next/image";

const Whomi = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const imgUrl = theme === "dark" ? "/m.png" : "/m-light.png";


  return (
    <div>
      <h3>$ {t("whoami")}</h3>
      <div>
        <h1 className="text-2xl font-bold flex w-[300px]  items-end">
        <Image src={imgUrl} width={40} height={40} alt="m" className="pb-1"/>
        <div className="">aryna Khrystyianyn</div>
        </h1>
        
          <div className="h-10 text-xl">
            I am <TypeWriter text="a Web Developer" />
          </div>
      </div>
    </div>
  );
};

export default Whomi;
