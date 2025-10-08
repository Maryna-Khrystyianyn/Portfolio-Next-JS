"use client";

import Whomi from "./components/whoami/Whomi";
import "./lib/i18n";
import Skills from "./components/skills/Skills";
import { projectList } from "./projects/projectsList";
import SkillsMobile from "./components/skills/SkilsMobile";

export default function Home() {
  return (
    <div>
      <div className="sm:block hidden">
        <Whomi /> <Skills />
      </div>
<div className="sm:hidden ">
<SkillsMobile/>
</div>

    </div>
  );
}
