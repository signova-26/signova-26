import React from 'react';

const Crew = () => {
  const team = [
    { name: 'Dr.P.Ramadevi', role: 'HOD (Dept of ECE)', img: 'https://www.gravatar.com/avatar/0?d=mp&f=y' },
    { name: 'Dr.M.Bhuvaneswari', role: 'Symposium Co-ordinator', img: 'https://www.gravatar.com/avatar/0?d=mp&f=y' },
    { name: 'Mrs.R.Jayarani', role: 'Symposium Co-ordinator', img: 'https://www.gravatar.com/avatar/0?d=mp&f=y' },
    { name: 'Hariharasudhan M', role: 'President', img: 'https://www.gravatar.com/avatar/0?d=mp&f=y' },
    { name: 'Krishnaraj', role: 'Vice President', img: '/krishnaraj.jpeg' },
    { name: 'Tharis S', role: 'Secretary', img: '/tharis.jpeg' },
    { name: 'Harini', role: 'Joint Secretary', img: '/Harini.jpeg' },
    { name: 'Divyalakshmani G', role: 'Students Co-ordinator', img: '/Divyalakshmani G.jpeg' },
    { name: 'Naveen kumar', role: 'Overall co_ordinator', img: '/Naveen kumar.jpeg' },
    { name: 'Praveen kumar R', role: 'Technical Head', img: '/Praveen kumar R.jpeg' },
    { name: 'Nithish A', role: 'Non-Technical Head', img: '/nithish.jpg' },
    { name: 'Praveen R', role: 'Design Head', img: '/Praveen R.jpeg' },
    { name: 'Abishek M', role: 'PR Head', img: '/abishek.png' },
  ];

  const row1 = team.slice(0, 3);
  const row2 = team.slice(3, 8);
  const row3 = team.slice(8, 13);

  const MemberCard = ({ member }) => (
    <div className="flex flex-col items-center group w-32 sm:w-36 md:w-44 lg:w-48">
      <div className="relative mb-2 md:mb-3">
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        <img 
          src={member.img} 
          alt={member.name}
          className="relative w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-gray-700 group-hover:border-cyan-400 transition-colors duration-300 filter grayscale group-hover:grayscale-0"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=0D8B9&color=fff`;
          }}
        />
      </div>
      <h3 className="font-mono font-bold text-white text-sm md:text-lg text-center group-hover:text-cyan-400 transition-colors leading-tight mb-1">{member.name}</h3>
      <p className="text-gray-400 text-xs md:text-sm font-mono text-center leading-tight">{member.role}</p>
    </div>
  );

  return (
    <section id="crew" className="py-6 md:py-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-2">
            Meet the Crew
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:gap-5 items-center">
          {/* Row 1: 3 members centered */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 w-full max-w-4xl mx-auto">
            {row1.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
          
          {/* Row 2: 5 members centered */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 w-full">
            {row2.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
          
          {/* Row 3: 5 members centered */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 w-full">
            {row3.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
