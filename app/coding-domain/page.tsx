import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const CodingDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">

      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Coding Domain Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">

        {/* Coding Team Member 1 */}
         <Link href="https://www.linkedin.com/in/ayush-daga-341045226/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member5.png" alt="Coding Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Ayush Daga</h3>
          </div>
        </Link>

        {/* Coding Team Member 2 */}
         <Link href="https://www.linkedin.com/in/yasharth-gupta-53749a255/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member4.png" alt="Coding Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Yasharth Gupta</h3>
          </div>

        {/* Coding Team Member 3 */}
        <Link href="https://www.linkedin.com/in/lakshayyy15/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member3.png" alt="Coding Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Lakshay Chhabra</h3>
          </div>
        </Link>

        {/* Coding Team Member 4 */}
        <Link href="https://www.linkedin.com/in/pavithra-cp/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member4.png" alt="Coding Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Pavithra CP</h3>
          </div>
        </Link>

        {/* Coding Team Member 5 */}
        <Link href="https://www.linkedin.com/in/nikhilcp05/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member5.png" alt="Coding Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Nikhil CP</h3>
          </div>
        </Link>

      <Link href="https://www.linkedin.com/in/rajrupa-das-8b9597324/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member5.png" alt="Coding Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Rajrupa Das</h3>
          </div>
        </Link>

      <Link href="">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./coding-member5.png" alt="Coding Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Aryan Garg</h3>
          </div>
        </Link>
      </div>
      </div>
  );
};

export default CodingDomainPage;
