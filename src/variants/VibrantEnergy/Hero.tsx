import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  return <div className="relative pt-16 pb-12 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
          <span className="font-bold text-white text-xl tracking-tight">
            ChaufHER
          </span>
        </div>
        <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
          <Zap className="text-[#ffd23f] fill-[#ffd23f]" size={20} />
        </div>
      </div>

      {/* Main Content */}
      <motion.div initial={{
      scale: 0.9,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      type: 'spring',
      bounce: 0.4
    }}>
        <h1 className="font-bold text-5xl text-white mb-4 drop-shadow-sm">
          Go anywhere, <br />
          <span className="text-[#ffd23f]">safely.</span>
        </h1>

        {/* Animated Route Line */}
        <div className="h-1 w-24 bg-white/30 rounded-full mb-6 overflow-hidden">
          <motion.div className="h-full w-1/2 bg-[#ffd23f]" animate={{
          x: ['-100%', '200%']
        }} transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'linear'
        }} />
        </div>
      </motion.div>
    </div>;
}