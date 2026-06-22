import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const members = [
  { name: 'Sujal Shah',               role: 'Technical Director',        img: './mechanical-member-sujal.jpeg',  linkedin: 'https://www.linkedin.com/in/sujal-shah-a92a63297/' },
  { name: 'Vaishnav Bhosale',         role: 'Mechanical Lead',        img: './vaishnav.jpeg',                 linkedin: 'https://www.linkedin.com/in/vaishnavbhosale/' },
  { name: 'Vibodh Sharma',            role: 'Mechanical Member',        img: './Vibodh Sharma.JPG',                  linkedin: 'https://www.linkedin.com/in/vibodh-sharma-283671278/' },
];

const MechanicalDomainPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={20} />

      {/* Back button */}
      <Link href="/" legacyBehavior>
        <a className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-white transition-all">
          ← Home
        </a>
      </Link>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] text-orange-400 uppercase mb-4">Team RUDRA · 2025–26</p>
          <h1 className="text-4xl md:text-5xl font-serif text-white">Mechanical Domain</h1>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">Designing and building the rover's structural systems, drivetrain, and robotic arm.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {members.map((m, i) => {
            const inner = (
              <>
                <div className="relative mb-4">
                  <div className="absolute -inset-1 rounded-full bg-orange-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={m.img}
                    alt={m.name}
                    className="relative w-24 h-24 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-orange-400/40 transition-all duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{m.name}</h3>
                <p className="text-orange-400 text-[11px] tracking-widest">{m.role}</p>
                {m.linkedin && (
                  <p className="text-gray-600 text-[10px] mt-2 group-hover:text-gray-400 transition-colors">LinkedIn →</p>
                )}
              </>
            );

            const cls = 'float-card glass group rounded-2xl p-6 flex flex-col items-center text-center hover:border-orange-400/30 transition-all duration-300';

            return m.linkedin ? (
              <a key={i} href={m.linkedin} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <div key={i} className={cls}>{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MechanicalDomainPage;
