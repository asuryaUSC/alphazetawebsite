import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fonts } from './FontsAndIcons';
import CommunityStats from './CommunityStats';

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Triggers as soon as the element comes into the viewport
  });

  return (
    <div id="about" ref={ref} className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 sm:py-30 md:py-35 lg:py-40 xl:py-48 text-black"
         style={{ background: 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full lg:w-1/2 text-left space-y-4 sm:space-y-5 md:space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-4" style={{ fontFamily: fonts.primary }}>About Us</h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-light" style={{ fontFamily: fonts.primary }}>
          Established in 1922, Alpha Zeta propels success in business through resources,
          knowledge, and networking. We welcome all majors, fostering a diverse community
          of motivated individuals. With 50+ active members and a broad alumni network
          across industries, we offer exclusive opportunities like mentorship programs
          and industry-focused groups. Beyond professional growth, we prioritize lifelong
          brotherhood, ensuring lasting connections beyond college. Join us and thrive
          personally and professionally.
        </p>
        <CommunityStats />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full lg:w-1/2 flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-0"
      >
        <img
          src="/aboutus.png"
          alt="Alpha Zeta Group Photo"
          className="rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
          style={{ maxWidth: '90%', height: 'auto' }}
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
