// pages/index.js
import React from 'react';
import MemberCard from '../../components/MemberCard';
import Navbar from '../../components/Navbar';
import membersData from './members.json';
import { fonts } from '../../components/FontsAndIcons';
import { useEffect } from 'react';
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
      <div className="container mx-auto px-4 py-8 pt-32">
        {memberTypes.map(({ type, title }) => (
          <section key={type}>
            <h2 className="text-6xl font-bold uppercase mb-4 text-center" style={{ fontFamily: fonts.primary }}>
              {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12" data-aos="fade-up">
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
