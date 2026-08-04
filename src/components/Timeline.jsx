import React, { useRef, useEffect, useState } from 'react';

const Timeline = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId;

    const scroll = () => {
      if (!isHovered) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Only animate if scrolling is possible
        if (maxScroll > 0) {
          if (container.scrollLeft >= maxScroll - 10) {
            // Reached the end, smooth scroll back to start
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll right by approximately one card width
            container.scrollBy({ left: 340, behavior: 'smooth' });
          }
        }
      }
    };

    // Trigger scroll every 2 seconds
    intervalId = setInterval(scroll, 2000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const schedule = [
    { time: '09:00 AM', title: 'Spot Registration & Kit Distribution', desc: 'Arrive early to collect your symposium kit and ID card.' },
    { time: '10:00 AM', title: 'Inauguration Ceremony', desc: 'Official kick-off by the Head of Department and Chief Guest.' },
    { time: '11:00 AM', title: 'Technical Events Commence', desc: 'Paper presentation, Bid & Build, and Mystery event start simultaneously.' },
    { time: '01:00 PM', title: 'Lunch Break', desc: 'Recharge and network.' },
    { time: '02:00 PM', title: 'Non-Technical Events', desc: 'Rapid fire, Guess the component, and Crack the circuit begin.' },
    { time: '05:00 PM', title: 'Valedictory & Prize Distribution', desc: 'Honoring the winners and closing remarks.' }
  ];

  return (
    <section id="timeline" className="py-24 bg-gray-900/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-cyan-400 mb-4 inline-block relative">
            Symposium Schedule
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
          </h2>
        </div>

        {/* Horizontal Timeline Container */}
        <div 
          className="relative w-full overflow-x-auto pb-8 pt-12 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent"
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="flex w-max min-w-full items-center relative px-8">
            
            {/* The Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 rounded-full"></div>

            {schedule.map((item, index) => (
              <div key={index} className="relative flex flex-col justify-center items-center w-72 md:w-80 px-4 snap-center group">
                
                {/* Top Card Area */}
                <div className={`w-full h-44 ${index % 2 === 0 ? 'mb-10' : 'mb-10 opacity-0 pointer-events-none'}`}>
                  {index % 2 === 0 && (
                    <div className="glass-card p-5 h-full relative group-hover:border-emerald-400/50 transition-colors flex flex-col justify-center hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(52,211,153,0.15)] duration-300">
                      <div className="text-cyan-400 font-mono text-sm font-bold mb-2">{item.time}</div>
                      <h3 className="text-base font-mono font-bold text-white mb-2 leading-tight">{item.title}</h3>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-gray-900 border-4 border-cyan-500 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 group-hover:bg-emerald-400 group-hover:border-emerald-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10"></div>
                
                {/* Vertical Connector */}
                <div className={`absolute left-1/2 w-0.5 bg-gray-700 -translate-x-1/2 group-hover:bg-emerald-400/50 transition-colors duration-300 ${index % 2 === 0 ? 'top-[50%] -mt-10 h-10' : 'bottom-[50%] -mb-10 h-10'} z-0`}></div>

                {/* Bottom Card Area */}
                <div className={`w-full h-44 ${index % 2 !== 0 ? 'mt-10' : 'mt-10 opacity-0 pointer-events-none'}`}>
                  {index % 2 !== 0 && (
                    <div className="glass-card p-5 h-full relative group-hover:border-emerald-400/50 transition-colors flex flex-col justify-center hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(52,211,153,0.15)] duration-300">
                      <div className="text-cyan-400 font-mono text-sm font-bold mb-2">{item.time}</div>
                      <h3 className="text-base font-mono font-bold text-white mb-2 leading-tight">{item.title}</h3>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  )}
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
