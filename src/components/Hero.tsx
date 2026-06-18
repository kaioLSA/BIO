"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ArrowRight, MessageCircle } from "lucide-react";
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
        ease: "back.out(1.5)"
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
            Sofisticação, Modernidade e Inovação.
          </p>

          <p
            ref={descRef}
            className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            Transformamos sua presença digital com estratégias de alto valor percebido.
            Design de excelência e resultados que geram credibilidade e conversão.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://startsette.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "glass-card w-full sm:w-auto flex items-center justify-center gap-2",
              "px-8 py-4 rounded-2xl text-white font-semibold text-lg",
              "transition-all duration-75 hover:scale-105 hover:bg-white/10"
            )}
          >
            Conheça nosso site
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-full sm:w-auto flex items-center justify-center gap-2",
              "px-8 py-4 rounded-2xl text-white font-semibold text-lg",
              "bg-[#00A3FF] transition-all duration-75",
              "hover:scale-105 hover:bg-[#008CE0] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)]"
            )}
          >
            Fale no WhatsApp
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
