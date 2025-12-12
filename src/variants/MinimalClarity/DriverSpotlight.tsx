import React from 'react';
const drivers = [{
  id: 1,
  name: 'Sarah Miller',
  rating: '5.0',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 2,
  name: 'Elena Rodriguez',
  rating: '4.9',
  image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 3,
  name: 'Maya Thompson',
  rating: '4.8',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
}];
export function DriverSpotlight() {
  return <section className="py-12 px-8">
      <h2 className="text-xs font-bold text-[#2d5016] uppercase tracking-widest mb-8">
        Available Drivers
      </h2>

      <div className="space-y-6">
        {drivers.map(driver => <div key={driver.id} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={driver.image} alt={driver.name} className="w-10 h-10 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="text-base text-[#1a1a1a] font-serif">
                {driver.name}
              </span>
            </div>
            <span className="text-xs text-gray-400 font-mono">
              {driver.rating} ★
            </span>
          </div>)}
      </div>
    </section>;
}