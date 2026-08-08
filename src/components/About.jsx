import React from 'react';
import { Cpu, Users, Trophy, CreditCard, Banknote } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "6 Events",
      description: "A perfect blend of challenging technical competitions and fun-filled non-technical activities."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "100+ Participants",
      description: "Join a massive crowd of brilliant minds from all over the region to network and compete."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-400" />,
      title: "Special Team Offer",
      description: (
        <div className="text-sm mt-3 space-y-3 text-center">
          <div>
            <span className="text-emerald-400/80 text-xs font-semibold block mb-1">(4 Members only)</span>
            <span className="text-emerald-400 font-bold block text-lg">₹750/- only (3 + 1 Free)</span>
          </div>
          <div className="pt-3 border-t border-gray-800/80">
            <span className="text-gray-400 font-medium">Individual : ₹250/-</span>
          </div>
        </div>
      )
    },
    {
      icon: (
        <div className="flex gap-2">
          <Trophy className="w-8 h-8 text-blue-400" />
          <Banknote className="w-8 h-8 text-emerald-400" />
        </div>
      ),
      title: <span className="text-blue-400 font-extrabold text-2xl drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">Cash Prizes Worth <br/>₹15000</span>,
      description: "Compete and win exciting cash prizes, certificates, and recognition."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-cyan-400 mb-6 relative inline-block">
            About SIGNOVA'26
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to the premier Electronics and Communication Engineering technical symposium hosted by the University College of Engineering, BIT Campus, Trichy. SIGNOVA '26 is a convergence of brilliant minds, cutting-edge technology, and electrifying competitions. Join us to learn, innovate, and conquer!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 text-center group transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_30px_-5px_rgba(34,211,238,0.25)]">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-gray-800/50 mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-cyan-400/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
