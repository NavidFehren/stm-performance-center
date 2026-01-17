import { Maximize2, Octagon, LayoutGrid, Users, Trophy, Flame, Coffee, Baby } from "lucide-react";

const features = [
  {
    icon: Maximize2,
    title: "800 m² Trainingsfläche",
    description: "Moderne Trainingsfläche für Kampfsport und Fitness in Sindelfingen.",
  },
  {
    icon: Octagon,
    title: "8x8m MMA-Cage",
    description: "Eigener Wettkampf-Cage für authentisches MMA-Training.",
  },
  {
    icon: LayoutGrid,
    title: "2 Trainingsflächen",
    description: "300qm + 100qm für paralleles Training verschiedener Disziplinen.",
  },
  {
    icon: Users,
    title: "6+ Trainer",
    description: "Zertifizierte Trainer für Boxen, Thaiboxen, BJJ, MMA und mehr.",
  },
  {
    icon: Trophy,
    title: "Eigene Fight-Events",
    description: "MMA, Boxen, K1 und BJJ Veranstaltungen direkt bei uns.",
  },
  {
    icon: Flame,
    title: "Saunabereich",
    description: "Eigener Saunabereich mit Lounge zur Regeneration.",
  },
  {
    icon: Coffee,
    title: "Eltern-Lounge",
    description: "Theken-Lounge direkt neben der Trainingsfläche für Eltern.",
  },
  {
    icon: Baby,
    title: "Ab 3 Jahren",
    description: "Programme für Kinder ab dem Mini Club bis zum Erwachsenentraining.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <span className="text-primary font-display uppercase tracking-widest text-sm">Über uns</span>
        <h2 className="font-display font-bold mt-4 mb-6">
          <span className="block text-2xl md:text-3xl text-muted-foreground">MEHR ALS EIN GYM.</span>
          <span className="block text-4xl md:text-6xl gradient-text">EIN PERFORMANCE CENTER.</span>
        </h2>
        <p className="text-muted-foreground mb-6">
          STM Performance Center ist der Ort, an dem ernsthafte Athleten sich weiterentwickeln. Wir haben eine Trainingsumgebung geschaffen, die die Lücke zwischen traditionellen Kampfkünsten und moderner Sportwissenschaft schließt.
        </p>
        <p className="text-muted-foreground mb-8">
          Ob du zum ersten Mal auf die Matte trittst oder dich auf deinen nächsten Kampf vorbereitest - unser personalisierter Ansatz stellt sicher, dass du erstklassige Anleitung in einer unterstützenden, ego-freien Umgebung erhältst. Wir glauben daran, vollständige Athleten aufzubauen - stark, technisch und mental belastbar.
        </p>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
};

export default About;
