'use client';
import { SparklesCore } from '@/components/ui/sparkles';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [activeComp, setActiveComp] = useState<'irc' | 'urc'>('irc');
  const [scrolled, setScrolled] = useState(false);
  const [showHeroBg, setShowHeroBg] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const teamDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (teamDropdownRef.current && !teamDropdownRef.current.contains(e.target as Node)) {
        setTeamDropdownOpen(false);
      }
    };
    if (teamDropdownOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [teamDropdownOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const sponsorshipImages = [
    { src: './sukrit-infotech.png', alt: 'Sukrit Infotech', url: 'https://www.sukritinfotech.com' },
    { src: './solidworks.png', alt: 'Solidworks', url: 'https://www.solidworks.com' },
    { src: './altium.png', alt: 'Altium', url: 'https://www.altium.com' },
    { src: './notions-Photoroom.jpg', alt: 'Notion', url: 'https://www.notion.com' },
    { src: './mathworks-logo-full-color-rgb-reversed.png', alt: 'Mathworks', url: 'https://www.mathworks.com' },
    { src: './hearingon.png', alt: 'HearingOn', url: 'https://www.baranagarspeechandhearing.com/' },
    { src: './pma spares.png', alt: 'PMA Spares', url: 'https://g.co/kgs/HDRrzX4' },
    { src: './lion circuits (2).png', alt: 'Lion Circuits', url: 'https://www.lioncircuits.com/' },
    { src: './danyalgems_newlogo.png', alt: 'Danyal Gems', url: 'mailto:danyalgems@gmail.com' },
  ];

  const achievements = [
    { src: './achievement-image1.png', title: 'URC 2013', desc: '5th World · 1st Asia', date: 'May 2013' },
    { src: './achievement-image2.png', title: 'URC 2014', desc: '5th globally', date: 'June 2014' },
    { src: './achievement-image3.png', title: 'URC 2015', desc: '12th World · 2nd Asia', date: 'May 2015' },
    { src: './achievement-image4.png', title: 'URC 2016', desc: '9th overall', date: 'June 2016' },
    { src: './achievement-image5.png', title: 'URC 2017', desc: '20th World · 4th Asia', date: 'June 2017' },
    { src: './achievement-image6.png', title: 'URC 2019', desc: '11th in the world', date: 'June 2019' },
    { src: './achievement-image7.png', title: 'IRC', desc: '3rd World Rank', date: '2019' },
    { src: './achievement-image8.png', title: 'IRC 2023', desc: '5th globally', date: 'Jan 2023' },
    { src: './achievement-image9.png', title: 'IRC 2024', desc: '3rd globally', date: 'Jan 2024' },
  ];

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'ROVER', href: '#rover-renders' },
    { label: 'LAB', href: '/Lab' },
    { label: 'ACHIEVEMENTS', href: '#achievements' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'SPONSORS', href: '#sponsors' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const teamDropdownLinks = [
    { label: '2017', href: '/Team2017' },
    { label: '2018', href: '/Team18' },
    { label: '2019', href: '/Team2019' },
    { label: '2020', href: '/Team2020' },
    { label: '2024–25', href: '/Team2024' },  
    { label: '2025–26', href: '/Team2025' }
    { label: '2026–27', href: '#team' },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const emailInput = event.currentTarget.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { alert('Please enter a valid email address'); setIsLoading(false); return; }
    try {
      const formData = new FormData();
      formData.append('email', email);
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL as string, { method: 'POST', body: formData });
      if (!response.ok) { alert('There was an issue. Try again later.'); return; }
      await response.json();
      alert('Subscribed successfully!');
      emailInput.value = '';
    } catch { alert('There was an issue. Try again later.'); }
    finally { setIsLoading(false); }
  };

  const handleSubmit2 = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading2(true);
    const companyInput = event.currentTarget.elements.namedItem('companyName') as HTMLInputElement;
    const emailInput = event.currentTarget.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value;
    const companyName = companyInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { alert('Please enter a valid email address'); setIsLoading2(false); return; }
    if (!companyName) { alert('Please enter your company name'); setIsLoading2(false); return; }
    try {
      const formData = new FormData();
      formData.append('Company Name', companyName);
      formData.append('email', email);
      const response = await fetch(process.env.NEXT_PUBLIC_SPONSORSHIP as string, { method: 'POST', body: formData });
      if (!response.ok) { alert('There was an issue. Try again later.'); return; }
      await response.json();
      alert('Thank you! Our team will contact you shortly.');
      emailInput.value = '';
      companyInput.value = '';
    } catch { alert('There was an issue. Try again later.'); }
    finally { setIsLoading2(false); }
  };

  return (
    <div className="overflow-x-hidden bg-black text-white">

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" legacyBehavior>
            <a className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
              <img src="./rudra-logo.png" alt="Team RUDRA" width={88} height={44} />
            </a>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} legacyBehavior>
                <a className="relative text-[11px] tracking-[0.18em] text-gray-400 hover:text-white transition-colors duration-200 group">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            ))}

            {/* TEAM dropdown */}
            <div className="relative" ref={teamDropdownRef}>
              <button
                onClick={() => setTeamDropdownOpen(v => !v)}
                className="relative flex items-center gap-1 text-[11px] tracking-[0.18em] text-gray-400 hover:text-white transition-colors duration-200"
              >
                TEAM
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${teamDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {teamDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-36 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50">
                  {teamDropdownLinks.map((item, i) => (
                    <div key={item.label}>
                      {i === 4 && <div className="border-t border-white/10" />}
                      <Link href={item.href} legacyBehavior>
                        <a
                          className="block px-4 py-2.5 text-[11px] tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          onClick={() => setTeamDropdownOpen(false)}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-white origin-center transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px w-6 bg-white origin-center transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu — full-screen fade overlay */}
        <div className={`lg:hidden fixed inset-0 bg-black/97 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-7 transition-all duration-400 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} legacyBehavior>
              <a
                className="text-2xl tracking-[0.25em] font-light text-gray-200 hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <div className="flex flex-col items-center gap-3 mt-2">
            <span className="text-2xl tracking-[0.25em] font-light text-gray-200">TEAM</span>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {teamDropdownLinks.map((item) => (
                <Link key={item.label} href={item.href} legacyBehavior>
                  <a
                    className="text-sm tracking-widest text-gray-500 hover:text-orange-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO — full-screen with text overlay
      ══════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
      >
        {/* Background photo — always present behind text */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/background-image.png')` }}
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        <SparklesCore className="absolute inset-0 z-0" background="transparent" particleColor="#ffffff" particleDensity={14} />

        {/* Hero content — vertically centered */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-32">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 glass rounded-full mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] text-gray-300 uppercase">IRC 2024 — 3rd Globally</span>
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-[110px] font-bold leading-none tracking-tight text-white mb-6">
            Team<br />
            <span className="text-orange-400">RUDRA</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed mb-4">
            Engineering Mars rovers. Competing globally since 2013.
          </p>
          <p className="text-[11px] tracking-[0.3em] text-gray-600 uppercase mb-10">
            SRM IST &nbsp;·&nbsp; Kattankulathur
          </p>

          <div className="flex flex-wrap gap-4 mb-20">
            <Link href="#about" legacyBehavior>
              <a className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors tracking-wide">
                Explore →
              </a>
            </Link>
            <Link href="#team" legacyBehavior>
              <a className="px-8 py-3.5 glass hover:bg-white/10 text-white text-sm rounded-full transition-all tracking-wide">
                Meet the Team
              </a>
            </Link>
          </div>

          {/* Mini stat row at bottom of content */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: '10+', label: 'Years' },
              { value: '9+', label: 'Competitions' },
              { value: '#3', label: 'IRC 2024' },
              { value: '~30', label: 'Members' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-orange-400">{s.value}</div>
                <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* View Photo button */}
        <button
          onClick={() => setShowHeroBg(true)}
          className="absolute bottom-8 right-6 z-20 flex items-center gap-2 px-3.5 py-2 glass rounded-full text-[11px] text-gray-400 hover:text-white hover:bg-white/10 transition-all tracking-wide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
          </svg>
          View Photo
        </button>

        {/* Full-screen photo lightbox */}
        {showHeroBg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in-up"
            onClick={() => setShowHeroBg(false)}
          >
            <button
              onClick={() => setShowHeroBg(false)}
              className="absolute top-5 right-5 flex items-center gap-2 px-3.5 py-2 glass rounded-full text-[11px] text-gray-300 hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Close
            </button>
            <img
              src="/background-image.png"
              alt="Team RUDRA"
              className="max-w-full max-h-full object-contain"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-scroll-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section id="about" className="py-32 px-6 bg-[#050508]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-6">Who We Are</p>
            <h2 className="text-5xl md:text-6xl font-serif text-white leading-[1.1] mb-10">
              Exploring<br />Mars<br />
              <span className="text-gray-500 italic">from Earth.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5 text-[15px]">
              RUDRA is the official team of SRM IST taking part in the University Rover Challenge organized by the Mars Society since 2013. The annual competition is held at the Mars Desert Research Station (MDRS), Martian Analog Site, near Hanksville, Utah, USA.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Our team consists of 25–30 undergraduate students from various engineering streams. R&D is the soul of Team RUDRA — brainstorming discussions are always welcome.
            </p>
          </div>
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-orange-500/15 via-transparent to-blue-500/10 blur-3xl" />
            <img
              src="./box-image.png"
              alt="Rover model"
              className="relative w-full rounded-3xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPETITIONS — tabbed IRC / URC
      ══════════════════════════════════════ */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#e0e0e0" particleDensity={18} />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header + tab toggle */}
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-4">Global Stage</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">Competitions</h2>
            <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1 gap-1">
              <button
                onClick={() => setActiveComp('irc')}
                className={`px-7 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${activeComp === 'irc' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-gray-400 hover:text-white'}`}
              >
                IRC
              </button>
              <button
                onClick={() => setActiveComp('urc')}
                className={`px-7 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${activeComp === 'urc' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:text-white'}`}
              >
                URC
              </button>
            </div>
          </div>

          {/* IRC */}
          {activeComp === 'irc' && (
            <div key="irc" className="animate-fade-in-up">
              <div className="flex justify-center mb-12">
                <img
                  src="irc section.png"
                  alt="IRC Rover"
                  className="w-full max-w-2xl rounded-2xl shadow-2xl shadow-orange-900/20"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    title: 'International Rover Challenge',
                    body: 'The IRC is a premier event bringing together students, engineers, and innovators from around the globe to push the boundaries of space exploration technology.',
                    cta: { label: 'Learn More', href: 'https://www.spaceroboticssociety.org/events/international-rover-challenge/', external: true },
                  },
                  {
                    title: 'History with IRC',
                    body: 'Team RUDRA, the official rover team from SRMIST, is a veteran competitor at IRC — recognized for its legacy of innovation and technical excellence.',
                  },
                  {
                    title: 'Missions',
                    body: 'Rovers complete tasks such as IDMO, PIMA, Astrobiology & Autonomous Expedition, Business Plan Presentation, and Delivery Missions — all simulating real Mars scenarios.',
                    cta: { label: 'View Missions', href: './mission', external: false },
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-white font-semibold mb-3 text-[15px]">{card.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{card.body}</p>
                    {card.cta && (
                      card.cta.external
                        ? <a href={card.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-orange-400 hover:text-orange-300 transition-colors">{card.cta.label} →</a>
                        : <Link href={card.cta.href} legacyBehavior><a className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-orange-400 hover:text-orange-300 transition-colors">{card.cta.label} →</a></Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* URC */}
          {activeComp === 'urc' && (
            <div key="urc" className="animate-fade-in-up">
              <div className="flex justify-center mb-12">
                <img
                  src="urc1 (2).jpg"
                  alt="URC Rover"
                  className="w-full max-w-2xl rounded-2xl shadow-2xl shadow-blue-900/20"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  {
                    title: 'University Rover Challenge',
                    body: 'The URC is an international robotics competition where student teams design and build planetary rovers to perform astronaut assistance tasks.',
                    cta: { label: 'Learn More', href: 'https://urc.marssociety.org/', external: true },
                  },
                  {
                    title: 'History with URC',
                    body: "Since 2007, URC has challenged teams worldwide to innovate and push the limits of rover technology — competing in terrain traversal, sample collection, and autonomous navigation.",
                  },
                  {
                    title: 'Missions',
                    body: 'Rovers must complete tasks such as autonomous driving, science sampling, and robotic arm manipulation — all designed to mimic real Mars mission scenarios.',
                    cta: { label: 'View Missions', href: './urc1', external: false },
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-blue-400/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-white font-semibold mb-3 text-[15px]">{card.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{card.body}</p>
                    {card.cta && (
                      card.cta.external
                        ? <a href={card.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-blue-400 hover:text-blue-300 transition-colors">{card.cta.label} →</a>
                        : <Link href={card.cta.href} legacyBehavior><a className="inline-flex items-center gap-1.5 text-[11px] tracking-widest text-blue-400 hover:text-blue-300 transition-colors">{card.cta.label} →</a></Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PATRONS
      ══════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050508]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-4">Guidance</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Our Patrons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: './VC.webp', name: 'Dr. C. Muthamizhchelvan', role: 'Vice Chancellor', href: 'https://www.srmist.edu.in/about-us/leadership-team/vice-chancellor/' },
              { img: './registar.webp', name: 'Dr. S. Ponnusamy', role: 'Registrar', href: 'https://www.srmist.edu.in/about-us/leadership-team/registrar/' },
              { img: './dean.jpg', name: 'Dr. Leenus Jesu Martin M', role: 'Dean, CET', href: 'https://www.srmist.edu.in/faculty/dr-m-leenus-jesu-martin/' },
              { img: './faculty.png', name: 'Dr. A. Rathinam', role: 'Faculty Advisor', href: 'https://www.srmist.edu.in/about-us/administrative-heads/director-alumni-relations/' },
            ].map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="float-card glass group rounded-2xl p-8 flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <div className="absolute -inset-2 rounded-full bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img src={p.img} alt={p.name} className="relative w-36 h-36 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-orange-400/40 transition-all duration-300" />
                </div>
                <h3 className="text-white text-base font-semibold mb-1">{p.name}</h3>
                <p className="text-orange-400 text-xs tracking-widest uppercase">{p.role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TEAM — bento grid
      ══════════════════════════════════════ */}
      <section id="team" className="py-32 px-6 bg-black relative overflow-hidden">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={18} />
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.15]">
          <source src="/starsvideo.mov" type="video/mov" />
        </video>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-4">2026–27</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Our Team</h2>
          </div>

          {/* Core leadership — bento */}
          <p className="text-[10px] tracking-[0.3em] text-gray-600 uppercase mb-5">Core Leadership</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Team Lead — spans 2 cols, horizontal card */}
            <a
              href="https://www.linkedin.com/in/yasharth-gupta-53749a255/"
              target="_blank"
              rel="noopener noreferrer"
              className="float-card glass sm:col-span-2 group rounded-2xl p-8 flex items-center gap-7"
            >
              <img src="coding-member4.png" alt="Yasharth Gupta" className="w-28 h-28 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-orange-400/30 transition-all duration-300 flex-shrink-0" />
              <div>
                <span className="text-[10px] tracking-[0.25em] text-orange-400 uppercase">Team Lead</span>
                <h3 className="text-white text-lg font-semibold mt-0.5">Yasharth Gupta</h3>
                <p className="text-gray-500 text-xs mt-1">LinkedIn →</p>
              </div>
            </a>

            {/* Manager */}
            <a
              href="https://www.linkedin.com/in/ditsa-sarkar-7a0623228/"
              target="_blank"
              rel="noopener noreferrer"
              className="float-card glass group rounded-2xl p-7 flex flex-col items-center text-center"
            >
              <img src="ditsa.jfif" alt="Ditsa Sarkar" className="w-24 h-24 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-orange-400/30 transition-all duration-300 mb-4" />
              <span className="text-[10px] tracking-[0.25em] text-orange-400 uppercase">Team Manager</span>
              <h3 className="text-white text-sm font-semibold mt-0.5">Ditsa Sarkar</h3>
            </a>

            {/* Tech Director */}
            <a
              href="https://www.linkedin.com/in/sujal-shah-a92a63297/"
              target="_blank"
              rel="noopener noreferrer"
              className="float-card glass group rounded-2xl p-7 flex flex-col items-center text-center"
            >
              <img src="mechanical-member-sujal.jpeg" alt="Sujal Shah" className="w-24 h-24 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-orange-400/30 transition-all duration-300 mb-4" />
              <span className="text-[10px] tracking-[0.25em] text-orange-400 uppercase">Technical Director</span>
              <h3 className="text-white text-sm font-semibold mt-0.5">Sujal Shah</h3>
            </a>
          </div>

          {/* Domains */}
          <p className="text-[10px] tracking-[0.3em] text-gray-600 uppercase mb-5 mt-8">Domains</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: 'Mechanical',   desc: 'Design, fabrication & robotics',      img: 'mechanical-domain.png',    href: './mechanical-domain',    accent: 'text-orange-400',  glow: 'group-hover:ring-orange-400/40',  bar: 'bg-orange-400' },
              { name: 'Electronics',  desc: 'Power, sensors & embedded systems',   img: 'electronics-domain.png',   href: './electronics-domain',   accent: 'text-blue-400',    glow: 'group-hover:ring-blue-400/40',    bar: 'bg-blue-400' },
              { name: 'Coding',       desc: 'Autonomy, vision & software',         img: 'coding-domain.png',        href: './coding-domain',        accent: 'text-violet-400',  glow: 'group-hover:ring-violet-400/40',  bar: 'bg-violet-400' },
              { name: 'Life Science', desc: 'Astrobiology & field research',       img: 'life-science-domain.png',  href: './life-science-domain',  accent: 'text-emerald-400', glow: 'group-hover:ring-emerald-400/40', bar: 'bg-emerald-400' },
              { name: 'Corporate',    desc: 'Outreach, media & sponsorships',      img: 'corporate-domain.png',     href: './corporate-domain',     accent: 'text-amber-400',   glow: 'group-hover:ring-amber-400/40',   bar: 'bg-amber-400' },
            ].map((d) => (
              <a
                key={d.name}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="float-card glass group rounded-2xl p-6 flex flex-col items-center text-center"
              >
                <div className={`w-1 h-8 ${d.bar} rounded-full mb-5 opacity-60 group-hover:opacity-100 group-hover:h-10 transition-all duration-300`} />
                <img src={d.img} alt={d.name} className={`w-20 h-20 rounded-full object-cover ring-2 ring-white/10 ${d.glow} transition-all duration-300 mb-4`} />
                <p className={`${d.accent} text-xs font-semibold tracking-widest uppercase mb-1`}>{d.name}</p>
                <p className="text-gray-500 text-[11px] leading-relaxed">{d.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ROVER
      ══════════════════════════════════════ */}
      <section id="rover-renders" className="py-32 px-6 bg-[#050508]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-4">Engineering</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Our Rover</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {['render1.png', 'render4.png'].map((src, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl border border-white/10 hover:border-orange-400/25 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Rover render ${i + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY — masonry grid
      ══════════════════════════════════════ */}
      <section id="gallery" className="py-32 px-6 bg-black relative overflow-hidden">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={15} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-4">Moments</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Gallery</h2>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-gap:1rem]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setLightboxImg(image)}
                className="break-inside-avoid mb-4 overflow-hidden rounded-xl border border-white/8 hover:border-orange-400/25 group transition-all duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>

          {/* Gallery lightbox */}
          {lightboxImg && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={() => setLightboxImg(null)}
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-5 right-5 flex items-center gap-2 px-3.5 py-2 glass rounded-full text-[11px] text-gray-300 hover:text-white transition-all z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Close
              </button>
              <img
                src={lightboxImg}
                alt="Gallery full view"
                className="max-w-[92vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          ACHIEVEMENTS — horizontal scroll cards
      ══════════════════════════════════════ */}
      <section id="achievements" className="py-32 bg-[#050508] relative overflow-hidden">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={15} />
        <div className="relative z-10">
          <div className="text-center mb-16 px-6">
            <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-4">Legacy</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Achievements</h2>
          </div>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-5 px-6 pb-4" style={{ width: 'max-content' }}>
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="w-60 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-400/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-orange-400 text-xs font-semibold tracking-wide mb-1">{item.title}</p>
                    <p className="text-white text-sm font-medium mb-1">{item.desc}</p>
                    <p className="text-gray-600 text-[11px]">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SPONSORS — marquee
      ══════════════════════════════════════ */}
      <section id="sponsors" className="py-32 px-6 bg-black relative overflow-hidden">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#ffffff" particleDensity={12} />
        <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-4">Partners</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Our Sponsors</h2>
        </div>
        {/* Marquee track */}
        <div className="relative z-10 overflow-hidden">
          <div className="flex items-center animate-marquee gap-16">
            {[...sponsorshipImages, ...sponsorshipImages].map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-400"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="h-10 w-auto object-contain max-w-[130px]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NEWSLETTER + CONTACT — side by side
      ══════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#050508] relative overflow-hidden" id="newsletter">
        <SparklesCore className="absolute inset-0 z-0" particleColor="#f0f0f0" particleDensity={12} />
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">

          {/* Newsletter card */}
          <div className="bg-white/4 border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid sm:grid-cols-2 h-full">
              <div className="relative min-h-[200px]">
                <img src="newsletter.jpeg" alt="Newsletter" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050508]/60" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-3">Stay Updated</p>
                <h3 className="text-xl font-semibold text-white mb-2">Newsletter</h3>
                <p className="text-gray-500 text-sm mb-6">Monthly updates on missions, competitions, and team progress.</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-400/50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-semibold tracking-wide transition-colors flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Subscribing…
                      </>
                    ) : 'Subscribe'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact card */}
          <div id="contact" className="bg-white/4 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-orange-400 uppercase mb-4">Get In Touch</p>
              <h3 className="text-2xl font-serif text-white mb-8">Contact Us</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-gray-600 uppercase mb-1">Email</p>
                  <a href="mailto:srmmarsroverteam@gmail.com" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                    srmmarsroverteam@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-gray-600 uppercase mb-1">Address</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    C-404/405 — Placement Cell, SRM IST,<br />Kattankulathur, Chennai – 603203
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <p className="text-[10px] tracking-[0.2em] text-gray-600 uppercase mb-4">Follow Us</p>
              {[
                { icon: 'youtube.png', label: 'YouTube', href: 'https://www.youtube.com/@RUDRASRMMARSROVER' },
                { icon: 'linkedin-brands-solid.svg', label: 'LinkedIn', href: 'https://www.linkedin.com/company/13210958/admin/dashboard/' },
                { icon: 'square-instagram-brands-solid.svg', label: 'Instagram', href: 'https://www.instagram.com/team_rudra/?hl=en' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-orange-400/30 transition-all">
                    <img src={s.icon} alt={s.label} className="w-4 h-4 object-contain invert opacity-70" />
                  </span>
                  <span className="text-sm">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-black border-t border-white/8 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src="./rudra-logo.png" alt="RUDRA" width={64} height={32} className="opacity-40" />
          <p className="text-gray-700 text-[11px] tracking-widest">© 2026–27 Team RUDRA · SRM IST</p>
          <div className="flex gap-5">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <Link key={l.label} href={l.href} legacyBehavior>
                <a className="text-gray-700 hover:text-gray-400 text-[11px] tracking-widest transition-colors">{l.label}</a>
              </Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
