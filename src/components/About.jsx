// src/components/About.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profileImg from '/about_us.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id="about"
      className="py-12 px-4 md:px-12 grid md:grid-cols-2 items-center"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mt-2 mb-5 text-sky-600 dark:text-sky-400">About Me</h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I am a frontend developer with a passion for building user-friendly and responsive web application Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas possimus sint enim rem earum recusandae adipisci molestiae. Totam quam vitae quibusdam aliquid, facilis distinctio cupiditate! Excepturi fugiat obcaecati expedita aperiam!.
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center mt-5 md:mt-0 py-3"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={profileImg}
          alt="Aryo"
          className="rounded-full w-80 h-80 object-cover border-2 border-sky-400 shadow-lg"
        />
      </motion.div>

    </section>
  );
}
