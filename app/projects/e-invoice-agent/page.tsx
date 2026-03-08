"use client";
import { useRouter } from "next/navigation";
import { projectList } from "../projectsList";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faRobot, faDiagramNext, faPuzzlePiece, faFileInvoice, faShieldAlt, faCheckCircle, faProjectDiagram, faCodeBranch, faMicrochip } from "@fortawesome/free-solid-svg-icons";

const EInvoiceAgentProject = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const project = projectList.find((p) => p.slug === "e-invoice-agent");

  if (!project) return null;

  const stepsUK = [
    { name: "Конвертація", desc: "ШІ перетворює будь-які дані (JSON, текст) у структурований XML." },
    { name: "Валідація", desc: "Перевірка XML на відповідність стандарту UBL та EN 16931." },
    { name: "Роз'яснення", desc: "Переклад складних технічних полів інвойсу на зрозумілу мову." },
    { name: "Корекція", desc: "Автоматичне виправлення помилок у структурі е-інвойсу." }
  ];

  const stepsDE = [
    { name: "Konvertierung", desc: "KI wandelt beliebige Daten (JSON, Text) in strukturiertes XML um." },
    { name: "Validierung", desc: "Prüfung von XML auf Konformität mit UBL- und EN 16931-Standards." },
    { name: "Erläuterung", desc: "Übersetzung komplexer technischer Rechnungsfelder in verständliche Sprache." },
    { name: "Korrektur", desc: "Automatische Fehlerkorrektur in der E-Rechnungsstruktur." }
  ];

  const stepsEN = [
    { name: "Conversion", desc: "AI transforms any data (JSON, text) into structured XML." },
    { name: "Validation", desc: "Checking XML for compliance with UBL and EN 16931 standards." },
    { name: "Explanation", desc: "Translating complex technical invoice fields into plain language." },
    { name: "Correction", desc: "Automatic error correction in the e-invoice structure." }
  ];

  const currentSteps = i18n.language === "uk" ? stepsUK : i18n.language === "de" ? stepsDE : stepsEN;

  const capabilities = [
    { icon: faDiagramNext, title: t("eInvoiceRootRole") || "Root Agent", desc: i18n.language === "uk" ? "Оркестрація під-агентів" : "Orchestration of sub-agents" },
    { icon: faPuzzlePiece, title: t("eInvoiceMCP") || "MCP Integration", desc: i18n.language === "uk" ? "Зв'язок з інструментами" : "Connection with tools" },
    { icon: faShieldAlt, title: t("eInvoiceCompliance") || "Compliance", desc: i18n.language === "uk" ? "Дотримання стандартів" : "Standard compliance" },
    { icon: faFileInvoice, title: t("eInvoiceWidget") || "Widget", desc: i18n.language === "uk" ? "Інтерфейс користувача" : "User interface" }
  ];

  return (
    <div className="pb-20">
      <button
        onClick={() => router.push("/projects")}
        className="flex items-center gap-2 mb-8 text-[var(--muted)] hover:text-[var(--main-light)] transition-colors"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>{t("backToProjects") || "Back to Projects"}</span>
      </button>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col xl:flex-row gap-12 mb-16 items-center"
      >
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--main-light-transparent)] text-[var(--main-light)] font-bold text-sm mb-6 border border-[var(--main-light-transparent)]">
            <FontAwesomeIcon icon={faRobot} />
            <span>AI Innovation Project</span>
          </div>
          <h1 className="font-black mb-6 leading-tight">
            <p className="text-5xl sm:text-7xl">AI E-invoice <span className="text-[var(--main-light)]">Agent</span></p>
          </h1>
          <p className=" my-10 ml-10 text-xl lg:text-2xl italic text-[var(--muted)] border-l-4 border-[var(--main-light-transparent)] pl-6 py-2">
            {t("eInvoiceDescription")}
          </p>
        </div>
        <div className="flex-1 relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[var(--main-light-transparent)] bg-[var(--bg-main)]">
          <Image
            src={`/projects/${project.img}`}
            alt={project.name["en"]} 
            fill
            className="object-cover object-top"
          />
        </div>
      </motion.div>

     

      {/* AI Architecture Visualization */}
      <section className="mb-24 px-8 py-16 bg-[var(--bg-menu)] rounded-[4rem] border border-[var(--main-light-transparent)] relative shadow-inner overflow-hidden">
        <h2 className="text-center text-3xl font-bold mb-16 flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faProjectDiagram} className="text-[var(--main-light)]" />
            {i18n.language === "uk" ? "Архітектура Агента" : i18n.language === "de" ? "Agenten-Architektur" : "Agent Architecture"}
        </h2>

        <div className="flex flex-col items-center gap-8 relative max-w-4xl mx-auto">
            {/* Root Agent Node */}
            <div className="p-8 bg-[var(--main-light)] text-white rounded-[2rem] shadow-xl w-64 text-center z-10 border-4 border-[var(--bg-main)]">
                <FontAwesomeIcon icon={faMicrochip} className="text-3xl mb-3" />
                <h3 className="font-bold text-white">Root Agent</h3>
                <p className="text-xs opacity-80">(Orchestrator)</p>
            </div>

            {/* Connection Lines (Simplified Visual) */}
            <div className="h-12 w-1 bg-gradient-to-b from-[var(--main-light)] to-transparent" />

            {/* Sub-Agents Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {currentSteps.map((step, idx) => (
                    <div key={idx} className="p-6 bg-[var(--bg-main)] rounded-2xl border border-[var(--main-light-transparent)] text-center hover:shadow-lg transition-all hover:translate-y-[-5px]">
                        <div className="font-bold text-[var(--main-light)] mb-2">{step.name}</div>
                        <p className="text-xs text-[var(--muted)] leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="mt-24"
      >
        <h2 className="text-center text-[var(--main-light)] font-mono mb-12 text-4xl font-bold tracking-tight">{t("coreFunctions") || "Core Functions"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="p-8 bg-[var(--bg-main)] rounded-[2.5rem] border border-[var(--main-light-transparent)] flex flex-col items-center text-center gap-6 hover:translate-y-[-10px] transition-all shadow-lg group"
            >
              <div className="w-16 h-16 bg-[var(--main-light-transparent)] rounded-2xl flex items-center justify-center group-hover:bg-[var(--main-light)] transition-colors">
                <FontAwesomeIcon icon={cap.icon} className="text-2xl text-[var(--main-light)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-xl text-[var(--main-light)]">{cap.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technical Background */}
      <section>
        <h2 className="text-center text-[var(--main-light)] font-mono mb-10 text-4xl font-bold tracking-tight mt-20">
          {t("techStack") || "Technology Stack"}
        </h2>
        <div className="overflow-x-auto rounded-[2.5rem] border border-[var(--main-light-transparent)] bg-[var(--bg-main)] shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--main-light-transparent)]">
                <th className="p-6 font-bold text-[var(--main-light)] border-b border-[var(--main-light-transparent)]">{t("technologie") || "Technology"}</th>
                <th className="p-6 font-bold text-[var(--main-light)] border-b border-[var(--main-light-transparent)]">{t("purpose") || "Purpose"}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Google GECX", desc: i18n.language === "uk" ? "Платформа для створення архітектури ШІ-агентів" : i18n.language === "de" ? "Plattform für die Erstellung von KI-Agenten-Architekturen" : "Platform for AI Agent architecture creation" },
                { name: "MCP Server", desc: i18n.language === "uk" ? "Поєднання ШІ з зовнішніми інструментами та базами даних" : i18n.language === "de" ? "Verbindung von KI mit externen Tools und Datenbanken" : "Connecting AI with external tools and databases" },
                { name: "Prompt Engineering", desc: i18n.language === "uk" ? "Проєктування складних систем логіки та обмежень для ШІ" : i18n.language === "de" ? "Entwurf komplexer Logik- und Einschränkungssysteme für KI" : "Designing complex logic and constraint systems for AI" },
                { name: "EN 16931 / UBL", desc: i18n.language === "uk" ? "Стандартизація електронних інвойсів" : i18n.language === "de" ? "E-Rechnungs-Standardisierung" : "E-invoice standardization" },
                { name: "Next.js", desc: i18n.language === "uk" ? "Розробка віджета та інтеграція в корпоративне середовище" : i18n.language === "de" ? "Widget-Entwicklung und Integration in Unternehmensumgebungen" : "Widget development and enterprise integration" }
              ].map((tech, idx) => (
                <tr key={idx} className="border-b border-[var(--main-light-transparent)] hover:bg-[var(--main-light-transparent)] transition-colors">
                  <td className="p-6 font-bold text-[var(--main-light)] flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-sm opacity-50" />
                    {tech.name}
                  </td>
                  <td className="p-6">{tech.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default EInvoiceAgentProject;
