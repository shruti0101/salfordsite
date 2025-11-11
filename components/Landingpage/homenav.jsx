import React from 'react';
import { FaPaintRoller, FaCube, FaBook } from 'react-icons/fa';
import Link from 'next/link';

const HomeNav = () => {
  const cards = [
    { title: "TiO₂ for Coatings", icon: <FaPaintRoller className="w-10 h-10" />,link:"/tio2-for-coatings" },
    { title: "TiO₂ for Plastics", icon: <FaCube className="w-10 h-10" /> ,link:"/tio2-for-plastics"},
    { title: "TiO₂ for Laminates", icon: <FaBook className="w-10 h-10"/> ,link:"/tio2-for-laminates" },
  ];

  return (
    <section className="w-full py-4 md:py-8 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 px-8">
        {cards.map((card, idx) => (
          <Link href={card.link}
            key={idx}
            className="relative flex md:flex-col items-center justify-center p-3 rounded-2xl shadow-lg bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-white text-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group overflow-hidden"
          >
          
            {/* Title */}
            <h3 className="text-xl font-bold">{card.title}</h3>
              {/* Icon */}
            <div className="mb-4 hidden md:block ">{card.icon}</div>
            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
            {/* Subtle Glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeNav;
