// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//  text: "We have been working with Aanya Enterprise for over five years, and their role as a Titanium Dioxide wholesaler has been vital for our business. Their products always meet international quality standards, which allows us to maintain the brightness, opacity, and smooth finish of our paints. What we appreciate most is their transparency and on-time deliveries, which give us complete confidence in every order.", name: "Paint Manufacturer – Mumbai",
//  },

//  { text: "As a leading plastics manufacturer, we require large volumes of high-purity Titanium Dioxide on a regular basis. Aanya Enterprise has proven to be a reliable Titanium Dioxide wholesaler who not only delivers bulk quantities at competitive prices but also ensures consistency in every batch. Their strong logistics support has helped us avoid production delays and keep our supply chain running smoothly.", name: "Plastic Products Company – Delhi", 

//  },

//  { text: "When it comes to cosmetics, purity and safety are non-negotiable. Aanya Enterprise has become our trusted Titanium Dioxide wholesaler because they provide premium-grade TiO₂ that blends perfectly into our formulations. Their ability to meet custom packaging requirements and provide timely guidance makes them more than just a wholesaler—they are a partner who understands our business needs.", name: "Cosmetics Brand – Bangalore", 

//  },

//  { text: "The whiteness and consistency of our paper products directly depend on the quality of Titanium Dioxide we use. With Aanya Enterprise as our Titanium Dioxide wholesaler, we have experienced a remarkable improvement in the brightness and printability of our paper. Their dedication to quality assurance and their ability to supply large orders without delays make them a crucial part of our operations.", name: "Paper Mill – Gujarat",

//   },

//  { text: "We have worked with several manufacturers in the past, but none match the professionalism of Aanya Enterprise as a Titanium Dioxide wholesaler. Their products improve the strength and stability of our rubber goods, which has enhanced customer satisfaction for our end products. Beyond just supply, their customer support and commitment to long-term relationships have made them our preferred partner.", name: "Rubber & Industrial Products Manufacturer – Chennai", },
// ];

// export default function TestimonialSlider() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const prevSlide = () => {
//     setIndex(index === 0 ? testimonials.length - 1 : index - 1);
//   };

//   const nextSlide = () => {
//     setIndex((index + 1) % testimonials.length);
//   };

//   const current = testimonials[index];

//   return (
//     <section className="relative h-full w-full bg-[#F7DF86] py-5 md:py-12 text-white overflow-hidden">
//       <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 md:mb-8">
//           <span className="text-white">Client </span>
//           <span className="text-black">Testimonials</span>
//         </h2>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <p className="italic text-sm sm:text-lg md:text-xl leading-relaxed text-black max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
//               {current.text}
//             </p>
//             <div className="flex flex-col items-center mt-4">
              
//               <h4 className="text-xs sm:text-base md:text-lg font-serif font-semibold text-black">
//                 {current.name}
//               </h4>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Controls */}
//         <div className="hidden md:block flex justify-between mt-8 sm:mt-12 max-w-[calc(100%-2rem)] mx-auto px-4 sm:px-0">
//           <button
//             onClick={prevSlide}
//             className="bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full transition"
//           >
//             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#00537B]" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full transition"
//           >
//             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00537B]" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center mt-6 space-x-2">
//           {testimonials.map((_, i) => (
//             <div
//               key={i}
//               className={`w-3 h-3 rounded-full transition ${
//                 i === index ? "bg-[#F7C600]" : "bg-gray-400"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
