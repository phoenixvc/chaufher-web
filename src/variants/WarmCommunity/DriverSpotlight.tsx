import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
const drivers = [{
  id: 1,
  name: 'Sarah M.',
  rating: 4.9,
  trips: '1.2k',
  verified: true,
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 2,
  name: 'Elena R.',
  rating: 5.0,
  trips: '850',
  verified: true,
  image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 3,
  name: 'Maya T.',
  rating: 4.8,
  trips: '2.1k',
  verified: true,
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 4,
  name: 'Priya K.',
  rating: 4.9,
  trips: '920',
  verified: true,
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
}];
export function DriverSpotlight() {
  return <section className="py-6">
      <div className="px-6 mb-4 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-bold text-[#2d2d2d] font-sans">
            Meet your ChaufHERs
          </h2>
          <p className="text-xs text-[#7a9b76] font-medium mt-0.5">
            All verified female drivers
          </p>
        </div>
        <button className="text-[#d4735e] text-sm font-medium hover:text-[#c06552] transition-colors">
          View all
        </button>
      </div>

      <div className="flex overflow-x-auto px-6 pb-6 gap-5 no-scrollbar snap-x">
        {drivers.map(driver => <div key={driver.id} className="flex flex-col items-center flex-shrink-0 snap-start">
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full p-1 border-2 border-dashed border-[#d4735e]/30">
                <img src={driver.image} alt={driver.name} className="w-full h-full rounded-full object-cover border-2 border-white shadow-md" />
              </div>
              {/* Safety Badge - Guardrail: Safety signals explicit */}
              {driver.verified && <div className="absolute -top-1 -right-1 bg-[#7a9b76] rounded-full p-1 shadow-sm border-2 border-white">
                  <ShieldCheck size={12} className="text-white" strokeWidth={3} />
                </div>}
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-1.5 py-0.5 shadow-sm border border-[#faf8f5] flex items-center gap-0.5">
                <Star size={10} className="text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] font-bold text-[#2d2d2d]">
                  {driver.rating}
                </span>
              </div>
            </div>
            <span className="text-sm font-semibold text-[#2d2d2d]">
              {driver.name}
            </span>
            <span className="text-xs text-[#666]">{driver.trips} rides</span>
          </div>)}
      </div>
    </section>;
}