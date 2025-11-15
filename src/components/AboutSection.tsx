import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Brain, PaintBrush, FileHtml, FileCss, FilePy, DownloadSimple } from "@phosphor-icons/react";
import profileImage from "@/assets/profile.jpeg";
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
    timeline.fromTo(".hero-title", {
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    }, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out"
    }).fromTo(".hero-subtitle", {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6").fromTo(".hero-cta", {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4").fromTo(".about-image", {
      opacity: 0,
      x: -50,
      filter: "blur(10px)"
    }, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out"
    }, "-=0.5").fromTo(".about-content", {
      opacity: 0,
      x: 50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6").fromTo(".skill-icon", {
      opacity: 0,
      scale: 0,
      rotate: -180
    }, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.4");

    // Floating CTA pulse
    gsap.to(".hero-cta", {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const skills = [{
    icon: Code,
    name: "React",
    color: "text-primary"
  }, {
    icon: Brain,
    name: "AI/ML",
    color: "text-secondary"
  }, {
    icon: PaintBrush,
    name: "UI/UX",
    color: "text-accent"
  }, {
    icon: FileHtml,
    name: "HTML",
    color: "text-primary"
  }, {
    icon: FileCss,
    name: "CSS",
    color: "text-secondary"
  }, {
    icon: FilePy,
    name: "Python",
    color: "text-accent"
  }];
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="about" className="about-section relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Hero Introduction */}
        <div className="text-center mb-20 max-w-4xl mx-auto space-y-8">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow-primary">
              Charitha
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-light">an IT undergraduate eager to explore opportunities in front-end development, UI/UX design, AI/ML, quality assurance, and project management. I’m driven by curiosity, teamwork, and the desire to create meaningful, user-focused solutions that bridge innovation and real-world needs.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button onClick={scrollToProjects} className="hero-cta glass-strong px-8 py-4 rounded-full border-2 border-primary/50 hover:border-primary bg-gradient-to-r from-primary/20 to-secondary/20 hover:glow-primary transition-all duration-300 text-lg font-semibold">
              View My Work
            </button>
            <a 
              href="/Charitha_Darshani_CV.pdf" 
              download="Charitha_Darshani_CV.pdf"
              className="glass-strong px-8 py-4 rounded-full border border-border hover:border-primary/50 hover:glow-primary transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              <DownloadSimple size={20} weight="bold" />
              Download CV
            </a>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth"
          })} className="glass-strong px-8 py-4 rounded-full border border-border hover:border-accent/50 hover:glow-accent transition-all duration-300 text-lg">
              Contact Me
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Image */}
          <div className="about-image relative group">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative glass-strong rounded-full p-2 overflow-hidden">
                <img src={profileImage} alt="Charitha - Full Stack Developer" className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse-glow" style={{
              animationDelay: "1s"
            }} />
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">I’m an enthusiastic and dedicated IT undergraduate seeking an internship opportunity to gain practical experience and apply my academic knowledge in real-world projects. My interests include front-end development, UI/UX design, artificial intelligence and machine learning, software quality assurance, and project management.</p>

            <p className="text-lg text-muted-foreground leading-relaxed">I enjoy designing user-centered interfaces, exploring innovative solutions, and contributing to efficient and reliable systems. I’m eager to collaborate with professionals, learn from industry practices, and continue developing both my technical and soft skills to grow into a well-rounded IT professional.</p>

            {/* Skills Grid */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground/90">Core Skills</h3>
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => <div key={index} className="skill-icon glass group hover:glass-strong rounded-2xl p-6 flex flex-col items-center gap-3 hover:glow-primary transition-all duration-300 cursor-pointer">
                    <skill.icon size={48} weight="light" className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;