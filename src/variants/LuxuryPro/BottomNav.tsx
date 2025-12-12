import { useState } from 'react';
import { Home, Map, MessageSquare, User } from 'lucide-react';
export function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');
  const navItems = [{
    id: 'home',
    icon: Home,
    label: 'Home'
  }, {
    id: 'rides',
    icon: Map,
    label: 'Activity'
  }, {
    id: 'messages',
    icon: MessageSquare,
    label: 'Chat'
  }, {
    id: 'profile',
    icon: User,
    label: 'Account'
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 pb-safe pt-1 px-6 z-50 absolute w-full">
      <div className="flex justify-between items-center h-16">
        {navItems.map(item => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        return <button key={item.id} onClick={() => setActiveTab(item.id)} className="flex flex-col items-center justify-center w-16 h-full group">
              <div className={`relative p-1.5 rounded-md transition-all duration-200 ${isActive ? 'bg-[#d4af37] text-[#0a0a0a]' : 'text-gray-400 group-hover:text-white'}`}>
                <Icon size={20} strokeWidth={2.5} />
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wider mt-1.5 transition-colors ${isActive ? 'text-[#d4af37]' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </button>;
      })}
      </div>
    </nav>;
}