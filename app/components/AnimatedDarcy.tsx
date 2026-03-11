"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedName() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const text = "Darcy Rose";

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll(".letter");

    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          y: -20,
          duration: 0.25,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        });
      });
    });
  }, []);

  return (
    <h1
      ref={textRef}
      className="groovyday text-white text-[clamp(16px,8vw,8vw)] text-shadow-md flex gap-[0.02em]"
    >
      {text.split("").map((char, i) => (
        <span key={i} className="letter inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}