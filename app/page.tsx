import Image from "next/image";
import ThemeSwitcher from "./components/theme/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-[url('/bg-img.png')] bg-repeat-x bg-top bg-[var(--bg)] text-[var(--text)] ">
      <h1 className="text-4xl font-bold">Hallo. Das ist meine Portfolio.</h1>
      <ThemeSwitcher />
    </main>
  );
}
