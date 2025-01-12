// pages/urcMissions.tsx
import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';

const URCMissionsPage: React.FC = () => {
  const missions = [
    {
      id: 1,
      image: 'science_mission.png',
      title: 'Science Mission',
      subtitle: 'Astrobiological Analysis and Sample Collection',
      info: 'The rover performs scientific investigations by collecting and analyzing soil and rock samples to detect biosignatures or evidence of past and present life.',
    },
    {
      id: 2,
      image: 'extreme_delivery.png',
      title: 'Extreme Delivery Mission',
      subtitle: 'Terrain Navigation and Payload Delivery',
      info: 'The rover navigates rough terrain to deliver tools and supplies to astronauts, demonstrating reliability in transport tasks across challenging landscapes.',
    },
    {
      id: 3,
      image: 'equipment_servicing.png',
      title: 'Equipment Servicing Mission',
      subtitle: 'Technical Maintenance and Repair',
      info: 'This task involves using the rover’s robotic arm to manipulate tools, operate machinery, and perform maintenance operations on simulated equipment.',
    },
    {
      id: 4,
      image: 'autonomous_navigation.png',
      title: 'Autonomous Navigation Mission',
      subtitle: 'GPS-Based and Obstacle Avoidance Navigation',
      info: 'The rover autonomously navigates through GPS waypoints while avoiding obstacles, showcasing its ability to operate independently in rugged environments.',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-black text-white font-sans py-16 px-6 relative">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#f0f0f0" particleDensity={30} />
        <h2 className="text-center text-4xl lg:text-5xl font-bold mb-12 relative z-10">
          Missions in URC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-8 gap-x-6">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="relative group overflow-hidden border border-gray-700 rounded-lg cursor-pointer mx-auto max-w-[360px] w-full h-[400px]"
            >
              <img
                src={mission.image}
                alt={mission.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 text-center px-4">
                <h3 className="text-xl font-bold mb-1">{mission.title}</h3>
                {mission.subtitle && <p className="text-sm font-normal">{mission.subtitle}</p>}
              </div>

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

export default URCMissionsPage;

