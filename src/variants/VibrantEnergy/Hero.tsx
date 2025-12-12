import { Zap, ShieldAlert } from 'lucide-react';
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
        <div className="flex items-center gap-2">
          {/* Emergency Button - Critical Safety Feature */}
          <button className="bg-[#ffd23f] backdrop-blur-md p-2.5 rounded-full border border-white/30 hover:bg-[#ffdd5c] transition-colors shadow-lg active:scale-95" aria-label="Emergency assistance">
            <ShieldAlert className="text-[#2d2d2d]" size={18} strokeWidth={2.5} />
          </button>
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
            <Zap className="text-[#ffd23f] fill-[#ffd23f]" size={20} />
          </div>
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ffd23f] animate-pulse"></div>
          <span className="text-white text-xs font-bold tracking-wide uppercase">
            100% Verified Drivers
          </span>
        </div>
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