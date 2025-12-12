import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
const drivers = [{
  id: 1,
  name: 'Sarah',
  rating: '5.0',
  verified: true,
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 2,
  name: 'Elena',
  rating: '4.9',
  verified: true,
  image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 3,
  name: 'Maya',
  rating: '4.8',
  verified: true,
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
}];
export function DriverSpotlight() {
  return <section className="py-8">
      <div className="px-6 mb-4">
        <h2 className="text-white font-bold text-lg drop-shadow-sm mb-1">
          Nearby Drivers
        </h2>
        <p className="text-white/70 text-xs font-medium">
          All verified female drivers
        </p>
      </div>

      <div className="flex overflow-x-auto px-6 pb-8 gap-4 no-scrollbar snap-x">
        {drivers.map((driver, i) => <motion.div key={driver.id} initial={{
        x: 50,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        delay: 0.3 + i * 0.1
      }} className="flex-shrink-0 snap-center">
            <div className="w-32 h-40 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 flex flex-col items-center justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <img src={driver.image} alt={driver.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/50 shadow-lg" />
                {/* Safety Badge - Guardrail: Safety signals explicit */}
                {driver.verified && <div className="absolute -top-1 -right-1 bg-[#d4af37] rounded-full p-1 shadow-sm">
                    <ShieldCheck size={10} className="text-[#2d2d2d]" strokeWidth={3} />
                  </div>}
              </div>
              <div className="text-center relative z-10">
                <div className="text-white font-bold">{driver.name}</div>
                <div className="text-[#d4af37] text-xs font-bold">
                  ★ {driver.rating}
                </div>
              </div>
            </div>
          </motion.div>)}
      </div>
    </section>;
}