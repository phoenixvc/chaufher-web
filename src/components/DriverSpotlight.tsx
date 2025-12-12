import React from 'react';
import { Star } from 'lucide-react';
const drivers = [{
  id: 1,
  name: 'Sarah M.',
  rating: 4.9,
  trips: '1.2k',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 2,
  name: 'Elena R.',
  rating: 5.0,
  trips: '850',
  image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 3,
  name: 'Maya T.',
  rating: 4.8,
  trips: '2.1k',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 4,
  name: 'Priya K.',
  rating: 4.9,
  trips: '920',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
}];
export function DriverSpotlight() {
  return <section className="py-6">
      <div className="px-6 mb-4 flex justify-between items-end">
        <h2 className="text-xl font-bold text-warmgray-900 font-display">
          Meet your ChaufHERs
        </h2>
        <button className="text-terracotta text-sm font-medium hover:text-terracotta-600 transition-colors">
          View all
        </button>
      </div>

      <div className="flex overflow-x-auto px-6 pb-6 gap-5 no-scrollbar snap-x">
        {drivers.map(driver => <div key={driver.id} className="flex flex-col items-center flex-shrink-0 snap-start">
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full p-1 border-2 border-dashed border-terracotta/30">
                <img src={driver.image} alt={driver.name} className="w-full h-full rounded-full object-cover border-2 border-white shadow-md" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-1.5 py-0.5 shadow-sm border border-stone-100 flex items-center gap-0.5">
                <Star size={10} className="text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] font-bold text-warmgray-800">
                  {driver.rating}
                </span>
              </div>
            </div>
            <span className="text-sm font-semibold text-warmgray-800">
              {driver.name}
            </span>
            <span className="text-xs text-warmgray-500">
              {driver.trips} rides
            </span>
          </div>)}
      </div>
    </section>;
}