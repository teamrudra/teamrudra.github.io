import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const members = [
  { name: 'Danyal Reyaz',      role: 'Team Manager',      img: './life-science-member4.png', linkedin: 'https://www.linkedin.com/in/danyal-reyaz/' },
  { name: 'Neelesh S',         role: 'Life Science Lead',  img: './life-science-member5.png', linkedin: '' },
  { name: 'Tanmayaa C S',      role: 'Life Science Lead',  img: './life-science-member6.png', linkedin: '' },
  { name: 'Prasith Bhaduri',   role: 'Life Science',       img: './prasith.jpeg',             linkedin: 'https://www.linkedin.com/in/prasith-bhaduri/' },
  { name: 'Devi Prasath Kumar',role: 'Life Science',       img: './devi.jpeg',                linkedin: 'https://www.linkedin.com/in/devi-prasath-9b0006320/' },
  { name: 'Sanika Gadre',      role: 'Life Science',       img: './sanika.jpeg',              linkedin: 'https://www.linkedin.com/in/sanika-g-b55321287/' },
  { name: 'Dhanushya Ganeshan',role: 'Life Science',       img: './dhanushya.jpeg',           linkedin: 'https://www.linkedin.com/in/dhanushya-ganesan-496a69289/' },
  { name: 'Sarvagna',          role: 'Life Science',       img: './sarvagna.jpeg',            linkedin: 'https://www.linkedin.com/in/sarvagna06/' },
  { name: 'Muskaan Tasheen',   role: 'Life Science',       img: './muskaan.jpeg',             linkedin: 'https://www.linkedin.com/in/muskaan-t-a62731309/' },
];

const LifeScienceDomainPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SparklesCore className="absolute inset-0 z-0" particleColor="#34d399" particleDensity={18} />

      <Link href="/" legacyBehavior>
        <a className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-white transition-all">
          ← Home
        </a>
      </Link>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] text-emerald-400 uppercase mb-4">Team RUDRA · 2025–26</p>
          <h1 className="text-4xl md:text-5xl font-serif text-white">Life Science Domain</h1>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">Astrobiology, soil analysis, and scientific research that forms the core of our Mars mission experiments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {members.map((m, i) => {
            const inner = (
              <>
                <div className="relative mb-4">
                  <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={m.img}
                    alt={m.name}
                    className="relative w-24 h-24 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-emerald-400/40 transition-all duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{m.name}</h3>
                <p className="text-emerald-400 text-[11px] tracking-widest">{m.role}</p>
                {m.linkedin && (
                  <p className="text-gray-600 text-[10px] mt-2 group-hover:text-gray-400 transition-colors">LinkedIn →</p>
                )}
              </>
            );

            const cls = 'float-card glass group rounded-2xl p-6 flex flex-col items-center text-center hover:border-emerald-400/30 transition-all duration-300';

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

export default LifeScienceDomainPage;
