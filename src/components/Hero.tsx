"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ringsExitRef = useRef<HTMLDivElement>(null);
  const ringsWrapRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const subtitleSplit = new SplitType(subtitleRef.current!, { types: "lines,words" });
    const descSplit = new SplitType(descRef.current!, { types: "lines" });

    gsap.set(ringsWrapRef.current, { autoAlpha: 0, scale: 0.85 });
    gsap.set(buttonsRef.current?.children || [], { autoAlpha: 0, y: 30, scale: 0.95 });
    gsap.set([subtitleSplit.words, descSplit.lines], { autoAlpha: 0, y: 30 });

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(ringsWrapRef.current, { autoAlpha: 1, scale: 1, duration: 1.4, ease: "elastic.out(1, 0.7)" })

      .to(subtitleSplit.words, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.04,
      }, "-=0.8")

      .to(descSplit.lines, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.5")

      .to(buttonsRef.current?.children || [], {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
        // clear the inline transform GSAP leaves behind so the CSS hover
        // (lift / shine) can take over once the intro finishes.
        clearProps: "transform",
      }, "-=0.5");

    return () => {
      subtitleSplit.revert();
      descSplit.revert();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] w-full px-6 py-12 overflow-hidden"
    >
      <div
        ref={contentRef}
        className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-2"
      >

        {/* Logo */}
        <div ref={ringsExitRef} className="w-full max-w-[480px] mb-2">
        <div
          ref={ringsWrapRef}
          className="relative flex items-center justify-center w-full py-12 sm:py-16"
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
            alt="Startsette"
            className="relative z-10 h-12 sm:h-16 w-auto drop-shadow-[0_0_40px_rgba(0,163,255,0.95)]"
          />
        </div>
        </div>

        {/* Text Content */}
        <div ref={textsRef} className="space-y-5 mb-10">
          <p
            ref={subtitleRef}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Transformamos cliques em clientes.
          </p>

          <p
            ref={descRef}
            className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            Estratégia e processo que enchem seu funil e fazem seu faturamento crescer mês a mês.
          </p>
        </div>

        {/* Action Button */}
        <div
          ref={buttonsRef}
          className="flex items-center justify-center w-full sm:w-auto"
        >
          <a
            href="https://wa.me/551151945543?text=Ol%C3%A1,%20vim%20do%20Instagram%20e%20quero%20crescer%20com%20a%20Start%20Sette."
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2",
              "px-10 py-4 rounded-2xl text-white font-semibold text-lg",
              "bg-[#00A3FF] transition-all duration-300 ease-out",
              "hover:-translate-y-1 hover:bg-[#008CE0] hover:shadow-[0_12px_40px_rgba(0,163,255,0.6)]"
            )}
          >
            {/* light sweep on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="relative flex items-center gap-2">
              Quero crescer com a Start
              <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
