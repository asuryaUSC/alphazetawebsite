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
        <div id="careers" className="px-12 text-black flex flex-col items-center justify-center"
             style={{ background: 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}>
            <motion.h2 ref={ref}
                       animate={controls}
                       initial="hidden"
                       variants={{
                           hidden: { opacity: 0, y: 20 },
                           visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
                       }}
                       className="text-6xl font-bold uppercase mb-4"
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
                             className="h-32 w-32 object-fit"
                             style={{ maxWidth: '100%', height: '100%' }} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CompanyLogos;
