import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Are on-spot registrations allowed?",
      a: "Yes, on-spot registrations are allowed, but we strongly recommend registering online beforehand to secure your spot and avoid long queues."
    },
    {
      q: "Is accommodation provided?",
      a: "No, accommodation is not provided."
    },
    {
      q: "Can I participate in multiple events?",
      a: "Absolutely! You can participate in as many events as you like, provided their timings do not clash. Please check the timeline for schedule details."
    },
    {
      q: "What is the registration fee?",
      a: (
        <div className="space-y-3">
          <p>For an Individual: <strong>Rs. 250 /-</strong> per participant</p>
          <div>
            <p className="font-semibold text-emerald-400">• Team (4 Members): Rs. 750 /- only [3 + 1(free)]</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-400">
              <li>Register as a team of 4 members.</li>
              <li>Pay for 3 participants (Rs. 750 /-)</li>
              <li>1 participant gets free registration.</li>
              <li>Valid only for 4 members</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      q: "Who can I contact for queries?",
      a: "You can reach out to our event coordinators at signova.bitece@gmail.com or contact the phone numbers provided in the footer section."
    }
  ];

  return (
    <section id="faqs" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">Everything you need to know about SIGNOVA'26.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
                openIndex === index ? 'border-cyan-400 bg-gray-900/80 shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'border-gray-800 bg-gray-900/40 hover:border-gray-700'
              }`}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-mono font-semibold text-white pr-4">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] py-4 border-t border-gray-800/50' : 'max-h-0'
                }`}
              >
                <div className="text-gray-300">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
