"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import StarsParticles from "./Particles/StarsParticles.jsx";
import { useTranslation } from "react-i18next"
import LanguageDependentTypeAnimation from "./LanguageDependentTypeAnimation.jsx";

export default function HeroSection() {
  const { t } = useTranslation("global");

  return (
    <section className="lg:py-16 relative overflow-hidden">
      <StarsParticles />
      <article className="grid grid-cols-1 sm:grid-cols-12 relative">
        <div className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 z-10">
              {t("herosection.greeting")}{" "}
            </span>
            <br />
            <LanguageDependentTypeAnimation
              sequence={[
                t("herosection.name"),
                1000,
                t("herosection.role"),
                1000,
                t("herosection.additionalRole"),
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {t("herosection.description")}
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 to-pink-600 bg-white hover-bg-slate-200 text-white"
            >
              {t("herosection.hireMe")}
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to pink-500 hover-bg-slate-800 text-white">
              <span className="block bg-[#121212] hover-bg-slate-800 rounded-full px-5 py-2">
                {t("herosection.downloadCV")}
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative bg-gradient-to-r from-[#a0708a] via-pink-600 bg-[#4A2FBD]">
            <Image
              src="/images/hero-image.webp"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </article>
    </section>
  );
}