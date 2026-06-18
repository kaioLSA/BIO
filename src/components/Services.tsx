"use client";

import { useEffect, useRef } from "react";
import { BarChart, Megaphone, MonitorSmartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <BarChart className="w-8 h-8 text-[var(--color-brand-cyan)]" />,
    title: "Tráfego Pago",
    description: "Maximizamos seu ROI com campanhas de alta performance e anúncios altamente segmentados.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-[var(--color-brand-blue)]" />,
    title: "Social Media",
    description: "Gestão estratégica das suas redes sociais para construir uma comunidade engajada e autoridade de marca.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-[#00A3FF]" />,
    title: "Web Design Premium",
    description: "Criamos sites e landing pages sofisticadas, com foco em conversão e experiência do usuário impecável.",
  }
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    if (!section || !heading || !cards) return;

    // Scope everything to this section with gsap.context so the cleanup only
    // reverts THIS component's animations. (It used to call
    // ScrollTrigger.getAll().forEach(kill) which nuked the Hero/Marketing pins
    // too — under React StrictMode that left those animations dead.)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const cardEls = cards.querySelectorAll(".service-card");
      gsap.fromTo(
        cardEls,
        { autoAlpha: 0, y: 60, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossas Especialidades</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Soluções completas para posicionar sua marca no mais alto nível do mercado digital.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,163,255,0.2)] group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:bg-[rgba(0,163,255,0.1)] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
