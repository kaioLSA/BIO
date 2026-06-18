"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./MarketingReveal.css";

gsap.registerPlugin(ScrollTrigger);

interface MarketingRevealProps {
  children: string;
}

export default function MarketingReveal({ children }: MarketingRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const chars = useMemo(
    () =>
      children.split("").map((char, index) => (
        <span className="char" key={index}>
          {char === " " ? " " : char}
        </span>
      )),
    [children]
  );

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    const ctx = gsap.context(() => {
      const charEls = heading.querySelectorAll(".char");

      // Pin the section centered while the chars float up into place (the
      // ScrollFloat look), hold briefly, then dissolve as it scrolls away.
      // Same on every screen size.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=85%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        charEls,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          ease: "back.inOut(2)",
          stagger: 0.03,
          duration: 1,
        }
      ).to({}, { duration: 0.3 });

      gsap.to(heading, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom 75%",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [children]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden px-6"
    >
      <h2 ref={headingRef} className="marketing-reveal">
        <span className="marketing-reveal-text">{chars}</span>
      </h2>
    </section>
  );
}
