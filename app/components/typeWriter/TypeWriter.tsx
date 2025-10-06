"use client";

import { useEffect, useRef, useState } from "react";

type TypeWriterProps = {
  texts: string[];
};

const TypeWriter = ({ texts }: TypeWriterProps) => {
  const speed = 100;
  const pause = 2000;

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pause);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, textIndex, texts]);

  return (
    <span className="font-mono text-xl font-bold text-[var(--main-light)]">
      {displayedText}
    </span>
  );
};

export default TypeWriter