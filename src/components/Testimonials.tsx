import { Star } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/gjLYDV2wJoQy66Hp8";

// Google "G" Logo SVG Component
const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const testimonials = [
  {
    name: "DomN",
    role: "Local Guide",
    quote:
      "Mit großem Abstand das beste MMA Gym in Süddeutschland! Der Trainer Anatolij ist selber einer der besten MMA Profis in Deutschland und bringt einen extrem weiter. Im Vergleich zu den anderen MMA Gyms ist das ein Klassenunterschied wie Kreisliga und Champions League.",
    rating: 5,
  },
  {
    name: "Anna Heiß",
    role: "Mitglied",
    quote:
      "Seit über einem Jahr trainiere ich nun fast täglich im STM und ich muss sagen, das war die beste Entscheidung in meiner sportlichen Karriere. Noch nie hatte ich so viel Motivation und vor allem Disziplin an etwas dran zu bleiben.",
    rating: 5,
  },
  {
    name: "Artur Martin",
    role: "Mitglied",
    quote:
      "Als jemand mit Erfahrung in verschiedenen Kampfsportarten kann ich mit Überzeugung sagen: Der Fight Club STM ist ein erstklassiges Gym! Der Trainingsbereich ist modern und bestens ausgestattet. Die Atmosphäre ist familiär, respektvoll und von hilfsbereiten Mitgliedern geprägt.",
    rating: 5,
  },
  {
    name: "Terry Brown",
    role: "Mitglied",
    quote:
      "Tolles Fitnessstudio mit einer einladenden Atmosphäre und intensivem Training. Der Trainer wird dich hart drängen, aber alle sind super unterstützend. Perfekt für alle Könnensstufen - sehr zu empfehlen! OSS.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-primary font-display uppercase tracking-widest text-sm">
            Rezensionen
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            WAS UNSERE MITGLIEDER <span className="gradient-text">SAGEN</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Echte Bewertungen von echten Mitgliedern
          </p>
        </div>

        {/* Google Rating Header */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <GoogleIcon className="w-6 h-6" />
          <span className="text-lg font-medium">4,9</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-muted-foreground">auf Google</span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border card-hover flex flex-col"
            >
              {/* Google Icon */}
              <GoogleIcon className="absolute top-6 right-6 w-6 h-6 opacity-60" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 relative z-10 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author - always at bottom */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-700 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
          >
            <GoogleIcon className="w-5 h-5" />
            <span>Alle Rezensionen auf Google ansehen</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
