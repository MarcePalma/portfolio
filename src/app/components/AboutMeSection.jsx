"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillItem from "./SkillItem";
import StarsParticles from "./Particles/StarsParticles";
import { ReactIcon, UTNIcon, HTMLIcon, CSSIcon, TailwindIcon, JavascriptIcon, TypeScriptIcon, NextJSIcon, NodeJSIcon, PrismaIcon, CertificationIcon, MySQLIcon, MongoDBIcon, Firebase } from "../utils/skills/constSkills";
import { useTranslation } from "react-i18next";




export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation("global", { keySeparator: false });
  console.log("Translated title:", t("aboutmesection.title"));
  console.log("Translated about me description:", t("aboutmesection.education"));


  const TAB_DATA = [
    {
      title: t("aboutmesection.skills"),
      id: "skills",
      content: (
        <section className="grid grid-cols-2 gap-4">
          <ul className="space-y-4">
            <SkillItem title="HTML" icon={<HTMLIcon />} />
            <SkillItem title="CSS" icon={<CSSIcon />} />
            <SkillItem title="Tailwind" icon={<TailwindIcon />} />
            <SkillItem title="JavaScript" icon={<JavascriptIcon />} />
            <SkillItem title="TypeScript" icon={<TypeScriptIcon />} />
            <SkillItem title="Firebase" icon={<Firebase />} />
          </ul>
          <ul className="space-y-4">
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
      title: t("aboutmesection.education"),
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <SkillItem
            title={t("aboutmesection.utntitle")}
            icon={
              <UTNIcon />
            }
          />
        </ul>
      ),
    },
    {
      title: t("aboutmesection.certifications"),
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <SkillItem
            title={t("aboutmesection.webdevelopmentinitiation")}
            icon={
              <CertificationIcon />
            }
          />
          <SkillItem
            title={t("aboutmesection.nextjswebdevelopment")}
            icon={
              <CertificationIcon />
            }
          />
        </ul>
      ),
    },
  ];

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
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full" style={{ zIndex: 1 }}>

          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 z-index-100">
              {t("aboutmesection.title")}

            </span>
          </h2>
          <p className="text-base lg:text-lg">
            {t("aboutmesection.aboutmedescription")}

            <div className="flex flex-row justify-start mt-8 z-0">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
                translationKey="aboutmesection.skills"
              />
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
                translationKey="aboutmesection.education"
              />
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
                translationKey="aboutmesection.certifications"
              />
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};
