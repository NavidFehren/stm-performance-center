import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Chen",
    role: "Member for 2 years",
    quote: "I walked in completely out of shape and with zero martial arts experience. Now I'm 40 pounds lighter, compete in BJJ tournaments, and have more confidence than ever. The coaches here changed my life.",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    role: "Professional Fighter",
    quote: "After training at multiple gyms, APEX is where I found my home. The coaching staff genuinely cares about your development, and the training partners push you to be your best every single day.",
    rating: 5,
  },
  {
    name: "Mike Thompson",
    role: "Youth Parent",
    quote: "My 12-year-old son has transformed. Better grades, more respectful at home, and genuinely excited to train. The youth program here is exceptional — disciplined but fun.",
    rating: 5,
  },
  {
    name: "Jessica Wong",
    role: "Member for 6 months",
    quote: "I was nervous about starting MMA, but the community here is so welcoming. Everyone — from complete beginners to pro fighters — trains together with mutual respect. Best gym I've ever been to.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            REAL <span className="gradient-text">RESULTS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from the athletes who train with us every day.
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
          <h3 className="text-2xl font-display font-bold mb-8">Our Community's Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-display font-bold gradient-text">500+</div>
              <div className="text-muted-foreground text-sm mt-1">Competition Medals Won</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold gradient-text">85%</div>
              <div className="text-muted-foreground text-sm mt-1">Member Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold gradient-text">150+</div>
              <div className="text-muted-foreground text-sm mt-1">Belt Promotions/Year</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold gradient-text">4.9</div>
              <div className="text-muted-foreground text-sm mt-1">Average Review Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
