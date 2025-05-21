// src/components/Skills.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact,
  FaCode,
  FaGithub,
  FaJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiVite } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-sky-500 text-4xl" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
 
  { name: 'Vite', icon: <SiVite className="text-purple-500 text-4xl" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-600 text-4xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white text-4xl" /> },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Gandakan icon agar animasi loop terlihat mulus
  const repeatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-12 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h3 className="text-3xl text-sky-500 font-semibold  text-gray-800 dark:text-white mb-12">
          Skills
        </h3>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 min-w-max" // tambahkan min-w-max di sini
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: 'linear',
            }}
          >
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className="w-24 h-24 mb-1 flex items-center justify-center text-3xl bg-gray-100 dark:bg-gray-800 rounded-full shadow hover:shadow-md transition"
                title={skill.name}
              >
                {skill.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
