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
        <h3 className="text-3xl font-bold mb-4 text-sky-600 dark:text-sky-400">About Me</h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I am a frontend developer with a passion for building user-friendly and responsive web applications. I enjoy working with modern technologies and continuously learning new skills Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique minus perferendis voluptatibus, aliquam laudantium eum velit magnam! Quae, dicta?.
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center mt-6 md:mt-0 py-3"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={profileImg}
          alt="Aryo"
          className="rounded-full w-64 h-64 object-cover border-2 border-sky-400 shadow-lg"
        />
      </motion.div>

    </section>
  );
}
