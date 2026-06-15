import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const sections: { label: string; color: string; members: { name: string; designation: string; image: string; linkedin?: string }[] }[] = [
  {
    label: 'Coding',
    color: 'text-violet-400',
    members: [
      { name: 'Shashwat Ganesh',  designation: 'Team Lead',            image: './coding-member1.png' },
      { name: 'Waseem Riaz',      designation: 'Developers Lead',       image: './coding-member2.png' },
      { name: 'Pritesh Agarwal',  designation: 'Simulation & Testing', image: './coding-member3.png' },
      { name: 'Yasharth Gupta',   designation: 'Coding Member',         image: './coding-member4.png' },
      { name: 'Ayush Daga',       designation: 'Coding Member',         image: './coding-member5.png' },
    ],
  },
  {
    label: 'Corporate',
    color: 'text-amber-400',
    members: [
      { name: 'Sanskar Patil',       designation: 'Sponsorship Lead',  image: './corporate-member1.png' },
      { name: 'Rishita Seetha',      designation: 'Outreach Lead',      image: './corporate-member2.png' },
      { name: 'Srishti Chatterjee',  designation: 'Creatives Lead',     image: './corporate-member3.png' },
      { name: 'Danyal Reyaz',        designation: 'Corporate Member',   image: './corporate-member4.png', linkedin: 'https://www.linkedin.com/in/danyal-reyaz/' },
      { name: 'Priyansh Sonthalia',  designation: 'Corporate Member',   image: './corporate-member5.png' },
      { name: 'Nidhan SKN',          designation: 'Corporate Member',   image: './corporate-member6.png' },
    ],
  },
  {
    label: 'Electronics',
    color: 'text-blue-400',
    members: [
      { name: 'RajKumar M',           designation: 'Technical Director',    image: './electronics-member1.png' },
      { name: 'Prerna Sharma',         designation: 'Power & Communications',image: './electronics-member2.png' },
      { name: 'Harshit Agarwal',       designation: 'System Integrations',   image: './electronics-member3.png' },
      { name: 'Kaustubh Guha',         designation: 'Electronics Member',    image: './electronics-member4.png' },
      { name: 'Sonakshi Srivastava',   designation: 'Electronics Member',    image: './electronics-member5.png' },
      { name: 'Pragati Prithvi',       designation: 'Electronics Member',    image: './electronics-member6.png', linkedin: 'https://www.linkedin.com/in/pragati-prithvi/' },
      { name: 'Sidhant',               designation: 'Electronics Member',    image: './electronics-member7.png' },
    ],
  },
  {
    label: 'Life Sciences',
    color: 'text-emerald-400',
    members: [
      { name: 'Eeshan Nair',            designation: 'Co Team Lead',       image: './life-science-member1.png', linkedin: 'https://www.linkedin.com/in/eeshan-nair-496800238/' },
      { name: 'Aruna S',                designation: 'Research Lead',       image: './life-science-member2.png', linkedin: 'https://www.linkedin.com/in/aruna-sainathan-668b46228/' },
      { name: 'Sayantani Chattopadhyay',designation: 'LifeScience Member', image: './life-science-member3.png', linkedin: 'https://www.linkedin.com/in/sayantani-chattopadhyay-33b71b256/' },
      { name: 'Danyal Reyaz',           designation: 'LifeScience Member', image: './life-science-member4.png', linkedin: 'https://www.linkedin.com/in/danyal-reyaz/' },
      { name: 'Neelesh S',              designation: 'LifeScience Member', image: './life-science-member5.png' },
      { name: 'Tanmayaa C S',           designation: 'LifeScience Member', image: './life-science-member6.png' },
    ],
  },
  {
    label: 'Mechanical',
    color: 'text-orange-400',
    members: [
      { name: 'Along Ao',         designation: 'Mechanical Lead',   image: './mechanical-member1.png',  linkedin: 'https://www.linkedin.com/in/along-ao/' },
      { name: 'Aditya Raj Bhatia',designation: 'Mechanical Member', image: './mechanical-member2.png',  linkedin: 'https://linkedin.com/in/aditya-raj-bhatia-279109252/' },
      { name: 'Kethan Babu',      designation: 'Mechanical Member', image: './mechanical-member3.png' },
      { name: 'Himanshu Karar',   designation: 'Mechanical Member', image: './mechanical-member4.png',  linkedin: 'https://www.linkedin.com/in/himanshu-karar-349268157/' },
      { name: 'Ratnesh Mishra',   designation: 'Mechanical Member', image: './mechanical-member5.png',  linkedin: 'https://www.linkedin.com/in/ratnesh-mishra-07260424b/' },
      { name: 'Prerna Kumari',    designation: 'Mechanical Member', image: './mechanical-member6.png',  linkedin: 'https://www.linkedin.com/in/prerna-kumari-31aa3325b/' },
      { name: 'Rishabh Kothari',  designation: 'Mechanical Member', image: './mechanical-member7.png' },
      { name: 'Sujal Shah',       designation: 'Mechanical Member', image: './mechanical-member9.png',  linkedin: 'https://www.linkedin.com/in/sujal-shah-a92a63297/' },
      { name: 'Kevin Mathew',     designation: 'Mechanical Member', image: './mechanical-member10.png' },
      { name: 'M.V. Aneesh',      designation: 'Mechanical Member', image: './mechanical-member11.png', linkedin: 'https://www.linkedin.com/in/aneesh-marella-a315b3221/' },
    ],
  },
];

const accentBorder: Record<string, string> = {
  'text-violet-400': 'hover:border-violet-400/30',
  'text-amber-400':  'hover:border-amber-400/30',
  'text-blue-400':   'hover:border-blue-400/30',
  'text-emerald-400':'hover:border-emerald-400/30',
  'text-orange-400': 'hover:border-orange-400/30',
};

const glowColor: Record<string, string> = {
  'text-violet-400': 'bg-violet-500/20',
  'text-amber-400':  'bg-amber-500/20',
  'text-blue-400':   'bg-blue-500/20',
  'text-emerald-400':'bg-emerald-500/20',
  'text-orange-400': 'bg-orange-500/20',
};

const ringColor: Record<string, string> = {
  'text-violet-400': 'group-hover:ring-violet-400/40',
  'text-amber-400':  'group-hover:ring-amber-400/40',
  'text-blue-400':   'group-hover:ring-blue-400/40',
  'text-emerald-400':'group-hover:ring-emerald-400/40',
  'text-orange-400': 'group-hover:ring-orange-400/40',
};

const Team24Page = () => (
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
        <h1 className="text-4xl md:text-5xl font-serif text-white">Team 2024–25</h1>
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

export default Team24Page;
