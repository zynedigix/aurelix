import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-glow"
          >
            Get in touch.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 font-light"
          >
            Our enterprise sales team is ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border border-white/5 flex items-start gap-6 hover:border-white/20 transition-colors"
            >
              <div className="p-4 bg-white/5 rounded-2xl text-indigo-400"><Mail size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Sales Inquiry</h4>
                <p className="text-zinc-400 text-sm mb-2">Our team is here to help with enterprise orders.</p>
                <a href="mailto:sales@aurelix.com" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors">sales@aurelix.com</a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 flex items-start gap-6 hover:border-white/20 transition-colors"
            >
              <div className="p-4 bg-white/5 rounded-2xl text-cyan-400"><Phone size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Direct Support</h4>
                <p className="text-zinc-400 text-sm mb-2">Mon-Fri from 8am to 5pm (PST).</p>
                <a href="tel:+18001234567" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">+1 (800) 123-4567</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 flex items-start gap-6 hover:border-white/20 transition-colors"
            >
              <div className="p-4 bg-white/5 rounded-2xl text-emerald-400"><MapPin size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Global HQ</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  100 Innovation Way<br/>
                  Silicon Valley, CA 94025
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center h-[400px]"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Message Sent</h3>
                  <p className="text-zinc-400">Our team will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-zinc-400 font-medium">First Name</label>
                      <input 
                        type="text" 
                        required
                        className="bg-black/50 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-zinc-400 font-medium">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="bg-black/50 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-zinc-400 font-medium">Work Email</label>
                    <input 
                      type="email" 
                      required
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-zinc-400 font-medium">Message</label>
                    <textarea 
                      rows={5}
                      required
                      className="bg-black/50 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white resize-none"
                    ></textarea>
                  </div>
                  
                  <button className="bg-white text-black font-bold text-lg py-5 rounded-xl mt-4 hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
