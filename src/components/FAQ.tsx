import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any experience to start training?",
    answer: "Absolutely not! We welcome complete beginners in all of our programs. Our fundamentals classes are specifically designed to teach you the basics in a safe, supportive environment. Many of our most dedicated members started with zero martial arts experience.",
  },
  {
    question: "What should I bring to my first class?",
    answer: "For your first class, just bring workout clothes (t-shirt, shorts), a water bottle, and a towel. We provide all necessary equipment like gloves and pads for beginners. Once you decide to continue training, we can advise on what gear to purchase.",
  },
  {
    question: "Is there a minimum contract or commitment?",
    answer: "No long-term contracts required. Our memberships are month-to-month, and you can cancel anytime with 30 days notice. We also offer flexible class packs if you prefer not to commit to a monthly membership.",
  },
  {
    question: "How often should I train as a beginner?",
    answer: "We recommend starting with 2-3 sessions per week to allow your body to adapt. As you build conditioning and confidence, you can increase frequency. Our coaches will help you create a training schedule that matches your goals and lifestyle.",
  },
  {
    question: "Do kids train separately from adults?",
    answer: "Yes, our youth program (ages 6-16) has dedicated class times with age-appropriate instruction. We focus on fundamentals, discipline, and fitness in a fun, safe environment. Parents are welcome to observe any class.",
  },
  {
    question: "What if I only want to train one discipline (like just BJJ)?",
    answer: "That's perfectly fine! While our full membership gives you access to all programs, many members focus on one specific discipline. Our schedule offers multiple classes per week in each discipline so you can train consistently.",
  },
  {
    question: "Is MMA training safe?",
    answer: "Safety is our top priority. All sparring is controlled and supervised, and we never force anyone to spar. Our coaches emphasize proper technique to prevent injuries, and we require all sparring participants to use appropriate protective gear.",
  },
  {
    question: "Can I try a class before signing up?",
    answer: "Yes! We offer a free trial class for new members. This lets you experience our training, meet the coaches, and see if APEX is the right fit for you. Just contact us to schedule your trial.",
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
              QUESTIONS? <span className="gradient-text">WE'VE GOT ANSWERS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              New to martial arts? Curious about what to expect? Here are answers to the most common questions we receive from prospective members.
            </p>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-display font-bold mb-2">Still have questions?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is happy to help. Reach out anytime and we'll get back to you within 24 hours.
              </p>
              <a
                href="#contact"
                className="text-primary hover:underline text-sm font-medium"
              >
                Contact us →
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
