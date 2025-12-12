import { ShieldCheck } from 'lucide-react';
const drivers = [{
  id: 1,
  name: 'Sarah Miller',
  rating: '5.0',
  verified: true,
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 2,
  name: 'Elena Rodriguez',
  rating: '4.9',
  verified: true,
  image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200'
}, {
  id: 3,
  name: 'Maya Thompson',
  rating: '4.8',
  verified: true,
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
}];
export function DriverSpotlight() {
  return <section className="py-12 px-8 border-t border-gray-100">
      <div className="mb-8">
        <h2 className="text-xs font-bold text-[#6a1b9a] uppercase tracking-widest mb-1">
          Available Drivers
        </h2>
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          All verified female drivers
        </p>
      </div>

      <div className="space-y-6">
        {drivers.map(driver => <div key={driver.id} className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src={driver.image} alt={driver.name} className="w-10 h-10 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                {/* Safety Badge - Guardrail: Safety signals explicit */}
                {driver.verified && <div className="absolute -top-0.5 -right-0.5 bg-[#6a1b9a] rounded-full p-0.5">
                    <ShieldCheck size={8} className="text-white" strokeWidth={3} />
                  </div>}
              </div>
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