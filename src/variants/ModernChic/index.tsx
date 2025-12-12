import { Hero } from './Hero';
import { BookingCard } from './BookingCard';
import { DriverSpotlight } from './DriverSpotlight';
import { TrustBadges } from './TrustBadges';
import { RecentTrips } from './RecentTrips';
import { BottomNav } from './BottomNav';
export function ModernChic() {
  return <div className="min-h-screen bg-gradient-to-br from-[#fafafa] to-[#f0f0f0] pb-24 font-sans text-[#1a1a1a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#e91e8c]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#7b2cbf]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Hero />

        {/* Example: Show trip status when applicable - Guardrail: Status Clarity */}
        {/* <TripStatus state="accepted" /> */}

        <BookingCard />
        <div className="mt-8 space-y-8">
          <TrustBadges />
          <DriverSpotlight />
          <RecentTrips />
        </div>
        <BottomNav />
      </div>
    </div>;
}