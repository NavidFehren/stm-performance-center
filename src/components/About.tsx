import { Target, Users, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Leistungsorientiert",
    description: "Jedes Programm ist darauf ausgelegt, dein athletisches Potenzial durch wissenschaftlich fundierte Trainingsmethoden zu maximieren.",
  },
  {
    icon: Users,
    title: "Erfahrene Trainer",
    description: "Lerne von erfahrenen Kämpfern und zertifizierten Trainern mit jahrelanger Erfahrung.",
  },
  {
    icon: Trophy,
    title: "Bewährte Ergebnisse",
    description: "Unsere Athleten konkurrieren auf höchstem Niveau, von Amateur-Meisterschaften bis zu professionellen Veranstaltungen.",
  },
  {
    icon: Zap,
    title: "Vollständiges Training",
    description: "Von Schlägen bis Grappling, Kraft bis Kondition - alles was du brauchst unter einem Dach.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-display uppercase tracking-widest text-sm">Über uns</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              MEHR ALS EIN GYM.
              <span className="block gradient-text">EIN PERFORMANCE CENTER.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              STM Performance Center ist der Ort, an dem ernsthafte Athleten sich weiterentwickeln. Wir haben eine Trainingsumgebung geschaffen, die die Lücke zwischen traditionellen Kampfkünsten und moderner Sportwissenschaft schließt.
            </p>
            <p className="text-muted-foreground mb-8">
              Ob du zum ersten Mal auf die Matte trittst oder dich auf deinen nächsten Kampf vorbereitest - unser personalisierter Ansatz stellt sicher, dass du erstklassige Anleitung in einer unterstützenden, ego-freien Umgebung erhältst. Wir glauben daran, vollständige Athleten aufzubauen - stark, technisch und mental belastbar.
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
                  <div className="text-8xl md:text-9xl font-display font-bold gradient-text">800</div>
                  <div className="text-xl text-muted-foreground mt-2">Quadratmeter</div>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
                  <p className="text-muted-foreground mt-6 max-w-xs mx-auto">
                    Moderne Trainingsfläche für Kampfsport und Fitness in Sindelfingen.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
