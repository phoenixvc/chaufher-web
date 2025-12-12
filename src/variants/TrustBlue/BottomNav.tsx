import { useState } from 'react';
export function BottomNav() {
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = ['Home', 'Book', 'Account'];
  return <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe pt-4 px-8 z-50 absolute w-full">
      <div className="flex justify-between items-center h-12 max-w-xs mx-auto">
        {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`text-xs uppercase tracking-widest transition-colors duration-300 ${activeTab === tab ? 'text-[#1565c0] font-bold' : 'text-gray-400 hover:text-gray-600'}`}>
            {tab}
          </button>)}
      </div>
    </nav>;
}