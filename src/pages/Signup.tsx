import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export function Signup() {
  const [password, setPassword] = useState("");
  
  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length > 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const strength = getStrength(password);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 pb-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="w-full max-w-md px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to AURELIX
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Join AURELIX</h2>
            <p className="text-zinc-400 text-sm">Step into the future of performance tracking.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="hello@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="Create a strong password"
              />
              {password.length > 0 && (
                <div className="mt-3 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "h-1 flex-1 rounded-full transition-colors duration-300",
                        strength > i ? (strength > 2 ? "bg-emerald-500" : strength > 1 ? "bg-amber-500" : "bg-rose-500") : "bg-white/10"
                      )} 
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" id="terms" className="mt-1 rounded border-white/10 bg-black/50 text-indigo-500 focus:ring-indigo-500/20" />
              <label htmlFor="terms" className="text-sm text-zinc-400 leading-relaxed">
                I agree to the <a href="#" className="text-white hover:underline">Terms of Service</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-zinc-400 mt-8">
            Already have an account? <Link to="/login" className="text-white hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
