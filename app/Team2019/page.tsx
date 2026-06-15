import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const teamMembers = [
  { name: 'Hari Krishna',      designation: 'Team Lead',                 image: './hari.png' },
  { name: 'Maanik Narayan',    designation: 'Team Manager',              image: './mani.JPG' },
  { name: 'Krishanu Kumar',    designation: 'Technical Director',        image: './krishanu.JPG' },
  { name: 'Gauravjit Singh Gill', designation: 'Mechanical Lead',       image: './gauravjit.jpg' },
  { name: 'Rahul R',           designation: 'Research Lead',             image: './rahul.jpg' },
  { name: 'Lochan RN',         designation: "Developer's Lead",          image: './lochan.png' },
  { name: 'Niket Kumar',       designation: 'Electronics Lead',          image: './niket.webp' },
  { name: 'Kriti Pratap',      designation: 'Vision & Autonomous Lead',  image: './kriti.JPG' },
  { name: 'Nikil Datta',       designation: 'Corporate Lead',            image: './nikil.webp' },
  { name: 'Shri Venkatesh',    designation: 'Science Lead',              image: './shri.webp' },
  { name: 'Rahul Agarwal',     designation: 'Analysis Lead',             image: './rahulag.webp' },
  { name: 'David Chaudhary',   designation: 'Simulation Lead',           image: './david.webp' },
  { name: 'Chaitanya Joshi',   designation: 'Design Lead',               image: './chaitanya.webp' },
  { name: 'Renish Kumar',      designation: 'Senior Developer',          image: './renish.JPG' },
  { name: 'Farhad Bharucha',   designation: 'Senior Developer',          image: './farhad.webp' },
  { name: 'Abhishek Reddy',    designation: 'Senior Developer',          image: './abhishek.jpg' },
  { name: 'Saksham Bhadani',   designation: 'Mechatronics',              image: './saksham.webp' },
  { name: 'Fenil Bamnoliya',   designation: 'Mechanical Dev',            image: './fenil.jpg' },
  { name: 'Hemangi Dudani',    designation: 'Mechanical Dev',            image: './hemangi.webp' },
  { name: 'Ayush Sagar',       designation: 'Power Electronics Dev',     image: './ayush.webp' },
  { name: 'Rahamath Ali',      designation: 'Embedded Dev',              image: './ali.webp' },
  { name: 'Nitesh Thota',      designation: 'Communications Dev',        image: './nitesh.webp' },
  { name: 'Lekha K',           designation: 'Developer',                 image: './lekha.webp' },
  { name: 'Anguluri Aravind',  designation: 'Developer',                 image: './aravind.webp' },
  { name: 'Nikita Gupta',      designation: 'Developer',                 image: './nikita.webp' },
  { name: 'Tuhin Sengupta',    designation: 'Bio-Science Researcher',    image: './tuhin.webp' },
  { name: 'Aishnya Shanvi',    designation: 'Embedded Developer',        image: './aishanya.webp' },
  { name: 'Antariksh Ray',     designation: 'Developer',                 image: './antariksh.webp' },
  { name: 'Prateek',           designation: 'Developer',                 image: './prateek.webp' },
  { name: 'Pawan Wadhwani',    designation: 'Developer',                 image: './pawan.webp' },
  { name: 'Harry Lal',         designation: 'Developer',                 image: './harry.webp' },
  { name: 'Anurup Mohanty',    designation: 'Astrobiologist',            image: './anurup.webp' },
  { name: 'Vishal',            designation: 'Geologist',                 image: './vishal.webp' },
];

const Team2019Page = () => (
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
        <h1 className="text-4xl md:text-5xl font-serif text-white">Team 2019</h1>
        <p className="text-gray-500 text-sm mt-3">The team that defined a new era of RUDRA's global presence.</p>
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

export default Team2019Page;
