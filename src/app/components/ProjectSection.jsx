"use client";
import React, {} from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "OkToCall",
    description: "Spotify Api Project, ReactJS",
    image: "/images/projects/13.png",
    gitUrl: "https://github.com/MarcePalma/musicplayer",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weather App",
    description: "weather api project, Javascript Vanilla",
    image: "/images/projects/2.png",
    tag: ["All",],
    gitUrl: "https://github.com/MarcePalma/Weather-app",
    previewUrl: "https://weather-app-marcepalma.vercel.app/",
  },
  {
    id: 3,
    title: "Blog",
    description: "E-commerce App NextJs",
    image: "/images/projects/3.png",
    gitUrl: "/",
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

const ProjectsSection = () => {

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate= "animate"
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

export default ProjectsSection;