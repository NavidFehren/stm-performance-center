import { Shield, Swords, Target, Dumbbell, Baby, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Swords,
    title: "MMA",
    level: "All Levels",
    duration: "60-90 min",
    frequency: "5x/week",
    description: "Complete mixed martial arts training combining striking, wrestling, and submissions into a cohesive fighting system.",
    benefits: ["Full-body conditioning", "Self-defense skills", "Competition prep"],
  },
  {
    icon: Shield,
    title: "Brazilian Jiu-Jitsu",
    level: "All Levels",
    duration: "60 min",
    frequency: "6x/week",
    description: "Master the art of ground fighting with gi and no-gi classes. Perfect for self-defense and sport competition.",
    benefits: ["Technique-focused", "Problem-solving", "Belt progression"],
  },
  {
    icon: Target,
    title: "Striking Arts",
    level: "All Levels",
    duration: "60 min",
    frequency: "5x/week",
    description: "Boxing, Kickboxing, and Muay Thai. Develop devastating stand-up skills with world-class striking coaches.",
    benefits: ["Cardio endurance", "Power development", "Defensive skills"],
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    level: "All Levels",
    duration: "45-60 min",
    frequency: "Daily",
    description: "Performance-focused training to build fight-ready strength, explosive power, and unbreakable conditioning.",
    benefits: ["Functional strength", "Athletic performance", "Injury prevention"],
  },
  {
    icon: Baby,
    title: "Youth MMA",
    level: "Ages 6-16",
    duration: "45-60 min",
    frequency: "3x/week",
    description: "Safe, fun, and educational martial arts for kids. Build confidence, discipline, and physical fitness.",
    benefits: ["Confidence building", "Anti-bullying", "Fitness habits"],
  },
  {
    icon: UserCheck,
    title: "Personal Training",
    level: "Customized",
    duration: "60 min",
    frequency: "Flexible",
    description: "One-on-one coaching tailored to your specific goals. Accelerate your progress with personalized attention.",
    benefits: ["Custom programs", "Rapid improvement", "Flexible scheduling"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Training Programs</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            FIND YOUR <span className="gradient-text">DISCIPLINE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From complete beginners to professional fighters, we have a program designed for your goals and experience level.
          </p>
        </div>
        
        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative bg-card rounded-xl border border-border p-6 card-hover overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Title & Meta */}
                <h3 className="text-xl font-display font-bold mb-2">{program.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {program.level}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {program.duration}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {program.frequency}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                
                {/* Benefits */}
                <ul className="space-y-2">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View Full Class Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
