"use client";


import Whomi from "./components/whoami/Whomi";
import "./lib/i18n";
import Skills from "./components/skills/Skills";


export default function Home() {
  return (
    <div>
      <Whomi />
      <Skills />
    </div>
  );
}
