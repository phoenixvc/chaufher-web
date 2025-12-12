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
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-sm group focus-within:ring-2 ring-[#d4af37] transition-all">
            <div className="w-3 h-3 rounded-full bg-[#e91e8c]"></div>
            <input type="text" defaultValue="Sandton City, JHB" className="bg-transparent w-full outline-none text-[#2d2d2d] font-medium" />
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-sm group focus-within:ring-2 ring-[#d4af37] transition-all">
            <MapPin size={16} className="text-[#7b2cbf]" />
            <input type="text" placeholder="Where to?" className="bg-transparent w-full outline-none text-[#2d2d2d] font-medium placeholder:text-gray-500" />
          </div>
        </div>

        {/* Pricing Info - Guardrail: Predictability */}
        <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-lg font-bold">R</span>
            <span className="text-sm font-medium">Est. fare</span>
          </div>
          <span className="text-xl font-bold text-white">R180-220</span>
        </div>

        <button className="w-full mt-4 bg-[#d4af37] text-[#2d2d2d] py-4 rounded-2xl font-bold text-lg shadow-[0_8px_20px_rgba(255,210,63,0.4)] hover:shadow-[0_12px_24px_rgba(255,210,63,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
          <span>Let's Go</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>

        {/* Cancellation Policy - Guardrail: Predictability */}
        <p className="text-xs text-white/60 text-center mt-3">
          Free cancellation up to 5 min before pickup
        </p>
      </div>
    </motion.div>;
}