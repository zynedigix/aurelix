import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

const plans = [
  {
    name: "Standard",
    price: "$299",
    description: "Essential features for everyday wellness and connectivity.",
    features: ["Aluminum Case", "Always-On Display", "Basic Health Metrics", "Water Resistant 50m"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$499",
    description: "Advanced metrics and premium materials for active users.",
    features: ["Stainless Steel Case", "Sapphire Crystal", "Advanced ECG & Oxygen", "Water Resistant 100m", "Cellular Built-in"],
    popular: true,
  },
  {
    name: "Ultra",
    price: "$799",
    description: "The ultimate sports and adventure companion.",
    features: ["Titanium Case", "Precision Dual GPS", "Action Button", "Diving Certified 100m", "Extended 72h Battery"],
    popular: false,
  }
];

export function Pricing({ onOpenCheckout }: { onOpenCheckout?: () => void }) {
  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-glow"
          >
            Choose your edge.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 font-light"
          >
            Uncompromising performance at every level.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={cn(
                "relative rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500",
                plan.popular 
                  ? "glass-panel border-white/20 py-14 shadow-[0_0_50px_rgba(255,255,255,0.05)] scale-105 z-10" 
                  : "border border-white/10 hover:border-white/20 bg-zinc-950/50"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/20">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 tracking-tight text-white">{plan.name}</h3>
                <p className="text-zinc-400 text-sm h-10 font-light leading-relaxed">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-6xl font-bold tracking-tighter text-white">{plan.price}</span>
              </div>
              
              <ul className="flex flex-col gap-5 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm text-zinc-300 font-medium">
                    <div className={cn("p-1 rounded-full", plan.popular ? "bg-white/20 text-white" : "bg-white/5 text-zinc-500")}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={onOpenCheckout}
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all duration-300 uppercase tracking-widest text-sm hover:scale-105 active:scale-95",
                  plan.popular 
                    ? "bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Pre Order
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
