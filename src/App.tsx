import { useState } from 'react';
import { EmpowermentPink } from './variants/EmpowermentPink';
import { LuxuryPro } from './variants/LuxuryPro';
import { TrustBlue } from './variants/TrustBlue';
import { ModernChic } from './variants/ModernChic';
type Variant = 'empowerment' | 'luxury' | 'trust' | 'modern';
export function App() {
  const [activeVariant, setActiveVariant] = useState<Variant>('empowerment');
  const renderVariant = () => {
    switch (activeVariant) {
      case 'empowerment':
        return <EmpowermentPink />;
      case 'luxury':
        return <LuxuryPro />;
      case 'trust':
        return <TrustBlue />;
      case 'modern':
        return <ModernChic />;
      default:
        return <EmpowermentPink />;
    }
  };
  const getBgColor = () => {
    switch (activeVariant) {
      case 'empowerment':
        return 'bg-gradient-to-br from-[#fef5fb] to-[#f5eeff]';
      case 'luxury':
        return 'bg-[#0a0a0a]';
      case 'trust':
        return 'bg-[#e3f2fd]';
      case 'modern':
        return 'bg-gradient-to-br from-[#fafafa] to-[#f5f5f5]';
      default:
        return 'bg-gray-100';
    }
  };
  return <div className={`min-h-screen w-full transition-colors duration-500 ${getBgColor()} relative flex items-center justify-center overflow-hidden`}>
      {/* Desktop Background Experience */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {activeVariant === 'empowerment' && <div className="w-full h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d91e72]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6a1b9a]/10 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#d91e72]/5 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#6a1b9a]/5 rounded-full blur-xl"></div>
          </div>}

        {activeVariant === 'luxury' && <div className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#000000]"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#d4af37]"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30"></div>
          </div>}

        {activeVariant === 'trust' && <div className="w-full h-full relative bg-[#e3f2fd]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1565c012_1px,transparent_1px),linear-gradient(to_bottom,#1565c012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1565c0]/5 rounded-full blur-[100px]"></div>
          </div>}

        {activeVariant === 'modern' && <div className="w-full h-full relative bg-gradient-to-br from-[#fafafa] to-[#f5f5f5]">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#d91e72]/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6a1b9a]/5 rounded-full blur-[100px]"></div>
          </div>}
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
        <button onClick={() => setActiveVariant('empowerment')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'empowerment' ? 'bg-gradient-to-r from-[#d91e72] to-[#c8175d] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#d91e72] to-[#6a1b9a] border-2 border-white/50"></div>
          <span className="font-medium">Empowerment Pink</span>
        </button>
        <button onClick={() => setActiveVariant('luxury')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'luxury' ? 'bg-[#0a0a0a] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#d4af37]"></div>
          <span className="font-medium">Luxury Pro</span>
        </button>
        <button onClick={() => setActiveVariant('trust')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'trust' ? 'bg-[#1565c0] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-[#1565c0] border-2 border-white/50"></div>
          <span className="font-medium">Trust Blue</span>
        </button>
        <button onClick={() => setActiveVariant('modern')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'modern' ? 'bg-gradient-to-r from-[#d91e72] to-[#6a1b9a] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#fafafa] to-[#d91e72] border-2 border-gray-300"></div>
          <span className="font-medium">Modern Chic</span>
        </button>
      </div>

      {/* Mobile Info Toast */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md lg:hidden z-50">
        View on desktop to switch themes
      </div>
    </div>;
}