"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Popup from "./Popup";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const menuItems = [
    { label: "About Us", link: "/about-us" },
    {
      label: "Products",
      link: "/products",
      dropdown: [
        { label: "Solutions for Plastics", link: "/tio2-for-plastics" },
        { label: "Solutions for Laminates", link: "/tio2-for-laminates" },
        { label: "Solutions for Coatings", link: "/tio2-for-coatings" },
      ],
    },
    { label: "Industries", link: "/industries" },
    { label: "Applications", link: "/applications" },
    { label: "News & Events", link: "/news-events" },  
  ];

  return (
    <header className="fixed   border-b border-black shadow-md top-0 left-0 w-full z-50 bg-white transition-all duration-500">
      <div className="w-full mx-auto flex items-center justify-between px-7 md:px-15 py-1 md:py-3 lg:py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={90}
              height={65}
              className="rounded-2xl"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10 font-semibold relative text-lg">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.link || "#"}
                className="relative px-1 py-2 flex items-center gap-1 transition-all duration-500"
              >
                <span className="relative z-10 transition-colors duration-500 flex items-center gap-1">
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        openMenu === item.label ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </span>

                {/* underline + glow */}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] rounded-full transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-full h-2 bg-[#1B5AA2] opacity-0 rounded-full blur-md transition-opacity duration-500 group-hover:opacity-30"></span>
              </Link>

              {/* Dropdown */}
              {item.dropdown && openMenu === item.label && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-72 bg-white text-black rounded-xl shadow-2xl border border-gray-200 py-3 animate-fadeScale">
                  {item.dropdown.map((d, i) => (
                    <Link
                      key={i}
                      href={d.link}
                      className="block px-5 py-2 rounded-md hover:bg-gradient-to-r from-[#0082C8] to-[#8AB0C2] hover:text-white transition-all duration-300"
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={() => setIsFormOpen(true)} className="relative px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-white shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-0 bg-white opacity-10 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-500"></span>
            Request a Quote
          </button>
          <Link
            href="/contact-us"
            className="relative px-6 py-3 rounded-full font-semibold bg-[#00537B] text-white shadow-lg overflow-hidden group hover:bg-[#003d5a] transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-white opacity-5 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-500"></span>
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-3/4 max-w-xs bg-[#00537B] text-white h-full shadow-lg p-6 flex flex-col animate-slideIn">
            <div className="flex justify-between items-center mb-6">
              <Image src="/logo.webp" alt="Logo" width={80} height={45} />
              <button onClick={() => setMobileOpen(false)}>
                <X size={26} />
              </button>
            </div>

            <nav onClick={() => setMobileOpen(false)} className="flex flex-col gap-4">
              {menuItems.map((item, idx) => (
                <div key={idx}>
                  <Link
                    href={item.link || "#"}
                    className="flex justify-between w-full py-2 font-medium"
                    onClick={() =>
                      openMenu === item.label
                        ? setOpenMenu(null)
                        : setOpenMenu(item.label)
                    }
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={16} />}
                  </Link>
                  {item.dropdown && openMenu === item.label && (
                    <div className="pl-4 flex flex-col gap-2 mt-1">
                      {item.dropdown.map((d, i) => (
                        <Link
                          key={i}
                          href={d.link}
                          className="hover:text-[#F7C600] transition"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 flex flex-col gap-3">
            

 <button onClick={() => setIsFormOpen(true)} className="relative px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] text-white shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-0 bg-white opacity-10 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-500"></span>
            Request a Quote
          </button>

                <Link
                  href="/contact-us"
                  className="cursor-pointer w-full text-center bg-white text-[#00537B] py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeScale {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeScale {
          animation: fadeScale 0.3s ease forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>

      {/* Request Quote Form Modal */}
   {/* Contact Form */}
      {isFormOpen && (
        <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </header>
  );
}
