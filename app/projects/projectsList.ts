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
    id: 3,
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
    id: 2,
    name: {
      en: "Online Shop – StayTime",
      de: "Online Shop – StayTime",
      uk: "Інтернет-магазин – StayTime",
    },
    img: "minecraft.png",
    description: {
      en: "This is an online store for selling various in-game items in Minecraft. The project was inspired by my son, who is passionate about Minecraft. The store was built using vanilla JavaScript, TypeScript, and SASS, with DOM manipulation and Local Storage used to manage the shopping cart. While a real commercial online store wouldn’t typically be built with vanilla JS, this project was an exciting first step in web development.",
      de: "Dies ist ein Online-Shop zum Verkauf verschiedener Spielgegenstände in Minecraft. Die Idee für das Projekt entstand durch meinen Sohn, der Minecraft begeistert spielt. Der Shop wurde mit Vanilla JavaScript, TypeScript und SASS umgesetzt. Dabei wurden DOM-Zugriffe und Local Storage zur Speicherung des Warenkorbs verwendet. Auch wenn ein professioneller Online-Shop normalerweise nicht mit Vanilla JS erstellt wird, war dieses Projekt ein spannender erster Schritt in der Webentwicklung.",
      uk: "Це інтернет-магазин для продажу різних ігрових предметів у Minecraft. Натхненням для проєкту став мій син, який захоплюється Minecraft. Магазин реалізовано на ванільному JavaScript з використанням TypeScript і SASS. Було застосовано доступ до DOM та Local Storage для збереження кошика. Хоча реальний комерційний інтернет-магазин не створюють на ванільному JS, цей проєкт став цікавим кроком у веб-розробці.",
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
      en: "This project was one of my first experiences using vanilla JavaScript and working with Local Storage. It gave me the feeling of how exciting it is to build websites and code. The website itself is very simple, but at the time when I was just starting out, I really enjoyed this small project. Today, it serves mostly as a reference to show where I started and how I have progressed since then.",
      de: "Dieses Projekt war eines meiner ersten Erfahrungen mit Vanilla JavaScript und der Arbeit mit Local Storage. Es hat mir gezeigt, wie spannend es ist, Websites zu erstellen und zu programmieren. Die Website selbst ist sehr einfach, aber zu der Zeit, als ich gerade anfing, hat mir dieses kleine Projekt besonders gefallen. Es dient heute vor allem als Referenz, um zu zeigen, womit ich begonnen habe und wie ich mich seitdem weiterentwickelt habe.",
      uk: "Цей проєкт був одним із моїх перших досвідів використання ванільного JavaScript та роботи з Local Storage. Він допоміг мені відчути, що створювати сайти та програмувати – це захопливо. Сам сайт дуже простий, але на той час, коли я тільки починала, мені цей невеликий проєкт дуже сподобався. Він зберігся швидше як історія, щоб можна було порівняти, з чого я починала, і куди розвиваюсь далі.",
    },
    url: "https://maryna-khrystyianyn.github.io/Todo-List/",
  },
];
