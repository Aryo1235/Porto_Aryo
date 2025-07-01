import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profileImg from "/about_us.jpg";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section id="about" className="px-4" ref={ref}>
      <div className="mx-auto px-4 py-6 flex flex-col-reverse md:flex-row gap-10 items-center md:items-center justify-between max-w-5xl">
        {/* H3 + Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 text-lg max-w-[500px] flex flex-col text-center md:text-left"
        >
          <h3 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-4">
            About Me
          </h3>
          <p className="text-justify">
            I am a frontend developer with a passion for building user-friendly
            and responsive web application. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas possimus sint enim rem earum
            recusandae adipisci molestiae. Totam quam vitae quibusdam aliquid,
            facilis distinctio cupiditate! Excepturi fugiat obcaecati expedita
            aperiam!
          </p>
        </motion.div>

        {/* Gambar */}
        <motion.img
          src={profileImg}
          alt="Aryo"
          className="w-60 sm:w-60 md:w-72 lg:w-80 aspect-square rounded-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        />
      </div>
    </section>
  );
}
