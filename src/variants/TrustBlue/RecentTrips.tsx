import { RotateCcw } from 'lucide-react';
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
  return <section className="py-12 px-8 border-t border-gray-100">
      <h2 className="text-xs font-bold text-[#1565c0] uppercase tracking-widest mb-8">
        Recent Trips
      </h2>

      <div className="space-y-4">
        {recentTrips.map(trip => <button key={trip.id} className="w-full text-left border-b border-gray-50 pb-4 hover:border-[#1565c0] transition-colors group">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-base font-serif text-[#1a1a1a] mb-1">
                  {trip.from} → {trip.to}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">
                  {trip.date}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-serif text-[#1565c0]">
                  {trip.price}
                </span>
                <RotateCcw size={14} className="text-gray-300 group-hover:text-[#1565c0] transition-colors" strokeWidth={1.5} />
              </div>
            </div>
          </button>)}
      </div>
    </section>;
}