import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate initial critical asset loading (or we could tie it to actual image preloads)
    // For now, we'll give it a cinematic 2-second minimum load time
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadComplete, 1000); // Wait for exit animation to finish before unmounting
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Cinematic Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-[0.3em] text-white mb-12 text-glow">
              AURELIX
            </h1>
            
            <LoadingSpinner className="scale-125 mb-12" />
            
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-zinc-500 tracking-widest text-sm uppercase"
            >
              Preparing the future...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
