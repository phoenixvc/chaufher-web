import React from 'react';
import { Bell, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  return <div className="relative bg-[#1a1f3a] pt-14 pb-20 px-6 overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-[#4ecdc4] rounded-full"></div>
        <div className="absolute top-20 right-40 w-20 h-20 bg-[#ff6b6b] rounded-full mix-blend-overlay"></div>
        <div className="absolute -top-10 -left-10 w-60 h-60 border border-[#4ecdc4]/30 rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ff6b6b] flex items-center justify-center text-[#1a1f3a] font-bold text-xl rounded-lg transform -skew-x-6">
            <span className="skew-x-6">C</span>
          </div>
          <span className="font-mono font-bold text-white text-lg tracking-wider uppercase">
            ChaufHER
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Emergency Button - Critical Safety Feature */}
          <button className="p-2.5 rounded-lg bg-[#ff6b6b] hover:bg-[#ff5252] transition-colors text-white shadow-lg active:scale-95" aria-label="Emergency assistance">
            <ShieldAlert size={18} strokeWidth={2.5} />
          </button>
          <button className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white relative border border-white/10">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#4ecdc4] rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        ease: 'circOut'
      }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ecdc4]/10 border border-[#4ecdc4]/20 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ecdc4] animate-pulse"></div>
            <span className="text-[#4ecdc4] text-xs font-bold tracking-wide uppercase">
              100% Verified Drivers
            </span>
          </div>
          <h1 className="font-sans font-bold text-5xl text-white leading-[1] mb-4 tracking-tight">
            RIDE WITH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e]">
              CONFIDENCE
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-[90%] leading-relaxed font-light">
            Professional transportation for women. Secure, scheduled, superior.
          </p>
        </motion.div>
      </div>
    </div>;
}