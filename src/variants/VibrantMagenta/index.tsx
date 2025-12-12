import { Hero } from './Hero';
import { BookingCard } from './BookingCard';
import { DriverSpotlight } from './DriverSpotlight';
import { TrustBadges } from './TrustBadges';
import { RecentTrips } from './RecentTrips';
import { BottomNav } from './BottomNav';
export function VibrantMagenta() {
  return <div className="min-h-screen bg-[#fef5fb] pb-24 font-sans text-[#2d2d2d] selection:bg-[#d91e72]/20 relative overflow-hidden">
      <div className="relative z-10">
        <Hero />

        {/* Example: Show trip status when applicable - Guardrail: Status Clarity */}
        {/* <TripStatus state="accepted" /> */}

        <div className="space-y-2">
          <BookingCard />
          <div className="mt-8">
            <TrustBadges />
          </div>
          <div className="mt-2">
            <DriverSpotlight />
          </div>
          <RecentTrips />

          {/* Promo Section */}
          <div className="px-6 py-4">
            <div className="bg-gradient-to-br from-[#d91e72]/10 to-[#6a1b9a]/10 rounded-3xl p-6 flex items-center justify-between border border-[#d91e72]/20">
              <div>
                <h3 className="font-sans font-bold text-[#2d2d2d] text-lg mb-1">
                  Invite a friend
                </h3>
                <p className="text-[#666] text-sm mb-3">Give $10, get $10</p>
                <button className="text-xs font-bold bg-gradient-to-r from-[#d91e72] to-[#6a1b9a] text-white px-4 py-2 rounded-full hover:from-[#c8175d] hover:to-[#6a24b0] transition-all">
                  Share Code
                </button>
              </div>
              <div className="w-20 h-20 bg-[#d91e72]/20 rounded-full flex items-center justify-center opacity-80">
                <span className="text-3xl">🎁</span>
              </div>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>;
}