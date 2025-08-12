import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const MechanicalDomainPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">
      
      {/* Sparkles Effect in background */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />
      
      {/* Page Heading */}
      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Mechanical Domain Team</h2>
      
      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">

        {/* Team Member - Kethan Babu */}
        <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
          <img src="./mechanical-member3.png" alt="Kethan Babu" className="w-32 h-32 rounded-full" />
          <h3 className="text-white text-xl mt-4 text-center">Mechanics Lead - Kethan Babu</h3>
        </div>

        {/* Team Member - Ratnesh Mishra */}
        <Link href="https://www.linkedin.com/in/ratnesh-mishra-07260424b/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
            <img src="./mechanical-member5.png" alt="Ratnesh Mishra" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Team Lead - Ratnesh Mishra</h3>
          </div>
        </Link>

        {/* Team Member - Himanshu Karar */}
        <Link href="https://www.linkedin.com/in/himanshu-karar-349268157/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
            <img src="./mechanical-member4.png" alt="Himanshu Karar" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Mechanical Lead - Himanshu Karar</h3>
          </div>
        </Link>

        {/* Team Member - Prerna Kumari */}
        <Link href="https://www.linkedin.com/in/prerna-kumari-31aa3325b/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
            <img src="./mechanical-member6.png" alt="Prerna Kumari" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Mechanical Lead - Prerna Kumari</h3>
          </div>
        </Link>

        {/* Team Member - Rishabh Kothari */}
        <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
          <img src="./mechanical-member7.png" alt="Rishabh Kothari" className="w-32 h-32 rounded-full" />
          <h3 className="text-white text-xl mt-4 text-center">Rishabh Kothari</h3>
        </div>

        {/* Team Member - Sujal Shah */}
        <Link href="https://www.linkedin.com/in/sujal-shah-a92a63297/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
            <img src="./mechanical-member-sujal.jpeg" alt="Sujal Shah" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Sujal Shah</h3>
          </div>
        </Link>

        {/* Team Member - Kevin Mathew */}
        <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
          <img src="./mechanical-member10.png" alt="Kevin Mathew" className="w-32 h-32 rounded-full" />
          <h3 className="text-white text-xl mt-4 text-center">Kevin Mathew</h3>
        </div>

        {/* Team Member - Deepro Pratim Chatterjee */}
        <Link href="https://www.linkedin.com/in/deepro-pratim-chatterjee-7674b7325/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
            <img src="./deepro.jpeg" alt="Deepro Pratim Chatterjee" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Deepro Pratim Chatterjee</h3>
          </div>
        </Link>

     

        {/* Team Member - Vaishnav Bhosale */}
        <Link href="https://www.linkedin.com/in/vaishnavbhosale/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
            <img src="./vaishnav.jpeg" alt="Vaishnav Bhosale" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Vaishnav Bhosale</h3>
          </div>
        </Link>

        {/* Team Member - Paridhi Gupta */}
        <Link href="https://www.linkedin.com/in/paridhi-gupta-b60bb4237/">
          <div className="bg-gray-800 p-6 w-[300px] h-auto mx-auto rounded-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center justify-between">
            <img src="./paridhi.jpeg" alt="Paridhi Gupta" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Paridhi Gupta</h3>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default MechanicalDomainPage;
