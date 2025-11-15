import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="relative">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
