
// pages/missions.tsx
import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const MissionsPage: React.FC = () => {
  const missions = [
    {
      id: 1,
      image: '1.png',
      title: 'Mission 1',
      subtitle: 'Instrument Deployment And Maintenance Operation (IDMO)',
      info: 'The Mission has two stages: Instrument Deployment and Instrument Maintenance. In the Instrument Deployment stage, the rover moves to a simulated instrument panel to perform tasks. Equipped with advanced tools, the rover executes precise operations on the panel, such as opening drawers, flipping switches, and operating a joystick.',
    },
    {
      id: 2,
      image: 'mission2.png',
      title: 'Mission 2',
      subtitle: 'Project Implementation & Management Assessment (PIMA)',
      info: 'The PIMA evaluates the rover\'s design and project success. Teams present the rover\'s development stages, testing their persistence and problem-solving abilities. The presentation includes project planning, manufacturing, and testing stages.',
    },
    {
      id: 3,
      image: '2.png',
      title: 'Mission 3',
      subtitle: 'Astrobiology Expedition',
      info: 'This mission involves functioning as a mobile science laboratory to retrieve samples and conduct detailed analyses. It examines test samples for indicators of life and identifies sites with the potential to support microbial life while actively seeking signs of extinct or extant life.',
    },
    {
      id: 4,
      image: '3.png',
      title: 'Mission 4',
      subtitle: 'Business Plan Presentation',
      info: 'This task evaluates the team\'s business mindset, encouraging alliances with corporate and academic communities to boost project development. It spreads awareness about the potential real-life applications of rovers.',
    },
    {
      id: 5,
      image: 'z.png',
      title: 'Mission 5',
      subtitle: 'Reconnaissance & Delivery Mission',
      info: 'The rover is equipped with advanced sensors and imaging technologies to survey the area, analyzing topography, geology, and points of interest. It delivers collected objects to the base station using a robotic arm and storage box for efficient task execution.',
    },
    {
      id: 6,
      image: 'mission6.png',
      title: 'Mission 6',
      subtitle: 'Autonomous Expedition',
      info: 'The rover navigates autonomously using arrow markers on challenging terrain without remote operation. It follows arrowheads to the endpoint while logging GPS coordinates and corresponding directions.',
    },
  ];

  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal overflow */}
      <div className="min-h-screen bg-black text-white font-sans py-16 px-6 relative">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#f0f0f0" particleDensity={30} />
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-12 relative z-10">
          Missions in IRC
        </h2>

        {/* Container for Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-8 gap-x-6">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="relative group overflow-hidden border border-gray-700 rounded-lg cursor-pointer mx-auto max-w-[360px] w-full h-[400px]"
            >
              {/* Mission Image */}
              <img
                src={mission.image}
                alt={mission.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Mission Heading */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 text-center px-4">
                <h3 className="text-xl font-bold mb-1">{mission.title}</h3>
                {mission.subtitle && <p className="text-sm font-normal">{mission.subtitle}</p>}
              </div>

              {/* Mission Info - Shows on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                <p className="text-gray-300 text-sm">{mission.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionsPage;
