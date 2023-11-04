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
    gitUrl: "/",
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
    description: "Project",
    image: "/images/projects/weather-app.webp",
    gitUrl: "https://weather-app-marcepalma.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Recipes App",
    description: "Food Recipes app, NextJs",
    image: "/images/projects/4.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Chat",
    description: "Chat app, NextJs",
    image: "/images/projects/5.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Music Player",
    description: 'music player with spotify api',
    image: "/images/projects/1.png",
    gitUrl: "/",
    previewUrl: "/",
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

