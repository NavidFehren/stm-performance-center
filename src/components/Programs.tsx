import { Shield, Swords, Target, Dumbbell, Baby, UserCheck, Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Shared program data with categories
const programs = [
  {
    icon: Swords,
    title: "MMA",
    level: "Alle Level",
    duration: "60-90 min",
    frequency: "Mehrmals/Woche",
    description: "Vollständiges Mixed Martial Arts Training, das Schlag-, Ringer- und Submission-Techniken zu einem kohärenten Kampfsystem kombiniert.",
    benefits: ["Ganzkörper-Konditionierung", "Selbstverteidigung", "Wettkampfvorbereitung"],
    category: "kampfsport",
  },
  {
    icon: Shield,
    title: "BJJ / Nogi",
    level: "Alle Level",
    duration: "60 min",
    frequency: "Mehrmals/Woche",
    description: "Meistere die Kunst des Bodenkampfes mit Gi- und No-Gi-Klassen. Perfekt für Selbstverteidigung und Sportwettkämpfe.",
    benefits: ["Technikfokussiert", "Problemlösung", "Gurt-Fortschritt"],
    category: "kampfsport",
  },
  {
    icon: Target,
    title: "Boxen & Thai-Boxen / K1",
    level: "Alle Level",
    duration: "60 min",
    frequency: "Mehrmals/Woche",
    description: "Boxen, Kickboxen und Muay Thai. Entwickle verheerende Stand-Up-Fähigkeiten mit erstklassigen Schlag-Trainern.",
    benefits: ["Cardio-Ausdauer", "Kraftentwicklung", "Defensive Fähigkeiten"],
    category: "kampfsport",
  },
  {
    icon: Dumbbell,
    title: "Kraftausdauer",
    level: "Alle Level",
    duration: "45-60 min",
    frequency: "Mehrmals/Woche",
    description: "Leistungsorientiertes Training zur Entwicklung kampfbereiter Kraft, explosiver Power und unzerbrechlicher Kondition.",
    benefits: ["Funktionale Kraft", "Athletische Leistung", "Verletzungsprävention"],
    category: "kampfsport",
  },
  {
    icon: Baby,
    title: "Mini Club",
    level: "3-6 Jahre",
    duration: "45-60 min",
    frequency: "Mehrmals/Woche",
    description: "Sicheres, spaßiges und lehrreiches Kampfsport-Training für die Kleinsten. Baue Selbstvertrauen, Disziplin und körperliche Fitness auf.",
    benefits: ["Selbstvertrauen", "Disziplin", "Fitness-Gewohnheiten"],
    category: "kinder",
  },
  {
    icon: Users,
    title: "Kids MMA",
    level: "7-11 Jahre",
    duration: "45-60 min",
    frequency: "Mehrmals/Woche",
    description: "Altersgerechtes MMA-Training für Kinder. Entwickle Kampfsport-Fähigkeiten in einer sicheren und unterstützenden Umgebung.",
    benefits: ["Selbstverteidigung", "Teamwork", "Fitness"],
    category: "kinder",
  },
  {
    icon: UserCheck,
    title: "Youth MMA",
    level: "12-16 Jahre",
    duration: "60 min",
    frequency: "Mehrmals/Woche",
    description: "Fortgeschrittenes MMA-Training für Jugendliche. Vorbereitung auf Wettkämpfe und Entwicklung von Führungsqualitäten.",
    benefits: ["Wettkampfvorbereitung", "Führung", "Athletische Entwicklung"],
    category: "kinder",
  },
  {
    icon: Heart,
    title: "Senioren Club",
    level: "Alle Level",
    duration: "45-60 min",
    frequency: "Mehrmals/Woche",
    description: "Speziell für Senioren entwickeltes Training, das Fitness, Beweglichkeit und Wohlbefinden fördert.",
    benefits: ["Beweglichkeit", "Gesundheit", "Gemeinschaft"],
    category: "wellness",
  },
  {
    icon: Sparkles,
    title: "Yoga",
    level: "Alle Level",
    duration: "60 min",
    frequency: "Wöchentlich",
    description: "Yoga-Klassen zur Verbesserung von Flexibilität, Balance und mentaler Klarheit. Perfekt als Ergänzung zum Kampfsport-Training.",
    benefits: ["Flexibilität", "Entspannung", "Körperbewusstsein"],
    category: "wellness",
  },
];

// Filter programs by category
const kampfsportPrograms = programs.filter(p => p.category === "kampfsport");
const kinderPrograms = programs.filter(p => p.category === "kinder");
const wellnessPrograms = programs.filter(p => p.category === "wellness");

// Reusable Program Card Component
interface ProgramCardProps {
  program: typeof programs[0];
  className?: string;
}

const ProgramCard = ({ program, className = "" }: ProgramCardProps) => (
  <div className={`group relative bg-card rounded-xl border border-border p-6 card-hover overflow-hidden h-full ${className}`}>
    {/* Hover gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <program.icon className="w-6 h-6 text-primary" />
      </div>
      
      {/* Title & Meta */}
      <h3 className="text-xl font-display font-bold mb-2">{program.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
          {program.level}
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
          {program.duration}
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
          {program.frequency}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
      
      {/* Benefits */}
      <ul className="space-y-2">
        {program.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// ============================================
// OPTION A: Tab-Navigation mit Kategorien
// ============================================
const OptionATabs = () => (
  <div className="mb-32">
    <div className="text-center mb-8">
      <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm mb-4">
        OPTION A
      </span>
      <h3 className="text-2xl font-display font-bold">Tab-Navigation mit Kategorien</h3>
      <p className="text-muted-foreground mt-2">Wechsle zwischen den Kategorien per Klick auf die Tabs</p>
    </div>
    
    <Tabs defaultValue="kampfsport" className="w-full">
      {/* Mobile: horizontal scroll, Desktop: centered */}
      <div className="flex justify-center mb-8">
        <div className="overflow-x-auto scrollbar-hide">
          <TabsList className="inline-flex bg-card border border-border h-auto p-1.5 md:p-2 gap-1 md:gap-2">
            <TabsTrigger 
              value="kampfsport" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 md:px-6 py-2.5 md:py-3 font-display text-sm md:text-base flex items-center gap-2 whitespace-nowrap"
            >
              <Swords className="w-4 h-4 md:hidden" />
              <span className="hidden md:inline">Kampfsport</span>
              <span className="md:hidden">Kampfsport</span>
            </TabsTrigger>
            <TabsTrigger 
              value="kinder"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 md:px-6 py-2.5 md:py-3 font-display text-sm md:text-base flex items-center gap-2 whitespace-nowrap"
            >
              <Users className="w-4 h-4 md:hidden" />
              <span className="hidden md:inline">Kinder & Jugend</span>
              <span className="md:hidden">Kinder</span>
            </TabsTrigger>
            <TabsTrigger 
              value="wellness"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 md:px-6 py-2.5 md:py-3 font-display text-sm md:text-base flex items-center gap-2 whitespace-nowrap"
            >
              <Heart className="w-4 h-4 md:hidden" />
              <span className="hidden md:inline">Fitness & Wellness</span>
              <span className="md:hidden">Wellness</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
      
      <TabsContent value="kampfsport" className="mt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kampfsportPrograms.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="kinder" className="mt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kinderPrograms.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="wellness" className="mt-0">
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {wellnessPrograms.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </div>
);

// ============================================
// OPTION B: Horizontales Carousel mit Sektionen
// ============================================
const OptionBCarousel = () => (
  <div className="mb-32">
    <div className="text-center mb-8">
      <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm mb-4">
        OPTION B
      </span>
      <h3 className="text-2xl font-display font-bold">Horizontales Carousel mit Sektionen</h3>
      <p className="text-muted-foreground mt-2">Swipe oder klicke auf die Pfeile um durch die Programme zu navigieren</p>
    </div>
    
    {/* Kampfsport Section - 4 programs, show all on desktop */}
    <div className="mb-12">
      <h4 className="text-xl font-display font-bold mb-6 flex items-center justify-center gap-3">
        <Swords className="w-6 h-6 text-primary" />
        Kampfsport
      </h4>
      {/* Mobile: horizontal scroll with peek, Desktop: grid */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {kampfsportPrograms.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
      <div className="lg:hidden overflow-x-auto scrollbar-hide touch-pan-x -mx-4 px-4">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {kampfsportPrograms.map((program, index) => (
            <div 
              key={program.title} 
              className="w-[75vw] sm:w-[45vw] flex-shrink-0"
              style={{ marginRight: index === kampfsportPrograms.length - 1 ? '1rem' : undefined }}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Kinder & Jugend Section - 3 programs */}
    <div className="mb-12">
      <h4 className="text-xl font-display font-bold mb-6 flex items-center justify-center gap-3">
        <Users className="w-6 h-6 text-primary" />
        Kinder & Jugend
      </h4>
      {/* Mobile: horizontal scroll with peek, Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {kinderPrograms.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
      <div className="md:hidden overflow-x-auto scrollbar-hide touch-pan-x -mx-4 px-4">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {kinderPrograms.map((program, index) => (
            <div 
              key={program.title} 
              className="w-[75vw] flex-shrink-0"
              style={{ marginRight: index === kinderPrograms.length - 1 ? '1rem' : undefined }}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Fitness & Wellness Section - 2 programs, always fit */}
    <div>
      <h4 className="text-xl font-display font-bold mb-6 flex items-center justify-center gap-3">
        <Heart className="w-6 h-6 text-primary" />
        Fitness & Wellness
      </h4>
      {/* 2 programs always fit side by side on tablet+, scroll on small mobile */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {wellnessPrograms.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
      <div className="sm:hidden overflow-x-auto scrollbar-hide touch-pan-x -mx-4 px-4">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {wellnessPrograms.map((program, index) => (
            <div 
              key={program.title} 
              className="w-[75vw] flex-shrink-0"
              style={{ marginRight: index === wellnessPrograms.length - 1 ? '1rem' : undefined }}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// OPTION C: Akkordeon mit Featured-Highlight
// ============================================
const OptionCAccordion = () => {
  // Featured programs (main combat sports)
  const featuredPrograms = programs.filter(p => ["MMA", "BJJ / Nogi", "Boxen & Thai-Boxen / K1"].includes(p.title));
  
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm mb-4">
          OPTION C
        </span>
        <h3 className="text-2xl font-display font-bold">Akkordeon mit Featured-Highlight</h3>
        <p className="text-muted-foreground mt-2">Die Hauptprogramme prominent angezeigt, weitere per Klick ausklappbar</p>
      </div>
      
      {/* Featured Programs - Large Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {featuredPrograms.map((program) => (
          <div key={program.title} className="group relative bg-gradient-to-br from-card to-card/50 rounded-xl border-2 border-primary/30 p-8 card-hover overflow-hidden">
            {/* Featured badge */}
            <div className="absolute top-4 right-4">
              <span className="text-xs px-3 py-1 rounded-full bg-primary text-primary-foreground font-bold">
                FEATURED
              </span>
            </div>
            
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <program.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-display font-bold mb-3">{program.title}</h3>
              
              {/* Meta */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {program.level}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {program.duration}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6">{program.description}</p>
              
              {/* Benefits */}
              <ul className="space-y-2">
                {program.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Accordion for other programs */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="kraft" className="border-border">
            <AccordionTrigger className="px-6 hover:no-underline hover:bg-secondary/50">
              <div className="flex items-center gap-3">
                <Dumbbell className="w-5 h-5 text-primary" />
                <span className="font-display font-bold">Kraft & Kondition</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground ml-2">1 Programm</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                {programs.filter(p => p.title === "Kraftausdauer").map((program) => (
                  <ProgramCard key={program.title} program={program} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="kinder" className="border-border">
            <AccordionTrigger className="px-6 hover:no-underline hover:bg-secondary/50">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-display font-bold">Kinder & Jugend</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground ml-2">3 Programme</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                {kinderPrograms.map((program) => (
                  <ProgramCard key={program.title} program={program} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="wellness" className="border-border">
            <AccordionTrigger className="px-6 hover:no-underline hover:bg-secondary/50">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-display font-bold">Fitness & Wellness</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground ml-2">2 Programme</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                {wellnessPrograms.map((program) => (
                  <ProgramCard key={program.title} program={program} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

// ============================================
// Main Programs Component - Shows all options
// ============================================
const Programs = () => {
  return (
    <section id="programs" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Trainingsprogramme</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            FINDE DEINE <span className="gradient-text">DISCIPLIN</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Von kompletten Anfängern bis zu professionellen Kämpfern - wir haben ein Programm für deine Ziele und dein Erfahrungsniveau.
          </p>
        </div>
        
        {/* All three options for comparison */}
        <OptionATabs />
        <OptionBCarousel />
        <OptionCAccordion />
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#schedule">Vollständigen Trainingsplan ansehen</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
