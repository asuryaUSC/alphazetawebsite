import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen w-full px-4 sm:px-6 lg:px-12 py-4 text-black"
         style={{ background: 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-left"
      >
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-light uppercase">Welcome To</h1>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-light uppercase">Alpha Zeta</h1>
      </motion.div>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl md:text-4xl lg:text-5xl mt-4 mb-8"
      >
        USC's Premiere Co-Ed Business Society
      </motion.p>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="mb-4"
      >
        <button
          className="flex items-center justify-center bg-black text-white text-sm md:text-lg font-medium px-4 md:px-8 py-2 md:py-3 rounded-full shadow-lg"
          style={{ transition: 'all 0.3s ease-in-out' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          APPLY NOW
        </button>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
