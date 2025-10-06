"use client"
import ThemeSwitcher from "./components/theme/ThemeSwitcher";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";

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
    <main  style={{ backgroundImage: bgImgUrl }} className={`flex items-center justify-center h-screen  bg-repeat-x bg-top bg-[var(--bg)] text-[var(--text)] `}>
     <Header/>
    </main>
  );
}
