import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Unsere Stärken",
    role: "STM Performance Center",
    quote: "1A und vielseitiges Training, schöne Atmosphäre, Veranstaltungen und Team-Events. Das macht uns aus.",
    rating: 5,
  },
  {
    name: "Professionelles Training",
    role: "Für alle Level",
    quote: "Von Anfängern bis zu Wettkämpfern - bei uns findest du das richtige Training für dein Level. Unsere erfahrenen Trainer passen das Training individuell an deine Bedürfnisse an.",
    rating: 5,
  },
  {
    name: "Moderne Ausstattung",
    role: "800qm Trainingsfläche",
    quote: "Unsere 800qm große Anlage bietet alles, was du für dein Training brauchst: Cage, Trainingsflächen, Fitness-Bereich, Sauna und Lounge-Bereiche.",
    rating: 5,
  },
  {
    name: "Gemeinschaft",
    role: "Willkommene Atmosphäre",
    quote: "Bei uns trainieren alle zusammen - vom kompletten Anfänger bis zum Profi. Respekt und gegenseitige Unterstützung stehen im Mittelpunkt.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Unsere Stärken</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            DAS MACHT <span className="gradient-text">UNS AUS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Erfahre mehr über das, was STM Performance Center besonders macht.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border card-hover"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 relative z-10">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-display font-bold mb-8">Unsere Stärken im Überblick</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-display font-bold gradient-text">1A</div>
              <div className="text-muted-foreground text-sm mt-1">Vielseitiges Training</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold gradient-text">✓</div>
              <div className="text-muted-foreground text-sm mt-1">Schöne Atmosphäre</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold gradient-text">✓</div>
              <div className="text-muted-foreground text-sm mt-1">Veranstaltungen</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold gradient-text">✓</div>
              <div className="text-muted-foreground text-sm mt-1">Team-Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
