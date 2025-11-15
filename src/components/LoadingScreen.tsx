import { useEffect, useState } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.to(".preloader", {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onLoadComplete
        });
      }
    });

    timeline.to({}, {
      duration: 2,
      onUpdate: function() {
        setProgress(Math.round(this.progress() * 100));
      }
    });

    gsap.to(".loading-logo", {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => {
      timeline.kill();
    };
  }, [onLoadComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Logo/Name */}
      <div className="loading-logo relative z-10 mb-12">
        <h1 className="text-6xl md:text-8xl font-bold text-glow-primary">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Charitha
          </span>
        </h1>
      </div>

      {/* Progress bar container */}
      <div className="relative z-10 w-80 md:w-96">
        <div className="glass rounded-full h-2 overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out glow-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-muted-foreground text-sm tracking-wider">
          Loading {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
