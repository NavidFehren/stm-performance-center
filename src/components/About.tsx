import { Target, Users, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Performance-Focused",
    description: "Every program is designed to maximize your athletic potential through science-backed training methods.",
  },
  {
    icon: Users,
    title: "Expert Coaching",
    description: "Learn from professional fighters and certified coaches with decades of combined experience.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Our athletes compete at the highest levels, from amateur championships to professional promotions.",
  },
  {
    icon: Zap,
    title: "Complete Training",
    description: "From striking to grappling, strength to conditioning — everything you need under one roof.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-display uppercase tracking-widest text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              MORE THAN A GYM.
              <span className="block gradient-text">A PERFORMANCE CENTER.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              APEX MMA is where serious athletes come to evolve. Founded by professional fighters and performance coaches, we've built a training environment that bridges the gap between traditional martial arts and modern sports science.
            </p>
            <p className="text-muted-foreground mb-8">
              Whether you're stepping onto the mats for the first time or preparing for your next fight, our personalized approach ensures you'll receive world-class instruction in a supportive, ego-free environment. We believe in building complete athletes — strong, technical, and mentally resilient.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden gradient-border bg-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl md:text-9xl font-display font-bold gradient-text">10</div>
                  <div className="text-xl text-muted-foreground mt-2">Years of Excellence</div>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
                  <p className="text-muted-foreground mt-6 max-w-xs mx-auto">
                    A decade of developing champions and transforming lives through martial arts.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
