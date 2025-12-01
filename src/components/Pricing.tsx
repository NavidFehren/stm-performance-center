import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Day Pass",
    price: "$25",
    period: "single visit",
    description: "Perfect for drop-ins and visitors",
    features: [
      "Access to all classes",
      "Open gym access",
      "Locker room access",
      "Equipment included",
    ],
    cta: "Get Day Pass",
    popular: false,
  },
  {
    name: "Monthly Unlimited",
    price: "$199",
    period: "per month",
    description: "Full access for serious athletes",
    features: [
      "Unlimited classes",
      "Open gym access",
      "S&C programming",
      "Member events",
      "Locker & towel service",
      "Guest passes (2/month)",
    ],
    cta: "Start Membership",
    popular: true,
  },
  {
    name: "10-Class Pack",
    price: "$180",
    period: "10 classes",
    description: "Flexible training on your schedule",
    features: [
      "10 class credits",
      "Valid for 3 months",
      "Any class type",
      "Open gym access",
      "No commitment",
    ],
    cta: "Buy Class Pack",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Memberships</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            INVEST IN YOUR <span className="gradient-text">POTENTIAL</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple, transparent pricing. No hidden fees, no long-term contracts. Just world-class training.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    Most Popular
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

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-display font-bold mb-2">Student Discount</h4>
            <p className="text-muted-foreground text-sm">20% off monthly memberships with valid student ID</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-display font-bold mb-2">Family Plans</h4>
            <p className="text-muted-foreground text-sm">15% off per additional family member</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-display font-bold mb-2">Annual Savings</h4>
            <p className="text-muted-foreground text-sm">Pay yearly and get 2 months free</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
