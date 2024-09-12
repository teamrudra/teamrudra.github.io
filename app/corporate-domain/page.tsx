import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const CorporateDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Corporate Domain Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        
        {/* Corporate Team Member 1 */}
        <Link href="/corporate-team-member-1">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="/corporate-member1.png" alt="Corporate Team Member 1" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Sponsorship Lead-Sanskar Patil</h3>
          </div>
        </Link>

        {/* Corporate Team Member 2 */}
        <Link href="/corporate-team-member-2">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="/corporate-member2.png" alt="Corporate Team Member 2" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Outreach Lead-Rishitha Seethi</h3>
          </div>
        </Link>

        {/* Corporate Team Member 3 */}
        <Link href="/corporate-team-member-3">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="/corporate-member3.png" alt="Corporate Team Member 3" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Creatives Lead-Srishti Chatterjee</h3>
          </div>
        </Link>

        {/* Corporate Team Member 4 */}
        <Link href="/corporate-team-member-4">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="/corporate-member4.png" alt="Corporate Team Member 4" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Danyal Reyaz</h3>
          </div>
        </Link>

        {/* Corporate Team Member 5 */}
        <Link href="/corporate-team-member-5">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="/corporate-member5.png" alt="Corporate Team Member 5" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Priyansh Sonthalia</h3>
          </div>
        </Link>

        {/* Corporate Team Member 6 */}
        <Link href="/corporate-team-member-6">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img src="/corporate-member6.png" alt="Corporate Team Member 6" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="text-white text-xl mt-4">Nidhan S</h3>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default CorporateDomainPage;
