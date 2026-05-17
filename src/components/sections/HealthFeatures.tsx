import { motion } from "framer-motion";
import { Activity, Heart, Moon, Wind, Brain, BellRing } from "lucide-react";
import { cn } from "../../lib/utils";
import { LazyImage } from "../ui/LazyImage";

const features = [
  {
    title: "Heart Monitoring",
    description: "24/7 continuous ECG monitoring with anomaly detection.",
    icon: <Heart size={28} className="text-rose-500" />,
    className: "col-span-1 md:col-span-2 row-span-2",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    delay: 0.1,
  },
  {
    title: "Sleep Tracking",
    description: "Advanced REM and deep sleep analytics.",
    icon: <Moon size={28} className="text-indigo-400" />,
    className: "col-span-1",
    image: "https://images.unsplash.com/photo-1512686096451-a15c19314d59?q=80&w=2070&auto=format&fit=crop",
    delay: 0.2,
  },
  {
    title: "Oxygen Levels",
    description: "Blood oxygen saturation tracking in real-time.",
    icon: <Wind size={28} className="text-cyan-400" />,
    className: "col-span-1",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
    delay: 0.3,
  },
  {
    title: "Stress Detection",
    description: "Galvanic skin response sensors to measure stress levels.",
    icon: <Activity size={28} className="text-amber-500" />,
    className: "col-span-1",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    delay: 0.4,
  },
  {
    title: "AI Coach",
    description: "Personalized fitness recommendations powered by AURELIX Intelligence.",
    icon: <Brain size={28} className="text-purple-400" />,
    className: "col-span-1 md:col-span-2",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    delay: 0.5,
  },
  {
    title: "Smart Notifications",
    description: "Intelligent filtering of what matters most.",
    icon: <BellRing size={28} className="text-emerald-400" />,
    className: "col-span-1",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop",
    delay: 0.6,
  },
];

export function HealthFeatures() {
  return (
    <section id="features" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-glow"
          >
            Health at your fingertips.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto font-light"
          >
            A comprehensive suite of sensors working silently in the background to provide you with unparalleled insights into your body.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: feature.delay, duration: 0.6, ease: "easeOut" }}
              className={cn("group relative rounded-[2rem] overflow-hidden cursor-pointer", feature.className)}
            >
              {/* Premium Image Background */}
              <LazyImage 
                src={feature.image} 
                alt={feature.title}
                wrapperClassName="absolute inset-0 w-full h-full"
                className="opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              
              {/* Spotlight Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)] transition-opacity duration-500" />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between z-10 border border-white/10 rounded-[2rem] group-hover:border-white/20 transition-colors duration-300">
                <div className="bg-white/10 backdrop-blur-xl w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10 shadow-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
