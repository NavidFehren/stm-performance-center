import { Shield, Swords, Target, Dumbbell, Baby, UserCheck, Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Swords,
    title: "MMA",
    level: "Alle Level",
    duration: "60-90 min",
    frequency: "Mehrmals/Woche",
    description: "Vollständiges Mixed Martial Arts Training, das Schlag-, Ringer- und Submission-Techniken zu einem kohärenten Kampfsystem kombiniert.",
    benefits: ["Ganzkörper-Konditionierung", "Selbstverteidigung", "Wettkampfvorbereitung"],
  },
  {
    icon: Shield,
    title: "BJJ / Nogi",
    level: "Alle Level",
    duration: "60 min",
    frequency: "Mehrmals/Woche",
    description: "Meistere die Kunst des Bodenkampfes mit Gi- und No-Gi-Klassen. Perfekt für Selbstverteidigung und Sportwettkämpfe.",
    benefits: ["Technikfokussiert", "Problemlösung", "Gurt-Fortschritt"],
  },
  {
    icon: Target,
    title: "Boxen & Thai-Boxen / K1",
    level: "Alle Level",
    duration: "60 min",
    frequency: "Mehrmals/Woche",
    description: "Boxen, Kickboxen und Muay Thai. Entwickle verheerende Stand-Up-Fähigkeiten mit erstklassigen Schlag-Trainern.",
    benefits: ["Cardio-Ausdauer", "Kraftentwicklung", "Defensive Fähigkeiten"],
  },
  {
    icon: Dumbbell,
    title: "Kraftausdauer",
    level: "Alle Level",
    duration: "45-60 min",
    frequency: "Mehrmals/Woche",
    description: "Leistungsorientiertes Training zur Entwicklung kampfbereiter Kraft, explosiver Power und unzerbrechlicher Kondition.",
    benefits: ["Funktionale Kraft", "Athletische Leistung", "Verletzungsprävention"],
  },
  {
    icon: Baby,
    title: "Mini Club",
    level: "3-6 Jahre",
    duration: "45-60 min",
    frequency: "Mehrmals/Woche",
    description: "Sicheres, spaßiges und lehrreiches Kampfsport-Training für die Kleinsten. Baue Selbstvertrauen, Disziplin und körperliche Fitness auf.",
    benefits: ["Selbstvertrauen", "Disziplin", "Fitness-Gewohnheiten"],
  },
  {
    icon: Users,
    title: "Kids MMA",
    level: "7-11 Jahre",
    duration: "45-60 min",
    frequency: "Mehrmals/Woche",
    description: "Altersgerechtes MMA-Training für Kinder. Entwickle Kampfsport-Fähigkeiten in einer sicheren und unterstützenden Umgebung.",
    benefits: ["Selbstverteidigung", "Teamwork", "Fitness"],
  },
  {
    icon: UserCheck,
    title: "Youth MMA",
    level: "12-16 Jahre",
    duration: "60 min",
    frequency: "Mehrmals/Woche",
    description: "Fortgeschrittenes MMA-Training für Jugendliche. Vorbereitung auf Wettkämpfe und Entwicklung von Führungsqualitäten.",
    benefits: ["Wettkampfvorbereitung", "Führung", "Athletische Entwicklung"],
  },
  {
    icon: Heart,
    title: "Senioren Club",
    level: "Alle Level",
    duration: "45-60 min",
    frequency: "Mehrmals/Woche",
    description: "Speziell für Senioren entwickeltes Training, das Fitness, Beweglichkeit und Wohlbefinden fördert.",
    benefits: ["Beweglichkeit", "Gesundheit", "Gemeinschaft"],
  },
  {
    icon: Sparkles,
    title: "Yoga",
    level: "Alle Level",
    duration: "60 min",
    frequency: "Wöchentlich",
    description: "Yoga-Klassen zur Verbesserung von Flexibilität, Balance und mentaler Klarheit. Perfekt als Ergänzung zum Kampfsport-Training.",
    benefits: ["Flexibilität", "Entspannung", "Körperbewusstsein"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Trainingsprogramme</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            FINDE DEINE <span className="gradient-text">DISCIPLIN</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Von kompletten Anfängern bis zu professionellen Kämpfern - wir haben ein Programm für deine Ziele und dein Erfahrungsniveau.
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
            Vollständigen Trainingsplan ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
