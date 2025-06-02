import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const Team17Page = () => {
  const teamMembers = [
    { name: "Anshuman Dikshit", designation: "Team Lead", image: "./anshu.jpg" },
{ name: "Rishabh Nahata", designation: "Team Manager", image: "./rishabh.jpg" },
{ name: "Sanjeet Ray", designation: "Mechanical Lead", image: "./sanjeet.jpg" },
{ name: "Yashasvi Pathak", designation: "Electronics Lead", image: "./yashasvi.jpg" },
{ name: "Tadeesha Roy", designation: "Coding Lead", image: "./tadeesha.jpg" },
{ name: "Vijansh Khanna", designation: "Science Lead", image: "./vijansh.jpg" },
{ name: "Chirag Bharani", designation: "Sponsorship Lead", image: "./chirag.jpeg" },
{ name: "Akash Sehgal", designation: "Marketing & PR Lead", image: "./akash.JPG" },
{ name: "Abhishek Patel", designation: "Mechanical Team", image: "./abhishek.jpg" },
{ name: "Bhavansh Tandon", designation: "Electronics Team", image: "./bhavansh.jpeg" },
{ name: "Varun Ramesh", designation: "Mechanical Team", image: "./varun.jpg" },
{ name: "Sonali Sinha Roy", designation: "Mechanical Team", image: "./sonali.jpg" },
{ name: "Vaibhav Shelke", designation: "Coding Team", image: "./vaibhav.jpeg" },
{ name: "Uthvag", designation: "Science Team", image: "./uthvag.jpeg" },
{ name: "Hari Krishna", designation: "Electronics Team", image: "./hari.png" },
{ name: "Maanik Narayan", designation: "Electronics Team", image: "./mani.JPG" },
{ name: "Saawan Saurabh", designation: "Electronics Team", image: "./sawan.jpg" },
{ name: "Niket Kumar", designation: "Electronics Team", image: "./niket.JPG" },
{ name: "Krishanu Kumar", designation: "Mechanical Team", image: "./krishanu.JPG" },
{ name: "Gauravjit Singh Gill", designation: "Mechanical Team", image: "./gauravjit.jpg" },
{ name: "Rahul R", designation: "Mechanical Team", image: "./rahul.jpg" },
{ name: "Lochan RN", designation: "Coding Team", image: "./lochan.png" },
{ name: "Kriti Pratap", designation: "Coding Team", image: "./kriti.JPG" },
{ name: "Arun Baalaaji", designation: "Electronics Team", image: "./varun.jpg" }

  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Team 2017 Members</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img
              src={member.image}
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

export default Team17Page;
