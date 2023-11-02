
import Navbar from "./components/Navbar";
import HeroSection from "./components/herosection";
import AchievementsSection from "./components/achievementsection";
import ProjectsSection from "./components/ProjectSection";
import AboutSection from "./components/AboutMeSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <ProjectsSection />
        <AboutSection />
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}