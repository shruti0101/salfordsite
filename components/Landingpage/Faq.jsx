"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const faqs = [
  {
    question: "What is Titanium Dioxide (TiO₂) and why is it essential?",
    answer: `Titanium Dioxide (TiO₂) is extremely bright and a very white pigment having amazing brightness, opacity, and strength. It is a primary raw material in the industries that include paints, coatings, plastics, papers, dyeing, cosmetics, pharmaceuticals, and food. 
TiO₂ not only improves the looks of the products but also helps in standardizing their quality, and increasing their longevity thus making it a must-have for manufacturers who are aimed at meeting global standards and providing high performance.`,
  },
  {
    question: "What are the different TiO₂ grades that Salford provides and the difference among them?",
    answer: `Salford as the world’s Titanium Dioxide manufacturer offers two main grades namely:
• Rutile TiO₂ – It has very great opacity, UV resistance, and durability hence it is the best choice for the outdoor paint, coating, and plastic applications, and also for the indoor ones.
• Anatase TiO₂ – It has very good whiteness, good dispersibility, and the highest safety compliance so it is suitable for paper, textiles, and cosmetics, and it can even be used in food and pharmaceutical applications.
Both grades come from reliable international manufacturers, and they go through strict quality checks that are based on the latest global standards thus the performance and reliability are always consistent.`,
  },
  {
    question: "What are the steps Salford is taking in order to deliver top-quality and regular TiO₂?",
    answer: `The necessary condition of quality assurance is placed at the center of our operations. The company assures the quality of its products through the following methods:
• Associating with the top manufacturers situated in Europe, Asia, and the Middle East.
• Performing tests for purity, particle size, and quality assurance on a batch-by-batch basis.
• Abiding by the international standards set by REACH, FDA, and ISO.
Following this procedure guarantees that the prepared TiO₂ that has been shipped is safe and conforms to the manufacturing standards worldwide thus the clients feel confident with every application.`,
  },
  {
    question: "Which industries enjoy the most advantages from Salford's TiO₂?",
    answer: `Salford caters to many industries with its products, among others:
• Paints & Coatings – Their properties of brightness, opacity, and UV protection are the best of all.
• Plastics & Masterbatches – Color and weather resistance are always the same.
• Paper & Printing Inks – Whiteness has been improved, and print smoothness is better.
• Textiles & Fibers – Finishes are uniform and color effects are brilliant.
• Cosmetics & Personal Care – Opacity, whitening, and UV protection are safe.
• Food & Pharmaceuticals – They are okay for coatings, tablets, and capsules.
• Construction & Industrial Applications – It adds benefits of whiteness, durability, and aesthetics.`,
  },
  {
    question: "How dependable is Salford's supply chain worldwide?",
    answer: `Salford's global TiO₂ supply is free of disruptions thanks to:
• Global manufacturers' strategic ties to Salford.
• Smooth handling of logistics and customs.
• Anticipating inventory needs to ensure the absence of shortage.
With our strong international network, customers can be assured of uninterrupted production.`,
  },
  {
    question: "Is it possible to get technical and application support from Salford?",
    answer: `Of course. Our technical support service is comprehensive, and it includes:
• Selection help regarding the most suitable TiO₂ grade for your application.
• Techniques of formulation, mixing, and dispersion advice.
• Safest practices for storage, handling, and use.
Our staff makes sure that every customer will get the most out of TiO₂ with the highest performance and efficiency.`,
  },
  {
    question: "Are the Salford Titanium Dioxide products in compliance with the global standards?",
    answer: `Definitely. Every product of Salford's TiO₂ range is compliant with:
• REACH (the EU chemical safety regulations)
• FDA (the U.S. food and pharmaceutical standards)
• ISO (the international quality and manufacturing certifications)
We will continue to use only the sustainable sources, safe handling, and environmentally friendly trade practices everywhere.`,
  },
  {
    question: "What are the ways for global firms to request samples or place orders?",
    answer: `So, the clients don't have to offer much hassle; they can just contact us through the contact form, email, or phone. And we will give them the following:
• Product samples for quality checking purposes.
• Prices for the requested grades and amounts.
• Supply schemes tailored according to the industry and production scale.
Our attentive staff is the one to guarantee that every client will be backed at every stage of the ordering process.`,
  },
  {
    question: "What are the reasons to select Salford as the Titanium Dioxide Manufacturer?",
    answer: `Working with Salford is synonymous with selecting a global Titanium Dioxide Manufacturer that is characterized by:
• Solid and pure TiO₂ quality throughout.
• Supply chains that are dependable and prompt.
• Complete assistance in terms of technology.
• A strong point in sustainability and innovation.
We cooperate with industries across the world in improving product quality, keeping up with operational excellence, and thus attaining sustainable growth.`,
  },
];


export default function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-center bg-contain py-8 md:py-20 px-6 lg:px-12 overflow-hidden">
      {/* Left Floating Image */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }} // moves up and down
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 hidden md:block"
      >
        <Image src="/atoms.webp" width={300} height={400} alt="Decorative Left" className="hidden md:block"/>
      </motion.div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-7 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-black mt-4 text-lg">
          Everything you need to know about Salford's Titanium Dioxide products
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-3 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-2 md:py-4 text-left text-md md:text-xl font-medium text-black hover:bg-[#1B5AA2]/20 hover:text-[#1B5AA2] transition-colors"
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="ml-4 w-5 h-5 text-blue-400" />
              ) : (
                <FaChevronDown className="ml-4 w-5 h-5 text-black" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="px-6 pb-6 text-black text-md leading-relaxed"
                >
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i} className="mb-2 text-md">
                      {line}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}



        
      </div>

      
      {/* Right Floating Image */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }} // opposite direction for variation
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-25 -right-10"
      >
        <Image src="/atoms.webp" width={300} height={400} alt="Decorative Right" className="hidden md:block" />
      </motion.div>

    </section>
  );
}