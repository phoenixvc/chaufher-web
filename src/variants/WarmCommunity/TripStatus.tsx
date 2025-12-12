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
      title: 'Finding your driver...',
      subtitle: 'This usually takes less than 2 minutes',
      color: '#7a9b76',
      bgColor: 'bg-[#7a9b76]/10'
    },
    accepted: {
      icon: CheckCircle,
      title: 'Driver accepted!',
      subtitle: 'Sarah M. is on the way • 5 min away',
      color: '#7a9b76',
      bgColor: 'bg-[#7a9b76]/10'
    },
    arriving: {
      icon: Navigation,
      title: 'Driver arriving soon',
      subtitle: 'Sarah M. is 1 minute away',
      color: '#d4735e',
      bgColor: 'bg-[#d4735e]/10'
    },
    started: {
      icon: Navigation,
      title: 'Trip in progress',
      subtitle: 'Arriving at destination in 12 minutes',
      color: '#d4735e',
      bgColor: 'bg-[#d4735e]/10'
    }
  };
  const config = statusConfig[state];
  const Icon = config.icon;
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} className="mx-6 mb-6">
      <div className={`${config.bgColor} rounded-2xl p-5 border border-white/50`}>
        <div className="flex items-start gap-4">
          <div className="p-2 bg-white rounded-full shadow-sm">
            <Icon size={20} style={{
            color: config.color
          }} strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#2d2d2d] text-base mb-1">
              {config.title}
            </h3>
            <p className="text-sm text-[#666]">{config.subtitle}</p>
          </div>
        </div>
      </div>
    </motion.div>;
}