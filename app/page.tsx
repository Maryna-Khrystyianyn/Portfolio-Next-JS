"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Whomi from "./components/whoami/Whomi";
import "./lib/i18n";
import Skills from "./components/skills/Skills";
import Navigation from "./components/navigation/Navigation";

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
      className={`relative flex  items-center  justify-center pt-5 md:pt-15 h-screen  bg-repeat-x bg-top bg-[var(--bg)] text-[var(--text)] `}
    >
      <Navigation />
      <div className="flex flex-col gap-5 md:gap-15 p-6 bg-[var(--bg-main)] m-3 rounded-md border border-sky-950 w-[90%] max-w-[900px]">
        <Header />
        <Whomi />
        <Skills />
      </div>
    </main>
  );
}
