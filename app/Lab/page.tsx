import { SparklesCore } from '@/components/ui/sparkles';

const Labpage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-12 px-4 flex flex-col items-center">
      {/* Sparkles Background */}
      <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

      {/* Heading */}
      <h1 className="text-4xl font-semibold mb-10 z-10 text-center">Research and Resources</h1>

      {/* Main Lab Section */}
      <section className="z-10 w-full max-w-7xl px-4 mb-16">
        <h2 className="text-2xl font-medium mb-6 text-center">Main Lab</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`/labs/main${num}.png`}
              alt={`Main Lab ${num}`}
              className="w-full max-w-[150px] h-auto rounded-md object-cover"
            />
          ))}
        </div>

        {/* Video - Main Lab */}
        <div className="mt-10 flex justify-center">
          <video width="100%" height="auto" controls className="w-full max-w-3xl rounded-lg shadow-md">
            <source src="/labs/main-lab-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Mechanical Lab Section */}
      <section className="z-10 w-full max-w-7xl px-4">
        <h2 className="text-2xl font-medium mb-6 text-center">Mechanical Lab</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`/mech${num}.jpeg`}
              alt={`Mech Lab ${num}`}
              className="w-full max-w-[150px] h-auto rounded-md object-cover"
            />
          ))}
        </div>

        {/* Video - Mechanical Lab */}
        <div className="mt-10 flex justify-center">
          <video width="100%" height="auto" controls className="w-full max-w-3xl rounded-lg shadow-md">
            <source src="/mechlab.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Labpage;
