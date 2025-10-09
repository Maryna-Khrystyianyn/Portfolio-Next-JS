"use client";
import { useTranslation } from "react-i18next";

const DownloadCV = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-10 flex flex-col gap-5">
      <p>{t("aboutPhilosophy1")}</p>
      <a
        className="hover:border-green-700 border rounded-md bg-[var(--main-light-transparent)] border-[var(--main-light-transparent)] w-40 p-2 flex justify-center"
        href="/CV-Khrystyianyn.pdf"
        download
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
