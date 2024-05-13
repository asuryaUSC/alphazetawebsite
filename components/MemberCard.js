// components/MemberCard.js
import React from 'react';
import { fonts } from './FontsAndIcons';
import { FaLinkedin } from "react-icons/fa";

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
      <div className="relative">
        {/* Adjust image height while maintaining aspect ratio */}
        <img src={member.image} alt={member.name} className="w-full object-cover" style={{ height: '300px' }} />
        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300">
          <FaLinkedin />
        </a>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center" style={{ fontFamily: fonts.primary }}>{member.name}</h3>
        <p className="text-sm text-center">{member.position}</p>
      </div>
    </div>
  );
};

export default MemberCard;
