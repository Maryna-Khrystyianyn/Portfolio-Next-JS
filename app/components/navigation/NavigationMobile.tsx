import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="flex justify-center py-5">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <div className="w-10 h-[2px] bg-[var(--text)] mb-2"></div>
        <div className="w-10 h-[2px] bg-[var(--text)] mb-2"></div>
        <div className="w-10 h-[2px] bg-[var(--text)]"></div>
      </button>
      <div
        className={`absolute transition-all duration-500 w-full z-30 ${
          isOpen ? "scale-100 translate-x-0" : "scale-0 -translate-x-[300px]"
        }`}
      >
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col w-[90%] mx-auto bg-[var(--muted)] rounded p-5 "
        >
          <button className="w-full text-right text-2xl">
            <FontAwesomeIcon icon={faXmark} />{" "}
          </button>

          <Link href="/" className="p-4 border-b text-center text-3xl">
            {t("home")}
          </Link>

          <Link href="/about" className="p-4 border-b text-center text-3xl">
            {t("about")}
          </Link>

          <Link href="/projects" className="p-4 border-b text-center text-3xl">
            {t("projects")}{" "}
          </Link>

          <Link href="/contacts" className="p-4  text-center text-3xl">
            {t("contacts")}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationMobile;
