import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, EnvelopeSimple, PaperPlaneTilt } from "@phosphor-icons/react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    timeline
      .fromTo(".contact-form",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(".social-icon",
        { opacity: 0, scale: 0, rotate: -180 },
        { 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_3nmj551',
        'template_t81e1bq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '1rUiKKN5dvDmci5gS'
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });

      // Pulse animation on submit
      gsap.to(".submit-btn", {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="contact-section relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Send me a message or connect via linkedin/email below!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form glass-strong rounded-2xl p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full glass rounded-lg px-4 py-3 bg-background/50 border border-border focus:border-primary focus:glow-primary outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full glass rounded-lg px-4 py-3 bg-background/50 border border-border focus:border-primary focus:glow-primary outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full glass rounded-lg px-4 py-3 bg-background/50 border border-border focus:border-primary focus:glow-primary outline-none transition-all duration-300 resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="submit-btn w-full glass px-8 py-4 rounded-full border-2 border-primary/50 hover:border-primary bg-gradient-to-r from-primary/20 to-secondary/20 hover:glow-primary transition-all duration-300 font-semibold flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
              <PaperPlaneTilt size={20} weight="light" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/Charitha001-d"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon glass p-4 rounded-full hover:glow-primary hover:border-primary/50 border border-border transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <GithubLogo size={28} weight="light" className="text-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="www.linkedin.com/in/charitha-darshani-926387318"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon glass p-4 rounded-full hover:glow-secondary hover:border-secondary/50 border border-border transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <LinkedinLogo size={28} weight="light" className="text-foreground group-hover:text-secondary transition-colors" />
            </a>

            <a
              href="darshanicharitha18@gmail.com"
              className="social-icon glass p-4 rounded-full hover:glow-accent hover:border-accent/50 border border-border transition-all duration-300 group"
              aria-label="Email Contact"
            >
              <EnvelopeSimple size={28} weight="light" className="text-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
