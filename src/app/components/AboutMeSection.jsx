"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillItem from "./SkillItem";
import StarsParticles from "./Particles/StarsParticles";
import { ReactIcon, UTNIcon, HTMLIcon, CSSIcon, TailwindIcon, JavascriptIcon, TypeScriptIcon, NextJSIcon, NodeJSIcon, PrismaIcon, CertificationIcon, MySQLIcon, MongoDBIcon, Firebase } from "../utils/skills/constSkills";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <ul className="space-y-4 space-4-x">
          <SkillItem title="HTML" icon={<HTMLIcon />} />
          <SkillItem title="CSS" icon={<CSSIcon />} />
          <SkillItem title="Tailwind" icon={<TailwindIcon />} />
          <SkillItem title="JavaScript" icon={<JavascriptIcon />} />
          <SkillItem title="TypeScript" icon={<TypeScriptIcon />} />
          <SkillItem title="Firebase" icon={<Firebase />} />
        </ul>
        <ul className="space-y-4 space-4-x">
          <SkillItem title="React" icon={<ReactIcon />} />
          <SkillItem title="NextJS" icon={<NextJSIcon />} />
          <SkillItem title="NodeJs" icon={<NodeJSIcon />} />
          <SkillItem title="MySQL" icon={<MySQLIcon />} />
          <SkillItem title="Prisma" icon={<PrismaIcon />} />
          <SkillItem title="MongoDB" icon={<MongoDBIcon />} />
        </ul>
      </section>


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
            <UTNIcon />
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
            <CertificationIcon />
          }
        />
        <SkillItem
          title="Desarrollo WEB con NextJS"
          icon={
            <CertificationIcon />
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-10">
        <StarsParticles />
        <Image src="/images/about-section.webp" width={500} height={500} alt="landscape image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 z-index-100">
              About Me
            </span>
          </h2>
          <p className="text-base lg:text-lg">
            I&apos;m a passionate and creative 21-year-old web developer. My approach is simple: to turn ideas into digital experiences. I constantly seek exciting challenges.

            I love creating elegant and functional websites and applications that enhance people&apos;s lives. I believe that technology has the power to change the world, and I&apos;m always eager to learn new tools and technologies to stay up-to-date.
            <br />
            I&apos;m excited about what the future holds and I&apos;m always open to new opportunities and collaborations.

            Let&apos;s talk about how we can work together on your next project!

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