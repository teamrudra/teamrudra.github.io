'use client';
import { SparklesCore } from '@/components/ui/sparkles';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const Home = () => {
  const galleryImages = [
    './gallery-item1.png',
    './gallery-item2.png',
    './gallery-item3.png',
    './gallery-item4.png',
    './gallery-item5.png',
    './gallery-item6.png',
    './gallery-item7.png',
    './gallery-item8.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

const sponsorshipImages = [
    { src: './sukrit-infotech.png', alt: 'Sukrit Infotech', url: 'https://www.sukritinfotech.com' },
    { src: './solidworks.png', alt: 'Solidworks', url: 'https://www.solidworks.com' },
    { src: './altium.png', alt: 'Altium', url: 'https://www.altium.com' },
    { src: './notions-Photoroom.jpg', alt: 'notion', url: 'https://www.notion.com' },
    { src: './mathworks-logo-full-color-rgb-reversed.png', alt: 'Mathworks', url: 'https://www.mathworks.com' },

    // Grouping these in the same row
    { src: './hearingon.png', alt: 'HearingOn', url: 'https://www.baranagarspeechandhearing.com/' },
    { src: './pma spares.png', alt: 'PMA Spares', url: 'https://g.co/kgs/HDRrzX4' },
    { src: './lion circuits (2).png', alt: 'Lion Circuits', url: 'https://www.lioncircuits.com/' },
    { src: './danyal gems logo no-bg.png', alt: 'Danyal Gems', url: 'mailto:danyalgems@gmail.com' }
];
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsLoading(true); // Set loading to true when submission starts
  
  const emailInput = event.currentTarget.elements.namedItem('email') as HTMLInputElement;
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    setIsLoading(false); // Don't forget to reset loading state
    return;
  }
  try {
    const formData = new FormData();
    formData.append('email', email);
    
    const response = await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL as string,
      {
        method: "POST",
        body: formData
      }
    );
    if (!response.ok) {
      alert("There was an issue. Try again later.");
      return;
    }
    const result = await response.json();
    alert("Subscribed successfully!");
    emailInput.value = '';
  } catch (error) {
    console.error("Error subscribing:", error);
    alert("There was an issue. Try again later.");
  } finally {
    setIsLoading(false); // Reset loading state whether request succeeds or fails
  }
};

const handleSubmit2 = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsLoading2(true);  // Start loading
   
  const companyInput = event.currentTarget.elements.namedItem('companyName') as HTMLInputElement;
  const emailInput = event.currentTarget.elements.namedItem('email') as HTMLInputElement;
  const email = emailInput.value;
  const companyName = companyInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    setIsLoading2(false);  // Reset loading on validation error
    return;
  }
  if (companyName === '') {
    alert('Please enter your company name');
    setIsLoading2(false);  // Reset loading on validation error
    return;
  }
  
  try {
    const formData = new FormData();
    formData.append('Company Name', companyName);
    formData.append('email', email);
    
    const response = await fetch(
       process.env.NEXT_PUBLIC_SPONSORSHIP as string,
      {
        method: "POST",
        body: formData
      }
    );
    if (!response.ok) {
      alert("There was an issue. Try again later.");
      return;
    }
    const result = await response.json();
    alert("Thank you for your interest in sponsorship! Our team will contact you shortly.");
    emailInput.value = ''; 
    companyInput.value = '';
  } catch (error) {
    console.error("Error subscribing:", error);
    alert("There was an issue. Try again later.");
  } finally {
    setIsLoading2(false);  // Reset loading state whether request succeeds or fails
  }
};
  

  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal overflow */}
    <style jsx>{`
      html {
        scroll-behavior: smooth;
      }
      @media (max-width: 640px) {
        #home {
        }
      }
    `}</style>
       {/* Navbar */}
<nav className="bg-black bg-opacity-60 text-white fixed w-full z-20 transition-transform duration-300">
  <div className="px-4 py-2 flex justify-between items-center w-full">

    {/* Rudra Logo - Aligned to the left */}
    <Link href="/" legacyBehavior>
      <a className="flex-shrink-0">
        <img src="./rudra-logo.png" alt="Rudra logo" width={100} height={50} />
      </a>
    </Link>

    {/* Desktop Menu - Aligned to the right */}
    <div className="hidden lg:flex space-x-4">
      <Link href="#home" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">HOME</a>
      </Link>
      <Link href="#about" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">ABOUT US</a>
      </Link>
    <div className="group relative">
  <Link href="#team" scroll={true} legacyBehavior>
    <a className="hover:text-gray-300 transition duration-200 cursor-pointer">TEAM</a>
  </Link>
  <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg z-50">
    <ul className="py-2 min-w-[140px]">

      {/* Team 2017 */}
      <li>
        <Link href="/Team2017" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700">2017</a>
        </Link>
      </li>

      {/* Team 2018 */}
      <li>
        <Link href="/Team18" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700">2018</a>
        </Link>
      </li>

      {/* Team 2019 */}
      <li>
        <Link href="/Team2019" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700">2019</a>
        </Link>
      </li>

      {/* Team 2020 */}
      <li>
        <Link href="/Team2020" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700">2020</a>
        </Link>
      </li>

      <hr className="border-gray-600 my-1" />

      {/* Team 2024-25 - Scroll on same page */}
      <li>
          <Link href="/Team2024" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">2024–25</a>
        </Link>
      </li>

      {/* Team 2025-26 - Scroll on same page */}
      <li>
        <Link href="#team" scroll={true} legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">2025–26</a>
        </Link>
      </li>

    </ul>
  </div>
</div>


        <Link href="#rover-renders" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">ROVER</a>
      </Link>
      {/* LAB Page Link */}
<Link href="/Lab" legacyBehavior>
  <a className="hover:text-gray-300 transition duration-200">LAB</a>
</Link>
      <Link href="#achievements" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">ACHIEVEMENTS</a>
      </Link>
      <Link href="#gallery" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">GALLERY</a>
      </Link>
      <Link href="#sponsors" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">SPONSORSHIP</a>
      </Link>
            <Link href="#newsletter" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">NEWSLETTER</a>
      </Link>
      <Link href="#contact" scroll={true} legacyBehavior>
        <a className="hover:text-gray-300 transition duration-200">CONTACT US</a>
      </Link>

    </div>
        {/* Hamburger Menu for Mobile */}
        <button 
          className="lg:hidden flex items-center ml-auto"  
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-60 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <button 
            className="absolute top-4 right-4 text-white text-3xl" 
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <div className="flex flex-col items-center mt-16 space-y-6">
            <Link href="#home" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>HOME</a>
            </Link>
            <Link href="#about" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>ABOUT US</a>
            </Link>
          <div className="group relative">
  <Link href="#team" scroll={true} legacyBehavior>
    <a className="hover:text-gray-300 transition duration-200 cursor-pointer">TEAM</a>
  </Link>
  <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg z-50">
   <ul className="py-2 min-w-[140px]">
  {/* Team 2017 */}
  <li>
    <Link href="./Team2017" legacyBehavior>
      <a className="block px-4 py-2 hover:bg-gray-700">2017</a>
    </Link>
  </li>

  {/* Team 2018 */}
  <li>
    <Link href="./Team2018" legacyBehavior>
      <a className="block px-4 py-2 hover:bg-gray-700">2018</a>
    </Link>
  </li>

  {/* Team 2019 */}
  <li>
    <Link href="./Team2019" legacyBehavior>
      <a className="block px-4 py-2 hover:bg-gray-700">2019</a>
    </Link>
  </li>

  {/* Team 2020 */}
  <li>
    <Link href="/team/Team2020" legacyBehavior>
      <a className="block px-4 py-2 hover:bg-gray-700">2020</a>
    </Link>
  </li>

  <hr className="border-gray-600 my-1" />

  {/* Team 2024-25 */}
  <li>
    <Link href="/team/2024-25" legacyBehavior>
      <a className="block px-4 py-2 hover:bg-gray-700">2024–25</a>
    </Link>
  </li>

  {/* Team 2025-26 */}
  <li>
    <Link href="/team/2025-26" legacyBehavior>
      <a className="block px-4 py-2 hover:bg-gray-700">2025–26</a>
    </Link>
  </li>
</ul>

  </div>
</div>


             <Link href="#rover-renders" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>OUR ROVER</a>
            </Link>
            <Link href="#achievements" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>ACHIEVEMENTS</a>
            </Link>
            <Link href="#gallery" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
            </Link>
            <Link href="#sponsors" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>SPONSORSHIP</a>
            </Link>
             <Link href="#newsletter" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>NEWSLETTER</a>
            </Link>
            <Link href="#contact" scroll={true} legacyBehavior>
              <a className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>CONTACT US</a>
            </Link>
          </div>
        </div>

        {/* SRM logo */}
        {/* <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
          <img src="/rudraweb2/srm-logo.png" alt="SRM logo" width={100} height={50} />
        </a> */}
      </div>
    </nav>


 {/* Hero Section */}
 <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat sm:bg-none z-20" // Adjusted z-index
        style={{
          backgroundImage: `url('background-image.png')`, // Default background for larger screens
        }}
        id="home"
      >
  {/* <Navbar /> */}
  <div
    className="absolute inset-0 flex items-center justify-center sm:bg-cover sm:bg-center sm:bg-no-repeat"
    style={{
      backgroundImage: `url('/background-image-sm.png')`, // Background for small screens
    }}
  >
    {/* Optional content can be added here */}
  </div>
</div>
      {/* About Us Section */}
      <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8" id="about">
        {/* Left Side: 3D Model */}
        <div className="w-full lg:w-3/5 flex justify-center items-center border-4 border-gray-300 box-border mb-8 lg:mb-0">
        <img
      src="./box-image.png" // Update with the path to your image
      alt="Rover model" // Update with a description for accessibility
      className="object-contain max-w-full max-h-full" // Adjust as needed
    />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-3/5 bg-gray-900 bg-opacity-80 text-white p-4 sm:p-10 font-sans">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6 font-serif">About Us</h2>
          <p className="mb-4 sm:mb-6 font-sans">
            RUDRA is the official team of SRM IST taking part in the University Rover Challenge organized by the Mars Society since 2013. 
            The annual competition is held at the Mars Desert Research Station (MDRS), Martian Analog Site, near Hanksville, Utah, USA. 
            The team has been successfully operational for the last 10 years and has maintained its consistency in the competition.
          </p>
          <p className="mb-4 sm:mb-6 font-sans">
            Our Team consists of 25-30 undergraduate students of every year from various engineering streams, working in different domains. 
            The fun part - R&D, is the soul and essence of Team RUDRA. Brainstorming discussions are always welcome for giving birth to new ideas.
          </p>
        </div>
      </div>

<div className="relative bg-black text-white py-20 px-10">
  {/* Sparkles Background */}
  <SparklesCore
    className="absolute inset-0 z-0"
    particleColor="#f0f0f0"
    particleDensity={30}
  />

  {/* Main Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-5xl font-bold uppercase tracking-wide">
      International Rover Challenge
    </h2>

    {/* Large Rover Image */}
    <div className="flex justify-center my-12">
      <img
        src="irc section.png" // Replace with actual rover image
        alt="Mars Rover"
        className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto"
      />
    </div>

    {/* Three Sections Grid */}
    <div className="grid md:grid-cols-3 gap-12 mt-10">
      {/* Section 1 */}
      <div>
        <h3 className="text-2xl font-semibold">International Rover Challenge</h3>
        <p className="text-gray-300 text-lg mt-3">
          The International Rover Challenge (IRC) is a premier event bringing
          together students, engineers, and innovators from around the globe to
          push the boundaries of space exploration technology.
        </p>
        <a
          href="https://www.spaceroboticssociety.org/events/international-rover-challenge/"
          target="_blank"
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium"
        >
          Learn More
        </a>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-2xl font-semibold">History with IRC</h3>
        <p className="text-gray-300 text-lg mt-3">
          Team RUDRA, the official rover team from SRMIST, is a veteran
          competitor at IRC, recognized for its legacy of innovation and
          technical excellence.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h3 className="text-2xl font-semibold">Missions</h3>
        <p className="text-gray-300 text-lg mt-3">
     Rovers must complete tasks such as IDMO, PIMA, Astrobiology & Autonomous Expedition, Business Plan Presentation, and Delivery Missions, all designed to simulate real Mars mission scenarios.
        </p>
        <Link href="./mission">
          <a
            className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium"
          >
            Missions
          </a>
        </Link>
      </div>
    </div>

    {/* Timeline Section */}



  </div>
</div>


<div className="relative bg-black text-white py-20 px-10">
  {/* Sparkles Background */}
  <SparklesCore
    className="absolute inset-0 z-0"
    particleColor="#f0f0f0"
    particleDensity={30}
  />

  {/* Main Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-5xl font-bold uppercase tracking-wide">
      University Rover Challenge
    </h2>

    {/* Large Rover Image */}
    <div className="flex justify-center my-12">
      <img
        src="urc1 (2).jpg" // Replace with actual rover image
        alt="Mars Rover"
        className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto"
      />
    </div>

    {/* Three Sections Grid */}
    <div className="grid md:grid-cols-3 gap-12 mt-10">
      {/* Section 1 */}
      <div>
        <h3 className="text-2xl font-semibold">University Rover Challenge</h3>
        <p className="text-gray-300 text-lg mt-3">
          The University Rover Challenge (URC) is an international robotics
          competition where student teams design and build planetary rovers to
          perform astronaut assistance tasks.
        </p>
        <a
          href="https://urc.marssociety.org/"
          target="_blank"
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium"
        >
          Learn More
        </a>
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-2xl font-semibold">History with URC</h3>
        <p className="text-gray-300 text-lg mt-3">
          Since its inception in 2007, URC has challenged teams worldwide to
          innovate and push the limits of rover technology. Teams compete in
          terrain traversal, sample collection, and autonomous navigation.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h3 className="text-2xl font-semibold">Missions</h3>
        <p className="text-gray-300 text-lg mt-3">
          Rovers must complete tasks such as autonomous driving, science
          sampling, and robotic arm manipulation, all designed to mimic real
          Mars mission scenarios.
        </p>
        <Link href="./urc1">
        <a
         
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium"
        >
          Missions
        </a></Link>
      </div>
    </div>
  </div>
</div>

{/* Our Patrons Section */}
<div className="relative min-h-screen bg-black bg-cover bg-center flex flex-col items-center justify-center py-16" id="patrons">
  <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src="/starsvideo.mov" type="video/mov" />
    Your browser does not support the video tag.
  </video>

  <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 font-serif flex items-center justify-center z-10">
    Our Patrons
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-center z-10">
    {/* Vice Chancellor */}
    <a href="https://www.srmist.edu.in/about-us/administrative-heads/vice-chancellor/" target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-800 p-4 w-80 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300">
        <img src="./VC.webp" alt="Prof. C. Muthamizhchelvan" className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full" />
        <h3 className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 font-sans text-center">
          Prof. C. Muthamizhchelvan<br />
          Vice Chancellor
        </h3>
      </div>
    </a>

    {/* Registrar */}
    <a href="https://www.srmist.edu.in/about-us/administrative-heads/registrar/" target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-800 p-4 w-80 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300">
        <img src="./Registrar.webp" alt="Dr. S. Ponnusamy" className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full" />
        <h3 className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 font-sans text-center">
          Dr. S. Ponnusamy<br />
          Registrar
        </h3>
      </div>
    </a>

    {/* Dean */}
    <a href="https://www.srmist.edu.in/faculty/dr-m-leenus-jesu-martin/" target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-800 p-4 w-80 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300">
        <img src="./dean.jpg" alt="Dr. Leenus Jesu Martin M" className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full" />
        <h3 className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 font-sans text-center">
          Dr. Leenus Jesu Martin M<br />
          Dean, CET
        </h3>
      </div>
    </a>
  </div>
</div>

      
{/* Team Members Section */}
<div className="relative min-h-screen bg-black bg-cover bg-center flex flex-col items-center justify-center py-16" id="team">
  <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src="/starsvideo.mov" type="video/mov" />
    Your browser does not support the video tag.
  </video>

  <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 font-serif flex items-center justify-center z-10">
    Our Team
  </h2>

  {/* Core Team Members */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-10 text-center z-10">
    {[
      { name: 'Team Lead - Ratnesh Mishra', img: 'mechanical-member5.png', link: 'https://www.linkedin.com/in/ratnesh-mishra-07260424b/' },
      { name: 'Team Manager - Danyal Reyaz', img: 'corporate-member4.png', link: 'https://www.linkedin.com/in/danyal-reyaz/' },
      { name: 'Technical Director - Pragati Prithvi', img: 'electronics-member6.png', link: 'https://www.linkedin.com/in/pragati-prithvi/' },
      { name: 'Mechanical Domain', img: 'mechanical-domain.png', link: './mechanical-domain' },
      { name: 'Electronics Domain', img: 'electronics-domain.png', link: './electronics-domain' },
      { name: 'Coding Domain', img: 'coding-domain.png', link: './coding-domain' },
      { name: 'Life Science Domain', img: 'life-science-domain.png', link: './life-science-domain' },
      { name: 'Corporate Domain', img: 'corporate-domain.png', link: './corporate-domain' },
    ].map((member) => (
      <a key={member.name} href={member.link} target="_blank" rel="noopener noreferrer">
        <div className="bg-gray-800 p-4 w-80 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300">
          <img src={member.img} alt={member.name} className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full" />
          <h3 className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 font-sans">{member.name}</h3>
        </div>
      </a>
    ))}
  </div>

  {/* Center the last team member */}
  <div className="col-span-full flex justify-center mt-8 z-10">
    <a href="https://www.srmist.edu.in/about-us/administrative-heads/director-alumni-relations/" target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-800 p-4 w-80 rounded-lg hover:bg-gray-700 hover:scale-105 transform transition-transform duration-300">
        <img src="./faculty.png" alt="Dr. A. Rathinam" className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full" />
        <h3 className="text-white text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 font-sans text-center">
          Faculty Advisor - Dr. A. Rathinam
        </h3>
      </div>
    </a>
  </div>
</div>


 {/* Rover Renders Section */}
<div className="min-h-screen bg-black flex flex-col items-center py-16" id="rover-renders">
  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-12 font-serif text-center">
     Our Rover
  </h2>
  {/* Grid container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-4 md:px-12">
    {/* Image 1 */}
    <img 
      src="render1.png" 
      alt="Rover Render 1" 
      className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
    />
    
    {/* Image 4 */}
    <img 
      src="render4.png" 
      alt="Rover Render 4" 
      className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>


{/* Gallery Section */}
<div className="relative min-h-screen bg-black flex flex-col items-center justify-center py-16" id="gallery">
  {/* Sparkles Effect */}
  <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

  <h2 className="text-white text-6xl mb-12 font-serif z-10">Gallery</h2>
  <div className="relative w-full max-w-4xl flex items-center justify-center z-5">
    {/* Gallery Image Container */}
    <div
      id="gallery-container"
      className="w-full h-[550px] flex overflow-x-auto scroll-smooth snap-x snap-mandatory relative z-0"
    >
      {galleryImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery Item ${index + 1}`}
          className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-center"
        />
      ))}
    </div>
  </div>

  {/* Horizontal Scroller */}
  <div className="w-full max-w-4xl overflow-x-auto mt-6 z-10">
    <div className="flex space-x-4">
      {galleryImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery Thumbnail ${index + 1}`}
          className="flex-shrink-0 w-24 h-24 object-cover rounded-lg cursor-pointer"
          onClick={() => {
            const galleryContainer = document.getElementById('gallery-container');
            if (galleryContainer !== null) galleryContainer.scrollTo({ left: galleryContainer.clientWidth * index, behavior: 'smooth' });
          }}
        />
      ))}
    </div>
  </div>
</div>
{/* Achievements Section */}
<div className="relative min-h-screen bg-black py-4 mb-[-16px]" id="achievements">
  {/* Sparkles Effect */}
  <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />

  {/* Section Content */}
  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl text-center mb-12 font-serif z-10 relative">
    Achievements
  </h2>

  <div className="container mx-auto px-4">
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 w-full h-1 bg-gray-400 top-1/2 transform -translate-y-1/2 z-0"></div>

      {/* Achievement Cards - Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-8 relative z-0">
        {[
          {
            src: "./achievement-image1.png",
            title: "URC 2013 - Team RUDRA achieved 5th as World Rank and 1st as Asia Rank",
            date: "May 28, 2013"
          },
          {
            src: "./achievement-image2.png",
            title: "URC 2014 - Team RUDRA participated and ranked 5th globally",
            date: "June 15, 2014"
          },
          {
            src: "./achievement-image3.png",
            title: "URC 2015 - Achieved 12th rank in the World and 2nd among Asian Teams",
            date: "May 29, 2015"
          },
          {
            src: "./achievement-image4.png",
            title: "URC 2016 - Team RUDRA secured 9th place overall",
            date: "June 12, 2016"
          },
          {
            src: "./achievement-image5.png",
            title: "URC 2017 - Team RUDRA participated and ranked 20th globally and 4th in Asia",
            date: "June 10, 2017"
          }
        ].map((item, index) => (
          <div key={index} className="relative group overflow-hidden">
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-white rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={item.src}
                alt={`Achievement ${index + 1}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
              <div className="text-center p-4">
                <p className="text-sm lg:text-base">{item.title}</p>
                <p className="text-xs lg:text-sm">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Cards - Bottom Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center relative z-0">
        {[
          {
            src: "./achievement-image6.png",
            title: "URC 2019 - Team RUDRA secured 11th place in the world",
            date: "June 18, 2018"
          },
          {
            src: "./achievement-image7.png",
            title: "IRC - Team RUDRA achieved 3rd as World Rank",
            date: "June 12, 2019"
          },
          {
            src: "./achievement-image8.png",
            title: "IRC 2023 - Team RUDRA ranked 5th globally",
            date: "Jan 2023"
          },
          {
            src: "./achievement-image9.png",
            title: "IRC 2024 - Team RUDRA ranked 3rd globally",
            date: "Jan 2024"
          }
        ].map((item, index) => (
          <div key={index} className="relative group overflow-hidden">
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-white rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={item.src}
                alt={`Achievement ${index + 6}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300">
              <div className="text-center p-4">
                <p className="text-sm lg:text-base">{item.title}</p>
                <p className="text-xs lg:text-sm">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      {/*sponsorship section */}
<div className="relative min-h-screen bg-black flex flex-col items-center justify-center py-4 mt-[-16px]" id="sponsors">
  <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={30} />
  <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-12 sm:mb-16 z-20">Our Sponsors</h2>

  <div className="flex flex-col items-center z-10">
    {/* First Row */}
    <div className="flex flex-wrap justify-center">
      {sponsorshipImages.slice(0, 5).map((sponsor, index) => (
        <div key={index} className="p-4 sm:p-6">
          <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
            <img
              src={sponsor.src}
              alt={sponsor.alt}
              width={200}
              height={200}
              className="w-48 h-auto object-contain"
            />
          </a>
        </div>
      ))}
    </div>

    {/* Second Row */}
    <div className="flex flex-wrap justify-center w-full mt-4">
      {sponsorshipImages.slice(5).map((sponsor, index) => (
        <div key={index} className="p-4 sm:p-6">
          <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
            <img
              src={sponsor.src}
              alt={sponsor.alt}
              width={200}
              height={200}
              className="w-48 h-auto object-contain"
            />
          </a>
        </div>
      ))}
    </div>
  </div>
</div>

{/*sponsor us signup */}
<div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative" id="sponsor">
  <SparklesCore className="absolute inset-0 z-0" particleColor="#f0f0f0" particleDensity={30} />
  
  <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-[1000px] relative flex flex-col md:flex-row items-center">
    
    {/* Image Section */}
    <div className="flex-1 mb-6 md:mb-0 md:mr-8">
      <img 
        src="tier2.png" 
        alt="Sponsor Image" 
        className="w-full h-[250px] md:w-[440px] md:h-[400px] object-cover rounded-xl" 
      />
    </div>

    {/* Form Section */}
    <div className="flex-1 text-center">
      <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
        Partner with Team Rudra
      </h2>
      <p className="text-gray-400 mb-6 text-sm md:text-base">
        Fuel our journey to success by supporting groundbreaking projects and exploration.
      </p>

      <form 
        name="sponsor-form" 
        onSubmit={handleSubmit2}
        method="POST" 
        className="space-y-4 w-full"
      >
        <div className="relative">
          <input 
            type="text" 
            name="companyName" 
            placeholder="Enter your company name *" 
            className="w-full p-3 md:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div className="relative">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email here *" 
            className="w-full p-3 md:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
       <button 
  type="submit" 
  disabled={isLoading2}
  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
>
  {isLoading2 ? (
    <span className="flex items-center justify-center">
      <svg 
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Loading...
    </span>
  ) : (
    'Contact Us'
  )}
</button>
      </form>
    </div>
  </div>
</div>

      


     
{/* Newsletter Section */}
<div className="min-h-screen bg-black flex flex-col items-center justify-center py-16 relative" id="newsletter">
  <SparklesCore className="absolute inset-0 z-0" particleColor="#f0f0f0" particleDensity={30} />
  <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-[1000px] h-[480px] max-w-full relative flex flex-row items-center">
    <div className="flex-1 mr-8">
      <img src="newsletter.jpeg" alt="Rover Image" className="w-[440px] h-[400px] object-cover rounded-xl" />
    </div>
    <div className="flex-1 text-center">
      <h2 className="text-white text-3xl font-semibold mb-2">Join Our Newsletter</h2>
      <p className="text-gray-400 mb-6">Get monthly access to our newsletter and stay updated</p>
      <form 
        name="news-letter" 
        onSubmit={handleSubmit}
        
        method="POST" 
        className="space-y-4"
      >
        <div className="relative">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email here *" 
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <button 
  type="submit" 
  disabled={isLoading}
  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
>
  {isLoading ? (
    <span className="flex items-center justify-center">
      <svg 
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Subscribing...
    </span>
  ) : (
    'Subscribe'
  )}
</button>
      </form>
    </div>
  </div>
</div>

     

   {/* Contact Us Section */}
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-16  " id="contact">
     <SparklesCore className="absolute   inset-0 z-0" particleColor="#ffffff" particleDensity={30} />
  <h2 className="text-white text-6xl mb-12 font-serif">Contact Us</h2>
  <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
    {/* Image/Icon Section */}
    <div className="bg-gray-700 p-16 rounded-lg shadow-lg flex items-center justify-center w-[480px] h-[480px]">
      <img src="image.png" alt="Icon or Image" className="w-128 h-128 object-contain" />
    </div>

    {/* Contact Information Section */}
    <div className="bg-gray-800 p-16 rounded-lg shadow-lg flex flex-col justify-between w-[480px] h-[480px]">
      <div className="space-y-4">
        <p className="text-white text-xl">
          Email: <a href="mailto:srmmarsroverteam@gmail.com" className="text-blue-500">srmmarsroverteam@gmail.com</a>
        </p>
        <p className="text-white text-xl">
          Address: C-404/405 - Placement Cell, SRM IST, Kattankulathur, Chennai - 603203
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col space-y-4 mt-6">
        <a href="https://www.youtube.com/@RUDRASRMMARSROVER" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <img src="youtube.png" alt="LinkedIn" className="w-10 h-10" />
          <span className="text-white text-xl">Youtube</span>
        </a>
        <a href="https://www.linkedin.com/company/srmrudra/mycompany/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <img src="linkedin-brands-solid.svg" alt="LinkedIn" className="w-10 h-10" />
          <span className="text-white text-xl">LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/team_rudra/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <img src="square-instagram-brands-solid.svg" alt="Instagram" className="w-10 h-10" />
          <span className="text-white text-xl">Instagram</span>
        </a>
      </div>
    </div>
  </div>
</div>


  </div>

  );
};
export default Home;
