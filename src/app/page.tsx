import { BackgroundGraphics } from "@/components/BackgroundGraphics";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[var(--background)] selection:bg-[var(--color-brand-blue)] selection:text-white">
      <BackgroundGraphics />
      <Hero />
    </main>
  );
}
