import { BackgroundGraphics } from "@/components/BackgroundGraphics";
import { Hero } from "@/components/Hero";
import MarketingReveal from "@/components/MarketingReveal";
import { Services } from "@/components/Services";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[var(--background)] selection:bg-[var(--color-brand-blue)] selection:text-white">
      <BackgroundGraphics />
      <Hero />

      <MarketingReveal>Marketing</MarketingReveal>

      <Services />
      <CtaSection />
      <Footer />
    </main>
  );
}
