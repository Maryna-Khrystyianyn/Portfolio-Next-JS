export type Project = {
  id: number;
  name: { en: string; de: string; uk: string };
  img: string;
  description: { en: string; de: string; uk: string };
  url: string;
};
/* new projects are first */
/* languages en-de-uk */
export const projectList: Project[] = [
    {
        id: 5,
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
        url: "https://maryna-khrystyianyn.github.io/online-course/",
      },
  {
    id: 4,
    name: {
      en: "Online School Smart",
      de: "Online-Schule Smart",
      uk: "Онлайн-школа  Smart",
    },
    img: "smart.png",
    description: {
      en: "This training project was developed in React to enhance skills in layout design, working with SASS, as well as implementing animations and various effects. The application is currently available only in fullscreen mode.",
      de: "Dieses Übungsprojekt wurde in React umgesetzt, um Fähigkeiten im Layouten, der Arbeit mit SASS sowie bei Animationen und verschiedenen Effekten zu vertiefen. Die Anwendung ist derzeit nur in der Vollbildansicht verfügbar.",
      uk: "Це - тренувальний проект створено на React для вдосконалення навичок верстки, роботи з SASS, а також реалізації анімацій та різноманітних ефектів. Наразі доступна лише повноекранна версія.",
    },
    url: "https://maryna-khrystyianyn.github.io/online-course/",
  },
  {
    id: 3,
    name: {
      en: "Quiz - one day",
      de: "Quiz – eines Tages",
      uk: "Вікторина - один день",
    },
    img: "quiz.png",
    description: {
      en: "This project was built with Next.js in one day using core React hooks — useState, useReducer, useContext, and useMemo. It’s an example of what I can create in a single day, and I really enjoy it. I believe that in a year, I’ll be able to do even more!",
      de: "Dieses Projekt wurde mit Next.js an einem Tag erstellt und verwendet die wichtigsten React-Hooks — useState, useReducer, useContext und useMemo. Das ist ein Beispiel dafür, was ich an einem Tag schaffen kann, und es macht mir Spaß. Ich glaube, dass ich in einem Jahr noch viel mehr schaffen werde!",
      uk: "Проєкт створений на Next.js за один день із використанням основних React-хуків — useState, useReducer, useContext і useMemo. Це приклад того, що я можу зробити за один день, і мені це подобається.Вірю, що через рік зможу зробити ще більше!",
    },
    url: "https://quiz-s9q4.vercel.app/",
  },
  {
    id: 2,
    name: {
      en: "Online Shop – StayTime",
      de: "Online Shop – StayTime",
      uk: "Інтернет-магазин – StayTime",
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
    id: 1,
    name: {
      en: "My ToDo List",
      de: "Meine ToDo Liste",
      uk: "Мій список завдань",
    },
    img: "firstToDo.png",
    description: {
      en: "This project was one of my first experiences using vanilla JavaScript and working with Local Storage. It gave me the feeling of how exciting it is to build websites and code. The website itself is very simple, but at the time when I was just starting out, I really enjoyed this small project.",
      de: "Dieses Projekt war eines meiner ersten Erfahrungen mit Vanilla JavaScript und der Arbeit mit Local Storage. Es hat mir gezeigt, wie spannend es ist, Websites zu erstellen und zu programmieren. Die Website selbst ist sehr einfach, aber zu der Zeit, als ich gerade anfing, hat mir dieses kleine Projekt besonders gefallen. ",
      uk: "Цей проєкт був одним із моїх перших досвідів використання ванільного JavaScript та роботи з Local Storage. Він допоміг мені відчути, що створювати сайти та програмувати – це захопливо. Сам сайт дуже простий, але на той час, коли я тільки починала, мені цей невеликий проєкт дуже сподобався. ",
    },
    url: "https://maryna-khrystyianyn.github.io/Todo-List/",
  },
];
