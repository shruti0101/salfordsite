"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ContactForm({ isOpen, onClose }) {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const router = useRouter();

  // form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // OTP states

  if (!isOpen) return null;

  // SEND OTP
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // VALIDATION
      if (!name.trim()) {
        return setStatus("❌ Name is required");
      }

      if (phone.length !== 10) {
        return setStatus("❌ Enter valid 10 digit phone number");
      }

      if (!email.includes("@")) {
        return setStatus("❌ Invalid email");
      }

      if (!message.trim()) {
        return setStatus("❌ Message is required");
      }

      setLoading(true);

      // STEP 1 → SEND OTP

      // STEP 2 → VERIFY OTP + SUBMIT FORM

      setStatus("Submitting form...");

      const formData = {
        platform: "Salford Landing page",
        platformEmail: "sales@aanyaenterprise.com",
        name,
        email,
        place: country,
        phone,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        setStatus("✅ Message sent successfully!");

        // RESET FORM
        setName("");
        setEmail("");
        setCountry("");
        setPhone("");
        setMessage("");
        // setOtp("");

        // setOtpSent(false);
        // setOtpVerified(false);

        // CLOSE MODAL
        onClose();

        // REDIRECT
        router.push("/thankyou");
      } else {
        setStatus("❌ Something went wrong");
      }
    } catch (error) {
      console.log(error);

      setStatus("❌ Failed to Submit");
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

          <h2 className="text-center text-2xl font-semibold text-white tracking-wide">
            Get In Touch With Us
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] mx-auto mt-3 mb-5 rounded-full"></div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
              required
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              type="tel"
              name="phone"
              maxLength={10}
              minLength={10}
              pattern="[0-9]{10}"
              placeholder="Enter Phone Number"
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
              required
            />

            {/* OTP FIELD */}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition"
              required
            />

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Message"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-[#00C9FF] focus:border-transparent transition h-28 resize-none"
            ></textarea>

            {/* MAIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-r from-[#00C9FF] to-[#0077E6] hover:from-[#0077E6] hover:to-[#00C9FF] transition-all duration-300 rounded-lg font-semibold text-white text-base shadow-lg shadow-[#00C9FF]/30"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Firebase Recaptcha */}
          </form>
        </div>
      </div>
    </div>
  );
}
