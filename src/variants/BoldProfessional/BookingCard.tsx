import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function BookingCard() {
  return <motion.div initial={{
    y: 40,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.4,
    delay: 0.2,
    ease: 'circOut'
  }} className="mx-4 -mt-10 relative z-10">
      <div className="bg-[#232946] rounded-xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5">
        <div className="space-y-0">
          {/* Pickup Input */}
          <div className="relative group border-b border-white/10">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#ff6b6b] transform rotate-45"></div>
            <input type="text" placeholder="Current Location" className="w-full bg-transparent py-5 pl-10 pr-4 text-white placeholder:text-gray-500 outline-none font-medium text-lg focus:bg-white/5 transition-colors" defaultValue="128 Market St, San Francisco" />
          </div>

          {/* Destination Input */}
          <div className="relative group">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <MapPin size={18} className="text-[#4ecdc4]" />
            </div>
            <input type="text" placeholder="Where to?" className="w-full bg-transparent py-5 pl-10 pr-4 text-white placeholder:text-gray-500 outline-none font-medium text-lg focus:bg-white/5 transition-colors" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-2 mt-6">
          {['Home', 'Work', 'Gym', 'Airport'].map(place => <button key={place} className="py-2.5 rounded-lg bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider hover:bg-[#4ecdc4] hover:text-[#1a1f3a] transition-all">
              {place}
            </button>)}
        </div>

        {/* CTA Button */}
        <button className="w-full mt-6 bg-[#4ecdc4] hover:bg-[#3dbdb4] active:translate-y-0.5 transition-all text-[#1a1f3a] rounded-lg py-4 font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(78,205,196,0.3)]">
          <span>Request Ride</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
        </button>
      </div>
    </motion.div>;
}