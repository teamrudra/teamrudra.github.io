import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const LifeScienceDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      
      {/* Sparkles background effect */}
      <SparklesCore
        className="absolute inset-0 z-0"
        particleColor="#ffffff"
        particleDensity={30}
      />

      {/* Heading */}
      <h2 className="text-white text-4xl mb-12 z-10 font-serif">
        Life Science Domain Team
      </h2>

      {/* Team Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">

        {/* Team Manager – Danyal Reyaz */}
        <Link href="https://www.linkedin.com/in/danyal-reyaz/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./life-science-member4.png" alt="Danyal Reyaz" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl text-center">Team Manager - Danyal Reyaz</h3>
          </div>
        </Link>

        {/* LifeScience Lead – Neelesh S */}
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
          <img src="./life-science-member5.png" alt="Neelesh S" className="w-32 h-32 rounded-full" />
          <h3 className="text-white text-xl text-center">LifeScience Lead - Neelesh S</h3>
        </div>

        {/* LifeScience Lead – Tanmayaa C S */}
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
          <img src="./life-science-member6.png" alt="Tanmayaa C S" className="w-32 h-32 rounded-full" />
          <h3 className="text-white text-xl text-center">LifeScience Lead - Tanmayaa C S</h3>
        </div>

        {/* Member – Prasith Bhaduri */}
        <Link href="https://www.linkedin.com/in/prasith-bhaduri/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./prasith.jpeg" alt="Prasith Bhaduri" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl text-center">Prasith Bhaduri</h3>
          </div>
        </Link>

        {/* Member – Devi Prasath Kumar */}
        <Link href="https://www.linkedin.com/in/devi-prasath-9b0006320/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./devi.jpeg" alt="Devi Prasath Kumar" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl text-center">Devi Prasath Kumar</h3>
          </div>
        </Link>

        {/* Member – Sanika Gadre */}
        <Link href="https://www.linkedin.com/in/sanika-g-b55321287/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./sanika.jpeg" alt="Sanika Gadre" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl text-center">Sanika Gadre</h3>
          </div>
        </Link>

        {/* Member – Dhanushya Ganeshan */}
        <Link href="https://www.linkedin.com/in/dhanushya-ganesan-496a69289/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./dhanushya.jpeg" alt="Dhanushya Ganeshan" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl text-center">Dhanushya Ganeshan</h3>
          </div>
        </Link>

        {/* Member – Sarvagna */}
        <Link href="https://www.linkedin.com/in/sarvagna06/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./sarvagna.jpeg" alt="Sarvagna" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl text-center">Sarvagna</h3>
          </div>
        </Link>

        {/* Member – Muskaan Tasheen */}
        <Link href="https://www.linkedin.com/in/muskaan-t-a62731309/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 h-[320px] w-[250px] flex flex-col items-center justify-between z-10">
            <img src="./muskaan.jpeg" alt="Muskaan Tasheen" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl text-center">Muskaan Tasheen</h3>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default LifeScienceDomainPage;
