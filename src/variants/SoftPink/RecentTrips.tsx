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
  return <section className="py-6 px-6 border-t border-white/5">
      <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
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
      }} className="w-full bg-[#232946] rounded-lg p-4 border border-white/5 hover:border-[#f48fb1]/30 transition-all text-left group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#f48fb1] transform rotate-45"></div>
                  <span className="text-sm font-bold text-white">
                    {trip.from}
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <MapPin size={14} className="text-[#f48fb1]" />
                  <span className="text-sm font-bold text-white">
                    {trip.to}
                  </span>
                </div>
                <span className="text-xs text-gray-500 mt-2 block font-mono uppercase tracking-wider">
                  {trip.date}
                </span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-sm font-bold text-white font-mono">
                  {trip.price}
                </span>
                <div className="p-1.5 rounded bg-white/5 group-hover:bg-[#f48fb1] transition-colors">
                  <RotateCcw size={14} className="text-gray-400 group-hover:text-[#fff5f9] transition-colors" />
                </div>
              </div>
            </div>
          </motion.button>)}
      </div>
    </section>;
}