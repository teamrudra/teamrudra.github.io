'use client';
import Link from 'next/link';
import { useState } from 'react';
import { SparklesCore } from '@/components/ui/sparkles';

const missions = [
  {
    id: 1,
    image: '1.png',
    title: 'Mission 1',
    subtitle: 'Instrument Deployment & Maintenance Operation (IDMO)',
    info: 'The Mission has two stages: Instrument Deployment and Instrument Maintenance. In the Instrument Deployment stage, the rover moves to a simulated instrument panel to perform tasks such as opening drawers, flipping switches, and operating a joystick.',
  },
  {
    id: 2,
    image: 'mission2.png',
    title: 'Mission 2',
    subtitle: 'Project Implementation & Management Assessment (PIMA)',
    info: "The PIMA evaluates the rover's design and project success. Teams present the rover's development stages, testing persistence and problem-solving abilities across planning, manufacturing, and testing stages.",
  },
  {
    id: 3,
    image: '2.png',
    title: 'Mission 3',
    subtitle: 'Astrobiology Expedition',
    info: 'The rover functions as a mobile science laboratory to retrieve samples and conduct detailed analyses. It examines test samples for indicators of life and identifies sites with the potential to support microbial life.',
  },
  {
    id: 4,
    image: '3.png',
    title: 'Mission 4',
    subtitle: 'Business Plan Presentation',
    info: "This task evaluates the team's business mindset, encouraging alliances with corporate and academic communities to boost project development and spread awareness about real-life rover applications.",
  },
  {
    id: 5,
    image: 'z.png',
    title: 'Mission 5',
    subtitle: 'Reconnaissance & Autonomous Delivery Operation',
    info: 'The rover performs reconnaissance over challenging terrain to locate and document scattered objects using onboard sensors and GPS logging, then autonomously delivers objects to designated locations using a robotic arm.',
  },
];

const IRCMissionsPage = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SparklesCore className="absolute inset-0 z-0" background="transparent" particleColor="#ffffff" particleDensity={16} />

      <Link href="/" legacyBehavior>
        <a className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-white transition-all">
          ← Home
        </a>
      </Link>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] text-orange-400 uppercase mb-4">Team RUDRA · IRC</p>
          <h1 className="text-4xl md:text-5xl font-serif text-white">Missions in IRC</h1>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            International Rover Challenge tasks simulating real Mars mission scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="float-card glass group rounded-2xl overflow-hidden cursor-pointer relative h-80 hover:border-orange-400/30 transition-all duration-300"
              onClick={() => setLightboxImg(mission.image)}
            >
              <img
                src={mission.image}
                alt={mission.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Default overlay — title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-orange-400 text-[10px] tracking-[0.25em] uppercase mb-1">{mission.title}</span>
                <h3 className="text-white font-semibold text-base leading-snug">{mission.subtitle}</h3>
              </div>
              {/* Hover overlay — info */}
              <div className="absolute inset-0 bg-black/90 flex flex-col justify-center items-center p-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <span className="text-orange-400 text-[10px] tracking-[0.25em] uppercase mb-3">{mission.title}</span>
                <h3 className="text-white font-semibold text-sm mb-3">{mission.subtitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{mission.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-5 right-5 flex items-center gap-2 px-3.5 py-2 glass rounded-full text-[11px] text-gray-300 hover:text-white transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            Close
          </button>
          <img
            src={lightboxImg}
            alt="Mission full view"
            className="max-w-[92vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default IRCMissionsPage;
