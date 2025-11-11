"use client";
import { landingPageSecondSectionProduct } from "@/Data";
import React, { useState, useEffect, useCallback } from "react";

const TOTAL_SLIDES = landingPageSecondSectionProduct.length;
const SLIDES_TO_SHOW_DESKTOP = 3; 
const SLIDES_TO_SHOW_MOBILE = 1;
const AUTOPLAY_DELAY = 3000;



const Crousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxScrollIndex = 1;
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxScrollIndex ? prevIndex + 1 : 0
    );
  }, [maxScrollIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxScrollIndex
    );
  }, [maxScrollIndex]);

  // Autoplay Effect
  useEffect(() => {
    const interval = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [nextSlide]);


  const translateXValue = `calc(-${currentIndex * 100}% / ${SLIDES_TO_SHOW_DESKTOP})`;

  const transformStyle = {
    transform: `translateX(calc(-${currentIndex * 100}%))`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <div className="">
      <div className="max-w-9xl mx-auto relative overflow-hidden rounded-xl bg-white p-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={transformStyle}
        >
          {landingPageSecondSectionProduct.map((product, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 w-full p-2
                sm:w-1/2 
                md:w-1/3 
                lg:w-1/4
              "
            >
              <div className="group border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center h-full p-4 hover:shadow-lg transition duration-300 transform hover:scale-[1.02]">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 object-cover mb-3 rounded-lg"
                />
                {/* Product Title */}
                <div className="text-base font-semibold text-gray-800 text-center mt-1 group-hover:text-blue-700">
                  {product.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-0 z-10 p-3 bg-blue-600 text-white rounded-r-xl transform -translate-y-1/2 opacity-80 hover:opacity-100 transition shadow-lg"
        >
          {/* SVG Arrow Left */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-0 z-10 p-3 bg-blue-600 text-white rounded-l-xl transform -translate-y-1/2 opacity-80 hover:opacity-100 transition shadow-lg"
        >
          {/* SVG Arrow Right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Dot Navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {["1","2"].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-indigo-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crousel;
