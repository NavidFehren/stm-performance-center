import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      {/* Animated accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center lg:text-left">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Now Open — Limited Founding Memberships</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-none mb-6 animate-fade-up animation-delay-100">
            TRAIN LIKE A
            <span className="block gradient-text">CHAMPION</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up animation-delay-200">
            World-class MMA training meets elite performance coaching. Transform your body, sharpen your mind, and unleash your full potential.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              Book Free Trial
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#schedule">View Schedule</a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-up animation-delay-400">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Expert Coaches</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Classes Weekly</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">Members Strong</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
