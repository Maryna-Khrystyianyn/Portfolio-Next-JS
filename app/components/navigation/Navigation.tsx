import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <div className=" absolute top-5 bg-[#bdbebc] rounded-full py-2 px-5 md:px-10 flex items-center gap-3 md:gap-10 justify-between">
      <Link href="/">
        {" "}
        <Image src="/nav/haus.png" width={40} height={40} alt={"home"} />{" "}
      </Link>
      |
      <Link href="/about">
        <Image
          src="/nav/about.png"
          width={30}
          height={40}
          alt={"about"}
          className="sm:hidden"
        />
        <span className="text-xl text-zinc-800 sm:block hidden">{t("about")} </span>{" "}
      </Link>
      |
      <Link href="/projects">
        <Image
          src="/nav/projects.png"
          width={40}
          height={40}
          alt={"projects"}
          className="sm:hidden"
        />
        <span className="text-xl text-zinc-800 sm:block hidden">{t("projects")} </span>
      </Link>
      |
      <Link href="/contacts">
        <Image
          src="/nav/contacts.png"
          width={40}
          height={40}
          alt={"contacts"}
          className="sm:hidden"
        />
        <span className="text-xl text-zinc-800 sm:block hidden">{t("contacts")} </span>
      </Link>
    </div>
  );
};

export default Navigation;
