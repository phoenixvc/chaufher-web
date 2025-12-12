import React from 'react';
import { Hero } from './Hero';
import { TripStatus } from './TripStatus';
import { BookingCard } from './BookingCard';
import { DriverSpotlight } from './DriverSpotlight';
import { TrustBadges } from './TrustBadges';
import { RecentTrips } from './RecentTrips';
import { BottomNav } from './BottomNav';
export function VibrantEnergy() {
  return <div className="min-h-screen bg-gradient-to-br from-[#ff6b35] via-[#e63946] to-[#6a4c93] pb-24 font-sans text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ffd23f]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#4ecdc4]/20 rounded-full blur-3xl"></div>
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