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
      title: 'Finding your driver',
      subtitle: 'Usually takes less than 2 minutes'
    },
    accepted: {
      icon: CheckCircle,
      title: 'Driver on the way!',
      subtitle: 'Sarah is coming · 5 minutes away'
    },
    arriving: {
      icon: Navigation,
      title: 'Almost there',
      subtitle: 'Sarah is 1 minute away'
    },
    started: {
      icon: Navigation,
      title: 'Enjoy your ride',
      subtitle: 'Arriving in 12 minutes'
    }
  };
  const config = statusConfig[state];
  const Icon = config.icon;
  return <motion.div initial={{
    scale: 0.9,
    opacity: 0
  }} animate={{
    scale: 1,
    opacity: 1
  }} transition={{
    type: 'spring',
    bounce: 0.3
  }} className="mx-4 mb-6">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-[#ffd23f] rounded-full shadow-sm">
            <Icon size={20} className="text-[#2d2d2d]" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-base mb-1">
              {config.title}
            </h3>
            <p className="text-sm text-white/70">{config.subtitle}</p>
          </div>
        </div>
      </div>
    </motion.div>;
}