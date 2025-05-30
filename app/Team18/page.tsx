import Link from 'next/link';

import { SparklesCore } from '@/components/ui/sparkles';

const Team18Page = () => {
  const teamMembers = [
    { name: "Abhishek Patel", designation: "Team Lead", image: "abhishekp.png" },
    { name: "Bhavansh Tandon", designation: "Team Manager & Electronics Lead", image: "bhavansh.png" },
    { name: "Varun Ramesh", designation: "Technical Director", image: "varun.png" },
    { name: "Sonali Sinha Roy", designation: "Mechanical Lead", image: "sonali.png" },
    { name: "Vaibhav Shelke", designation: "Coding Lead", image: "vaibhav.png" },
    { name: "Uthvag", designation: "Science Lead", image: "uthvag.png" },
    { name: "Chirag Bharani", designation: "Sponsorship Lead", image: "chirag.png" },
    { name: "Akash Sehgal", designation: "Marketing Lead", image: "aakash.png" },
    { name: "Hari Krishna", designation: "Electronics Team", image: "hari.png" },
    { name: "Maanik Narayan", designation: "Electronics Team", image: "maanik.png" },
    { name: "Krishanu Kumar", designation: "Mechanical Team", image: "krishanu.png" },
    { name: "Gauravjit Singh Gill", designation: "Mechanical Team", image: "gauravjit.png" },
    { name: "Rahul R", designation: "Mechanical Team", image: "rahul.png" },
    { name: "Lochan RN", designation: "Coding Team", image: "lochan.png" },
    { name: "Kriti Pratap", designation: "Coding Team", image: "kriti.png" },
    { name: "Nikil Datta", designation: "Corporate Team", image: "nikhil.png" },
    { name: "Shri Venkatesh", designation: "Science Team", image: "shri.png" },
    { name: "Rahul Agarwal", designation: "Mechanical Team", image: "rahulag.png" },
    { name: "David Chaudhary", designation: "Mechanical Team", image: "david.png" },
    { name: "Chaitanya Joshi", designation: "Mechanical Team", image: "chaitanya.png" },
    { name: "Renish Kumar", designation: "Developer", image: "renish.png" },
    { name: "Abhishek Reddy", designation: "Developer", image: "abhishekr.png" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">

      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Team 18 Members</h2>

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

export default Team18Page;
