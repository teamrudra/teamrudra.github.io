import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const sections: {
  label: string;
  color: string;
  members: {
    name: string;
    designation: string;
    image: string;
    linkedin?: string;
  }[];
}[] = [
  {
  label: 'Core Leadership',
  color: 'text-red-400',
  members: [
    {
      name: 'Ratnesh Mishra',
      designation: 'Team Lead',
      image: './mechanical-member5.png',
      linkedin: 'https://www.linkedin.com/in/ratnesh-mishra-07260424b/',
    },
    {
      name: 'Danyal Reyaz',
      designation: 'Team Manager',
      image: './life-science-member4.png',
      linkedin: 'https://www.linkedin.com/in/danyal-reyaz/',
    },
    {
      name: 'Pragati Prithvi',
      designation: 'Technical Director',
      image: './electronics-member6.png',
      linkedin: 'https://www.linkedin.com/in/pragati-prithvi/',
    },
  ],
},
  {
    label: 'Coding',
    color: 'text-violet-400',
    members: [
      { name: 'Ayush Daga', designation: 'Coding Member', image: './coding-member5.png', linkedin: 'https://www.linkedin.com/in/ayush-daga-341045226/' },
      { name: 'Yasharth Gupta', designation: 'Coding Member', image: './coding-member4.png', linkedin: 'https://www.linkedin.com/in/yasharth-gupta-53749a255/' },
      { name: 'Pavithra CP', designation: 'Coding Member', image: './pavithra.jpeg', linkedin: 'https://www.linkedin.com/in/pavithra-cp/' },
      { name: 'Nikhil CP', designation: 'Coding Member', image: './nikhil.jpeg', linkedin: 'https://www.linkedin.com/in/nikhilcp05/' },
      { name: 'Rajrupa Das', designation: 'Coding Member', image: './rajrupa.jpeg', linkedin: 'https://www.linkedin.com/in/rajrupa-das-8b9597324/' },
    ],
  },

  {
    label: 'Corporate',
    color: 'text-amber-400',
    members: [
      { name: 'Danyal Reyaz', designation: 'Team Manager', image: './life-science-member4.png', linkedin: 'https://www.linkedin.com/in/danyal-reyaz/' },
      { name: 'Nidhan SKN', designation: 'Creatives Lead', image: './corporate-member6.png', linkedin: 'https://www.linkedin.com/in/nidhan-santa-kumar-n/' },
      { name: 'Ditsa Sarkar', designation: 'Corporate', image: './ditsa.jfif', linkedin: 'https://www.linkedin.com/in/ditsa-sarkar-7a0623228/' },
      { name: 'Bhargavi Singh', designation: 'Corporate', image: './corporate-member4.jpeg' },
      { name: 'Shivi Gupta', designation: 'Corporate', image: './corporate-member5.jpeg', linkedin: 'https://www.linkedin.com/in/shivi-gupta-642651301/' },
      { name: 'Snehal Gupta', designation: 'Corporate', image: './corporate-member6.jpeg', linkedin: 'https://www.linkedin.com/in/snehal-gupta-44a791222/' },
      { name: 'Shriya Rao', designation: 'Corporate', image: './corporate-member7.jpeg', linkedin: 'https://www.linkedin.com/in/shriya-rao-4773352bb/' },
    ],
  },

  {
    label: 'Electronics',
    color: 'text-blue-400',
    members: [
      { name: 'Pragati Prithvi', designation: 'Technical Director', image: './electronics-member6.png', linkedin: 'https://www.linkedin.com/in/pragati-prithvi/' },
      { name: 'Sonakshi Srivastava', designation: 'Electronics Lead', image: './electronics-member5.png', linkedin: 'https://www.linkedin.com/in/srivastava-sonakshi/' },
      { name: 'Kaustubh Guha', designation: 'Electronics', image: './electronics-member4.png', linkedin: 'https://www.linkedin.com/in/kaustub-guha/' },
      { name: 'Sidhant Chakrabarti', designation: 'Electronics', image: './electronics-member7.png', linkedin: 'https://www.linkedin.com/in/sidhant1226/' },
      { name: 'Aaryan Sarat', designation: 'Electronics', image: './aaryan.jpeg', linkedin: 'https://in.linkedin.com/in/aaryan-sarat-491241331' },
      { name: 'V Krishna', designation: 'Electronics', image: './vkrishna.jpeg', linkedin: 'https://www.linkedin.com/in/vkrishna89/' },
      { name: 'Hariharan R', designation: 'Electronics', image: './hariharan.jpeg' },
      { name: 'Mishti Bansal', designation: 'Electronics', image: './mishti.jpeg' },
      { name: 'Abhijeet Koushal', designation: 'Electronics', image: './abhijeet.jpeg', linkedin: 'https://www.linkedin.com/in/abhijeeth-koushal-addenki-800a18277/' },
    ],
  },

  {
    label: 'Life Sciences',
    color: 'text-emerald-400',
    members: [
      { name: 'Danyal Reyaz', designation: 'Team Manager', image: './life-science-member4.png', linkedin: 'https://www.linkedin.com/in/danyal-reyaz/' },
      { name: 'Neelesh S', designation: 'Life Science Lead', image: './life-science-member5.png' },
      { name: 'Tanmayaa C S', designation: 'Life Science Lead', image: './life-science-member6.png' },
      { name: 'Prasith Bhaduri', designation: 'Life Science', image: './prasith.jpeg', linkedin: 'https://www.linkedin.com/in/prasith-bhaduri/' },
      { name: 'Devi Prasath Kumar', designation: 'Life Science', image: './devi.jpeg', linkedin: 'https://www.linkedin.com/in/devi-prasath-9b0006320/' },
      { name: 'Sanika Gadre', designation: 'Life Science', image: './sanika.jpeg', linkedin: 'https://www.linkedin.com/in/sanika-g-b55321287/' },
      { name: 'Dhanushya Ganeshan', designation: 'Life Science', image: './dhanushya.jpeg', linkedin: 'https://www.linkedin.com/in/dhanushya-ganesan-496a69289/' },
      { name: 'Sarvagna', designation: 'Life Science', image: './sarvagna.jpeg', linkedin: 'https://www.linkedin.com/in/sarvagna06/' },
      { name: 'Muskaan Tasheen', designation: 'Life Science', image: './muskaan.jpeg', linkedin: 'https://www.linkedin.com/in/muskaan-t-a62731309/' },
    ],
  },

  {
    label: 'Mechanical',
    color: 'text-orange-400',
    members: [
      { name: 'Ratnesh Mishra', designation: 'Team Lead', image: './mechanical-member5.png', linkedin: 'https://www.linkedin.com/in/ratnesh-mishra-07260424b/' },
      { name: 'Kethan Babu', designation: 'Mechanics Lead', image: './mechanical-member3.png' },
      { name: 'Prerna Kumari', designation: 'Mechanical Lead', image: './mechanical-member6.png', linkedin: 'https://www.linkedin.com/in/prerna-kumari-31aa3325b/' },
      { name: 'Rishabh Kothari', designation: 'Mechanical', image: './mechanical-member7.png' },
      { name: 'Sujal Shah', designation: 'Mechanical', image: './mechanical-member-sujal.jpeg', linkedin: 'https://www.linkedin.com/in/sujal-shah-a92a63297/' },
      { name: 'Kevin Mathew', designation: 'Mechanical', image: './mechanical-member10.png' },
      { name: 'Deepro Pratim Chatterjee', designation: 'Mechanical', image: './deepro.jpeg', linkedin: 'https://www.linkedin.com/in/deepro-pratim-chatterjee-7674b7325/' },
      { name: 'Vaishnav Bhosale', designation: 'Mechanical', image: './vaishnav.jpeg', linkedin: 'https://www.linkedin.com/in/vaishnavbhosale/' },
      { name: 'Paridhi Gupta', designation: 'Mechanical', image: './paridhi.jpeg', linkedin: 'https://www.linkedin.com/in/paridhi-gupta-b60bb4237/' },
    ],
  },
];

const accentBorder: Record<string, string> = {
  'text-red-400': 'hover:border-red-400/30',
  'text-violet-400': 'hover:border-violet-400/30',
  'text-amber-400': 'hover:border-amber-400/30',
  'text-blue-400': 'hover:border-blue-400/30',
  'text-emerald-400': 'hover:border-emerald-400/30',
  'text-orange-400': 'hover:border-orange-400/30',
};
const glowColor: Record<string, string> = {
  'text-red-400': 'bg-red-500/20',
  'text-violet-400': 'bg-violet-500/20',
  'text-amber-400': 'bg-amber-500/20',
  'text-blue-400': 'bg-blue-500/20',
  'text-emerald-400': 'bg-emerald-500/20',
  'text-orange-400': 'bg-orange-500/20',
};

const ringColor: Record<string, string> = {
  'text-red-400': 'group-hover:ring-red-400/40',
  'text-violet-400': 'group-hover:ring-violet-400/40',
  'text-amber-400': 'group-hover:ring-amber-400/40',
  'text-blue-400': 'group-hover:ring-blue-400/40',
  'text-emerald-400': 'group-hover:ring-emerald-400/40',
  'text-orange-400': 'group-hover:ring-orange-400/40',
};

const Team25Page = () => (
  <div className="min-h-screen bg-black text-white relative overflow-hidden">
    <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={18} />

    <Link href="/" legacyBehavior>
      <a className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-white transition-all">
        ← Home
      </a>
    </Link>

    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
      <div className="text-center mb-20">
        <p className="text-[11px] tracking-[0.3em] text-orange-400 uppercase mb-4">Team RUDRA · Alumni</p>
        <h1 className="text-4xl md:text-5xl font-serif text-white">Team 2025–26</h1>
        <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">The complete team across all domains for the 2024–25 season.</p>
      </div>

      <div className="space-y-20">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="flex items-center gap-4 mb-8">
              <div className={`h-px flex-1 bg-white/8`} />
              <p className={`text-[11px] tracking-[0.3em] uppercase ${section.color}`}>{section.label}</p>
              <div className={`h-px flex-1 bg-white/8`} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {section.members.map((m, i) => {
                const inner = (
                  <>
                    <div className="relative mb-4">
                      <div className={`absolute -inset-1 rounded-full ${glowColor[section.color]} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <img
                        src={m.image}
                        alt={m.name}
                        className={`relative w-24 h-24 rounded-full object-cover ring-2 ring-white/10 ${ringColor[section.color]} transition-all`}
                      />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{m.name}</h3>
                    <p className={`${section.color} text-[11px] tracking-widest`}>{m.designation}</p>
                    {m.linkedin && (
                      <p className="text-gray-600 text-[10px] mt-2 group-hover:text-gray-400 transition-colors">LinkedIn →</p>
                    )}
                  </>
                );

                const cls = `float-card glass group rounded-2xl p-6 flex flex-col items-center text-center ${accentBorder[section.color]} transition-all duration-300`;

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
        ))}
      </div>
    </div>
  </div>
);

export default Team25Page;
