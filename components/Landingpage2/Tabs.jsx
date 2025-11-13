"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const tabs = [
  {
    id: 1,
    mainTitle: "Driving ",
    subTitle: "The World Industrial Growth is on the Move",
    description: `Salford, a reliable manufacturer of Titanium Dioxide, is committed to supporting the rapidly growing industrial landscape through reliable access to premium titanium dioxide (TiO₂). As a global manufacturing partner, we understand the specific challenges and opportunities of international markets.
The main objective of the company is to provide the TiO₂ industry with a steady supply of highly graded TiO₂ in order to help them meet international standards, improve product quality, and remain competitive in a constantly changing economy.
The company aims to provide industries worldwide with added value through expertise, service, and reliability, such as:`,
    points: [
      "Timely Deliveries – Efficient logistics and inventory management make sure that the clients get the materials at the most appropriate time for them.",
      "Tailored Solutions – Different grades, packaging, and volumes that are flexible and suitable for the specific requirements of the industry.",
      "Local Support with Global Standards – Providing technical assistance for the recommended usage of TiO₂ that meets the international specifications.",
      "Strengthening Partnerships – Creating ties with industries around the world that are meant to last for a long time.",
    ],
    image: "/pigment-wave-1.webp",
  },
  {
    id: 2,
    mainTitle: " Sustainability  ",
    subTitle: "Commitment to Sustainability",
    description: `At Salford, the company makes responsible business practices a necessity for gaining and maintaining trust and achieving long-term growth. A commitment to environmental protection, occupational safety, and international compliance lies at the heart of the company’s titanium dioxide (TiO₂) production and distribution processes as a global <strong>Titanium Dioxide Manufacturer</strong> and production partner.
Environmental sustainability is not only a policy but also a vital part of our working methods in every sector we operate in.`,
    points: [
      "Eco-Friendly Sourcing – The company cooperates with suppliers who have the least negative impact on the environment and who follow sustainable manufacturing practices.",
      "Regulatory Compliance – Working in line with REACH, FDA, ISO, and other international standards for quality and safety.",
      "Safety in Handling & Transport – All TiO₂ shipments are managed under strict safety and environmental protocols.",
      "Encouraging Responsible Use – The company offers technical assistance and guidance to ensure that titanium dioxide is used in a safe and efficient manner.",
    ],
    image: "/pigment-wave-2.webp",
  },
  {
    id: 3,
    mainTitle: "Commitment ",
    subTitle: "Building Long-Term Partnerships",
    description: `At Salford, our purpose is not just to offer titanium dioxide (TiO₂) but also to establish and nurture long-term relationships with industries worldwide. As a reliable <strong>Titanium Dioxide Manufacturer</strong>, we believe that trust, dependability, and mutual advancement form the foundation of strong and enduring partnerships.
By working hand in hand with our customers, we not only help them overcome market challenges but also prepare them for the future with a consistent supply of high-quality TiO₂ for their operations.
We strengthen these relationships through key actions such as:`,
    points: [
      "Team-Centric Method – Customizing solutions to the demands of various industries.",
      "Dependable Supply – Providing regular availability of the product in all worldwide markets.",
      "Technical Help – Giving professional advice in relation to TiO₂ applications and process improvement.",
      "Versatile Solutions – Through the provision of different grades, packaging, and volumes that can meet unique business requirements.",
      "Long-Term Commitment – Nurturing relationships that promote continuous success through the partnership.",
    ],
    image: "/pigment-wave-3.webp",
  },
];

export default function PremiumTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-6 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tabs[activeIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={tabs[activeIndex].image}
            alt={tabs[activeIndex].subTitle}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 relative z-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          {/* Tab Buttons */}
          <div className="flex flex-wrap border-b border-[#1B5AA2]/30 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveIndex(index)}
                className={`relative px-4 py-2 text-lg md:text-xl font-semibold transition-all ${
                  index === activeIndex
                    ? "text-[#1B5AA2]"
                    : "text-gray-600 hover:text-[#1B5AA2]"
                }`}
              >
                {tab.mainTitle}
                {index === activeIndex && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#1B5AA2] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeIndex].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00537B] mb-5">
                {tabs[activeIndex].subTitle}
              </h2>
              <p
                className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: tabs[activeIndex].description,
                }}
              ></p>

              <ul className="space-y-3">
                {tabs[activeIndex].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#1B5AA2] text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-800 text-base md:text-lg leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE PLACEHOLDER */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
