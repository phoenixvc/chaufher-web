import React from 'react';
import { Star, Shield } from 'lucide-react';
const drivers = [{
  id: 1,
  name: 'SARAH M.',
  rating: '5.0',
  trips: '1.2k',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 2,
  name: 'ELENA R.',
  rating: '4.9',
  trips: '850',
  image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 3,
  name: 'MAYA T.',
  rating: '4.8',
  trips: '2.1k',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
}];
export function DriverSpotlight() {
  return <section className="py-8 border-t border-white/5 mt-4">
      <div className="px-6 mb-6 flex justify-between items-center">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">
          Top Rated Drivers
        </h2>
        <button className="text-[#4ecdc4] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
          View All
        </button>
      </div>

      <div className="flex overflow-x-auto px-6 pb-4 gap-4 no-scrollbar">
        {drivers.map(driver => <div key={driver.id} className="flex items-center gap-4 bg-[#232946] p-3 pr-6 rounded-lg border border-white/5 min-w-[240px] flex-shrink-0">
            <div className="relative">
              <img src={driver.image} alt={driver.name} className="w-14 h-14 rounded-md object-cover grayscale contrast-125" />
              <div className="absolute -bottom-1 -right-1 bg-[#1a1f3a] p-0.5 rounded">
                <Shield size={12} className="text-[#4ecdc4] fill-[#4ecdc4]" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-0.5">
                {driver.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  <Star size={10} className="text-[#ff6b6b] fill-[#ff6b6b]" />
                  <span className="text-xs font-bold text-[#ff6b6b]">
                    {driver.rating}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">
                  {driver.trips} RIDES
                </span>
              </div>
            </div>
          </div>)}
      </div>
    </section>;
}