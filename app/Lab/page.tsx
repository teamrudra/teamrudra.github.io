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
          <img src="/labs/main1.png" alt="Main Lab 1" className="rounded-md w-full h-auto object-cover" />
          <img src="/labs/main2.png" alt="Main Lab 2" className="rounded-md w-full h-auto object-cover" />
          <img src="/labs/main3.png" alt="Main Lab 3" className="rounded-md w-full h-auto object-cover" />
          <img src="/labs/main4.png" alt="Main Lab 4" className="rounded-md w-full h-auto object-cover" />
          <img src="/labs/main5.png" alt="Main Lab 5" className="rounded-md w-full h-auto object-cover" />
          <img src="/labs/main6.png" alt="Main Lab 6" className="rounded-md w-full h-auto object-cover" />
        </div>

        {/* Video - Main Lab */}
        <div className="mt-6 flex justify-center px-4">
          <video controls className="rounded-lg shadow-md w-full max-w-3xl">
            <source src="/labs/main-lab-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Mechanical Lab Section */}
      <section className="z-10 w-full max-w-6xl">
        <h2 className="text-2xl font-medium mb-6 text-center">Mechanical Lab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          <img src="/mech1.jpeg" alt="Mech Lab 1" className="rounded-md w-full h-auto object-cover" />
          <img src="/mech2.jpeg" alt="Mech Lab 2" className="rounded-md w-full h-auto object-cover" />
          <img src="/mech3.jpeg" alt="Mech Lab 3" className="rounded-md w-full h-auto object-cover" />
          <img src="/mech4.jpeg" alt="Mech Lab 4" className="rounded-md w-full h-auto object-cover" />
          <img src="/mech5.jpeg" alt="Mech Lab 5" className="rounded-md w-full h-auto object-cover" />
          <img src="/mech6.jpeg" alt="Mech Lab 6" className="rounded-md w-full h-auto object-cover" />
        </div>

        {/* Video - Mechanical Lab */}
        <div className="mt-6 flex justify-center px-4">
          <video controls className="rounded-lg shadow-md w-full max-w-3xl">
            <source src="/mechlab.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Labpage;
