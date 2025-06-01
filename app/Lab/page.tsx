import { SparklesCore } from '@/components/ui/sparkles';

const Labpage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-12 px-4 flex flex-col items-center">
      {/* Sparkles Background */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-10 z-10 text-center">Research and Resources</h1>

      {/* Main Lab Section */}
      <section className="z-10 mb-16 w-full max-w-7xl">
        <h2 className="text-2xl font-medium mb-6 text-center">Main Lab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`/labs/main${i}.png`}
              alt={`Main Lab ${i}`}
              className="w-full h-48 object-cover rounded-md"
            />
          ))}
        </div>

        {/* Video - Main Lab */}
        <div className="mt-6 flex justify-center px-4">
          <video className="w-full max-w-3xl rounded-lg shadow-md" controls>
            <source src="/labs/main-lab-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Mechanical Lab Section */}
      <section className="z-10 w-full max-w-7xl">
        <h2 className="text-2xl font-medium mb-6 text-center">Mechanical Lab</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`/mech${i}.jpeg`}
              alt={`Mech Lab ${i}`}
              className="w-full h-48 object-cover rounded-md"
            />
          ))}
        </div>

        {/* Video - Mechanical Lab */}
        <div className="mt-6 flex justify-center px-4">
          <video className="w-full max-w-3xl rounded-lg shadow-md" controls>
            <source src="/mechlab.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Labpage;
