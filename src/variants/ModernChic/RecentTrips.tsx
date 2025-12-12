import { RotateCcw, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
const recentTrips = [{
  id: 1,
  from: 'Home',
  to: 'Rosebank Mall',
  date: 'Yesterday',
  price: 'R85'
}, {
  id: 2,
  from: 'Office',
  to: 'OR Tambo Airport',
  date: '3 days ago',
  price: 'R420'
}];
export function RecentTrips() {
  return <section className="py-6 px-6">
      <h2 className="text-white font-bold text-lg drop-shadow-sm mb-4">
        Recent Trips
      </h2>

      <div className="space-y-3">
        {recentTrips.map((trip, index) => <motion.button key={trip.id} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: index * 0.1
      }} className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all text-left group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#d91e72]"></div>
                  <span className="text-sm font-medium text-white">
                    {trip.from}
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <MapPin size={14} className="text-[#d4af37]" />
                  <span className="text-sm font-medium text-white">
                    {trip.to}
                  </span>
                </div>
                <span className="text-xs text-white/60 mt-2 block">
                  {trip.date}
                </span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-sm font-bold text-white">
                  {trip.price}
                </span>
                <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-[#d4af37] transition-colors">
                  <RotateCcw size={14} className="text-white group-hover:text-[#2d2d2d] transition-colors" />
                </div>
              </div>
            </div>
          </motion.button>)}
      </div>
    </section>;
}