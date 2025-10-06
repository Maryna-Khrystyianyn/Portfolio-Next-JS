"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Whomi from "./components/whoami/Whomi";
import "./i18n";
import { useTranslation } from "react-i18next";
import Skills from "./components/skills/Skills";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [bgImgUrl, setBgImgUrl] = useState<string>("url('/bg-img.png')");

  useEffect(() => {
    if (theme === "dark") {
      setBgImgUrl("url('/bg-img.png')");
    } else {
      setBgImgUrl("url('/bg-img-light2.png')");
    }
  }, [theme]);

  return (
    <main
      style={{ backgroundImage: bgImgUrl }}
      className={`flex items-center justify-center h-screen  bg-repeat-x bg-top bg-[var(--bg)] text-[var(--text)] `}
    >
      <div className=" p-3 bg-[var(--bg-main)] m-3 rounded-md border border-sky-950 w-[90%] max-w-[900px]">
        <Header />
        <Whomi/>
        <Skills/>
      </div>
    </main>
  );
}
