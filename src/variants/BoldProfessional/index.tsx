import React from 'react';
import { Hero } from './Hero';
import { BookingCard } from './BookingCard';
import { DriverSpotlight } from './DriverSpotlight';
import { TrustBadges } from './TrustBadges';
import { BottomNav } from './BottomNav';
export function BoldProfessional() {
  return <div className="min-h-screen bg-[#1a1f3a] pb-24 font-sans text-white relative overflow-hidden">
      <div className="relative z-10">
        <Hero />
        <div className="space-y-4">
          <BookingCard />
          <TrustBadges />
          <DriverSpotlight />

          {/* Promo Section */}
          <div className="px-4 py-2">
            <div className="bg-gradient-to-r from-[#4ecdc4] to-[#2a9d8f] rounded-lg p-5 flex items-center justify-between shadow-lg">
              <div>
                <h3 className="font-bold text-[#1a1f3a] text-lg uppercase tracking-wide mb-1">
                  Refer & Earn
                </h3>
                <p className="text-[#1a1f3a]/80 text-sm font-medium mb-3">
                  Get $20 credit for every friend.
                </p>
                <button className="text-xs font-bold bg-[#1a1f3a] text-white px-4 py-2 rounded hover:bg-black transition-colors uppercase tracking-wider">
                  Invite Now
                </button>
              </div>
              <div className="text-4xl opacity-20 font-mono font-bold text-[#1a1f3a]">
                $20
              </div>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>;
}