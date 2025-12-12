import React from 'react';
import { Shield, Users, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
const badges = [{
  icon: Shield,
  label: 'Verified Safe'
}, {
  icon: Users,
  label: 'Women-Driven'
}, {
  icon: Heart,
  label: 'Community'
}, {
  icon: Clock,
  label: '24/7 Support'
}];
export function TrustBadges() {
  return <section className="py-8 px-6">
      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge, index) => {
        const Icon = badge.icon;
        return <motion.div key={badge.label} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: 'easeOut',
          delay: index * 0.1 + 0.3
        }} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-[#faf8f5]">
              <div className="p-2 bg-[#7a9b76]/10 rounded-full text-[#7a9b76]">
                <Icon size={20} strokeWidth={2} />
              </div>
              <span className="text-sm font-medium text-[#4a4a4a] font-sans">
                {badge.label}
              </span>
            </motion.div>;
      })}
      </div>
    </section>;
}