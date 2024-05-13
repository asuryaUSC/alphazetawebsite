import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7  // Trigger animation when 70% of the element is in view
  });

  // Determine the duration based on the value of 'end'
  const duration = end === 1000 ? 2.5 : 3;

  return (
    <div ref={ref} className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold"
         style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
      {inView ? <CountUp end={end} duration={duration} suffix="+" /> : '0+'}
    </div>
  );
};

const CommunityStats = () => {
  return (
    <div className="py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8 px-0">
      <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-2 sm:mb-3 md:mb-4 lg:mb-6">
        Join a Community Of
      </h3>
      <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <Counter end={50} />
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-medium mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-2">
            Members
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Counter end={30} />
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-medium mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-2">
            Majors
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Counter end={1000} />
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-medium mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-2">
            Alumni
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;
