"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "../utils/skills/constSkills";
import { useTranslation } from "react-i18next";

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
    description: "HTML CSS JavaScript API",
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
    description: "NextJS TypeScript Tailwind Prisma",
    image: "/images/projects/5.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Blog",
    description: "NextJS TypeScript Tailwind Prisma",
    image: "/images/projects/Blog.webp",
    gitUrl: "https://github.com/MarcePalma/blog",
    previewUrl: "https://blog-eight-ruddy-60.vercel.app/",
  },
  {
    id: 7,
    title: "Tienda Shopix",
    description: "NextJS TypeScript Tailwind Prisma",
    image: "/images/projects/Shopix.webp",
    gitUrl: "https://github.com/MarcePalma/e-commerce-semiparcial",
    previewUrl: "https://e-commerce-semiparcial.vercel.app/",
  }
];

export default function ProjectsSection() {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const projectsPerPage = 6;
  const { t } = useTranslation("global");

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleNextClick = () => {
    const nextPosition = carouselPosition + projectsPerPage;
    if (nextPosition < projectsData.length) {
      setCarouselPosition(nextPosition);
    }
  };

  const handlePrevClick = () => {
    const prevPosition = carouselPosition - projectsPerPage;
    if (prevPosition >= 0) {
      setCarouselPosition(prevPosition);
    }
  };

  const visibleProjects = projectsData.slice(
    carouselPosition,
    carouselPosition + projectsPerPage
  );

  return (
    <section id="projects" className="relative">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 z-index-100">
        {t("projectsection.title")}
        </span>
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
        {visibleProjects.map((project, index) => (
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
        <div className="absolute top-1/2 transform -translate-y-1/2 left-[-2rem]">
          {carouselPosition > 0 && (
            <button onClick={handlePrevClick}>
              <ChevronLeftIcon className="h-8 w-8" />
            </button>
          )}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-[-4rem]">
          {carouselPosition + projectsPerPage < projectsData.length && (
            <button onClick={handleNextClick}>
              <ChevronRightIcon className="h-20  w-20" />
            </button>
          )}
        </div>
      </ul>
    </section>
  );
}