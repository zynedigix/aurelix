import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Apple, ArrowLeft } from "lucide-react";

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 pb-12">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="w-full max-w-md px-6 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to AURELIX
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome back</h2>
            <p className="text-zinc-400 text-sm">Enter your details to access your account.</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="hello@example.com"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-zinc-300">Password</label>
                <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot password?</a>
              </div>
              <input 
                type="password" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="remember" className="rounded border-white/10 bg-black/50 text-indigo-500 focus:ring-indigo-500/20" />
              <label htmlFor="remember" className="text-sm text-zinc-400">Remember me for 30 days</label>
            </div>

            <button className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Sign In
            </button>
          </form>

          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-xs text-zinc-500 uppercase tracking-wider">Or continue with</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-zinc-900 border border-white/10 py-3 rounded-xl hover:bg-zinc-800 transition-colors">
              <Apple size={18} className="fill-current" />
              <span className="text-sm font-medium">Apple</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-zinc-900 border border-white/10 py-3 rounded-xl hover:bg-zinc-800 transition-colors">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>

          <p className="text-center text-sm text-zinc-400 mt-8">
            Don't have an account? <Link to="/signup" className="text-white hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
