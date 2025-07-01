// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full  z-50 transition-all duration-300  md:py-1${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-sky-500"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-xl md:max-w-7xl  px-6 py-4 flex justify-between mx-auto items-center">
        <div className="text-2xl font-bold text-sky-600 tracking-wide">
          MyPortfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium font-sans tracking-wide">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative group transition-all duration-300 hover:text-sky-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-6 pb-6 flex flex-col space-y-4 bg-white shadow-lg font-medium text-gray-800 font-sans tracking-wide"
        >
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-sky-600"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
