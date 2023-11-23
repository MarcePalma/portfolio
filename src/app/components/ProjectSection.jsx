"use client";
import React, { } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "OkToCall",
    description: "NextJS TypeScript Tailwind",
    image: "/images/projects/OkToCall.webp",
    gitUrl: "https://github.com/OktoCall/oktocall",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MusicPlayer",
    description: "React CSS Spotify",
    image: "/images/projects/music-player.webp",
    gitUrl: "https://github.com/MarcePalma/musicplayer",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Weather App",
    description: "HTML CSS JavaScript",
    image: "/images/projects/weather-app.webp",
    gitUrl: "https://weather-app-marcepalma.vercel.app/",
    previewUrl: "https://weatherapp32.vercel.app/",
  },
  {
    id: 4,
    title: "Canvas Game",
    description: "HTML CSS JavaScript",
    image: "/images/projects/Canvas-game.webp",
    gitUrl: "https://github.com/MarcePalma/Canvas-Game",
    previewUrl: "https://canvas-game-lilac.vercel.app/",
  },
  {
    id: 5,
    title: "Chat",
    description: "NextJS TypeScript Tailwind",
    image: "/images/projects/5.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Blog",
    description: "NextJS TypeScript Tailwind",
    image: "/images/projects/Blog.webp",
    gitUrl: "https://github.com/MarcePalma/blog",
    previewUrl: "https://blog-eight-ruddy-60.vercel.app/",
  },
];

export default function ProjectsSection() {

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 z-index-100">
          My Projects
        </span>

      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

