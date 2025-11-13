import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      style={{ backgroundImage: "url(/bg-layer.webp)" }}
      className="relative bg-[#FFFEF7] bg-center bg-cover py-3 md:py-8"
    >
      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/20 pointer-events-none"></div>

      {/* Main container */}
      <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-3 md:px-10">
        {/* Left content (animation / image) */}
        <div className="flex justify-center">
          <Image
            src="/whychoose.webp"
            alt="Why Choose Us"
            width={500}
            height={500}
            className="object-cover rounded"
          />
        </div>

        {/* Right content (text + button + contact) */}
        <div>
          
          <h1 className="text-[#1B5AA2] font-bold text-2xl lg:text-4xl mb-6">
            Salford  Global Titanium Dioxide manufacturer
          </h1>

          <p className="text-lg text-black leading-relaxed mb-4">
            
         Salford has earned its place among the leading international 
            <strong>Titanium Dioxide (TiO₂) Manufacturers,</strong>who are committed to the support of the world's rapidly developing industrial area. By means of our connections with the world's best     <strong>Titanium Dioxide (TiO₂) Manufacturers,</strong> we are able to deliver raw materials that are consistently of high quality and performing power.
          </p>

          <p className="text-lg text-black leading-relaxed mb-4">
            Titanium Dioxide is an elementary and basic raw material for the industries of paints, coatings, plastics, paper, textiles, cosmetics, pharmaceuticals, and food, and its utility is not confined to just one sector. Its brightness, hiding power, and roughness are the very reasons why it is always present in the deriving of modern products.
          </p>

          <p className="text-lg text-black leading-relaxed mb-6">
         In light of the continuous rise in demand for Titanium Dioxide around the globe, Salford—a reputable <a href="https://salfordworld.com/"> <strong > Titanium Dioxide Manufacturer</strong></a> will certainly be there to supply the end-users with the correct grades and specifications for their production. With the emphasis on dependability and world standards, we are your partner in the Titanium Dioxide manufacturing excellence journey.
          </p>

          {/* Actions */}
          <div className="flex flex-nowrap items-center gap-3">
            <Link
              href="/about-us"
              className="relative px-7 py-3 rounded-full  text-lg font-semibold bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-black shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute inset-0 bg-white opacity-10 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-500"></span>
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
