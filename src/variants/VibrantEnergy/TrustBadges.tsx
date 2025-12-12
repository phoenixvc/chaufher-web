import React from 'react';
import { Shield, Heart, Zap } from 'lucide-react';
export function TrustBadges() {
  return <div className="px-6 grid grid-cols-3 gap-3">
      {[{
      icon: Shield,
      label: 'Safe',
      color: 'text-[#4ecdc4]'
    }, {
      icon: Heart,
      label: 'Care',
      color: 'text-[#ff6b6b]'
    }, {
      icon: Zap,
      label: 'Fast',
      color: 'text-[#ffd23f]'
    }].map(badge => {
      const Icon = badge.icon;
      return <div key={badge.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center gap-1 border border-white/10">
            <Icon className={badge.color} size={20} />
            <span className="text-white text-xs font-bold">{badge.label}</span>
          </div>;
    })}
    </div>;
}