import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function BookingCard() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.8,
    delay: 0.2
  }} className="mx-8 mt-4">
      <div className="space-y-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-2">
            <label className="block text-xs text-[#2d5016] font-medium mb-2 uppercase tracking-widest">
              From
            </label>
            <input type="text" defaultValue="Sandton City, Johannesburg" className="w-full text-xl text-[#1a1a1a] placeholder-gray-300 outline-none font-serif bg-transparent" />
          </div>
          <div className="border-b border-gray-200 pb-2">
            <label className="block text-xs text-[#2d5016] font-medium mb-2 uppercase tracking-widest">
              To
            </label>
            <input type="text" placeholder="Enter destination" className="w-full text-xl text-[#1a1a1a] placeholder-gray-300 outline-none font-serif bg-transparent" />
          </div>
        </div>

        {/* Pricing Info - Guardrail: Predictability */}
        <div className="flex items-center justify-between py-4 border-t border-gray-100">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Estimated Fare
          </span>
          <span className="text-2xl font-serif text-[#2d5016]">R180–220</span>
        </div>

        {/* CTA */}
        <button className="w-full bg-[#2d5016] text-white py-4 px-6 flex justify-between items-center hover:bg-[#1e360e] transition-colors group">
          <span className="text-sm font-medium tracking-wide uppercase">
            Request Driver
          </span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
        </button>

        {/* Cancellation Policy - Guardrail: Predictability */}
        <p className="text-xs text-gray-400 text-center uppercase tracking-widest">
          Free cancellation · 5 min before pickup
        </p>
      </div>
    </motion.div>;
}