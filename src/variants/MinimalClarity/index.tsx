import React from 'react';
import { Hero } from './Hero';
import { BookingCard } from './BookingCard';
import { DriverSpotlight } from './DriverSpotlight';
import { TrustBadges } from './TrustBadges';
import { BottomNav } from './BottomNav';
export function MinimalClarity() {
  return <div className="min-h-screen bg-white pb-24 font-sans text-[#1a1a1a] relative overflow-hidden">
      <div className="relative z-10">
        <Hero />
        <BookingCard />
        <DriverSpotlight />
        <TrustBadges />
        <BottomNav />
      </div>
    </div>;
}