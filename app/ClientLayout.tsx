"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Header from "./components/header/Header";
import Whomi from "./components/whoami/Whomi";
import "./lib/i18n";
import Skills from "./components/skills/Skills";
import Navigation from "./components/navigation/Navigation";
import { usePathname } from "next/navigation";
import HeaderMobile from "./components/header/HeaderMobile";
import NavigationMobile from "./components/navigation/NavigationMobile";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null); // Ref for desktop scrollable container

  const isHome = pathname === "/";
  const isFullWidthPage = pathname === "/about" || pathname.startsWith("/projects");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset scroll on pathname change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0); // For mobile layout
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  const bgImgUrl =
    resolvedTheme === "dark"
      ? "url('/bg-img.png')"
      : "url('/bg-img-light2.png')";

  return (
    <div>
      <main
        style={{ backgroundImage: bgImgUrl }}
        className={`relative sm:flex hidden items-center  justify-center pt-5 md:pt-15 h-screen  bg-repeat-x bg-top bg-[var(--bg)] text-[var(--text)] `}
      >
        <Navigation />
        <div 
          ref={scrollRef}
          className={`max-h-[80%] overflow-auto flex flex-col gap-5 md:gap-15 p-6 pb-15 bg-[var(--bg-main)] border border-sky-950 transition-all duration-300 ${
            isFullWidthPage 
              ? "w-full max-w-none m-0 rounded-none h-full !max-h-full" 
              : "w-[90%] max-w-[900px] m-3 rounded-md"
          }`}
        >
          <Header />

          {children}
        </div>
      </main>

      {/* mobil version */}
      <main className="sm:hidden bg-[var(--bg-main)] min-h-screen">
        <HeaderMobile />
       
        <div className={isHome?"pt-12":""}>

          <NavigationMobile />
        </div>
        

        <div className="px-5 mt-10">{children}</div>
      </main>
    </div>
  );
}
