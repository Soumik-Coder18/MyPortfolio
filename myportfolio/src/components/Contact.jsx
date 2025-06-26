import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import emailjs from 'emailjs-com';

// Access keys from .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen px-6 md:px-16 py-20 text-[#A7C1A8] font-mono bg-gradient-to-br from-[#0f0f0f] to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1f1f1f_0%,#0f0f0f_100%)] opacity-70" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/grid.svg')] opacity-[0.04] mix-blend-soft-light" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 neon-glow text-[#819990]">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-[#A7C1A8] font-mono flex flex-col justify-center"
          >
            <div className="text-[15px] sm:text-base leading-relaxed tracking-wider">
              <div className="mb-4 text-[#CFF3E8] text-xl font-semibold sm:text-2xl uppercase animate-pulse">
                ✒︎ Incoming Transmission
              </div>

              <div className="space-y-3 text-[#EEEFE0]/90">
                <p><span className="text-[#A7C1A8]">[Briefing]</span> Establishing secure link...</p>
                <p><span className="text-[#A7C1A8]">[Status]</span> Signal lock acquired. Message relay online.</p>
                <p><span className="text-[#A7C1A8]">[Objective]</span> Seeking meaningful connections. Collaboration, creation, or curiosity — all signals welcome.</p>
                <p><span className="text-[#A7C1A8]">[Instructions]</span> Use the form on the right. Be direct. Be bold. This channel is always listening.</p>
              </div>

              <div className="mt-8 text-xs text-[#819A91]/70 tracking-widest uppercase flex items-center gap-3">
                <span>Transmitting</span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#A7C1A8] rounded-full animate-ping" />
                  <span className="w-1.5 h-1.5 bg-[#A7C1A8] rounded-full animate-pulse delay-100" />
                  <span className="w-1.5 h-1.5 bg-[#A7C1A8] rounded-full animate-pulse delay-200" />
                </div>
              </div>

              <div className="mt-4 text-xs text-[#A7C1A8]/40 uppercase border-t border-[#A7C1A8]/20 pt-3 tracking-widest">
                Signal Time — {time}
              </div>
            </div>
          </motion.div>

          {/* Right Panel (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 backdrop-blur-lg bg-[#A7C1A8]/10 border border-[#A7C1A8]/50 rounded-xl p-6 shadow-[0_0_40px_#819A91]/20"
          >
            <div className="mb-6 text-[#EEEFE0] text-xl font-bold border-l-4 border-[#A7C1A8] pl-4 h-8">
              <Typewriter
                words={["Let's Work Together", 'Build Something Cool', 'Bring Ideas to Life']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#A7C1A8] mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-[#0f0f0f] text-[#EEEFE0] border border-[#819A91] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C1A8]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#A7C1A8] mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-[#0f0f0f] text-[#EEEFE0] border border-[#819A91] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C1A8]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#A7C1A8] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 bg-[#0f0f0f] text-[#EEEFE0] border border-[#819A91] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7C1A8]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full bg-[#A7C1A8] text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#CFE2D3] transition duration-300"
              >
                {submitted ? 'Message Sent ✅' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
