import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-32 pb-10 overflow-hidden">
      {/* Cinematic gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large faded luxury logo */}
        <div className="mb-24 flex justify-center opacity-30 select-none pointer-events-none">
          <span className="text-[12vw] font-bold tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-b from-white to-transparent blur-[1px]">
            AURELIX
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-[0.2em] mb-4 flex items-center gap-3">
              <div className="relative w-3 h-3 rounded-full bg-white">
                <div className="absolute inset-0 bg-white rounded-full blur-[6px] opacity-80" />
              </div>
              AURELIX
            </h2>
            <p className="text-zinc-400 max-w-sm mb-8 text-lg font-light">
              Engineered for those who demand more. The future of wellness and connectivity on your wrist.
            </p>
            <div className="flex flex-col gap-4 max-w-sm">
              <span className="text-sm font-medium text-white tracking-widest uppercase">Subscribe to updates</span>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex-1 text-sm focus:outline-none focus:border-white/30 text-white transition-all"
                />
                <button className="bg-white text-black px-6 py-3 rounded-xl text-sm font-bold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wider uppercase text-xs">Product</h3>
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Performance</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compare</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-6 tracking-wider uppercase text-xs">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">Careers <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} AURELIX Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
