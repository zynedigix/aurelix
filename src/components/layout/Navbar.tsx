import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "Experience", href: "/#experience" },
  { name: "Specs", href: "/#specs" },
  { name: "Pricing", href: "/#pricing" },
];

export function Navbar({ onOpenCheckout }: { onOpenCheckout?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-4 glass-panel" : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group z-50">
            {/* Glowing dot icon */}
            <div className="relative w-3 h-3 rounded-full bg-white group-hover:bg-indigo-400 transition-colors duration-300">
               <div className="absolute inset-0 bg-white group-hover:bg-indigo-400 rounded-full blur-[6px] opacity-80" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] text-white">
              AURELIX
            </span>
          </Link>

          {/* Desktop Nav */}
          {isHomePage && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          <div className="hidden md:flex items-center gap-6">
            <Link to="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Log in
            </Link>
            <button 
              onClick={onOpenCheckout}
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Pre Order
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {isHomePage && navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-medium text-zinc-400 hover:text-white transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 w-full px-12 mt-8">
              <Link 
                to="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full border border-white/20 text-white py-4 rounded-full font-medium text-center"
              >
                Log in
              </Link>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout?.();
                }}
                className="w-full bg-white text-black py-4 rounded-full font-medium shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Pre Order
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
