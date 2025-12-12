import { useState } from 'react';
import { Home, Compass, User } from 'lucide-react';
export function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');
  return <nav className="fixed bottom-6 left-6 right-6 bg-[#2d2d2d] rounded-full p-2 shadow-2xl border border-white/10 flex justify-between items-center z-50 absolute w-[calc(100%-3rem)] mx-auto">
      {[{
      id: 'home',
      icon: Home
    }, {
      id: 'explore',
      icon: Compass
    }, {
      id: 'profile',
      icon: User
    }].map(item => {
      const Icon = item.icon;
      const isActive = activeTab === item.id;
      return <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-[#d4af37] text-[#2d2d2d]' : 'text-white/50 hover:text-white'}`}>
            <Icon size={20} strokeWidth={2.5} />
          </button>;
    })}
    </nav>;
}