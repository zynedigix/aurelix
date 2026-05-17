import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <div className="relative w-16 h-16">
        {/* Outer glowing ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-r-2 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        />
        {/* Inner reverse ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-b-2 border-l-2 border-cyan-400/50"
        />
        {/* Center pulsing dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
        />
      </div>
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400"
      >
        Loading
      </motion.div>
    </div>
  );
}
