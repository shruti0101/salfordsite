"use client";

import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section
      style={{ backgroundImage: "url(/about/cta.webp)" }}
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Decorative Element */}
      <div className="absolute -top-32 -right-32 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-400/20 rotate-45 rounded-3xl blur-3xl z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-tight drop-shadow-lg">
          Connect With Us
        </h2>

        <h3 className="text-[clamp(1.3rem,3.5vw,2rem)] font-semibold text-[#E6F0FF]">
          Partner with a Global Leader Today
        </h3>

        <p className="text-[clamp(0.9rem,2.5vw,1.125rem)] leading-relaxed max-w-3xl text-gray-100">
          If you are seeking a <strong className="text-blue-400">Titanium Dioxide Manufacturers,</strong> in Germany with the
          credibility of a trusted <strong className="text-blue-400">Titanium Dioxide Manufacturers,</strong> across the
          world,{" "}
     
            Salford
       
          is your ideal partner.
          <br className="hidden sm:block" />
          Contact our team today to discuss your requirements, request product
          samples, or explore strategic partnership opportunities.
          <br className="hidden sm:block" />
          Together, let’s build a sustainable, brighter future for the global
          industry — powered by world-class titanium dioxide and the trusted
          partnership of{" "}
        
            Salford
   
        </p>

        <Link
          href="/contact-us"
          className="inline-block mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-blue-400/50 transition-transform duration-300 text-[clamp(0.9rem,2.5vw,1rem)]"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
};

export default CTA;
