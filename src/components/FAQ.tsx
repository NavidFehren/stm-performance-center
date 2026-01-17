import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Brauche ich Erfahrung, um mit dem Training zu beginnen?",
    answer: "Absolut nicht! Wir heißen komplette Anfänger in allen unseren Programmen willkommen. Unsere Grundlagen-Kurse sind speziell darauf ausgelegt, dir die Basics in einer sicheren, unterstützenden Umgebung beizubringen. Viele unserer engagiertesten Mitglieder haben ohne jegliche Kampfsport-Erfahrung begonnen.",
  },
  {
    question: "Was sollte ich zu meiner ersten Stunde mitbringen?",
    answer: "Für deine erste Stunde bringe einfach Trainingskleidung (T-Shirt, Shorts), eine Wasserflasche und ein Handtuch mit. Wir stellen alle notwendigen Ausrüstungsgegenstände wie Handschuhe und Schützer für Anfänger zur Verfügung. Sobald du dich entscheidest, weiter zu trainieren, können wir dir bei der Auswahl der Ausrüstung beraten.",
  },
  {
    question: "Kann ich eine Stunde ausprobieren, bevor ich mich anmelde?",
    answer: "Ja! Wir bieten ein kostenloses Probetraining für neue Mitglieder an. So kannst du unser Training erleben, die Trainer kennenlernen und sehen, ob STM Performance Center das Richtige für dich ist. Kontaktiere uns einfach, um dein Probetraining zu vereinbaren.",
  },
  {
    question: "Welche Trainingsprogramme werden angeboten?",
    answer: "Wir bieten ein breites Spektrum an Trainingsprogrammen: Kampfsport (Boxen, Thai-Boxen/K1, BJJ/Nogi, MMA), Kraftausdauer, Senioren Club, Yoga und Krabbel Club. Für Kinder und Jugendliche haben wir spezielle Programme: Mini Club (3-6 Jahre), Kids MMA (7-11 Jahre) und Youth MMA (12-16 Jahre). Alle Programme sind für verschiedene Erfahrungslevel geeignet.",
  },
  {
    question: "Trainieren Kinder getrennt von Erwachsenen?",
    answer: "Ja, unsere Jugendprogramme haben eigene Kurszeiten mit altersgerechter Anleitung. Wir bieten Mini Club (3-6 Jahre), Kids MMA (7-11 Jahre) und Youth MMA (12-16 Jahre) an. Wir konzentrieren uns auf Grundlagen, Disziplin und Fitness in einer sicheren, spaßigen Umgebung. Eltern sind willkommen, jede Stunde zu beobachten.",
  },
  {
    question: "Was, wenn ich nur eine Disziplin trainieren möchte (z.B. nur BJJ)?",
    answer: "Das ist völlig in Ordnung! Während unsere Vollmitgliedschaft dir Zugang zu allen Programmen gibt, konzentrieren sich viele Mitglieder auf eine spezifische Disziplin. Unser Trainingsplan bietet mehrere Kurse pro Woche in jeder Disziplin, damit du kontinuierlich trainieren kannst.",
  },
  {
    question: "Ist MMA-Training sicher?",
    answer: "Sicherheit hat für uns oberste Priorität. Alle Sparring-Einheiten sind kontrolliert und überwacht, und wir zwingen niemanden zum Sparring. Unsere Trainer legen Wert auf richtige Technik, um Verletzungen zu vermeiden, und wir verlangen von allen Sparring-Teilnehmern, geeignete Schutzausrüstung zu tragen.",
  },
  {
    question: "Welche Ausstattung hat das Gym?",
    answer: "Unser Gym umfasst 800qm Gesamtfläche mit 2 Trainingsflächen (300qm große Trainingsfläche und 100qm zweite Trainingsfläche), einen Cage (8x8 Meter), einen Fitness-Bereich, große Umkleidekabinen mit Duschen und Toiletten, einen eigenen Saunabereich mit Lounge sowie eine zusätzliche Theken-Lounge für Eltern und Mitglieder neben der Trainingsfläche.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-32">
            <span className="text-primary font-display uppercase tracking-widest text-sm">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              FRAGEN? <span className="gradient-text">WIR HABEN ANTWORTEN</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Neu im Kampfsport? Neugierig, was dich erwartet? Hier sind Antworten auf die häufigsten Fragen, die wir von potenziellen Mitgliedern erhalten.
            </p>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-display font-bold mb-2">Noch Fragen?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Unser Team hilft gerne weiter. Melde dich jederzeit und wir melden uns innerhalb von 24 Stunden bei dir.
              </p>
              <a
                href="#contact"
                className="text-primary hover:underline text-sm font-medium"
              >
                Kontaktiere uns →
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:bg-card transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
