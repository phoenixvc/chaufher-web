import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  return <div className="relative bg-cream pt-12 pb-16 px-6 rounded-b-[3rem] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/10 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>

      {/* Header */}
      <div className="relative flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center text-white font-bold font-display text-xl">
            C
          </div>
          <span className="font-display font-bold text-warmgray-800 text-lg tracking-tight">
            ChaufHER
          </span>
        </div>
        <button className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors text-warmgray-600 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-terracotta rounded-full border-2 border-white"></span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <h1 className="font-display font-bold text-4xl text-warmgray-900 leading-[1.1] mb-3">
            Your trusted ride, <br />
            <span className="text-terracotta">your way.</span>
          </h1>
          <p className="text-warmgray-600 text-lg max-w-[80%] leading-relaxed">
            Safe, reliable rides driven by women, for everyone.
          </p>
        </motion.div>
      </div>
    </div>;
}