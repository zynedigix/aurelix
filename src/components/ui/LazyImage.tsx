import { useState, useRef, useEffect } from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface LazyImageProps extends Omit<HTMLMotionProps<"img">, "ref"> {
  src: string;
  alt: string;
  wrapperClassName?: string;
}

export function LazyImage({ src, alt, className, wrapperClassName, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  useEffect(() => {
    if (isInView) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [src, isInView]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-zinc-900/50", wrapperClassName)}>
      {/* Shimmer Placeholder */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[200%] animate-[shimmer_2s_infinite] -translate-x-full" />
      </motion.div>

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.05 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn("w-full h-full object-cover", className)}
          {...props}
        />
      )}
    </div>
  );
}
