import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Ultra Marathoner",
    content: "The battery life is unlike anything I've ever used. I can run a 100-mile race with GPS tracking and still have juice left for the next day. AURELIX is unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Tech Reviewer",
    content: "AURELIX has set a new standard for what a premium smartwatch should feel like. The UI is buttery smooth, and the titanium finish is completely flawless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Dr. James Wilson",
    role: "Cardiologist",
    content: "The accuracy of the health sensors is astonishing. It's the first consumer device I actually recommend my patients use for monitoring their vital signs daily.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "Professional Diver",
    content: "Took the AURELIX Ultra down to 80 meters. The screen remained perfectly legible and the dive computer functionalities were spot on. Incredible engineering.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-glow"
          >
            The AURELIX standard.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 font-light"
          >
            Don't just take our word for it.
          </motion.p>
        </div>
      </div>

      {/* Auto Sliding Carousel */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap gap-8 px-4 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[400px] flex-shrink-0 glass-panel p-8 rounded-[2rem] flex flex-col border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] whitespace-normal"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-300 mb-8 flex-1 text-lg leading-relaxed font-light">"{t.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border border-white/20 object-cover" />
                <div>
                  <div className="font-bold text-white text-lg">{t.name}</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      {/* Tailwind config needs to have the animate-marquee class added. We will add it to index.css */}
    </section>
  );
}
