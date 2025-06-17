import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const CodingDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Coding Domain Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">

        {/* Coding Team Member 1 – Ayush Daga */}
        <Link href="https://www.linkedin.com/in/ayush-daga-341045226/">
          <div className="bg-gray-800 p-6 w-64 h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./coding-member5.png" alt="Ayush Daga" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Ayush Daga</h3>
          </div>
        </Link>

        {/* Coding Team Member 2 – Yasharth Gupta */}
        <Link href="https://www.linkedin.com/in/yasharth-gupta-53749a255/">
          <div className="bg-gray-800 p-6 w-64 h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./coding-member4.png" alt="Yasharth Gupta" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Yasharth Gupta</h3>
          </div>
        </Link>

        {/* Coding Team Member 3 – Lakshay Chhabra */}
        <Link href="https://www.linkedin.com/in/lakshayyy15/">
          <div className="bg-gray-800 p-6 w-64 h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./lakshay.jpeg" alt="Lakshay Chhabra" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Lakshay Chhabra</h3>
          </div>
        </Link>

        {/* Coding Team Member 4 – Pavithra CP */}
        <Link href="https://www.linkedin.com/in/pavithra-cp/">
          <div className="bg-gray-800 p-6 w-64 h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./pavithra.jpeg" alt="Pavithra CP" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Pavithra CP</h3>
          </div>
        </Link>

        {/* Coding Team Member 5 – Nikhil CP */}
        <Link href="https://www.linkedin.com/in/nikhilcp05/">
          <div className="bg-gray-800 p-6 w-64 h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./nikhil.jpeg" alt="Nikhil CP" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Nikhil CP</h3>
          </div>
        </Link>

        {/* Coding Team Member 6 – Rajrupa Das */}
        <Link href="https://www.linkedin.com/in/rajrupa-das-8b9597324/">
          <div className="bg-gray-800 p-6 w-64 h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./rajrupa.jpeg" alt="Rajrupa Das" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Rajrupa Das</h3>
          </div>
        </Link>

        {/* Coding Team Member 7 – Aryan Garg */}
        <Link href="#">
          <div className="bg-gray-800 p-6 w-64 h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300">
            <img src="./aryan.jpeg" alt="Aryan Garg" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Aryan Garg</h3>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default CodingDomainPage;
