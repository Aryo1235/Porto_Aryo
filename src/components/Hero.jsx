// src/components/Hero.jsx
import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // amount bisa diubah sesuai kebutuhan

  return (
    <section
      id="hero"
      ref={ref}
      className="text-center md:text-left mx-auto bg-sky-100 py-8 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          key="hero-content"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="py-10 text-5xl font-bold">
            <span className="text-sky-500">Hi, I’m </span>Aryo
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            A Front-End Developer
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold">
            based in Indonesia
          </h2>
          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-black transition duration-300 grayscale hover:grayscale-0"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-blue-600 transition duration-300 grayscale hover:grayscale-0"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-pink-500 transition duration-300 grayscale hover:grayscale-0"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-blue-700 transition duration-300 grayscale hover:grayscale-0"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/6285772476716"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-green-500 transition duration-300 grayscale hover:grayscale-0"
            >
              <FaWhatsapp />
            </a>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
