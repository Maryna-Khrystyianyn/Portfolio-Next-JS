"use client";
import { useTheme } from "next-themes";
import styles from "./theme.module.css";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

 /*  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; */

  const isDark = theme === "dark";

  return (
    <div className={styles.switch}>
      <input
        id="switch"
        className={styles.switch__input}
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
      />
      <label className={styles.switch__label} htmlFor="switch"></label>
    </div>
  );
}
