"use client"
import Navbar from "./components/Navbar";
import AchievementsSection from "./components/achievementsection";
import ProjectsSection from "./components/ProjectSection";
import AboutSection from "./components/AboutMeSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/herosection";
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';
import i18n from "i18next";

i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    resources: {
      es: {
        global: require('../translations/es/global.json'),
      },
      en: {
        global: require('../translations/en/global.json'),
      },
    },
    lng: 'en',
  });

export default function Home() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <section className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <ProjectsSection />
          <AboutSection />
          <EmailSection />
        </section>
        <Footer />
      </main>
    </I18nextProvider>
  );
}
