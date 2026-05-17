import { motion } from "framer-motion";
import { Battery, Zap, Droplet, Cpu, Signal, Orbit } from "lucide-react";

const specs = [
  { icon: <Battery className="text-emerald-400" size={32} />, label: "Battery", value: "72h", sub: "Low Power Mode" },
  { icon: <Cpu className="text-blue-400" size={32} />, label: "Processor", value: "S10", sub: "AURELIX AI chip" },
  { icon: <Droplet className="text-cyan-400" size={32} />, label: "Waterproof", value: "100m", sub: "Dive ready" },
  { icon: <Zap className="text-amber-400" size={32} />, label: "Charging", value: "30m", sub: "0 to 80%" },
  { icon: <Signal className="text-purple-400" size={32} />, label: "Connectivity", value: "5G", sub: "Standalone cellular" },
  { icon: <Orbit className="text-orange-400" size={32} />, label: "Sensors", value: "12+", sub: "Advanced arrays" },
];

export function Specs() {
  return (
    <section id="specs" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-glow"
          >
            Under the hood.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light"
          >
            Engineering marvels packed into a 49mm chassis.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 md:p-10 rounded-[2rem] relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-all duration-500 scale-[2.5] translate-x-4 -translate-y-4 group-hover:rotate-12">
                {spec.icon}
              </div>
              
              <motion.div 
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors"
              >
                {spec.icon}
              </motion.div>
              
              <div className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter">{spec.value}</div>
              <div className="text-lg md:text-xl font-semibold text-white mb-1">{spec.label}</div>
              <div className="text-sm text-zinc-400">{spec.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
