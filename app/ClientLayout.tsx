"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Whomi from "./components/whoami/Whomi";
import "./lib/i18n";
import Skills from "./components/skills/Skills";
import Navigation from "./components/navigation/Navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // true nach dem ersten Client-Render
  }, []);

  if (!mounted) {
    // noch kein echtes Theme bekannt, also nichts anzeigen
    return null;
  }

  const bgImgUrl =
    resolvedTheme === "dark"
      ? "url('/bg-img.png')"
      : "url('/bg-img-light2.png')";

  return (
    <main
      style={{ backgroundImage: bgImgUrl }}
      className={`relative flex  items-center  justify-center pt-5 md:pt-15 h-screen  bg-repeat-x bg-top bg-[var(--bg)] text-[var(--text)] `}
    >
      <Navigation />
      <div className="max-h-[80%] overflow-auto        flex flex-col gap-5 md:gap-15 p-6 pb-15 bg-[var(--bg-main)] m-3 rounded-md border border-sky-950 w-[90%] max-w-[900px]">
        <Header />
        {children}
      </div>
    </main>
  );
}
