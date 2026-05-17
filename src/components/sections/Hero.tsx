import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "../ui/LoadingSpinner";

const FRAME_COUNT = 240;

const preloadImages = () => {
  const images: HTMLImageElement[] = [];
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    const frameIndex = i.toString().padStart(4, "0");
    img.src = `/images/hero/frame-${frameIndex}.webp`;
    images.push(img);
  }
  return images;
};

export function Hero({ onOpenCheckout }: { onOpenCheckout?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const loadedImages = preloadImages();
    let loadedCount = 0;
    loadedImages.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
      };
    });
    setImages(loadedImages);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );
    
    const img = images[frameIndex];
    if (!img || !img.complete) return;

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        if (imagesLoaded && images.length > 0) {
           const ctx = canvasRef.current.getContext("2d");
           if (ctx) {
             const img = images[0];
             if (img.complete) {
                const hRatio = canvasRef.current.width / img.width;
                const vRatio = canvasRef.current.height / img.height;
                const ratio = Math.max(hRatio, vRatio);
                const centerShift_x = (canvasRef.current.width - img.width * ratio) / 2;
                const centerShift_y = (canvasRef.current.height - img.height * ratio) / 2;
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
             }
           }
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, images]);

  const opacityText1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const yText1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const opacityText2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const scaleText2 = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);

  const opacityText3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 1]);
  const yText3 = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-zinc-950">
        
        {/* Ambient background particles/glow */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        </div>

        {/* Loading State */}
        <AnimatePresence>
          {!imagesLoaded && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-md"
            >
              <LoadingSpinner />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.canvas
          ref={canvasRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: imagesLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none" />

        <motion.div 
          style={{ opacity: opacityText1, y: yText1 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 text-glow [text-shadow:0_0_30px_rgba(255,255,255,0.35),0_0_80px_rgba(255,255,255,0.15)]">
              AURELIX
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl font-light mx-auto mb-10 tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
              The Future <span className="text-white font-bold">On Your Wrist</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onOpenCheckout}
                className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.45)] [text-shadow:0_1px_2px_rgba(255,255,255,0.15)] backdrop-blur-xl w-full sm:w-auto"
              >
                Buy Now
              </button>
              <a 
              href="#features"
              className="text-white hover:text-zinc-200 font-medium px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] [text-shadow:0_2px_10px_rgba(0,0,0,0.8)] w-full sm:w-auto"
            >
              Explore Features
            </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ opacity: opacityText2, scale: scaleText2 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-6 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-glow">
            Titanium Grade. <br/>
            <span className="text-zinc-500 drop-shadow-none">Sapphire Glass.</span>
          </h2>
          <p className="text-2xl text-zinc-400 max-w-xl font-light">
            Forged from aerospace-grade materials to withstand the most extreme conditions.
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity: opacityText3, y: yText3 }}
          className="absolute inset-0 flex flex-col justify-end pb-32 items-center z-20 pointer-events-none px-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center glass-panel p-10 rounded-[2rem] shadow-2xl border border-white/20 backdrop-blur-2xl">
            {[
              { val: "72h", label: "Battery" },
              { val: "100m", label: "Waterproof" },
              { val: "AI", label: "Health" },
              { val: "2.4x", label: "Faster" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.val}</div>
                <div className="text-xs text-zinc-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
