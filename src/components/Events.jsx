import React, { useState } from 'react';
import { FileText, Hammer, Lightbulb, Search, Film, Brain } from 'lucide-react';

const Events = ({ onRegisterClick }) => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalEvents = [
    {
      title: 'Paper Verse',
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      desc: 'Innovate. Present. Inspire. Showcase your ideas and explore the power of technology through impactful Paper Presentation.',
      topics: [
        'Semiconductors & Nano Technologies', 
        'Advanced Signal Processing', 
        'Communication & Networks', 
        'Robotics & Automation', 
        'Analog and Digital Electronics', 
        'Autonomous Vehicle & ADAS', 
        'Biomedical Instrumentation', 
        'Embedded Systems and IoT', 
        'AI/ML', 
        'Drone Technology', 
        'Own a Stage'
      ],
      details: {
        mode: 'Individual or Team (2-3 per team)',
        rounds: '1'
      }
    },
    {
      title: 'Bid & Build',
      icon: <Hammer className="w-8 h-8 text-cyan-400" />,
      desc: 'This is a strategic electronics design challenge where participants analyze problem statements, manage virtual resources, and construct functional systems through simulation. Success depends on technical knowledge, budgeting skills, and efficient design decisions.',
      details: {
        mode: 'Team (2–4 per team)',
        rounds: '2',
        type: 'Problem analysis, Component auction, Circuit design & Simulation'
      }
    },
    {
      title: 'Pixel Verse',
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      desc: 'This event tests how well participants can communicate with AI by crafting creative prompts, optimizing them, and using Google Gemini to generate images from text or reference pictures.',
      details: {
        mode: 'Individual',
        rounds: '3',
        type: 'Prompt enhancement, Image recreation & Advanced prompt Engineering'
      }
    }
  ];

  const nonTechnicalEvents = [
    {
      title: 'Stranger things',
      icon: <Search className="w-8 h-8 text-emerald-400" />,
      desc: 'Teams solve puzzles and rebuild broken machines to discover what they are — from smart gadgets to big infrastructure. It mixes software, hardware, and mechanical logic in a mystery game.',
      details: {
        mode: 'Team (2-4 per team)',
        rounds: '2',
        type: 'Engineering forensics'
      }
    },
    {
      title: 'Movie Mania',
      icon: <Film className="w-8 h-8 text-emerald-400" />,
      desc: 'A fun filled event where teams of two compete in four rounds by guessing movies from dialogues, spotting films by actors and costumes, identifying movies from background scenes, and recalling character names with no eliminations, and the duo with the highest score out of 100 wins.',
      details: {
        mode: 'Team (2 per team)',
        rounds: '2',
        type: 'Mixed with dialogues, images, scenes, and character recognition.'
      }
    },
    {
      title: 'Mind Sprint',
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      desc: 'An individual rapid-fire quiz designed to test participants\' general knowledge, quick thinking, and decision-making skills. Questions range from straightforward to moderately challenging, requiring both accuracy and speed to secure the top spot.',
      details: {
        mode: 'Individual',
        rounds: '1',
        type: 'Quiz'
      }
    }
  ];

  const EventCard = ({ event, isTech }) => (
    <div className="glass-card p-4 flex flex-col h-full group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_30px_-5px_rgba(34,211,238,0.25)]">
      <div className={`absolute top-0 right-0 w-20 h-20 ${isTech ? 'bg-cyan-500/10' : 'bg-emerald-500/10'} rounded-bl-full -mr-6 -mt-6 transition-transform duration-500 group-hover:scale-125`}></div>
      
      <div className="mb-2 relative">
        <div className={`p-2.5 rounded-xl inline-block bg-gray-800 ${isTech ? 'border-cyan-400/30' : 'border-emerald-400/30'} border shadow-lg`}>
          {event.icon}
        </div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-mono font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all leading-tight">
        {event.title}
      </h3>
      
      <p className="text-gray-400 mb-2 flex-grow text-sm leading-snug">
        {event.desc}
      </p>
      
      {event.topics && (
        <div className="mb-2">
          <p className={`text-xs font-mono mb-1 ${isTech ? 'text-cyan-400' : 'text-emerald-400'}`}>Domains:</p>
          <div className="flex flex-wrap gap-1">
            {event.topics.map((t, i) => (
              <span key={i} className={`text-[10px] px-1.5 py-0.5 rounded border whitespace-nowrap ${isTech ? 'bg-cyan-900/30 text-cyan-300 border-cyan-800' : 'bg-emerald-900/30 text-emerald-300 border-emerald-800'}`}>{t}</span>
            ))}
          </div>
        </div>
      )}

      {event.details && (
        <div className="mt-auto space-y-1 text-[11px] md:text-xs font-mono text-gray-300 bg-gray-900/50 p-2 md:p-3 rounded border border-gray-800">
          {event.details.mode && <p><span className={`${isTech ? 'text-cyan-400' : 'text-emerald-400'} font-bold uppercase`}>Mode:</span> {event.details.mode}</p>}
          {event.details.rounds && <p><span className={`${isTech ? 'text-cyan-400' : 'text-emerald-400'} font-bold uppercase`}>Rounds:</span> {event.details.rounds}</p>}
          {event.details.type && <p><span className={`${isTech ? 'text-cyan-400' : 'text-emerald-400'} font-bold uppercase`}>Type:</span> <span className="inline-block leading-tight">{event.details.type}</span></p>}
        </div>
      )}
    </div>
  );

  return (
    <section id="events" className="py-12 md:py-16 bg-gray-900/30 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-6">
            Events Matrix
          </h2>
          
          <div className="inline-flex p-1 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-md font-mono text-sm md:text-base font-semibold transition-all ${
                activeTab === 'technical' 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveTab('non-technical')}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-md font-mono text-sm md:text-base font-semibold transition-all ${
                activeTab === 'non-technical' 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/50 shadow-[0_0_15px_rgba(52,211,153,0.2)]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Non-Technical
            </button>
          </div>
        </div>

        <div className="mt-8">
          {activeTab === 'technical' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-in fade-in zoom-in duration-500">
              {technicalEvents.map((event, index) => (
                <EventCard key={index} event={event} isTech={true} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-in fade-in zoom-in duration-500">
              {nonTechnicalEvents.map((event, index) => (
                <EventCard key={index} event={event} isTech={false} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <button 
            onClick={onRegisterClick}
            className="btn-primary text-base md:text-lg px-8 py-3 shadow-[0_0_20px_rgba(34,211,238,0.4)] w-full sm:w-auto"
          >
            Register Now!
          </button>
          <a 
            href="/RuleBook.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base md:text-lg px-8 py-3 w-full sm:w-auto text-center"
          >
            Rule Book
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
