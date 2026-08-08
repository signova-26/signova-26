import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const Hero = ({ onRegisterClick }) => {
  // Target date: August 27, 2026 09:00:00
  const [targetDate] = useState(new Date('2026-08-27T09:00:00').getTime());
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center mx-1.5 md:mx-3">
      <div className="w-14 h-14 md:w-20 md:h-20 bg-gray-900/80 border border-cyan-400/30 flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.15)] mb-1.5">
        <span className="font-mono text-2xl md:text-4xl font-bold text-cyan-400">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="font-mono text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section id="home" className="relative min-h-[80vh] md:h-screen flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden bg-grid-pattern">
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center mt-8 md:mt-0">
        <img src="/logo2.png" alt="SIGNOVA Logo" className="h-24 md:h-32 w-auto mb-2 md:mb-3 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)] animate-pulse" />
        <p className="text-xs sm:text-sm md:text-base text-white mb-1 font-mono font-bold tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] md:whitespace-nowrap">
          University College of Engineering (BIT campus), Anna University, Tiruchirappalli - 24.
        </p>

        <p className="text-[10px] md:text-sm text-cyan-400 mb-1 font-mono tracking-[0.2em] ml-[0.2em]">
          Department of Electronics and Communication Engineering
        </p>

        <p className="text-[10px] md:text-xs text-gray-400 mb-1 font-mono tracking-widest italic lowercase">
          proudly presents
        </p>

        <p className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2 font-mono tracking-widest italic lowercase relative z-20">
          A National Level Technical Symposium
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 leading-none drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] tracking-tighter relative z-10">
          SIGNOVA'26
        </h1>
        
        <p className="text-xs md:text-sm text-gray-400 -mt-1 md:-mt-2 mb-3 md:mb-4 font-mono tracking-widest italic lowercase relative z-20">
          A Confluence of Talent and Technology
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 mb-4 md:mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] relative z-20 mt-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 md:w-7 md:h-7 text-cyan-300" />
            <h2 className="text-sm sm:text-base md:text-2xl mt-1 font-mono font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500">
              August 27, 2026
            </h2>
          </div>
          <span className="hidden md:inline text-gray-400 mx-1 text-2xl">|</span>
          <h2 className="text-sm sm:text-base md:text-2xl font-mono font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500">
            9:00 AM Onwards
          </h2>
        </div>

        <div className="flex justify-center mb-5 md:mb-8">
          <TimeBlock value={timeLeft.days} label="Days" />
          <div className="text-3xl md:text-4xl text-cyan-400/50 mt-4 md:mt-5 animate-pulse">:</div>
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <div className="text-3xl md:text-4xl text-cyan-400/50 mt-4 md:mt-5 animate-pulse">:</div>
          <TimeBlock value={timeLeft.minutes} label="Mins" />
          <div className="text-3xl md:text-4xl text-cyan-400/50 mt-4 md:mt-5 animate-pulse">:</div>
          <TimeBlock value={timeLeft.seconds} label="Secs" />
        </div>

        <button 
          onClick={onRegisterClick}
          className="btn-primary text-base md:text-lg px-8 py-3 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          Register Now!
        </button>
      </div>
    </section>
  );
};

export default Hero;
