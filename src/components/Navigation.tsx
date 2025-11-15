import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { gsap } from "gsap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(".mobile-menu", 
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? "glass-strong py-4" : "py-6"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-glow-primary hover:scale-105 transition-transform"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Charitha
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button 
            onClick={() => scrollToSection("contact")}
            className="glass px-6 py-2 rounded-full border border-primary/50 hover:bg-primary/10 hover:glow-primary transition-all duration-300"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
        >
          {isOpen ? <X size={28} weight="light" /> : <List size={28} weight="light" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu fixed top-0 right-0 bottom-0 w-full md:hidden glass-strong backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl text-foreground/80 hover:text-primary transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("contact")}
              className="glass px-8 py-3 rounded-full border border-primary/50 hover:bg-primary/10 hover:glow-primary transition-all duration-300 text-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
