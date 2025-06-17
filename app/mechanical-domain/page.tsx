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
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
          <img src="./mechanical-member3.png" alt="Mechanical Team Member 3" className="w-32 h-32 rounded-full" />
          <h3 className="text-white text-xl mt-4 text-center">Mechanics Lead - Kethan Babu</h3>
        </div>

        {/* Team Member - Ratnesh Mishra */}
        <Link href="https://www.linkedin.com/in/ratnesh-mishra-07260424b/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
            <img src="./mechanical-member5.png" alt="Mechanical Team Member 5" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Team Lead - Ratnesh Mishra</h3>
          </div>
        </Link>

        {/* Team Member - Himanshu Karar */}
        <Link href="https://www.linkedin.com/in/himanshu-karar-349268157/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
            <img src="./mechanical-member4.png" alt="Mechanical Team Member 4" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Mechanical Lead - Himanshu Karar</h3>
          </div>
        </Link>

        {/* Team Member - Prerna Kumari */}
        <Link href="https://www.linkedin.com/in/prerna-kumari-31aa3325b/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
            <img src="./mechanical-member6.png" alt="Mechanical Team Member 6" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Mechanical Lead - Prerna Kumari</h3>
          </div>
        </Link>

        {/* Team Member - Rishabh Kothari */}
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
          <img src="./mechanical-member7.png" alt="Mechanical Team Member 7" className="w-32 h-32 rounded-full" />
          <h3 className="text-white text-xl mt-4 text-center">Rishabh Kothari</h3>
        </div>

        {/* Team Member - Sujal Shah */}
        <Link href="https://www.linkedin.com/in/sujal-shah-a92a63297/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
            <img src="./mechanical-member9.png" alt="Mechanical Team Member 9" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Sujal Shah</h3>
          </div>
        </Link>

        {/* Team Member - Kevin Mathew */}
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
          <img src="./mechanical-member10.png" alt="Mechanical Team Member 10" className="w-32 h-32 rounded-full" />
          <h3 className="text-white text-xl mt-4 text-center">Kevin Mathew</h3>
        </div>

        {/* Team Member - Deepro Pratim Chatterjee */}
        <Link href="https://www.linkedin.com/in/deepro-pratim-chatterjee-7674b7325/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
            <img src="./deepro.jpeg" alt="Mechanical Team Member" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Deepro Pratim Chatterjee</h3>
          </div>
        </Link>

        {/* Team Member - Ayush Kumar Choudhary */}
        <Link href="https://www.linkedin.com/in/ayush-kumar-choudhary-01b550315/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
            <img src="./ayush.jpeg" alt="Mechanical Team Member" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Ayush Kumar Choudhary</h3>
          </div>
        </Link>

        {/* Team Member - Vaishnav Bhosale */}
        <Link href="https://www.linkedin.com/in/vaishnavbhosale/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
            <img src="./vaishnav.jpeg" alt="Mechanical Team Member" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Vaishnav Bhosale</h3>
          </div>
        </Link>

        {/* Team Member - Paridhi Gupta */}
        <Link href="https://www.linkedin.com/in/paridhi-gupta-b60bb4237/">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10 h-[320px] w-[250px] flex flex-col items-center justify-between">
            <img src="./paridhi.jpeg" alt="Mechanical Team Member" className="w-32 h-32 rounded-full" />
            <h3 className="text-white text-xl mt-4 text-center">Paridhi Gupta</h3>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default MechanicalDomainPage;
