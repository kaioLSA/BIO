import { BackgroundGraphics } from "@/components/BackgroundGraphics";
import { Hero } from "@/components/Hero";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[var(--background)] selection:bg-[var(--color-brand-blue)] selection:text-white">
      {/* Ambient lighting (orbs) — sits behind everything */}
      <BackgroundGraphics />

      {/* Particles as the whole-site background, above the orbs / below content */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#ffffff", "#ffffff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      <Hero />
    </main>
  );
}
