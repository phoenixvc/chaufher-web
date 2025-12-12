import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
export function BookingCard() {
  return <motion.div initial={{
    y: 50,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    type: 'spring',
    bounce: 0.3,
    delay: 0.2
  }} className="mx-4 -mt-4 relative z-10">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl">
        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-sm group focus-within:ring-2 ring-[#ffd23f] transition-all">
            <div className="w-3 h-3 rounded-full bg-[#ff6b35]"></div>
            <input type="text" defaultValue="128 Market St" className="bg-transparent w-full outline-none text-[#2d2d2d] font-medium" />
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-sm group focus-within:ring-2 ring-[#ffd23f] transition-all">
            <MapPin size={16} className="text-[#6a4c93]" />
            <input type="text" placeholder="Where to?" className="bg-transparent w-full outline-none text-[#2d2d2d] font-medium placeholder:text-gray-500" />
          </div>
        </div>

        <button className="w-full mt-6 bg-[#ffd23f] text-[#2d2d2d] py-4 rounded-2xl font-bold text-lg shadow-[0_8px_20px_rgba(255,210,63,0.4)] hover:shadow-[0_12px_24px_rgba(255,210,63,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
          <span>Let's Go</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>
    </motion.div>;
}