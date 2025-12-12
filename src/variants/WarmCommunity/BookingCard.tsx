import React from 'react';
import { MapPin, ArrowRight, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
export function BookingCard() {
  return <motion.div initial={{
    y: 20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5,
    delay: 0.2,
    ease: 'easeOut'
  }} className="mx-6 -mt-8 relative z-10">
      <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgba(212,115,94,0.08)] border border-[#faf8f5]">
        <div className="space-y-4">
          {/* Pickup Input */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#d4735e] ring-4 ring-[#d4735e]/10"></div>
            <input type="text" placeholder="Current Location" className="w-full bg-[#faf8f5] hover:bg-[#f5f2ed] focus:bg-white transition-colors rounded-2xl py-4 pl-12 pr-4 text-[#2d2d2d] placeholder:text-[#999] outline-none border border-transparent focus:border-[#d4735e]/20 focus:ring-4 focus:ring-[#d4735e]/5 font-medium" defaultValue="Sandton City, Johannesburg" />
          </div>

          {/* Destination Input */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <MapPin size={18} className="text-[#7a9b76]" />
            </div>
            <input type="text" placeholder="Where to?" className="w-full bg-[#faf8f5] hover:bg-[#f5f2ed] focus:bg-white transition-colors rounded-2xl py-4 pl-12 pr-4 text-[#2d2d2d] placeholder:text-[#999] outline-none border border-transparent focus:border-[#d4735e]/20 focus:ring-4 focus:ring-[#d4735e]/5 font-medium" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3 mt-5 overflow-x-auto no-scrollbar pb-1 mask-linear-fade">
          {['Home', 'Work', 'Gym', 'School'].map(place => <button key={place} className="px-4 py-2 rounded-full bg-[#faf8f5] text-[#666] text-xs font-medium hover:bg-[#d4735e]/10 hover:text-[#d4735e] transition-colors whitespace-nowrap">
              {place}
            </button>)}
        </div>

        {/* Pricing Info - Guardrail: Predictability */}
        <div className="mt-5 pt-4 border-t border-[#faf8f5] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#666]">
            <span className="text-lg font-bold">R</span>
            <span className="text-sm font-medium">Estimated fare</span>
          </div>
          <span className="text-lg font-bold text-[#2d2d2d]">R180-220</span>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-4 bg-[#d4735e] hover:bg-[#c06552] active:scale-[0.98] transition-all duration-200 text-white rounded-2xl py-4 font-bold text-lg shadow-lg shadow-[#d4735e]/20 flex items-center justify-center gap-2 group">
          <span>Find a Ride</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Cancellation Policy - Guardrail: Predictability */}
        <p className="text-xs text-[#999] text-center mt-3">
          Free cancellation up to 5 minutes before pickup
        </p>
      </div>
    </motion.div>;
}