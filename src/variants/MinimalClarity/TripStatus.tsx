import React from 'react';
import { Clock, Navigation, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
type TripState = 'awaiting' | 'accepted' | 'arriving' | 'started';
interface TripStatusProps {
  state?: TripState;
}
export function TripStatus({
  state = 'accepted'
}: TripStatusProps) {
  const statusConfig = {
    awaiting: {
      icon: Clock,
      title: 'Finding driver',
      subtitle: 'Usually takes less than 2 minutes'
    },
    accepted: {
      icon: CheckCircle,
      title: 'Driver confirmed',
      subtitle: 'Sarah Miller is on the way · 5 minutes'
    },
    arriving: {
      icon: Navigation,
      title: 'Arriving soon',
      subtitle: 'Sarah Miller is 1 minute away'
    },
    started: {
      icon: Navigation,
      title: 'Trip in progress',
      subtitle: 'Arriving at destination in 12 minutes'
    }
  };
  const config = statusConfig[state];
  const Icon = config.icon;
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="mx-8 mb-8">
      <div className="border border-gray-200 p-6">
        <div className="flex items-start gap-4">
          <Icon size={20} className="text-[#2d5016] mt-1" strokeWidth={1.5} />
          <div className="flex-1">
            <h3 className="font-serif text-lg text-[#1a1a1a] mb-1">
              {config.title}
            </h3>
            <p className="text-sm text-gray-500">{config.subtitle}</p>
          </div>
        </div>
      </div>
    </motion.div>;
}