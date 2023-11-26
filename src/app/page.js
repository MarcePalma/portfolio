
import Navbar from "./components/Navbar";
import AchievementsSection from "./components/achievementsection";
import ProjectsSection from "./components/ProjectSection";
import AboutSection from "./components/AboutMeSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/herosection";
import RootLayout from "./layout";
export default function Home() {
  return (
    <RootLayout>
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
    </RootLayout>
  );
}