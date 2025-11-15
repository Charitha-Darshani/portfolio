import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(".footer-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating particles animation
    gsap.to(".particle", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        each: 0.3,
        from: "random"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-section relative py-16 overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 -z-10">
        <div className="particle absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-30" />
        <div className="particle absolute top-1/2 left-1/3 w-3 h-3 bg-secondary rounded-full opacity-20" />
        <div className="particle absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full opacity-25" />
        <div className="particle absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary rounded-full opacity-20" />
        <div className="particle absolute bottom-1/3 left-1/2 w-2 h-2 bg-secondary rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6">
        <div className="footer-content text-center space-y-8">
          {/* Logo */}
          <div>
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-3xl font-bold text-glow-primary hover:scale-105 transition-transform inline-block"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Charitha Darshani
              </span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <p>© 2025 Charitha. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-1">
              Thank you for visiting! 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
