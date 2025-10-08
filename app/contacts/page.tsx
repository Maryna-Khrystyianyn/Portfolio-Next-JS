"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import BtnSci from "../components/btnSci/BtnSci";
import ContactLinks from "./ContactLinks";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between items-center mt-[-20px]">
      <div className="flex md:flex-col justify-center items-center gap-15 sm:gap-5">
        <div className="sm:block hidden">
          <Image src="/frends.png" width={250} height={250} alt="frends" />
        </div>

        <div className="sm:hidden h-[180px] ">
          <Image src="/frends.png" width={160} height={180} alt="frends" />
        </div>

        <BtnSci />
      </div>

      <div className="flex flex-col gap-7">
        <h3> $ {t("contacts")}</h3>
        <p>{t("contactText")}</p>
        <ContactLinks />
      </div>
    </div>
  );
};

export default Contacts;
