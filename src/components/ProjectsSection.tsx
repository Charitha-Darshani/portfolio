import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "@phosphor-icons/react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");
    
    cards.forEach((card: any, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: "AloeGuard",
      description: "AI-Powered Aloe Plant Disease Detection using advanced machine learning",
      image: project1,
      tech: ["AI", "React", "ML", "Mobile"]
    },
    {
      title: "Arduino IoT Project",
      description: "Revolutionizing connectivity through innovative IoT solutions",
      image: project2,
      tech: ["IoT", "Arduino", "Hardware"]
    },
    {
      title: "Travel Destination App",
      description: "MERN stack travel application with beautiful destinations",
      image: project3,
      tech: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "Plant E-Commerce",
      description: "Fresh Plant marketplace with seamless user experience",
      image: project4,
      tech: ["React", "E-Commerce", "UI/UX"]
    },
    {
      title: "Resume Builder",
      description: "Modern resume builder with multiple themes and PDF export",
      image: project5,
      tech: ["React", "PDF", "Design"]
    },
    {
      title: "Fitness Tracker",
      description: "Comprehensive fitness tracking mobile application",
      image: project6,
      tech: ["Mobile", "React Native", "Health"]
    }
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={scrollContainerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass group hover:glass-strong rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <ArrowUpRight size={48} weight="light" className="text-white transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs rounded-full glass border border-primary/30 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
