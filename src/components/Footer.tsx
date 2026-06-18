export function Footer() {
  return (
    <footer className="relative z-10 w-full py-12 px-6 border-t border-white/5 bg-[#060609]/80 backdrop-blur-xl mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
           <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`} alt="Startsette" className="h-6 w-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
        
        <p className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Startsette. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 rounded-full glass hover:bg-[#00A3FF] hover:-translate-y-1 text-white/70 hover:text-white transition-all duration-200">
            {/* Instagram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="WHATSAPP_URL" className="p-2 rounded-full glass hover:bg-[#00A3FF] hover:-translate-y-1 text-white/70 hover:text-white transition-all duration-200">
            {/* WhatsApp Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.16 2.84A10.02 10.02 0 0 0 12 0 10.02 10.02 0 0 0 2 10.15c0 2.12.56 4.19 1.63 6.01L2 22l6.01-1.63A10.02 10.02 0 0 0 12 20c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.84-6.98z" />
              <path d="M16.59 14.65c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3 0-.46.15-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.62-.92-2.22-.25-.59-.5-.51-.67-.52-.17 0-.36 0-.55 0-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.89 1.21 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.61.71.22 1.36.19 1.87.11.58-.09 1.74-.71 1.99-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.56-.35z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
