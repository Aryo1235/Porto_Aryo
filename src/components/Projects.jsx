// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Moviesite",
    desc: "A web application built with React.js and Tailwind CSS that leverages the TMDB API to display movie data. It features an AI-powered chatbot using Gemini AI to provide personalized movie recommendations. The app offers a modern UI, responsive design, and seamless user experience for discovering and exploring movies.",
    image: "/project1.png",
    url: "https://coba-alpha-weld.vercel.app/",
  },
  {
    title: "Travel Wise",
    desc: "Travel Wise adalah aplikasi web perencanaan perjalanan yang memungkinkan pengguna untuk mencari, menemukan, dan memesan paket wisata dengan mudah dan interaktif. Proyek ini dikembangkan dalam program MSIB secara kolaboratif bersama tim UI/UX, tim Backend (Golang), dan tim Frontend. Pada sisi frontend, aplikasi ini dibangun menggunakan React.js, Tailwind CSS untuk styling, Axios untuk pengambilan data dari API, serta integrasi Chatbot Gemini AI untuk membantu pengguna secara real-time.",
    image: "/Travel_wise.jpg",
    url: "https://travelwise-ochre.vercel.app/",
  },
  {
    title: "Project 3",
    desc: "A sample project highlighting integration with third-party APIs and dynamic content rendering. Focused on performance and scalability.",
    url: "https://project3.vercel.app",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-12 px-4 md:px-12 bg-white"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
    >
      <h3 className="text-2xl font-bold mb-8 text-sky-600">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
