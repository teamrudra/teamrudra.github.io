import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const teamMembers = [
  { name: 'Rahul Agarwal',      designation: 'Team Lead',                    image: './rahulag.webp' },
  { name: 'Renish Kumar',       designation: 'Team Manager',                 image: './renish.JPG' },
  { name: 'David Chaudhary',    designation: 'Technical Director',           image: './david.webp' },
  { name: 'Chaitanya Joshi',    designation: 'Mechanical Lead',              image: './chaitanya.webp' },
  { name: 'Farhad Bharucha',    designation: "Developer's Lead",             image: './farhad.webp' },
  { name: 'Shri Venkatesh',     designation: 'Science Lead',                 image: './shri.webp' },
  { name: 'Abhishek Reddy',     designation: 'Head Of Corporate',            image: './Abhishek.jpeg' },
  { name: 'Saksham Bhadani',    designation: 'Senior Mechanical Dev',        image: './saksham.webp' },
  { name: 'Fenil Bamnoliya',    designation: 'Senior Mechanical Dev',        image: './fenil.webp' },
  { name: 'Hemangi Dudani',     designation: 'Senior Mechanical Dev',        image: './hemangi.webp' },
  { name: 'Ayush Sagar',        designation: 'Senior Power Electronics Dev', image: './ayush.webp' },
  { name: 'Rahamath Ali',       designation: 'Senior Embedded Dev',          image: './ali.webp' },
  { name: 'Nitesh Thota',       designation: 'Senior Communications Dev',    image: './nitesh.webp' },
  { name: 'Lekha K',            designation: 'Senior Autonomous Dev',        image: './lekha.webp' },
  { name: 'Anguluri Aravind',   designation: 'Senior Systems Dev',           image: './aravind.webp' },
  { name: 'Nikita Gupta',       designation: 'Senior Controller Dev',        image: './nikita.webp' },
  { name: 'Tuhin Sengupta',     designation: 'Senior Researcher',            image: './tuhin.webp' },
  { name: 'Aishnya Shanvi',     designation: 'Embedded Dev',                 image: './aishanya.webp' },
  { name: 'Antariksh Ray',      designation: 'Controller Dev',               image: './antariksh.webp' },
  { name: 'Prateek',            designation: 'Core Systems Dev',             image: './prateek.webp' },
  { name: 'Pawan Wadhwani',     designation: 'AI & Systems Dev',             image: './pawan.webp' },
  { name: 'Anirudh',            designation: 'Machine Vision Dev',           image: './anirudh.webp' },
  { name: 'Anurup Mohanty',     designation: 'Astrobiologist',               image: './anurup.webp' },
  { name: 'Vishal',             designation: 'Geologist',                    image: './vishal.webp' },
  { name: 'Jordan Fernandez',   designation: 'Astrobiologist',               image: './jordan.webp' },
  { name: 'Mayur Bhosale',      designation: 'Mechanical Dev',               image: './mayur.webp' },
  { name: 'Reshesh Pathak',     designation: 'Embedded Dev',                 image: './reshesh.webp' },
  { name: 'Lokesh Khadim',      designation: 'Embedded Dev',                 image: './lokesh.webp' },
  { name: 'Oishwarya Banerjee', designation: 'Corporate Manager',            image: './oishwarya.webp' },
];

const Team20Page = () => (
  <div className="min-h-screen bg-black text-white relative overflow-hidden">
    <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={18} />

    <Link href="/" legacyBehavior>
      <a className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-white transition-all">
        ← Home
      </a>
    </Link>

    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-[0.3em] text-orange-400 uppercase mb-4">Team RUDRA · Alumni</p>
        <h1 className="text-4xl md:text-5xl font-serif text-white">Team 2020</h1>
        <p className="text-gray-500 text-sm mt-3">An exceptional team that thrived through extraordinary circumstances.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {teamMembers.map((m, i) => (
          <div key={i} className="float-card glass group rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300">
            <div className="relative mb-4">
              <div className="absolute -inset-1 rounded-full bg-orange-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={m.image}
                alt={m.name}
                className="relative w-24 h-24 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-orange-400/30 transition-all"
              />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">{m.name}</h3>
            <p className="text-orange-400 text-[11px] tracking-widest">{m.designation}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Team20Page;
