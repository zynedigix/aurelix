import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "../ui/LoadingSpinner";

const FRAME_COUNT = 240;

const preloadImages = () => {
  const images: HTMLImageElement[] = [];
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    const frameIndex = i.toString().padStart(4, "0");
    img.src = `/images/watch/watch-${frameIndex}.webp`;
    images.push(img);
  }
  return images;
};

const showcases = [
  {
    title: "Always On Display",
    description: "Brilliant LTPO OLED display that never sleeps, dynamically adjusting refresh rates from 1Hz to 60Hz to preserve battery.",
    color: "from-blue-500/20",
  },
  {
    title: "Precision GPS",
    description: "Dual-frequency GPS provides the most accurate location tracking, even in dense urban environments or deep forests.",
    color: "from-emerald-500/20",
  },
  {
    title: "Titanium Case",
    description: "Aerospace-grade titanium strikes the perfect balance between weight, ruggedness, and corrosion resistance.",
    color: "from-orange-500/20",
  }
];

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Load images
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

  // Update canvas
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
    const ratio = Math.min(hRatio, vRatio); // Use min to contain the image entirely
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Only take up the right half of the screen on desktop, or full on mobile roughly
        const isMobile = window.innerWidth < 768;
        canvasRef.current.width = isMobile ? window.innerWidth : window.innerWidth / 2;
        canvasRef.current.height = window.innerHeight;
        
        if (imagesLoaded && images.length > 0) {
           const ctx = canvasRef.current.getContext("2d");
           if (ctx) {
             const img = images[0];
             if (img.complete) {
                const hRatio = canvasRef.current.width / img.width;
                const vRatio = canvasRef.current.height / img.height;
                const ratio = Math.min(hRatio, vRatio);
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

  return (
    <section ref={containerRef} id="experience" className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Left side fixed content area */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex items-center z-20 pointer-events-none">
          <div className="w-full md:w-1/2">
            {showcases.map((showcase, index) => {
              const start = index * 0.33;
              const end = (index + 1) * 0.33;
              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.05, end - 0.05, end],
                [0, 1, 1, 0]
              );
              const y = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [50, 0, 0, -50]
              );

              return (
                <motion.div
                  key={showcase.title}
                  style={{ opacity, y }}
                  className="absolute top-1/2 -translate-y-1/2"
                >
                  <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
                    {showcase.title}
                  </h3>
                  <p className="text-xl text-zinc-400 max-w-md font-light leading-relaxed drop-shadow-md">
                    {showcase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right side visual area - Watch Image Sequence */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 flex items-center justify-center z-10 pointer-events-none bg-zinc-950/20">
           <AnimatePresence>
             {!imagesLoaded && (
               <motion.div 
                 initial={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.8 }}
                 className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20"
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
              className="w-full h-full object-contain relative z-10"
           />
        </div>

      </div>
    </section>
  );
}
