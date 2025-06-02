import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const Team2019Page = () => {
  const teamMembers = [
    { name: "Hari Krishna", designation: "Team Lead", image: "./hari.png" },
  { name: "Maanik Narayan", designation: "Team Manager", image: "./mani.JPG" },
  { name: "Krishanu Kumar", designation: "Technical Director", image: "./krishanu.JPG" },
  { name: "Gauravjit Singh Gill", designation: "Mechanical Lead", image: "./gauravjit.jpg" },
  { name: "Rahul R", designation: "Research Lead", image: "./rahul.jpg" },
  { name: "Lochan RN", designation: "Developer's Lead", image: "./lochan.png" },
  { name: "Niket Kumar", designation: "Electronics Lead", image: "./niket.png" }, // ⚠ Not in verified image list
  { name: "Kriti Pratap", designation: "Vision & Autonomous Lead", image: "./kriti.JPG" },
  { name: "Nikil Datta", designation: "Corporate Lead", image: "./nikhil.webp" },
  { name: "Shri Venkatesh", designation: "Science Lead", image: "./shri.webp" },
  { name: "Rahul Agarwal", designation: "Analysis Lead", image: "./rahulag.webp" },
  { name: "David Chaudhary", designation: "Simulation Lead", image: "./david.webp" },
  { name: "Chaitanya Joshi", designation: "Design Lead", image: "./chaitanya.webp" },
  { name: "Renish Kumar", designation: "Senior Developer", image: "./renish.JPG" },
  { name: "Farhad Bharucha", designation: "Senior Developer", image: "./farhad.png" }, // ⚠ Not in verified image list
  { name: "Abhishek Reddy", designation: "Senior Developer", image: "./abhishek.jpg" },
  { name: "Saksham Bhadani", designation: "Mechatroniks", image: "./saksham.png" }, // ⚠ Not in verified image list
  { name: "Fenil Bamnoliya", designation: "Mechanical Dev", image: "./fenil.png" }, // ⚠ Not in verified image list
  { name: "Hemangi Dudani", designation: "Mechanical Dev", image: "./hemangi.png" }, // ⚠ Not in verified image list
  { name: "Ayush Sagar", designation: "Power Electronics Dev", image: "./ayush.png" }, // ⚠ Not in verified image list
  { name: "Rahamath Ali", designation: "Embedded Dev", image: "./ali.png" }, // ⚠ Not in verified image list
  { name: "Nitesh Thota", designation: "Communications Dev", image: "./nitesh.png" }, // ⚠ Not in verified image list
  { name: "Lekha K", designation: "Developer", image: "./lekha.png" }, // ⚠ Not in verified image list
  { name: "Anguluri Aravind", designation: "Developer", image: "./aravind.png" }, // ⚠ Not in verified image list
  { name: "Nikita Gupta", designation: "Developer", image: "./nikita.png" }, // ⚠ Not in verified image list
  { name: "Tuhin Sengupta", designation: "Bio-Science Researcher", image: "./tuhin.png" }, // ⚠ Not in verified image list
  { name: "Aishnya Shanvi", designation: "Embedded Developer", image: "./aishanya.png" }, // ⚠ Not in verified image list
  { name: "Antariksh Ray", designation: "Developer", image: "./antariksh.png" }, // ⚠ Not in verified image list
  { name: "Prateek", designation: "Developer", image: "./prateek.png" }, // ⚠ Not in verified image list
  { name: "Pawan Wadhwani", designation: "Developer", image: "./pawan.png" }, // ⚠ Not in verified image list
  { name: "Harry Lal", designation: "Developer", image: "./harry.png" }, // ⚠ Not in verified image list
  { name: "Anurup Mohanty", designation: "Astrobiologist", image: "./anurup.png" }, // ⚠ Not in verified image list
  { name: "Vishal", designation: "Geologist", image: "./vishal.png" }, // ⚠ Not in verified image list

  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Team 2019 Members</h2>

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

export default Team2019Page;

