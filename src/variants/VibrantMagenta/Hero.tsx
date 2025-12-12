import { Bell, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  return <div className="relative bg-gradient-to-br from-[#fef5fb] to-[#f5eeff] pt-12 pb-16 px-6 rounded-b-[3rem] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d91e72]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6a1b9a]/10 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>

      {/* Header */}
      <div className="relative flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d91e72] to-[#c8175d] flex items-center justify-center text-white font-bold font-sans text-xl shadow-sm">
            C
          </div>
          <span className="font-sans font-bold text-[#4a4a4a] text-lg tracking-tight">
            ChaufHER
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Emergency Button - Critical Safety Feature */}
          <button className="p-2.5 rounded-full bg-[#d91e72] hover:bg-[#c8175d] transition-colors text-white shadow-md active:scale-95" aria-label="Emergency assistance">
            <ShieldAlert size={18} strokeWidth={2.5} />
          </button>
          <button className="p-2 rounded-full bg-white/60 hover:bg-white transition-colors text-[#4a4a4a] relative shadow-sm">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#d91e72] rounded-full border-2 border-white"></span>
          </button>
        </div>
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
        duration: 0.6,
        ease: 'easeOut'
      }}>
          <h1 className="font-sans font-bold text-4xl text-[#2d2d2d] leading-[1.1] mb-3">
            Your trusted ride, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d91e72] to-[#6a1b9a]">your way.</span>
          </h1>
          <p className="text-[#666] text-lg max-w-[85%] leading-relaxed font-medium">
            Safe, reliable rides driven by women, for everyone.
          </p>
        </motion.div>
      </div>
    </div>;
}