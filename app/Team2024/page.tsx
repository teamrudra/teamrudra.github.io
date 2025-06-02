import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const Team24Page = () => {
  const teamMembers = [
    // ===== CODING =====
    { name: "Shashwat Ganesh", designation: "Team Lead", image: "./coding-member1.png" },
    { name: "Waseem Riaz", designation: "Developers Lead", image: "./coding-member2.png" },
    { name: "Pritesh Agarwal", designation: "Simulation & Testing", image: "./coding-member3.png" },
    { name: "Yasharth Gupta", designation: "Coding member", image: "./coding-member4.png" },
    { name: "Ayush Daga", designation: "Coding Member", image: "./coding-member5.png" },

    // ===== CORPORATE =====
    { name: "Sanskar Patil", designation: "Sponsorship Lead", image: "./corporate-member1.png" },
    { name: "Rishita Seetha", designation: "Outreach Lead", image: "./corporate-member2.png" },
    { name: "Srishti Chatterjee", designation: "Creatives Lead", image: "./corporate-member3.png" },
    { name: "Danyal Reyaz", designation: "Corporate Member", image: "./corporate-member4.png" },
    { name: "Priyansh Sonthalia", designation: "Corporate Member", image: "./corporate-member5.png" },
    { name: "Nidhan SKN", designation: "Corporate Member", image: "./corporate-member6.png" },

    // ===== ELECTRONICS =====
    { name: "RajKumar M", designation: "Technical Director", image: "./electronics-member1.png" },
    { name: "Prerna Sharma", designation: "Power & Communications", image: "./electronics-member2.png" },
    { name: "Harshit Agarwal", designation: "System Integrations", image: "./electronics-member3.png" },
    { name: "Kaustubh Guha", designation: "Electronics Member", image: "./electronics-member4.png" },
    { name: "Sonakshi Srivastava", designation: "Electronics Member", image: "./electronics-member5.png" },
    { name: "Pragati Prithvi", designation: "Electronics Member", image: "./electronics-member6.png" },
    { name: "Sidhant", designation: "Electronics Member", image: "./electronics-member7.png" },

    // ===== LIFE SCIENCES =====
    { name: "Eeshan Nair", designation: "Co Team Lead", image: "./life-science-member1.png", linkedin: "https://www.linkedin.com/in/eeshan-nair-496800238/" },
    { name: "Aruna S", designation: "Research Lead", image: "./life-science-member2.png", linkedin: "https://www.linkedin.com/in/aruna-sainathan-668b46228/" },
    { name: "Sayantani Chattopadhyay", designation: "LifeScience Member", image: "./life-science-member3.png", linkedin: "https://www.linkedin.com/in/sayantani-chattopadhyay-33b71b256/" },
    { name: "Danyal Reyaz", designation: "LifeScience Member", image: "./life-science-member4.png", linkedin: "https://www.linkedin.com/in/danyal-reyaz/" },
    { name: "Neelesh S", designation: "LifeScience Member", image: "./life-science-member5.png" },
    { name: "Tanmayaa C S", designation: "LifeScience Member", image: "./life-science-member6.png" },

    // ===== MECHANICAL =====
    { name: "Along Ao", designation: "Mechanical Lead", image: "./mechanical-member1.png", linkedin: "https://www.linkedin.com/in/along-ao/" },
    { name: "Aditya Raj Bhatia", designation: "Mechanical Member", image: "./mechanical-member2.png", linkedin: "https://linkedin.com/in/aditya-raj-bhatia-279109252/" },
    { name: "Kethan Babu", designation: "Mechanical Member", image: "./mechanical-member3.png" },
    { name: "Himanshu Karar", designation: "Mechanical Member", image: "./mechanical-member4.png", linkedin: "https://www.linkedin.com/in/himanshu-karar-349268157/" },
    { name: "Ratnesh Mishra", designation: "Mechanical Member", image: "./mechanical-member5.png", linkedin: "https://www.linkedin.com/in/ratnesh-mishra-07260424b/" },
    { name: "Prerna Kumari", designation: "Mechanical Member", image: "./mechanical-member6.png", linkedin: "https://www.linkedin.com/in/prerna-kumari-31aa3325b/" },
    { name: "Rishabh Kothari", designation: "Mechanical Member", image: "./mechanical-member7.png" },
    { name: "Sujal Shah", designation: "Mechanical Member", image: "./mechanical-member9.png", linkedin: "https://www.linkedin.com/in/sujal-shah-a92a63297/" },
    { name: "Kevin Mathew", designation: "Mechanical Member", image: "./mechanical-member10.png" },
    { name: "M.V. Aneesh", designation: "Mechanical Member", image: "./mechanical-member11.png", linkedin: "https://www.linkedin.com/in/aneesh-marella-a315b3221/" }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative">

      {/* Sparkles Effect */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      <h2 className="text-white text-4xl mb-12 z-10 font-serif">Team 2024-25 Members</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center z-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 relative z-10">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl mt-4 inline-block hover:underline"
              >
                {member.name}
              </a>
            ) : (
              <h3 className="text-white text-xl mt-4">{member.name}</h3>
            )}
            <p className="text-gray-300 text-sm">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team24Page;
