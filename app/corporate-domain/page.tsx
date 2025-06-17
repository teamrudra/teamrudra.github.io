import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const CorporateDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      
      {/* Sparkles Background Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      {/* Page Heading */}
      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Corporate Domain Team</h2>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        
        {/* Team Manager - Danyal Reyaz */}
        <Link href="https://www.linkedin.com/in/danyal-reyaz/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./life-science-member4.png" alt="Corporate Team Member 2" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Team Manager - Danyal Reyaz</h3>
          </div>
        </Link>

        {/* Creatives Lead - Nidhan SKN */}
        <Link href="https://www.linkedin.com/in/nidhan-santa-kumar-n/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./corporate-member6.png" alt="Corporate Team Member 3" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Creatives Lead - Nidhan SKN</h3>
          </div>
        </Link>

        {/* Ditsa Sarkar */}
        <Link href="https://www.linkedin.com/in/ditsa-sarkar-7a0623228/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./ditsa.jfif" alt="Corporate Team Member 1" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Ditsa Sarkar</h3>
          </div>
        </Link>

        {/* Bhargavi Singh */}
        <Link href="">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./corporate-member4.jpeg" alt="Corporate Team Member 4" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Bhargavi Singh</h3>
          </div>
        </Link>

        {/* Shivi Gupta */}
        <Link href="https://www.linkedin.com/in/shivi-gupta-642651301/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./corporate-member5.jpeg" alt="Corporate Team Member 5" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Shivi Gupta</h3>
          </div>
        </Link>

        {/* Snehal Gupta */}
        <Link href="https://www.linkedin.com/in/snehal-gupta-44a791222/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./corporate-member6.jpeg" alt="Corporate Team Member 6" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Snehal Gupta</h3>
          </div>
        </Link>

        {/* Shriya Rao */}
        <Link href="https://www.linkedin.com/in/shriya-rao-4773352bb/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./corporate-member7.jpeg" alt="Corporate Team Member 7" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Shriya Rao</h3>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default CorporateDomainPage;
