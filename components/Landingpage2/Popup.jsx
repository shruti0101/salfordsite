"use client";
import React, { useRef, useState } from "react";

export default function ContactForm({ isOpen, onClose }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formsubmit.co/ajax/inquiry.promozione@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const countries = [
    "select country",
    "India",
    "United States",
    "United Kingdom",
    "Germany",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "France",
    "Italy",
    "Singapore",
    "China",
    "Japan",
    "South Korea",
    "Brazil",
    "South Africa",
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-50 px-4">
      <div className="relative rounded-3xl shadow-2xl overflow-hidden w-full max-w-lg text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#004aad]/60 backdrop-blur-sm"></div>

        <div className="relative p-8 sm:p-10 z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-red-400 text-2xl transition"
          >
            ✕
          </button>

          <h2 className="text-center text-2xl  font-semibold text-white tracking-wide">
            Get In Touch With Us
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] mx-auto mt-3 mb-5 rounded-full"></div>

          {!success ? (
            <form method="post" ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              <input type="hidden" name="_subject" value="New Product Enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="product" value="Enquiry From Website" />
              <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_nosponsor" value="true" />
                  <input type="hidden" name="_cc" value="sales@aanyaenterprise.com" />


              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
                required
              />

              <input
                type="tel"
                name="phone"
                maxLength={10}
                minLength={10}
                pattern="[0-9]{10}"
                placeholder="Enter Phone Number"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
                required
              />

              {/* ✅ Country Dropdown */}
              <select
              
                name="country"
                defaultValue=""
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
                required
              >
                
                {countries.map((country, idx) => (
                  <option key={idx} value={country} className="text-black">
                    {country}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Message"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition h-28 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-gradient-to-r from-[#00C9FF] to-[#0077E6] hover:from-[#0077E6] hover:to-[#00C9FF] transition-all duration-300 rounded-lg font-semibold text-white text-base shadow-lg shadow-[#00C9FF]/30"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="text-center text-white space-y-4">
              <p className="text-lg font-semibold">✅ Message Sent Successfully!</p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-gradient-to-r from-[#00C9FF] to-[#0077E6] px-6 py-2 rounded-lg text-white"
              >
                Send Another
              </button>
            </div>
          )}

          {error && <p className="text-red-400 text-center mt-3">{error}</p>}
        </div>
      </div>
    </div>
  );
}
