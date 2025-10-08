"use client";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Whomi = () => {
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
    <div>
      <h3 className="sm:block hidden" >$ {t("whoami")}</h3>
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h1 className="text-2xl sm:text-4xl font-bold flex w-[300px] sm:w-[400px] items-end">
          <Image src={imgUrl} width={50} height={50} alt="m" className="pb-1" />
          <div>{t("name")}</div>
        </h1>

        <div className="font-mono text-2xl tracking-widest text-[var(--muted)] py-1">
          {t("webdev")}
        </div>
      </div>
    </div>
  );
};

export default Whomi;