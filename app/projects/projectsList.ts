export type Project = {
  id: number;
  slug: string;
  name: { en: string; de: string; uk: string };
  img: string;
  description: { en: string; de: string; uk: string };
  url: string;
};
/* new projects are first */
/* languages en-de-uk */
export const projectList: Project[] = [
  {
    id: 13,
    slug: "e-invoice-agent",
    name: {
      en: "AI E-invoice Agent",
      de: "KI E-Rechnungs-Agent",
      uk: "AI E-invoice Агент",
    },
    img: "agent.png", 
    description: {
      en: "An advanced, AI-driven invoice processing orchestrator developed during an internship at fintom8. Built with Google GECX and MCP servers, this 'Root Agent' manages complex sub-agent workflows for validating, converting, and explaining e-invoices according to EN 16931 standards. This project participated in the Google AI Student Hackathon — Warsaw on March 3, 2026.",
      de: "Ein fortschrittlicher, KI-gesteuerter Rechnungsverarbeitungs-Orchestrator, entwickelt während eines Praktikums bei fintom8. Erstellt mit Google GECX und MCP-Servern, verwaltet dieser 'Root Agent' komplexe Subagent-Workflows zur Validierung, Konvertierung und Erläuterung von E-Rechnungen gemäß EN 16931-Standards. Dieses Projekt nahm am Google AI Student Hackathon — Warschau am 3. März 2026 teil.",
      uk: "Розширений оркестратор обробки рахунків-фактур на базі штучного інтелекту, розроблений під час стажування у fintom8. Побудований на основі серверів Google GECX та MCP, цей «кореневий агент» керує складними робочими процесами субагентів для перевірки, конвертації та пояснення електронних рахунків-фактур відповідно до стандартів EN 16931. Проєкт брав участь у Google AI Student Hackathon — Warsaw 3 березня 2026 року.",
    },
    url: "", 
  },
  {
    id: 12,
    slug: "nail-studio",
    name: {
      en: "Nail Studio",
      de: "Nail Studio",
      uk: "Nail Studio",
    },
    img: "nail.png", 
    description: {
      en: "A professional full-stack website for a nail studio featuring an online booking system and a comprehensive administrative dashboard. Developed in just 3 days using AI-assisted engineering, this project showcases rapid delivery and robust architecture.",
      de: "Eine professionelle Full-Stack-Website für ein Nagelstudio mit Online-Buchungssystem und einem umfassenden Administrations-Dashboard. In nur 3 Tagen mit KI-unterstützter Entwicklung erstellt, demonstriert dieses Projekt schnelle Bereitstellung und eine robuste Architektur.",
      uk: "Професійний Full-stack веб-сайт для манікюрного салону з системою онлайн-бронювання та комплексною адміністративною панеллю. Розроблений всього за 3 дні завдяки ШІ-технологіям, цей проєкт демонструє швидкість реалізації та надійність архітектури.",
    },
    url: "https://nail-studio-v4us.vercel.app",
  },
   {
    id: 2,
    slug: "cheese-with-love",
    name: {
      en: "Cheese with love",
      de: "Käse mit Liebe",
      uk: "Cир з любов'ю",
    },
    img: "kease.png",
    description: {
      en: "Cheese with Love is a digital meeting place for people who love cheese, make it at home, or simply want to give it a try. Here, users will find tried-and-tested recipes, all the necessary ingredients except milk, support during the production process, and a community of like-minded individuals. Personal experiences can be documented, shared, and tracked on a timeline, so you can always see when each cheese is ready.",
      de: "Käse mit Liebe ist ein digitaler Treffpunkt für Menschen, die Käse lieben, ihn zu Hause herstellen oder es einfach ausprobieren möchten. Hier finden Nutzer geprüfte Rezepte, alle notwendigen Zutaten außer Milch, Unterstützung während des Herstellungsprozesses und eine Community aus Gleichgesinnten. Eigene Erfahrungen können dokumentiert, geteilt und über eine Zeitleiste verfolgt werden, sodass man jederzeit sieht, welcher Käse wann reif ist.",
      uk: "Сир з любов’ю – це цифрове місце зустрічі для людей, які люблять сир, готують його вдома або просто хочуть його спробувати. Тут користувачі знайдуть перевірені рецепти, всі необхідні інгредієнти, крім молока, підтримку під час виробничого процесу та спільноту однодумців. Особистий досвід можна документувати, ділитися ним та відстежувати у часовій шкалі, щоб ви завжди могли бачити, коли кожен сир готовий.",
    },
    url: "https://kease-mit-liebe-cheese-with-love.vercel.app",
  },
  {
    id: 11,
    slug: "cheese-mobile-diary",
    name: {
      en: "Cheese with love Diary",
      de: "Käse mit Liebe Tagebuch",
      uk: "Сир з любов’ю Щоденник",
    },
    img: "mobileKease.png",
    description: {
      en: "Käse mit Liebe Diary is a mobile application built with React Native specifically for users of the Käse mit Liebe website. The app allows cheesemakers to maintain their diary directly from their mobile phones, creating and editing cheese batches, uploading photos, and tracking the ripening schedule on the go.",
      de: "Käse mit Liebe Tagebuch ist eine mit React Native entwickelte mobile App, die speziell für die Nutzer der Website Käse mit Liebe konzipiert wurde. Die App ermöglicht es Käsern, ihr Tagebuch direkt über das Smartphone zu führen: Käsepartien erstellen und bearbeiten, Fotos hochladen und den Reifeplan von unterwegs aus verfolgen.",
      uk: "Сир з любов’ю Щоденник – це мобільний додаток, створений на React Native спеціально для користувачів сайту Käse mit Liebe. Додаток дає змогу вести щоденник сировара прямо з мобільного телефону: створювати та редагувати партії сиру, завантажувати фото та відстежувати графік дозрівання сирів у будь-якому місці.",
    },
    url: "",
  },
 
  {
    id: 10,
    slug: "stay-time",
    name: {
      en: "Online Shop – StayTime",
      de: "Online Shop – StayTime",
      uk: "Mагазин – StayTime",
    },
    img: "minecraft.png",
    description: {
      en: "This is an online store for selling various in-game items in Minecraft. The project was inspired by my son, who is passionate about Minecraft. The store was built using vanilla JavaScript, TypeScript, and SASS, with DOM manipulation and Local Storage used to manage the shopping cart.",
      de: "Dies ist ein Online-Shop zum Verkauf verschiedener Spielgegenstände in Minecraft. Die Idee für das Projekt entstand durch meinen Sohn, der Minecraft begeistert spielt. Der Shop wurde mit Vanilla JavaScript, TypeScript und SASS umgesetzt. Dabei wurden DOM-Zugriffe und Local Storage zur Speicherung des Warenkorbs verwendet.",
      uk: "Це інтернет-магазин для продажу різних ігрових предметів у Minecraft. Натхненням для проєкту став мій син, який захоплюється Minecraft. Магазин реалізовано на ванільному JavaScript з використанням TypeScript і SASS. Було застосовано доступ до DOM та Local Storage для збереження кошика.",
    },
    url: "https://maryna-khrystyianyn.github.io/StayTime---internet-shop/index.html",
  },


  

  {
    id: 5,
    slug: "todo-react",
    name: {
      en: "ToDo - React",
      de: "ToDo - React",
      uk: "Cписок завдань - React",
    },
    img: "todoReact.png",
    description: {
      en: "To-Do List built with React using useContext and useReducer. The project shows my progress in code structure and state management over four months.",
      de: "To-Do-List-App mit React, useContext und useReducer. Das Projekt zeigt meinen Fortschritt in Code-Struktur und State-Management in vier Monaten.",
      uk: "To-Do List на React з useContext та useReducer. Проєкт демонструє мій прогрес у структурі коду та роботі зі станом за чотири місяці.",
    },
    url: "https://todo-liste-gamma.vercel.app/",
  }
];
