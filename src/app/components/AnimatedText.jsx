"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function AnimatedText({ text }) {
  const wrappers = useRef([]);
  

  const handleEnter = () => {
    gsap.to(wrappers.current, {
    yPercent: -100,
    stagger:{
      each:0.025,
      from:"start"
    },
    duration: 0.7,
    ease: "power4.out",
    });
  };

  const handleLeave = () => {
    gsap.to(wrappers.current, {
      yPercent: 0,
      stagger:{
        each: 0.025,
        from:"end"
      },
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <span
      className="inline-block cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative h-[1.2em] overflow-hidden inline-block"
        >
          <span
            ref={(el) => (wrappers.current[i] = el)}
            className="relative block"
          >
            <span className="block">
              {char === " " ? "\u00A0" : char}
            </span>

            <span className="absolute left-0 top-full block">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
}