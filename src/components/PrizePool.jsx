import React from 'react';
import { Trophy } from 'lucide-react';

const PrizePool = () => {
  return (
    <section className="py-12 bg-gray-900/50 border-y border-gray-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100px] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="p-4 bg-emerald-400/10 rounded-full animate-pulse">
            <Trophy className="w-12 h-12 text-emerald-400" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-2">
              Total Prize Pool
            </h2>
            <div className="inline-block">
              <span className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-glow-pulse drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]">
                ₹10,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
