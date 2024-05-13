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
    <div ref={ref} className="text-4xl font-bold" style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}>
      {inView ? <CountUp end={end} duration={duration} suffix="+" /> : '0+'}
    </div>
  );
};

const CommunityStats = () => {
  return (
    <div className="py-4 px-0">
      <h3 className="text-5xl font-bold uppercase mb-6">Join a Community Of</h3>
      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <Counter end={50} />
          <p className="text-3xl font-medium mt-2">Members</p>
        </div>
        <div className="flex flex-col items-center">
          <Counter end={30} />
          <p className="text-3xl font-medium mt-2">Majors</p>
        </div>
        <div className="flex flex-col items-center">
          <Counter end={1000} />
          <p className="text-3xl font-medium mt-2">Alumni</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;
