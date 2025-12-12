import { useState } from 'react';
import { VibrantMagenta } from './variants/VibrantMagenta';
import { SoftPink } from './variants/SoftPink';
import { DeepPurple } from './variants/DeepPurple';
import { GradientFusion } from './variants/GradientFusion';
type Variant = 'vibrant' | 'soft' | 'deep' | 'fusion';
export function App() {
  const [activeVariant, setActiveVariant] = useState<Variant>('vibrant');
  const renderVariant = () => {
    switch (activeVariant) {
      case 'vibrant':
        return <VibrantMagenta />;
      case 'soft':
        return <SoftPink />;
      case 'deep':
        return <DeepPurple />;
      case 'fusion':
        return <GradientFusion />;
      default:
        return <VibrantMagenta />;
    }
  };
  const getBgColor = () => {
    switch (activeVariant) {
      case 'vibrant':
        return 'bg-gradient-to-br from-[#fef5fb] to-[#f5eeff]';
      case 'soft':
        return 'bg-[#fff5f9]';
      case 'deep':
        return 'bg-[#f3e5f5]';
      case 'fusion':
        return 'bg-gradient-to-br from-[#fce4ec] to-[#f3e5f5]';
      default:
        return 'bg-gray-100';
    }
  };
  return <div className={`min-h-screen w-full transition-colors duration-500 ${getBgColor()} relative flex items-center justify-center overflow-hidden`}>
      {/* Desktop Background Experience */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {activeVariant === 'vibrant' && <div className="w-full h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d91e72]/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6a1b9a]/10 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#d91e72]/8 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#6a1b9a]/8 rounded-full blur-xl"></div>
          </div>}

        {activeVariant === 'soft' && <div className="w-full h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f48fb1]/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ec407a]/10 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#f48fb1]/10 rounded-full blur-xl"></div>
          </div>}

        {activeVariant === 'deep' && <div className="w-full h-full relative bg-[#f3e5f5]">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#6a1b9a]/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4a148c]/8 rounded-full blur-[80px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6a1b9a08_1px,transparent_1px),linear-gradient(to_bottom,#6a1b9a08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>}

        {activeVariant === 'fusion' && <div className="w-full h-full relative bg-gradient-to-br from-[#fce4ec] to-[#f3e5f5]">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#d91e72]/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6a1b9a]/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#d91e72]/5 to-[#6a1b9a]/5 rounded-full blur-3xl"></div>
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
          ChaufHER Variants
        </div>
        <button onClick={() => setActiveVariant('vibrant')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'vibrant' ? 'bg-gradient-to-r from-[#d91e72] to-[#c8175d] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#d91e72] to-[#6a1b9a] border-2 border-white/50"></div>
          <span className="font-medium">Vibrant Magenta</span>
        </button>
        <button onClick={() => setActiveVariant('soft')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'soft' ? 'bg-gradient-to-r from-[#f48fb1] to-[#ec407a] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#f48fb1] to-[#ec407a] border-2 border-white/50"></div>
          <span className="font-medium">Soft Pink</span>
        </button>
        <button onClick={() => setActiveVariant('deep')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'deep' ? 'bg-[#6a1b9a] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-[#6a1b9a] border-2 border-white/50"></div>
          <span className="font-medium">Deep Purple</span>
        </button>
        <button onClick={() => setActiveVariant('fusion')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeVariant === 'fusion' ? 'bg-gradient-to-r from-[#d91e72] via-[#ba68c8] to-[#6a1b9a] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}>
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#d91e72] via-[#ba68c8] to-[#6a1b9a] border-2 border-white/50"></div>
          <span className="font-medium">Gradient Fusion</span>
        </button>
      </div>

      {/* Mobile Info Toast */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md lg:hidden z-50">
        View on desktop to switch themes
      </div>
    </div>;
}