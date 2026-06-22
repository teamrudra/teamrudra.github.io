import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const members = [
  { name: 'Yasharth Gupta', designation: 'Team Lead', image: '/coding-member4.png', linkedin: 'https://www.linkedin.com/in/yasharth-gupta-53749a255/' },
  { name: 'Anupama Pandey', designation: 'Coding Member', image: '/anupama-pandey.jpg' },
  { name: 'Dhanush Poduval', designation: 'Coding Member', image: '/dhanush-poduval.jpg' },
  { name: 'Jayin Shresth', designation: 'Coding Member', image: '/jayin-shresth.jpg' },
  { name: 'Ravichandran Jaganathan', designation: 'Coding Member', image: '/ravichandran-jaganathan.jpeg' },
  { name: 'Swetank Kumar', designation: 'Coding Member', image: '/swetank-kumar.jpg' },
];

const CodingDomainPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SparklesCore
        className="absolute inset-0 z-0"
        particleColor="#a78bfa"
        particleDensity={18}
      />

      <Link href="/" legacyBehavior>
        <a className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-white transition-all">
          ← Home
        </a>
      </Link>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] text-violet-400 uppercase mb-4">
            Team RUDRA · 2026–27
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-white">
            Coding Domain
          </h1>

          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Autonomous navigation, computer vision, ROS systems, and software
            development for the rover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {members.map((m, i) => {
            const inner = (
              <>
                <div className="relative mb-4">
                  <div className="absolute -inset-1 rounded-full bg-violet-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <img
                    src={m.image}
                    alt={m.name}
                    className="relative w-24 h-24 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-violet-400/40 transition-all duration-300"
                  />
                </div>

                <h3 className="text-white font-semibold text-sm mb-1">
                  {m.name}
                </h3>

                <p className="text-violet-400 text-[11px] tracking-widest">
                  {m.designation}
                </p>

                {m.linkedin && (
                  <p className="text-gray-600 text-[10px] mt-2 group-hover:text-gray-400 transition-colors">
                    LinkedIn →
                  </p>
                )}
              </>
            );

            const cls =
              'float-card glass group rounded-2xl p-6 flex flex-col items-center text-center hover:border-violet-400/30 transition-all duration-300';

            return m.linkedin ? (
              <a
                key={i}
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <div key={i} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CodingDomainPage;
