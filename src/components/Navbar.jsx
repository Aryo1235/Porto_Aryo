// src/components/Navbar.jsx
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-sky-100 w-full  py-6 px-8 flex justify-end items-center "
    >
      
      <ul className="hidden font-semibold md:flex space-x-6 font-medium text-gray-700 dark:text-gray-200">
        <li><a href="#about" className="hover:text-sky-500">About</a></li>
        <li><a href="#skills" className="hover:text-sky-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-sky-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-sky-500">Contact</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;