import { Instagram, Award, Crown } from "lucide-react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

const headCoach = {
  name: "Anatolij",
  role: "Head Coach — Kraftausdauer, Boxen, MMA, BJJ",
  image: coach1,
  bio: "Vielseitiger Trainer mit Expertise in Kraftausdauer, Boxen, MMA und BJJ. Spezialisiert auf Kinder- und Jugendtraining.",
  credentials: ["Kraftausdauer", "Boxen", "MMA", "BJJ", "Jugend"],
  instagram: "#",
  isHeadCoach: true,
};

const cotrainers = [
  {
    name: "Marc",
    role: "Trainer — KickBoxen, ThaiBoxen",
    image: coach1,
    bio: "Erfahrener Trainer für Kickboxen und Thai-Boxen. Spezialisiert auf die Entwicklung von Stand-Up-Fähigkeiten für alle Level.",
    credentials: ["KickBoxen", "ThaiBoxen", "Erfahrung"],
    instagram: "#",
  },
  {
    name: "Paul",
    role: "Trainer — KickBoxen, ThaiBoxen",
    image: coach2,
    bio: "Professioneller Trainer für Kickboxen und Thai-Boxen. Fokus auf Technik, Kraft und Wettkampfvorbereitung.",
    credentials: ["KickBoxen", "ThaiBoxen", "Wettkampf"],
    instagram: "#",
  },
  {
    name: "Axel",
    role: "Trainer — BJJ",
    image: coach3,
    bio: "Spezialist für Brazilian Jiu-Jitsu. Entwickelt Grappling-Fähigkeiten für Anfänger und Fortgeschrittene.",
    credentials: ["BJJ", "Brazilian Jiu-Jitsu", "Grappling"],
    instagram: "#",
  },
  {
    name: "Anastasia",
    role: "Trainerin — Kids Club, Krabbelgruppe",
    image: coach2,
    bio: "Erfahrene Trainerin für den Kids Club und die Krabbelgruppe. Spezialisiert auf altersgerechtes Training für die Kleinsten.",
    credentials: ["Kids Club", "Krabbelgruppe", "Kinderbetreuung"],
    instagram: "#",
  },
  {
    name: "Daniel",
    role: "Trainer — Kids Club, Krabbelgruppe",
    image: coach3,
    bio: "Engagierter Trainer für den Kids Club und die Krabbelgruppe. Fokus auf Spaß, Sicherheit und Entwicklung.",
    credentials: ["Kids Club", "Krabbelgruppe", "Kinderbetreuung"],
    instagram: "#",
  },
];

const Coaches = () => {
  return (
    <section id="coaches" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Unser Team</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            LERNE VON DEN <span className="gradient-text">BESTEN</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Unsere Trainer sind nicht nur Instruktoren - sie sind erfahrene Athleten, die sich der Entwicklung der nächsten Generation widmen.
          </p>
        </div>

        {/* Head Coach Section */}
        {headCoach && (
          <div className="mb-16 flex justify-center">
            <div className="group relative bg-card rounded-2xl overflow-hidden gradient-border w-full max-w-md shadow-glow">
              {/* Head Coach Badge */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                <Crown className="w-4 h-4 text-background" />
                <span className="text-xs font-display font-bold text-background uppercase tracking-wider">
                  Head Coach
                </span>
              </div>

              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={headCoach.image}
                  alt={headCoach.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-display font-bold">{headCoach.name}</h3>
                    <p className="text-primary text-sm font-medium">{headCoach.role}</p>
                  </div>
                  <a
                    href={headCoach.instagram}
                    className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors"
                    aria-label={`${headCoach.name}'s Instagram`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{headCoach.bio}</p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {headCoach.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      <Award className="w-3 h-3 text-primary" />
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cotrainers Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
              <span className="gradient-text">Cotrainer</span>
            </h3>
            <p className="text-muted-foreground">
              Unser erfahrenes Trainerteam
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
          {cotrainers.map((coach) => (
            <div
              key={coach.name}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border card-hover"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-display font-bold">{coach.name}</h3>
                    <p className="text-primary text-sm font-medium">{coach.role}</p>
                  </div>
                  <a
                    href={coach.instagram}
                    className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors"
                    aria-label={`${coach.name}'s Instagram`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{coach.bio}</p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {coach.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      <Award className="w-3 h-3 text-primary" />
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text">6</div>
            <div className="text-muted-foreground mt-2">Erfahrene Trainer</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text">10+</div>
            <div className="text-muted-foreground mt-2">Trainingsprogramme</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text">800</div>
            <div className="text-muted-foreground mt-2">Quadratmeter</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text">Alle</div>
            <div className="text-muted-foreground mt-2">Altersgruppen</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
