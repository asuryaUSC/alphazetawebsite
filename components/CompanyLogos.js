import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CompanyLogos = () => {
    const [companies, setCompanies] = useState([]);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px'
    });

    useEffect(() => {
        fetch('/companies.json')
            .then(res => res.json())
            .then(data => {
                setCompanies(data);
            })
            .catch(err => {
                console.error('Failed to load company data', err);
            });

        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div id="careers" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-black flex flex-col items-center justify-center"
             style={{ background: 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}>
            <motion.h2 ref={ref}
                       animate={controls}
                       initial="hidden"
                       variants={{
                           hidden: { opacity: 0, y: 20 },
                           visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
                       }}
                       className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold font-light uppercase mb-4"
                       style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                Where We Have Worked
            </motion.h2>
            <motion.div className="flex flex-wrap justify-center items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}>
                {companies.map((company, index) => (
                    <motion.div key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer m-2"
                                style={{
                                    transform: `translate(${index % 5 - 2 * 5}px, ${Math.floor(index / 5) * 5 - 2 * 5}px)`
                                }}>
                        <img src={company.imagePath} alt={company.alt}
                             className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40 object-cover"
                             style={{ maxWidth: '100%', height: 'auto' }} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CompanyLogos;
