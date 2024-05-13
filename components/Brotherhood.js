import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Brotherhood = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px'
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const imageVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    const buttonVariants = {
        hidden: { x: -10, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
    };

    return (
        <div ref={ref} className="flex flex-col items-center justify-center min-h-screen px-12 py-8"
             style={{ background: 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}>
            <motion.h2 animate={controls} initial="hidden" variants={imageVariants}
                       className="text-6xl font-bold uppercase mb-4"
                       style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
                Brotherhood
            </motion.h2>
            <motion.img src="/azcollage.png" alt="Alpha Zeta Brotherhood Collage"
                        animate={controls} initial="hidden" variants={imageVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "inertia", stiffness: 300 }}
                        className="w-full max-w-7xl" // Removed shadow and rounded classes
                        style={{ width: '100%', height: 'auto', transition: 'transform 0.3s ease-in-out' }}/>
            <motion.div animate={controls} initial="hidden" variants={buttonVariants} className="mt-4">
                <button className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-lg"
                        onClick={() => window.location.href = '#active-members'}>
                    ACTIVE MEMBERS
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </motion.div>
        </div>
    );
};

export default Brotherhood;
