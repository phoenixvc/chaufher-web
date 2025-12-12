import { Hero } from './Hero';
import { BookingCard } from './BookingCard';
import { DriverSpotlight } from './DriverSpotlight';
import { TrustBadges } from './TrustBadges';
import { RecentTrips } from './RecentTrips';
import { BottomNav } from './BottomNav';
export function GradientFusion() {
  return <div className="min-h-screen bg-gradient-to-br from-[#fce4ec] to-[#f3e5f5] pb-24 font-sans text-[#1a1a1a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#d91e72]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#6a1b9a]/5 rounded-full blur-3xl"></div>
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