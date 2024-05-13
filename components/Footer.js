import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      color: "#0077b5",  // LinkedIn blue for example, change as needed
      transition: { duration: 0.3 }
    }
  };

  return (
    <footer className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-3 md:py-4 border-t border-gray-300"
            style={{ background: 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}>
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold"
          style={{ fontFamily: 'Podkova, serif', color: 'gray' }}>
        alpha zeta
      </h1>
      <div>
        <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-600"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
          &copy; Alpha Zeta 2024
        </span>
      </div>
      <div className="flex">
        <motion.a href="https://www.instagram.com/alphazeta.sc/" target="_blank" className="mx-2 sm:mx-1"
                  variants={iconVariants} whileHover="hover" style={{ color: 'inherit' }}>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </motion.a>
        <motion.a href="https://www.linkedin.com/company/alpha-kappa-psi-alpha-zeta/mycompany/" target="_blank" className="mx-2 sm:mx-1"
                  variants={iconVariants} whileHover="hover" style={{ color: 'inherit' }}>
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </motion.a>
        <motion.a href="mailto:alphazeta.sc@gmail.com" className="mx-2 sm:mx-1"
                  variants={iconVariants} whileHover="hover" style={{ color: 'inherit' }}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
