"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";

export default function SectionReveal({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
  const element = sectionRef.current;

  gsap.fromTo(
  element,
  {
    opacity: 0,
    y: 70,
    scale: 0.96,
    filter: "blur(8px)",
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "bottom 25%",
      toggleActions: "play reverse play reverse",
    },
  }
);
}, []);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
}