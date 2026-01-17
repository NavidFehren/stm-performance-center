import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_right_-5rem] md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlays */}
      {/* Mobile: radiales Overlay für zentrierten Text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/70 via-background/50 to-background/20 md:hidden" />
      {/* Desktop: horizontales Overlay */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-background via-background/80 to-transparent" />
      {/* Vertikales Overlay für beide */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      {/* Animated accent line - Desktop */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse hidden md:block" />
      
      {/* Glow-Effekt hinter Headline - Mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-64 bg-primary/10 blur-[100px] rounded-full md:hidden" />
      
      {/* Floating ambient lights */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-500" />
      
      {/* Vignette für Fokus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_hsl(var(--background))_100%)] opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center lg:text-left">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Jetzt geöffnet — Professionelles Training in Sindelfingen</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-none mb-6 animate-fade-up animation-delay-100">
            TRAINIERE WIE EIN
            <span className="block gradient-text drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">CHAMPION</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up animation-delay-200">
            Professionelles Kampfsport-Training trifft auf erstklassiges Performance-Coaching. Transformiere deinen Körper, schärfe deinen Geist und entfalte dein volles Potenzial.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contact">Kostenloses Probetraining</a>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#schedule">Trainingsplan ansehen</a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10 animate-fade-up animation-delay-400">
            {[
              { value: "6", label: "Erfahrene Trainer" },
              { value: "800", label: "Quadratmeter" },
              { value: "10+", label: "Kurse" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-3 sm:p-4 rounded-xl bg-background/30 backdrop-blur-md border border-border/40">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scrollen</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
