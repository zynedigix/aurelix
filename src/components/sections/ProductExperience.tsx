import { motion } from "framer-motion";
import { LazyImage } from "../ui/LazyImage";

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", alt: "Athlete running", className: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop", alt: "Yoga", className: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1493690283958-32df2c86326e?q=80&w=2069&auto=format&fit=crop", alt: "Fitness", className: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop", alt: "Hiking", className: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop", alt: "Gym", className: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop", alt: "Surfing", className: "col-span-1 row-span-1" },
];

export function ProductExperience() {
  return (
    <section className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-glow"
          >
            Built for the extreme.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light"
          >
            Whether you're summiting peaks or crushing a marathon, AURELIX is there.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative rounded-[2rem] overflow-hidden group ${img.className} border border-white/10`}
            >
              <LazyImage 
                src={img.src} 
                alt={img.alt}
                wrapperClassName="absolute inset-0 w-full h-full"
                className="transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-semibold tracking-wider uppercase text-sm bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
