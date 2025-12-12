import { MapPin, ArrowRight } from 'lucide-react';
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
    delay: 0.2
  }} className="mx-6 -mt-8 relative z-10">
      <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgba(212,115,94,0.08)] border border-stone-50">
        <div className="space-y-4">
          {/* Pickup Input */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-terracotta ring-4 ring-terracotta/10"></div>
            <input type="text" placeholder="Current Location" className="w-full bg-stone-50 hover:bg-stone-100 focus:bg-white transition-colors rounded-2xl py-4 pl-12 pr-4 text-warmgray-800 placeholder:text-warmgray-400 outline-none border border-transparent focus:border-terracotta/20 focus:ring-4 focus:ring-terracotta/5 font-medium" defaultValue="128 Market St, San Francisco" />
          </div>

          {/* Destination Input */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <MapPin size={18} className="text-sage-600" />
            </div>
            <input type="text" placeholder="Where to?" className="w-full bg-stone-50 hover:bg-stone-100 focus:bg-white transition-colors rounded-2xl py-4 pl-12 pr-4 text-warmgray-800 placeholder:text-warmgray-400 outline-none border border-transparent focus:border-terracotta/20 focus:ring-4 focus:ring-terracotta/5 font-medium" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3 mt-5 overflow-x-auto no-scrollbar pb-1">
          {['Home', 'Work', 'Gym', 'School'].map(place => <button key={place} className="px-4 py-2 rounded-full bg-cream-200/50 text-warmgray-600 text-xs font-medium hover:bg-terracotta/10 hover:text-terracotta transition-colors whitespace-nowrap">
              {place}
            </button>)}
        </div>

        {/* CTA Button */}
        <button className="w-full mt-6 bg-terracotta hover:bg-terracotta-600 active:scale-[0.98] transition-all duration-200 text-white rounded-2xl py-4 font-bold text-lg shadow-lg shadow-terracotta/20 flex items-center justify-center gap-2 group">
          <span>Find a Ride</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>;
}