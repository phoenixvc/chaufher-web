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
      title: 'FINDING DRIVER',
      subtitle: 'Usually takes less than 2 minutes',
      color: '#4ecdc4',
      bgColor: 'bg-[#4ecdc4]/10'
    },
    accepted: {
      icon: CheckCircle,
      title: 'DRIVER CONFIRMED',
      subtitle: 'Sarah M. is on the way • 5 min away',
      color: '#4ecdc4',
      bgColor: 'bg-[#4ecdc4]/10'
    },
    arriving: {
      icon: Navigation,
      title: 'ARRIVING SOON',
      subtitle: 'Sarah M. is 1 minute away',
      color: '#ff6b6b',
      bgColor: 'bg-[#ff6b6b]/10'
    },
    started: {
      icon: Navigation,
      title: 'TRIP IN PROGRESS',
      subtitle: 'Arriving at destination in 12 minutes',
      color: '#ff6b6b',
      bgColor: 'bg-[#ff6b6b]/10'
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
  }} className="mx-4 mb-6">
      <div className={`${config.bgColor} rounded-lg p-5 border border-white/10`}>
        <div className="flex items-start gap-4">
          <div className="p-2 bg-[#232946] rounded-md shadow-sm">
            <Icon size={20} style={{
            color: config.color
          }} strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-base mb-1 uppercase tracking-wide">
              {config.title}
            </h3>
            <p className="text-sm text-gray-400">{config.subtitle}</p>
          </div>
        </div>
      </div>
    </motion.div>;
}