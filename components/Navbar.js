import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { fonts } from './FontsAndIcons';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      className={`flex justify-between items-center px-5 py-4 md:px-10 md:py-8 fixed w-full z-50 ${scrollY > 20 ? 'backdrop-blur-md' : ''}`}
      style={{ background: scrollY > 20 ? 'rgba(255, 255, 255, 0.8)' : 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}
    >
      <a href='/' className="hover:scale-110 transition-transform">
        <Image src="/az-logo.png" alt="Alpha Zeta Logo" width={150} height={150} />
      </a>
      <div className="md:flex hidden gap-10 text-sm md:text-lg">
        <button onClick={() => handleScrollToSection('#about')} className="hover:scale-110 transition-transform">ABOUT US</button>
        <button onClick={() => handleScrollToSection('#careers')} className="hover:scale-110 transition-transform">CAREERS</button>
        <button onClick={() => window.location.href = '/members'} className="text-black hover:text-gray-500 hover:scale-110 transition-transform no-underline">ACTIVE MEMBERS</button>
        <button className="bg-black text-white px-4 py-2 rounded hover::scale-110 transition-transform border-black" onClick={() => handleScrollToSection('#apply')}>
          APPLY NOW
        </button>
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 bg-gradient-to-r from-white to-gray-200 w-full flex flex-col items-center py-4">
          <button onClick={() => handleScrollToSection('#apply')} className="text-black hover:text-gray-500 py-2">APPLY</button>
          <button onClick={() => handleScrollToSection('#about')} className="text-black hover:text-gray-500 py-2">ABOUT US</button>
          <button onClick={() => handleScrollToSection('#careers')} className="text-black hover:text-gray-500 py-2">CAREERS</button>
          <button onClick={() => window.location.href = '/members'} className="text-black hover:text-gray-500 py-2 no-underline">ACTIVE MEMBERS</button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
