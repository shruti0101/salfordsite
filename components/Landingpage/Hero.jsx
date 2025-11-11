"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[50vh] md:h-screen w-full overflow-hidden">
      {/* ✅ Desktop Background Image */}
      <div
        className="hidden md:block absolute inset-0 bg-center bg-cover mt-10"
        style={{ backgroundImage: "url(/herobannerfinal.webp)" }}
      ></div>

      {/* ✅ Mobile Background Image with Text */}
      <div
        className="block md:hidden absolute inset-0 bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url(/mobbanner.webp)" }}
      >
        <div className="block md:hidden p-4 mt-7 rounded-xl">
          <h2 className="text-white text-4xl  font-semibold">
            Your Trusted TiO₂ Partner
          </h2>
          <p className="text-white bg-cyan-500/40 rounded-lg mt-2 text-lg ">
            Delivering quality titanium dioxide solutions for every industry.
          </p>
        </div>
      </div>

      {/* ✅ Animated Gradient Layer (Desktop only) */}
      <svg
        className="hidden md:block absolute w-[200%] h-[200%] top-[0%] left-[-50%] animate-diagonal-slow"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2091CA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f8e71c" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1)"
          d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <style jsx>{`
        @keyframes diagonal-slow {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20%, -20%);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-diagonal-slow {
          animation: diagonal-slow 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
