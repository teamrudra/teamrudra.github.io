import { SparklesCore } from '@/components/ui/sparkles';

const Labpage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-12 px-4 flex flex-col items-center">
      {/* Sparkles Background */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-10 z-10 text-center">Research and Resources</h1>

      {/* Main Lab Section */}
      <section className="z-10 mb-16 w-full max-w-6xl">
        <h2 className="text-2xl font-medium mb-6 text-center">Main Lab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[
            { src: './main1.jpeg', alt: 'Main Lab 1', caption: 'Main Lab - Area' },
            { src: './main2.jpeg', alt: 'Main Lab 2', caption: 'Antenna operation' },
            { src: './Main3.jpeg', alt: 'Main Lab 3', caption: 'Miscellaneous Components' },
            { src: './Main4.jpeg', alt: 'Main Lab 4', caption: 'Printed Circuit Board (PCB)' },
            { src: './main5.jpeg', alt: 'Main Lab 5', caption: 'Robotic Manipulator' },
            { src: './Main6.jpeg', alt: 'Main Lab 6', caption: 'Testing Equipment' },
          ].map(({ src, alt, caption }, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
                <img src={src} alt={alt} className="w-full h-full object-cover rounded-md" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-300">{caption}</p>
            </div>
          ))}
        </div>

        {/* Video - Main Lab */}
        <div className="mt-6 flex justify-center px-4">
          <video controls className="rounded-lg shadow-md w-full max-w-3xl">
            <source src="./mainlab.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Mechanical Lab Section */}
      <section className="z-10 w-full max-w-6xl">
        <h2 className="text-2xl font-medium mb-6 text-center">Mechanical Lab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[
            { src: './mech1.jpeg', alt: 'Mech Lab 1', caption: 'Mechanical Lab - Area' },
            { src: './mech2.jpeg', alt: 'Mech Lab 2', caption: 'Assortment of Files and Hacksaw' },
            { src: './mech3.jpeg', alt: 'Mech Lab 3', caption: 'Tools: Angle Grinder, Hammer' },
            { src: './mech4.jpeg', alt: 'Mech Lab 4', caption: 'Drill Press' },
            { src: './mech5.jpeg', alt: 'Mech Lab 5', caption: 'Frames' },
            { src: './Mech6.jpeg', alt: 'Mech Lab 6', caption: 'Drive Train' },
          ].map(({ src, alt, caption }, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
                <img src={src} alt={alt} className="w-full h-full object-cover rounded-md" />
              </div>
              <p className="mt-2 text-sm text-center text-gray-300">{caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Labpage;


