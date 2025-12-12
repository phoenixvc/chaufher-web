import { Hero } from './Hero';
import { BookingCard } from './BookingCard';
import { DriverSpotlight } from './DriverSpotlight';
import { TrustBadges } from './TrustBadges';
import { RecentTrips } from './RecentTrips';
import { BottomNav } from './BottomNav';
export function TrustBlue() {
  return <div className="min-h-screen bg-[#f8fafb] pb-24 font-sans text-[#1a1a1a] relative overflow-hidden">
      <div className="relative z-10">
        <Hero />

        {/* Example: Show trip status when applicable - Guardrail: Status Clarity */}
        {/* <TripStatus state="accepted" /> */}

        <BookingCard />
        <DriverSpotlight />
        <TrustBadges />
        <RecentTrips />
        <BottomNav />
      </div>
    </div>;
}