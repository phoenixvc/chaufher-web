import { Menu, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  return <div className="relative bg-white pt-12 pb-12 px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <span className="font-serif text-2xl font-bold text-[#2d5016] tracking-tight">
          ChaufHER.
        </span>
        <div className="flex items-center gap-3">
          {/* Emergency Button - Critical Safety Feature */}
          <button className="p-2 border border-[#2d5016] hover:bg-[#2d5016] hover:text-white transition-colors text-[#2d5016]" aria-label="Emergency assistance">
            <ShieldAlert size={18} strokeWidth={1.5} />
          </button>
          <button className="text-[#2d5016] hover:opacity-70 transition-opacity">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8,
      ease: 'easeOut'
    }}>
        <h1 className="font-serif text-5xl text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
          Safe rides, <br />
          <span className="italic text-[#2d5016]">simply done.</span>
        </h1>
        <p className="text-[#666] text-lg font-light max-w-[80%]">
          Premium transportation service exclusively for women.
        </p>
      </motion.div>
    </div>;
}