// pages/index.js
import React, { useEffect } from 'react';
import MemberCard from '../../components/MemberCard';
import Navbar from '../../components/Navbar';
import membersData from './members.json';
import { fonts } from '../../components/FontsAndIcons';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing AOS styles

const HomePage = () => {
  useEffect(() => {
    AOS.init();  // Initialize AOS library
  }, []);

  const filterMembersByType = (type) => membersData.filter(member => member.active_type === type);

  const memberTypes = [
    { type: "E-Board", title: "Executive Board" },
    { type: "AZ Group Head", title: "AZ Group Heads" },
    { type: "Active Member", title: "Active Members" }
  ];

  return (
    <div style={{ background: 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 pt-24 md:pt-32">
        {memberTypes.map(({ type, title }) => (
          <section key={type}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold uppercase mb-4 text-center"
                style={{ fontFamily: fonts.primary }}>
              {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 md:mb-12"
                 data-aos="fade-up">
              {filterMembersByType(type).map(member => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
