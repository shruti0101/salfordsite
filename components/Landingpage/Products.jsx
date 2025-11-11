"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data";

// Featured product IDs
const featuredProductIds = ["salford-201", "salford-250", "salford-628", "salford-626"];

// Filter products
const featuredProducts = categories
  .flatMap((cat) => cat.products)
  .filter((p) => featuredProductIds.includes(p.id));

export default function HomeProducts() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* ===== Section Header ===== */}
        <div className="text-center space-y-4 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0047b3] leading-tight">
            Featured Products
          </h2>
          <p className="text-gray-700 text-base sm:text-lg  max-w-5xl mx-auto leading-relaxed">
        Explore our diverse portfolio of Titanium Dioxide (TiO₂) products, engineered for superior brightness, opacity, and durability across plastics, coatings, and laminates. As a leading <strong>Titanium Dioxide Manufacturer,</strong>  Salford delivers advanced TiO₂ solutions that meet the highest global standards for quality and performance.
          </p>
        </div>

        {/* ===== Product Grid ===== */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-2xl bg-white transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="p-5 sm:p-6 flex flex-col justify-between h-full">
                {/* Product Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0047b3] group-hover:text-[#0066cc] transition-colors duration-300 mb-2">
                  {product.name}
                </h3>

                {/* Product Description */}
                <div className="text-gray-700 text-sm sm:text-base mb-4 flex-grow">
                  {(product.excerpt || [])
                    .filter((b) => b.type === "p")
                    .slice(0, 1)
                    .map((block, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {block.text.length > 100
                          ? block.text.slice(0, 100) + "..."
                          : block.text}
                      </p>
                    ))}
                </div>

                {/* View Product Button */}
                <div className="flex items-center gap-2 mt-auto text-[#0047b3] font-semibold group-hover:text-[#0066cc] transition-colors duration-300">
                  <span>View Product</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Gradient Line */}
                <span className="block h-1 w-0 bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] rounded-full mt-3 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          ))}
        </div>

        {/* ===== See All Products Button ===== */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block  px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-white text-lg sm:text-lg md:text-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
