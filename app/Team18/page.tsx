import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const teamMembers = [
  { name: 'Abhishek Patel',    designation: 'Team Lead',                      image: './abhishek.jpg',    linkedin: '' },
  { name: 'Bhavansh Tandon',   designation: 'Team Manager · Electronics Lead', image: './bhavansh.jpeg',  linkedin: '' },
  { name: 'Varun Ramesh',      designation: 'Technical Director',              image: './varun.jpg',       linkedin: '' },
  { name: 'Sonali Sinha Roy',  designation: 'Mechanical Lead',                 image: './sonali.jpg',      linkedin: '' },
  { name: 'Vaibhav Shelke',    designation: 'Coding Lead',                     image: './vaibhav.jpeg',   linkedin: '' },
  { name: 'Uthvag',            designation: 'Science Lead',                    image: './uthvag.jpeg',    linkedin: '' },
  { name: 'Chirag Bharani',    designation: 'Sponsorship Lead',               image: './chirag.jpeg',    linkedin: '' },
  { name: 'Akash Sehgal',      designation: 'Marketing Lead',                 image: './akash.JPG',      linkedin: '' },
  { name: 'Hari Krishna',      designation: 'Electronics',                     image: './hari.png',       linkedin: '' },
  { name: 'Maanik Narayan',    designation: 'Electronics',                     image: './mani.JPG',       linkedin: '' },
  { name: 'Krishanu Kumar',    designation: 'Mechanical',                      image: './krishanu.JPG',   linkedin: '' },
  { name: 'Gauravjit Singh Gill',designation: 'Mechanical',                  image: './gauravjit.jpg',  linkedin: '' },
  { name: 'Rahul R',           designation: 'Mechanical',                      image: './rahul.jpg',      linkedin: '' },
  { name: 'Lochan RN',         designation: 'Coding',                          image: './lochan.png',     linkedin: '' },
  { name: 'Kriti Pratap',      designation: 'Coding',                          image: './kriti.JPG',      linkedin: '' },
  { name: 'Nikil Datta',       designation: 'Corporate',                       image: './nikil.webp',     linkedin: '' },
  { name: 'Shri Venkatesh',    designation: 'Science',                         image: './shri.webp',      linkedin: '' },
  { name: 'Rahul Agarwal',     designation: 'Mechanical',                      image: './rahulag.webp',   linkedin: '' },
  { name: 'David Chaudhary',   designation: 'Mechanical',                      image: './david.webp',     linkedin: '' },
  { name: 'Chaitanya Joshi',   designation: 'Mechanical',                      image: './chaitanya.webp', linkedin: '' },
  { name: 'Renish Kumar',      designation: 'Developer',                       image: './renish.JPG',     linkedin: '' },
  { name: 'Abhishek Reddy',    designation: 'Developer',                       image: './Abhishek.jpeg',  linkedin: '' },
];

const Team18Page = () => (
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
        <h1 className="text-4xl md:text-5xl font-serif text-white">Team 2018</h1>
        <p className="text-gray-500 text-sm mt-3">The team that carried RUDRA's legacy forward.</p>
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

export default Team18Page;
