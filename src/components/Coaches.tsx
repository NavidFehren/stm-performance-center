import { Instagram, Award } from "lucide-react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

const coaches = [
  {
    name: "Marcus Silva",
    role: "Head Coach — MMA",
    image: coach1,
    bio: "Former professional MMA fighter with 15+ years experience. Black belt in Brazilian Jiu-Jitsu and certified strength & conditioning coach.",
    credentials: ["Pro MMA Record: 18-4", "BJJ Black Belt", "CSCS Certified"],
    instagram: "#",
  },
  {
    name: "Ana Torres",
    role: "Head Coach — BJJ",
    image: coach2,
    bio: "3rd degree BJJ black belt with multiple world championship titles. Specializes in developing competition-ready grapplers of all levels.",
    credentials: ["3x World Champion", "3rd Degree Black Belt", "10+ Years Coaching"],
    instagram: "#",
  },
  {
    name: "Jake \"Thunder\" Mitchell",
    role: "Head Coach — Striking",
    image: coach3,
    bio: "Former professional boxer and Muay Thai champion. Known for developing elite striking skills in MMA fighters and beginners alike.",
    credentials: ["Pro Boxing: 24-2", "Muay Thai Champion", "Boxing Trainer Cert."],
    instagram: "#",
  },
];

const Coaches = () => {
  return (
    <section id="coaches" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            LEARN FROM THE <span className="gradient-text">BEST</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our coaches aren't just instructors — they're accomplished athletes who have competed at the highest levels and now dedicate themselves to developing the next generation.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
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

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text">100+</div>
            <div className="text-muted-foreground mt-2">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text">15</div>
            <div className="text-muted-foreground mt-2">Black Belts on Staff</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text">50+</div>
            <div className="text-muted-foreground mt-2">Championship Titles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold gradient-text">5</div>
            <div className="text-muted-foreground mt-2">Languages Spoken</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
