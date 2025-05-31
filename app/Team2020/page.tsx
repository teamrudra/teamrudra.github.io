import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const Team20Page = () => {
  const teamMembers = [
    { name: "Rahul Agarwal", designation: "Team Lead", image: "rahulag.webp" },
    { name: "Renish Kumar", designation: "Team Manager", image: "renish.webp" },
    { name: "David Chaudhary", designation: "Technical Director", image: "david.webp" },
    { name: "Chaitanya Joshi", designation: "Mechanical Lead", image: "chaitanya.webp" },
    { name: "Farhad Bharucha", designation: "Developers Lead", image: "farhad.webp" },
    { name: "Shri Venkatesh", designation: "Science Lead", image: "shri.webp" },
    { name: "Abhishek Reddy", designation: "Head Of Corporate", image: "abhishekr.webp" },
    { name: "Saksham Bhadani", designation: "Senior Mechanical Dev", image: "saksham.webp" },
    { name: "Fenil Bamnoliya", designation: "Senior Mechanical Dev", image: "fenil.webp" },
    { name: "Hemangi Dudani", designation: "Senior Mechanical Dev", image: "hemangi.webp" },
    { name: "Ayush Sagar", designation: "Senior Power Electronics Dev", image: "ayush.webp" },
    { name: "Rahamath Ali", designation: "Senior Embedded Dev", image: "ali.webp" },
    { name: "Nitesh Thota", designation: "Senior Communications Dev", image: "nitesh.webp" },
    { name: "Lekha K", designation: "Senior Autonomous Dev", image: "lekha.webp" },
    { name: "Anguluri Aravind", designation: "Senior Systems Dev", image: "aravind.webp" },
    { name: "Nikita Gupta", designation: "Senior Controller Dev", image: "nikita.webp" },
    { name: "Tuhin Sengupta", designation: "Senior Researcher", image: "tuhin.webp" },
    { name: "Aishnya Shanvi", designation: "Embedded Dev", image: "aishanya.webp" },
    { name: "Antariksh Ray", designation: "Controller Dev", image: "antariksh.webp" },
    { name: "Prateek", designation: "Core Systems Dev", image: "prateek.webp" },
    { name: "Pawan Wadhwani", designation: "AI and Systems Dev", image: "pawan.webp" },
    { name: "Anirudh", designation: "Machine Vision Dev", image: "anirudh.webp" },
    { name: "Anurup Mohanty", designation: "Astrobiologist", image: "anurup.webp" },
    { name: "Vishal", designation: "Geologist", image: "vishal.webp" },
    { name: "Jordan Fernandez", designation: "Astrobiologist", image: "jordan.webp" },
    { name: "Mayur Bhosale", designation: "Mechanical Dev", image: "mayur.webp" },
    { name: "Reshesh Pathak", designation: "Embedded Dev", image: "reshesh.webp" },
    { name: "Lokesh Khadim", designation: "Embedded Dev", image: "lokesh.webp" },
    { name: "Oishwarya Banerjee", designation: "Corporate Manager", image: "oishwarya.webp" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Team 2020 Members</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img
              src={`/rudraweb2clone/team/${member.image}`}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 className="text-white text-xl mt-4">{member.name}</h3>
            <p className="text-gray-300 text-sm">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team20Page;
