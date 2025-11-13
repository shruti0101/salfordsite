// "use client";
// import React, { useRef, useEffect, useState } from "react";

// export default function ProductCategoriesSection() {
//   const sectionRef = useRef(null);
//   const scrollRef = useRef(null);
//   const totalScrollRef = useRef(0);
//   const tickingRef = useRef(false);
//   const [sectionHeight, setSectionHeight] = useState(800);

//  
//   const categories = [
//     { name: "Plastics", src: "/plastics.webp" },
//     { name: "Paper & Paper Laminates", src: "/paper.webp" },
//     { name: "Pharma & Cosmetics ", src: "/phrama.webp" },
//     { name: "Inks", src: "/inks.webp" },
//     { name: "Paints & Coatings", src: "/coatings.webp" },
//      { name: "Industry Catalyst", src: "/catalyst.webp" },
//   ];

//   // Build cards: for each category show image card then colored text card
//   const cards = categories.flatMap((c) => [
//     { type: "img", name: c.name, src: c.src },
//     { type: "text", name: c.name },
//   ]);

//   useEffect(() => {
//     const sectionEl = sectionRef.current;
//     const scrollEl = scrollRef.current;
//     if (!sectionEl || !scrollEl) return;

//     // measure sizes and set section height
//     const updateSizes = () => {
//       // total horizontal scroll needed (scrollable width minus viewport width)
//       const totalHorizontal = Math.max(
//         0,
//         scrollEl.scrollWidth - window.innerWidth
//       );
//       totalScrollRef.current = totalHorizontal;
//       // vertical space needed so that vertical scroll maps exactly to horizontal travel
//       setSectionHeight(totalHorizontal + window.innerHeight);
//     };

//     // Wait until all images inside scrollEl are loaded (so scrollWidth is accurate)
//     const waitForImages = () => {
//       const imgs = scrollEl.querySelectorAll("img");
//       if (!imgs.length) {
//         updateSizes();
//         return;
//       }
//       let loaded = 0;
//       imgs.forEach((img) => {
//         if (img.complete) {
//           loaded++;
//         } else {
//           img.addEventListener(
//             "load",
//             () => {
//               loaded++;
//               if (loaded === imgs.length) updateSizes();
//             },
//             { once: true }
//           );
//           img.addEventListener(
//             "error",
//             () => {
//               loaded++;
//               if (loaded === imgs.length) updateSizes();
//             },
//             { once: true }
//           );
//         }
//       });
//       if (loaded === imgs.length) updateSizes();
//     };

//     waitForImages();
  
//     const onResize = () => {
//       updateSizes();
     
//       handleRAF();
//     };
//     window.addEventListener("resize", onResize);

    
//     const handleRAF = () => {
 
//       const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
//       const scrollY = window.scrollY;

//       const totalH = totalScrollRef.current;
//       if (totalH <= 0) {
//         tickingRef.current = false;
//         return;
//       }

//       // when user is inside the section, progress goes from 0 -> 1 over totalH px
//       const rawProgress = (scrollY - sectionTop) / totalH;
//       const progress = Math.min(Math.max(rawProgress, 0), 1);

//       scrollEl.scrollLeft = progress * totalH;
//       tickingRef.current = false;
//     };

//     const onScroll = () => {
//       if (tickingRef.current) return;
//       tickingRef.current = true;
//       requestAnimationFrame(handleRAF);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });

//     updateSizes();
//     handleRAF();

//     return () => {
//       window.removeEventListener("resize", onResize);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-gradient-to-b py-15 from-white to-gray-50"
//       style={{ height: sectionHeight }}
//     >
//       <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center">
//         <h2 className="text-3xl md:text-6xl mb-2 font-bold text-[#123745] drop-shadow-sm">
//           Our Categories
//         </h2>
// <div className="relative w-50 mx-auto h-1.5 bg-[#03a9f4]/30 rounded mb-8 overflow-hidden">
//   <div className="absolute inset-0 bg-gradient-to-r from-[#03a9f4] via-[#004AAC] to-[#03a9f4] animate-slide"></div>
// </div>      </div>

//       {/* sticky horizontal scroller */}
//       <div
//         ref={scrollRef}
//         className="sticky top-18 left-0 w-full h-screen flex items-center overflow-hidden"
//         style={{ willChange: "scroll-position" }}
//       >
//         <div className="flex items-center px-8 md:px-16">
//           {cards.map((card, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 w-[280px] md:w-[340px] lg:w-[380px] h-[480px] mx-6 rounded-2xl overflow-hidden
//                          transform transition-transform duration-400 ease-out hover:scale-105 hover:shadow-2xl"
//               style={{ boxShadow: "0 12px 30px rgba(8,15,40,0.08)" }}
//             >
//               {card.type === "img" ? (
//                 <img
//                   src={card.src}
//                   alt={card.name}
//                   className="w-full h-full object-cover"
//                   draggable={false}
//                 />
//               ) : (
//                 <div
//                   className="w-full h-full bg-gradient-to-br from-[#00537B]  text-white
//                                 flex flex-col items-center justify-center p-6"
//                 >
//                   <svg
//                     width="70"
//                     height="70"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="opacity-90"
//                     role="img"
//                     aria-label="Ti O two chemical label"
//                   >
//                     <circle
//                       cx="12"
//                       cy="12"
//                       r="11"
//                       fill="rgba(255,255,255,0.03)"
//                     />

//                     <text
//                       x="12"
//                       y="14"
//                       textAnchor="middle"
//                       fontFamily="Arial, Helvetica, sans-serif"
//                       fontWeight="700"
//                       fontSize="11.5"
//                       fill="white"
//                       dominantBaseline="middle"
//                     >
//                       TiO
//                       <tspan fontSize="5" baselineShift="sub">
//                         2
//                       </tspan>
//                     </text>
//                   </svg>

//                   <h2 className="text-center mt-5 text-[#00537B] text-2xl md:text-4xl font-semibold tracking-wide">
//                     {card.name}
//                   </h2>
//                 </div>
//               )}
//             </div>
//           ))}
         
//           <div style={{ width: 24 }} />
//         </div>
//       </div>
//     </section>
//   );
// }
