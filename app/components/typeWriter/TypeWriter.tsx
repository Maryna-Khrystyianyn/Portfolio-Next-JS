"use client";

import { useEffect, useRef, useState } from "react";

type TypeWriterProps = {
  text: string;
};

const TypeWriter = ({ text }: TypeWriterProps) => {
 
  const speed = 100;
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (index < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <span  className="font-mono text-xl font-bold text-[var(--main-light)]">
      {displayedText}
    </span>
  );
};

export default TypeWriter;
