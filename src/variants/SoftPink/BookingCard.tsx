import { MapPin, ArrowRight } from 'lucide-react';
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
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#f48fb1] transform rotate-45"></div>
            <input type="text" placeholder="Current Location" className="w-full bg-transparent py-5 pl-10 pr-4 text-white placeholder:text-gray-500 outline-none font-medium text-lg focus:bg-white/5 transition-colors" defaultValue="Sandton City, Johannesburg" />
          </div>

          {/* Destination Input */}
          <div className="relative group">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <MapPin size={18} className="text-[#f48fb1]" />
            </div>
            <input type="text" placeholder="Where to?" className="w-full bg-transparent py-5 pl-10 pr-4 text-white placeholder:text-gray-500 outline-none font-medium text-lg focus:bg-white/5 transition-colors" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-2 mt-6">
          {['Home', 'Work', 'Gym', 'Airport'].map(place => <button key={place} className="py-2.5 rounded-lg bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider hover:bg-[#f48fb1] hover:text-[#fff5f9] transition-all">
              {place}
            </button>)}
        </div>

        {/* Pricing Info - Guardrail: Predictability */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-lg font-bold font-mono">R</span>
            <span className="text-sm font-mono uppercase tracking-wider">
              Est. Fare
            </span>
          </div>
          <span className="text-xl font-bold text-white font-mono">
            R180-220
          </span>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-4 bg-[#f48fb1] hover:bg-[#ec407a] active:translate-y-0.5 transition-all text-[#fff5f9] rounded-lg py-4 font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          <span>Request Ride</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
        </button>

        {/* Cancellation Policy - Guardrail: Predictability */}
        <p className="text-[10px] text-gray-500 text-center mt-3 uppercase tracking-widest font-mono">
          Free cancellation • 5 min before pickup
        </p>
      </div>
    </motion.div>;
}