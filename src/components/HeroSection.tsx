import { useEffect } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "@phosphor-icons/react";

const HeroSection = () => {
  useEffect(() => {
    // Floating background orbs
    gsap.to(".float-orb-1", {
      y: -30,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".float-orb-2", {
      y: 30,
      x: -20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/particles-pq0K9pffojais3hBe97HiVFZ/' 
          frameBorder='0' 
          className="w-full h-full"
          title="3D Background Animation"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Floating background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="float-orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="float-orb-2 absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown size={32} weight="light" className="text-primary/70 hover:text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
