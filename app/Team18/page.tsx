import Link from 'next/link';

import { SparklesCore } from '@/components/ui/sparkles';

const Team18Page = () => {
  const teamMembers = [
   { name: "Abhishek Patel", designation: "Team Lead", image: "./abhishek.jpg" },
  { name: "Bhavansh Tandon", designation: "Team Manager & Electronics Lead", image: "./bhavansh.jpeg" },
  { name: "Varun Ramesh", designation: "Technical Director", image: "./varun.jpg" },
  { name: "Sonali Sinha Roy", designation: "Mechanical Lead", image: "./sonali.jpg" },
  { name: "Vaibhav Shelke", designation: "Coding Lead", image: "./vaibhav.jpeg" },
  { name: "Uthvag", designation: "Science Lead", image: "./uthvag.jpeg" },
  { name: "Chirag Bharani", designation: "Sponsorship Lead", image: "./chirag.jpeg" },
  { name: "Akash Sehgal", designation: "Marketing Lead", image: "./akash.JPG" },
  { name: "Hari Krishna", designation: "Electronics Team", image: "./hari.png" },
  { name: "Maanik Narayan", designation: "Electronics Team", image: "./mani.JPG" },
  { name: "Krishanu Kumar", designation: "Mechanical Team", image: "./krishanu.JPG" },
  { name: "Gauravjit Singh Gill", designation: "Mechanical Team", image: "./gauravjit.jpg" },
  { name: "Rahul R", designation: "Mechanical Team", image: "./rahul.jpg" },
  { name: "Lochan RN", designation: "Coding Team", image: "./lochan.png" },
  { name: "Kriti Pratap", designation: "Coding Team", image: "./kriti.JPG" },
  { name: "Nikil Datta", designation: "Corporate Team", image: "./nikhil.webp" },
  { name: "Shri Venkatesh", designation: "Science Team", image: "./shri.webp" },
  { name: "Rahul Agarwal", designation: "Mechanical Team", image: "./rahulag.webp" },
  { name: "David Chaudhary", designation: "Mechanical Team", image: "./david.webp" },
  { name: "Chaitanya Joshi", designation: "Mechanical Team", image: "./chaitanya.webp" },
  { name: "Renish Kumar", designation: "Developer", image: "./renish.JPG" },
  { name: "Abhishek Reddy", designation: "Developer", image: "./abhishek.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">

      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Team 2018 Members</h2>

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
