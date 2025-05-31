import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const Team20Page = () => {
  const teamMembers = [
    { name: "Rahul Agarwal", designation: "Team Lead", image: "rahulag.png" },
    { name: "Renish Kumar", designation: "Team Manager", image: "renish.png" },
    { name: "David Chaudhary", designation: "Technical Director", image: "david.png" },
    { name: "Chaitanya Joshi", designation: "Mechanical Lead", image: "chaitanya.png" },
    { name: "Farhad Bharucha", designation: "Developers Lead", image: "farhad.png" },
    { name: "Shri Venkatesh", designation: "Science Lead", image: "shri.png" },
    { name: "Abhishek Reddy", designation: "Head Of Corporate", image: "abhishekr.png" },
    { name: "Saksham Bhadani", designation: "Senior Mechanical Dev", image: "saksham.png" },
    { name: "Fenil Bamnoliya", designation: "Senior Mechanical Dev", image: "fenil.png" },
    { name: "Hemangi Dudani", designation: "Senior Mechanical Dev", image: "hemangi.png" },
    { name: "Ayush Sagar", designation: "Senior Power Electronics Dev", image: "ayush.png" },
    { name: "Rahamath Ali", designation: "Senior Embedded Dev", image: "ali.png" },
    { name: "Nitesh Thota", designation: "Senior Communications Dev", image: "nitesh.png" },
    { name: "Lekha K", designation: "Senior Autonomous Dev", image: "lekha.png" },
    { name: "Anguluri Aravind", designation: "Senior Systems Dev", image: "aravind.png" },
    { name: "Nikita Gupta", designation: "Senior Controller Dev", image: "nikita.png" },
    { name: "Tuhin Sengupta", designation: "Senior Researcher", image: "tuhin.png" },
    { name: "Aishnya Shanvi", designation: "Embedded Dev", image: "aishanya.png" },
    { name: "Antariksh Ray", designation: "Controller Dev", image: "antariksh.png" },
    { name: "Prateek", designation: "Core Systems Dev", image: "prateek.png" },
    { name: "Pawan Wadhwani", designation: "AI and Systems Dev", image: "pawan.png" },
    { name: "Anirudh", designation: "Machine Vision Dev", image: "anirudh.png" },
    { name: "Anurup Mohanty", designation: "Astrobiologist", image: "anurup.png" },
    { name: "Vishal", designation: "Geologist", image: "vishal.png" },
    { name: "Jordan Fernandez", designation: "Astrobiologist", image: "jordan.png" },
    { name: "Mayur Bhosale", designation: "Mechanical Dev", image: "mayur.png" },
    { name: "Reshesh Pathak", designation: "Embedded Dev", image: "reshesh.png" },
    { name: "Lokesh Khadim", designation: "Embedded Dev", image: "lokesh.png" },
    { name: "Oishwarya Banerjee", designation: "Corporate Manager", image: "oishwarya.png" },
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
              src={`/${member.image}`}
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

