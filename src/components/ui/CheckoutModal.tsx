import { motion, AnimatePresence } from "framer-motion";
import { X, Apple, CreditCard } from "lucide-react";
import { useState } from "react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
          >
            {/* Left side: Product Summary */}
            <div className="w-full md:w-2/5 bg-zinc-900/50 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10">
                 <div className="text-sm font-medium text-zinc-400 mb-1">AURELIX</div>
                 <h3 className="text-2xl font-bold text-white mb-6">Pro Series</h3>
                 
                 <div className="aspect-square bg-zinc-900 rounded-2xl mb-6 relative overflow-hidden border border-white/5 flex items-center justify-center">
                    <img src="/images/watch/watch-0001.webp" className="w-full h-full object-contain mix-blend-screen scale-125" alt="AURELIX Watch" />
                 </div>
                 
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-zinc-400">Total</span>
                   <span className="text-xl font-bold text-white">$499.00</span>
                 </div>
               </div>
            </div>

            {/* Right side: Payment */}
            <div className="w-full md:w-3/5 p-8 relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6"
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Order Confirmed</h3>
                  <p className="text-zinc-400 text-sm">Welcome to the future of wellness.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">Express Checkout</h3>
                  
                  <div className="flex gap-4 mb-8">
                    <button className="flex-1 bg-white text-black h-12 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-zinc-200 transition-colors">
                      <Apple size={18} className="fill-current" /> Pay
                    </button>
                    <button className="flex-1 bg-zinc-800 text-white border border-white/10 h-12 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-zinc-700 transition-colors">
                      G Pay
                    </button>
                  </div>

                  <div className="relative flex items-center py-4 mb-4">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="flex-shrink-0 mx-4 text-xs text-zinc-500 uppercase tracking-wider">Or pay with card</span>
                    <div className="flex-grow border-t border-white/10"></div>
                  </div>

                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email address"
                        required
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-all"
                      />
                    </div>
                    <div>
                      <div className="relative">
                        <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input 
                          type="text" 
                          placeholder="Card number"
                          required
                          className="w-full bg-zinc-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-all"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="MM / YY"
                        required
                        className="w-1/2 bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-all"
                      />
                      <input 
                        type="text" 
                        placeholder="CVC"
                        required
                        className="w-1/2 bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:bg-zinc-900 transition-all"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-xl font-medium mt-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    >
                      Pay $499.00
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
