import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const CorporateDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Corporate Domain Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        


        {/* Corporate Team Member 2 */}
        <Link href="https://www.linkedin.com/in/danyal-reyaz/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./corporate member 4.png alt="Corporate Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Danyal Reyaz</h3>
          </div>
        </Link>

        {/* Corporate Team Member 3 */}
        <Link href="https://www.linkedin.com/in/nidhan-santa-kumar-n/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./corporate-member6.png" alt="Corporate Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Creatives Lead-Nidhan SKN</h3>
          </div>
        </Link>
                {/* Corporate Team Member 1 */}
                <Link href="https://www.linkedin.com/in/ditsa-sarkar-7a0623228/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./corporate-member1.png" alt="Corporate Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Ditsa Sarkar</h3>
          </div>
        </Link>

        {/* Corporate Team Member 4 */}
        <Link href="">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./corporate-member4.jpeg" alt="Corporate Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Bhargavi Singh</h3>
          </div>
        </Link>

        {/* Corporate Team Member 5 */}
        <Link href="https://www.linkedin.com/in/shivi-gupta-642651301/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./corporate-member5.jpeg" alt="Corporate Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Shivi Gupta</h3>
          </div>
        </Link>

        {/* Corporate Team Member 6 */}
        <Link href="https://www.linkedin.com/in/snehal-gupta-44a791222/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./corporate-member6.jpeg" alt="Corporate Team Member 6" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Snehal gupta</h3>
          </div>
        </Link>

         {/* Corporate Team Member 7 */}
        <Link href="https://www.linkedin.com/in/shriya-rao-4773352bb/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="./corporate-member7.jpeg" alt="Corporate Team Member 7" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Shriya Rao</h3>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default CorporateDomainPage;
