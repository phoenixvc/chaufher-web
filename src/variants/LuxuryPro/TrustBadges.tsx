import { ShieldCheck, Heart, Clock } from 'lucide-react';

const stats = [{
  label: 'Rides Completed',
  value: '10k+',
  icon: Clock
}, {
  label: 'Verified Drivers',
  value: '100%',
  icon: ShieldCheck
}, {
  label: 'Safety Rating',
  value: '4.9/5',
  icon: Heart
}];
export function TrustBadges() {
  return <section className="py-6 px-6">
      <div className="flex justify-between gap-2">
        {stats.map((stat) => {
        const Icon = stat.icon;
        return <div key={stat.label} className="flex-1 bg-[#232946] p-3 rounded-lg border border-white/5 text-center">
              <Icon size={16} className="text-[#d4af37] mx-auto mb-2" />
              <div className="text-xl font-bold text-white font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                {stat.label}
              </div>
            </div>;
      })}
      </div>
    </section>;
}