"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function BackgroundGraphics() {
  const bgRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle ambient movement for orbs
      gsap.to(orb1Ref.current, {
        x: "10vw",
        y: "5vh",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: "-15vw",
        y: "10vh",
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      gsap.to(orb3Ref.current, {
        x: "5vw",
        y: "-10vh",
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 5,
      });
      
      // Parallax effect on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(bgRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.5,
          ease: "power2.out"
        });
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" ref={bgRef}>
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#060609]" />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />
      
      {/* Glowing Orbs */}
      <div 
        ref={orb1Ref}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen opacity-[0.15] blur-[100px]"
        style={{ background: 'radial-gradient(circle, var(--color-brand-blue) 0%, transparent 70%)' }}
      />
      
      <div 
        ref={orb2Ref}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-[0.1] blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-brand-cyan) 0%, transparent 70%)' }}
      />
      
      <div 
        ref={orb3Ref}
        className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full mix-blend-screen opacity-[0.08] blur-[80px]"
        style={{ background: 'radial-gradient(circle, var(--color-brand-darkblue) 0%, transparent 70%)' }}
      />
    </div>
  );
}
