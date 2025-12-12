import { Hero } from './Hero';
import { BookingCard } from './BookingCard';
import { DriverSpotlight } from './DriverSpotlight';
import { TrustBadges } from './TrustBadges';
import { RecentTrips } from './RecentTrips';
import { BottomNav } from './BottomNav';
export function LuxuryPro() {
  return <div className="min-h-screen bg-[#0a0a0a] pb-24 font-sans text-white relative overflow-hidden">
      <div className="relative z-10">
        <Hero />

        {/* Example: Show trip status when applicable - Guardrail: Status Clarity */}
        {/* <TripStatus state="accepted" /> */}

        <div className="space-y-4">
          <BookingCard />
          <TrustBadges />
          <DriverSpotlight />
          <RecentTrips />

          {/* Promo Section */}
          <div className="px-4 py-2">
            <div className="bg-gradient-to-r from-[#d4af37] to-[#c49a2e] rounded-lg p-5 flex items-center justify-between shadow-lg">
              <div>
                <h3 className="font-bold text-[#0a0a0a] text-lg uppercase tracking-wide mb-1">
                  Refer & Earn
                </h3>
                <p className="text-[#0a0a0a]/80 text-sm font-medium mb-3">
                  Get $20 credit for every friend.
                </p>
                <button className="text-xs font-bold bg-[#0a0a0a] text-[#d4af37] px-4 py-2 rounded hover:bg-black transition-colors uppercase tracking-wider border border-[#d4af37]/30">
                  Invite Now
                </button>
              </div>
              <div className="text-4xl opacity-20 font-mono font-bold text-[#0a0a0a]">
                $20
              </div>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>;
}