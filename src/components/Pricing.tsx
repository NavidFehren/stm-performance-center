import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "24 Monate",
    price: "89€",
    period: "pro Monat",
    description: "Langfristige Mitgliedschaft mit bestem Preis",
    features: [
      "Zugang zu allen Kursen",
      "Offenes Training",
      "Alle Trainingsprogramme",
      "24 Monate Laufzeit",
      "Inkl. MwSt. (19%)",
    ],
    cta: "Mitgliedschaft starten",
    popular: true,
  },
  {
    name: "12 Monate",
    price: "99€",
    period: "pro Monat",
    description: "Jahresmitgliedschaft mit gutem Preis-Leistungs-Verhältnis",
    features: [
      "Zugang zu allen Kursen",
      "Offenes Training",
      "Alle Trainingsprogramme",
      "12 Monate Laufzeit",
      "Inkl. MwSt. (19%)",
    ],
    cta: "Mitgliedschaft starten",
    popular: false,
  },
  {
    name: "Monatlich kündbar",
    price: "129€",
    period: "pro Monat",
    description: "Flexibel ohne lange Bindung",
    features: [
      "Zugang zu allen Kursen",
      "Offenes Training",
      "Alle Trainingsprogramme",
      "Monatlich kündbar",
      "Inkl. MwSt. (19%)",
    ],
    cta: "Mitgliedschaft starten",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Mitgliedschaften</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            INVESTIERE IN DEIN <span className="gradient-text">POTENZIAL</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Einfache, transparente Preise. Alle Preise inkl. MwSt. (19%). Professionelles Training für jeden.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col h-full ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold whitespace-nowrap">
                    <Star className="w-4 h-4" />
                    Beliebteste Option
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-display font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">{plan.cta}</a>
              </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-6 rounded-xl bg-card border border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display font-bold mb-4">Kinder- und Jugendprogramme</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mini Club (3-6 Jahre)</span>
                  <span className="text-sm font-medium">50€/Monat</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Kids MMA (7-11 Jahre)</span>
                  <span className="text-sm font-medium">65€/Monat</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Youth MMA (12-16 Jahre)</span>
                  <span className="text-sm font-medium">75€/Monat</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Weitere Angebote</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">10er Karte</span>
                  <span className="text-sm font-medium">250€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sauna (monatlich)</span>
                  <span className="text-sm font-medium">+15€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
