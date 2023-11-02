"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SpaceParticles from "./spaceParticles";
import SkillItem from "./SkillItem";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <SkillItem
          title="JavaScript"
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffec00"
              fill="#000"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
          }
        />
        <SkillItem
          title="React"
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00abfb"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
              <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
              <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
              <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
              <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
              <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
              <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
            </svg>
          }
        />
        <SkillItem
          title='NextJS'
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="#fff"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
              <path d="M15 12v-3" />
            </svg>
          }
        />
        <SkillItem
          title="NodeJs"
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00b341"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
              <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
            </svg>
          }
        />
        <SkillItem
          title="Bases De Datos"
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#597e8d"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
              <path d="M9 7h.01" />
            </svg>
          }
        />
        <SkillItem
          title="Prisma"
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#597e8d"
              fill="#fff"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4.186 16.202l3.615 5.313c.265 .39 .754 .57 1.215 .447l10.166 -2.718a1.086 1.086 0 0 0 .713 -1.511l-7.505 -15.483a.448 .448 0 0 0 -.787 -.033l-7.453 12.838a1.07 1.07 0 0 0 .037 1.147z" />
              <path d="M8.5 22l3.5 -20" />
            </svg>
          }
        />

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <SkillItem
          title="Universidad Tecnologica Nacional UTN FRMDP"
          icon={
            <svg
              width="32"
              height="32"
              enableBackground="new 0 0 595.3 699.4"
              imageRendering="optimizeQuality"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              viewBox="0 0 595.3 699.4"
            >
              <path
                clip-rule="evenodd"
                d="m246.6 0h102v190.8c80.8-22.4 140.4-96.7 140.4-184.4h106.3c0 146.5-106.8 268.9-246.6 293.2v4.4h233.9v104.2h-214.4c130 31.8 227 149.5 227 289.1h-106.2c0-87.7-59.6-162-140.3-184.4v186.5h-102v-186.5c-80.7 22.4-140.3 96.7-140.3 184.4h-106.4c0-139.6 97-257.3 227-289.1h-214.2v-104.2h233.9v-4.4c-139.9-24.3-246.7-146.7-246.7-293.2h106.3c0 87.7 59.6 162 140.3 184.4z"
                fill-rule="evenodd"
              />
            </svg>
          }
        />
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <SkillItem
          title="Iniciacion al Desarrollo WEB con JavaScript"
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
              <path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
            </svg>
          }
        />
        <SkillItem
          title="Desarrollo WEB con NextJS"
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
              <path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
            </svg>
          }
        />
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white relative" id="about">
      <SpaceParticles />
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-10">
        <Image src="/images/about-section.webp" width={500} height={500} alt="landscape image" />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 z-index-100">
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg">
            I'm a passionate and creative 21-year-old web developer. My approach is simple: to turn ideas into digital experiences. I constantly seek exciting challenges.

            I love creating elegant and functional websites and applications that enhance people's lives. I believe that technology has the power to change the world, and I'm always eager to learn new tools and technologies to stay up-to-date.
            <br />
            I'm excited about what the future holds and I'm always open to new opportunities and collaborations.

            Let's talk about how we can work together on your next project!
          </p>
          <div className="flex flex-row justify-start mt-8 z-20">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};