import { useState } from 'react';
import { WarmCommunity } from './variants/WarmCommunity';
import { BoldProfessional } from './variants/BoldProfessional';
import { MinimalClarity } from './variants/MinimalClarity';
import { VibrantEnergy } from './variants/VibrantEnergy';
type Variant = 'warm' | 'bold' | 'minimal' | 'vibrant';
export function App() {
  const [activeVariant, setActiveVariant] = useState<Variant>('warm');
  const renderVariant = () => {
    switch (activeVariant) {
      case 'warm':
        return <WarmCommunity />;
      case 'bold':
        return <BoldProfessional />;
      case 'minimal':
        return <MinimalClarity />;
      case 'vibrant':
        return <VibrantEnergy />;
      default:
        return <WarmCommunity />;
    }
  };
  const getBgColor = () => {
    switch (activeVariant) {
      case 'warm':
        return 'bg-[#e8e4df]';
      case 'bold':
        return 'bg-[#0f1225]';
      case 'minimal':
        return 'bg-[#f5f5f5]';
      case 'vibrant':
        return 'bg-[#2d1b4e]';
      default:
        return 'bg-gray-100';
    }
  };
  return <div className={`min-h-screen w-full transition-colors duration-500 ${getBgColor()} relative flex items-center justify-center overflow-hidden`}>
      {/* Desktop Background Experience */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {activeVariant === 'warm' && <div className="w-full h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4735e]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7a9b76]/10 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#d4735e]/5 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#7a9b76]/5 rounded-full blur-xl"></div>
          </div>}

        {activeVariant === 'bold' && <div className="w-full h-full relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a] via-[#1a1f3a] to-[#0f1225] opacity-90"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#ff6b6b]"></div>
          </div>}

        {activeVariant === 'minimal' && <div className="w-full h-full relative bg-[#f9f9f9]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>}

        {activeVariant === 'vibrant' && <div className="w-full h-full relative bg-gradient-to-br from-[#ff6b35] via-[#e63946] to-[#6a4c93] opacity-50 blur-3xl scale-110"></div>}
      </div>

      {/* Mobile Frame */}
      <div className="relative z-10 w-full max-w-md h-[100dvh] lg:h-[850px] lg:max-h-[90vh] bg-white shadow-2xl lg:rounded-[3rem] overflow-hidden transition-all duration-500 ring-8 ring-black/5">
        <div className="h-full w-full overflow-y-auto no-scrollbar relative">
          {renderVariant()}
        </div>

        {/* Mobile Frame Notch (Desktop Only) */}
        <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"></div>
      </div>

      {/* Variant Switcher (Desktop Only) */}
      <div className="fixed top-8 right-8 z-50 hidden lg:flex flex-col gap-3 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-gray-200/50">
        <div className="px-2 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
          Select Theme
        </div>
        <button onClick={() => setActiveVariant('warm')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'warm' ? 'bg-[#d4735e] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-[#d4735e] border-2 border-white/50"></div>
          <span className="font-medium">Warm Community</span>
        </button>
        <button onClick={() => setActiveVariant('bold')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'bold' ? 'bg-[#1a1f3a] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-[#1a1f3a] border-2 border-[#4ecdc4]"></div>
          <span className="font-medium">Bold Professional</span>
        </button>
        <button onClick={() => setActiveVariant('minimal')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'minimal' ? 'bg-[#2d5016] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-white border-2 border-[#2d5016]"></div>
          <span className="font-medium">Minimal Clarity</span>
        </button>
        <button onClick={() => setActiveVariant('vibrant')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'vibrant' ? 'bg-gradient-to-r from-[#ff6b35] to-[#6a4c93] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-[#ffd23f] border-2 border-white/50"></div>
          <span className="font-medium">Vibrant Energy</span>
        </button>
      </div>

      {/* Mobile Info Toast */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md lg:hidden z-50">
        View on desktop to switch themes
      </div>
    </div>;
}