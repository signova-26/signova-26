import React from 'react';
import { Phone, MapPin, Clock, Info, IdCard } from 'lucide-react';

const Contact = () => {
  const coordinators = [
    { name: "THARIS. S", role: "Secretary", phone: "+91 88072 41683" },
    { name: "HARINI", role: "Joint Secretary", phone: "+91 88704 55775" },
    { name: "DIVYALAKSHMANI. G", role: "Students Co-ordinator", phone: "+91 77089 93874" },
    { name: "NAVEEN KUMAR. K", role: "Overall Co-ordinator", phone: "+91 88079 76906" }
  ];

  return (
    <section id="contact" className="py-6 md:py-8 bg-gray-950/50 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-400">Get in touch with our event coordinators.</p>
        </div>

        {/* Top Row: Coordinators */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-mono font-bold text-cyan-400 mb-3 border-b border-gray-800 pb-1 text-center md:text-left">
            EVENT CO-ORDINATORS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {coordinators.map((coord, idx) => (
              <div key={idx} className="flex flex-col p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 transition-colors text-center md:text-left">
                <h4 className="text-white font-bold text-base mb-0.5">{coord.name}</h4>
                <span className="text-xs text-emerald-400 mb-3">{coord.role}</span>
                <a href={`tel:${coord.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-cyan-400 transition-colors mt-auto">
                  <Phone className="w-3 h-3" />
                  <span className="font-mono text-xs">{coord.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: How to Reach & Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* How to Reach */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-mono font-bold text-cyan-400 mb-3 border-b border-gray-800 pb-1 text-center md:text-left">
              HOW TO REACH
            </h3>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:border-cyan-400/50 transition-colors">
              <h4 className="text-white font-bold text-sm md:text-base mb-1">From Central Bus Stand, Trichy</h4>
              <ul className="space-y-1 text-xs text-gray-300">
                <li><span className="font-semibold text-emerald-400">Bus No.:</span> K1</li>
                <li>Approximately every 1 hour</li>
                <li><span className="font-semibold text-emerald-400">Travel Time:</span> Around 40 minutes</li>
                <li><span className="font-semibold text-emerald-400">First Bus:</span> 5:30 AM</li>
              </ul>
              <div className="mt-2 flex items-start gap-2 text-cyan-400 bg-cyan-400/10 p-2 rounded border border-cyan-400/20">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs">Get down at <strong>Anna University Bus Stop</strong></span>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:border-cyan-400/50 transition-colors">
              <h4 className="text-white font-bold text-sm md:text-base mb-1">From TVS tolgate, Trichy</h4>
              <p className="text-xs text-gray-300 mb-2">Board any bus heading towards Pudukottai, Keeranur. Buses are available frequently.</p>
              <div className="flex items-start gap-2 text-cyan-400 bg-cyan-400/10 p-2 rounded border border-cyan-400/20">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs">Get down at <strong>Anna University Bus Stop</strong></span>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:border-cyan-400/50 transition-colors">
              <h4 className="text-white font-bold text-sm md:text-base mb-1">From Panjapur (KKBT), Trichy</h4>
              <p className="text-xs text-gray-300 mb-2">Board any bus heading towards Pudukottai. Buses are available frequently.</p>
              <div className="flex items-start gap-2 text-cyan-400 bg-cyan-400/10 p-2 rounded border border-cyan-400/20">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs">Get down at <strong>Anna University Bus Stop</strong></span>
              </div>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-900/50 rounded-lg p-3">
              <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                <Info className="w-3 h-3" /> Important Note
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Arrive at venue by <strong>8:30 AM</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IdCard className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Carry <strong>College ID Card</strong> for entry.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Google Maps */}
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-mono font-bold text-cyan-400 mb-3 border-b border-gray-800 pb-1 text-center md:text-left">
              GOOGLE MAPS
            </h3>
            <div className="h-full min-h-[300px] rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0, minHeight: '300px' }} 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=University%20College%20of%20Engineering,%20BIT%20Campus,%20Trichy&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
