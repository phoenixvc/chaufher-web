import { useState } from 'react';
import { Home, Car, MessageCircle, User } from 'lucide-react';
export function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');
  const navItems = [{
    id: 'home',
    icon: Home,
    label: 'Home'
  }, {
    id: 'rides',
    icon: Car,
    label: 'Rides'
  }, {
    id: 'messages',
    icon: MessageCircle,
    label: 'Messages'
  }, {
    id: 'profile',
    icon: User,
    label: 'Profile'
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#faf8f5] pb-safe pt-2 px-6 z-50 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.03)] absolute w-full">
      <div className="flex justify-between items-center h-16">
        {navItems.map(item => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        return <button key={item.id} onClick={() => setActiveTab(item.id)} className="flex flex-col items-center justify-center w-16 h-full transition-all duration-300 relative">
              <div className={`p-2 rounded-full transition-all duration-300 ${isActive ? 'bg-[#d91e72]/10 translate-y-[-4px]' : 'bg-transparent'}`}>
                <Icon size={24} className={`transition-colors duration-300 ${isActive ? 'text-[#d91e72]' : 'text-[#999]'}`} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-medium mt-1 transition-all duration-300 ${isActive ? 'text-[#d91e72] font-semibold' : 'text-[#999]'}`}>
                {item.label}
              </span>
            </button>;
      })}
      </div>
    </nav>;
}