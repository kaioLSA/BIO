import { ArrowRight, Calendar } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative z-10 w-full py-20 px-6">
      <div className="max-w-4xl mx-auto rounded-[2rem] p-10 md:p-16 text-center bg-gradient-to-br from-[#00509E] to-[#00A3FF] shadow-[0_20px_60px_rgba(0,163,255,0.3)] border border-white/20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Pronto para decolar as suas vendas?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Agende uma consultoria com nosso time de especialistas e descubra como podemos acelerar o crescimento da sua empresa através do tráfego pago e posicionamento digital.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="SITE_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#00A3FF] font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
          >
            Agendar Reunião
            <Calendar className="w-5 h-5" />
          </a>
          
          <a 
            href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/20 backdrop-blur text-white font-bold text-lg hover:bg-black/30 hover:scale-105 transition-all duration-200 border border-white/10"
          >
            Falar no WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
