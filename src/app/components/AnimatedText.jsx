"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function AnimatedText({ text }) {
  const letters = useRef([]);

  const enter = () => {
    gsap.to(letters.current, {
      yPercent: -100,
      stagger: 0.03,
      duration: 0.65,
      ease: "power2.out",
    });
  };

  const leave = () => {
    gsap.to(letters.current, {
      yPercent: 0,
      stagger: 0.03,
      duration: 0.65,
      ease: "power2.out",
    });
  };

  return (
    <span
      className="flex overflow-hidden cursor-pointer"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative h-5 overflow-hidden"
        >
          <span
            ref={(el) => (letters.current[i] = el)}
            className="block"
          >
            <span className="block">
              {char === " " ? "\u00A0" : char}
            </span>

            <span className="block">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}