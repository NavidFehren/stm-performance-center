import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import gym1 from "@/assets/gym-1.jpg";
import gym2 from "@/assets/gym-2.jpg";
import gym3 from "@/assets/gym-3.jpg";
import gym4 from "@/assets/gym-4.jpg";

const galleryImages = [
  { src: gym1, title: "MMA Cage & Trainingsfläche", description: "Vollständiger Wettkampf-Cage (8x8 Meter) mit Premium-Matten" },
  { src: gym2, title: "Fitness Bereich", description: "Moderne Ausstattung für Kraft- und Ausdauertraining" },
  { src: gym3, title: "Große Trainingsfläche", description: "300qm große Trainingsfläche für alle Kampfsport-Disziplinen" },
  { src: gym4, title: "Zweite Trainingsfläche", description: "100qm zusätzliche Trainingsfläche für flexibles Training" },
];

const features = [
  "800qm Gesamtfläche",
  "Große Trainingsfläche (300qm)",
  "Zweite Trainingsfläche (100qm)",
  "Cage (8x8 Meter)",
  "Fitness Bereich",
  "Große Umkleidekabinen mit Duschen",
  "Eigener Saunabereich mit Lounge",
  "Theken-Lounge für Eltern und Mitglieder",
];

const Facility = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentImage(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="facility" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Unsere Ausstattung</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            TRAINIERE IN EINEM <span className="gradient-text">ERSTKLASSIGEN</span> RAUM
          </h2>
          <p className="text-muted-foreground text-lg">
            Zweckgebaut für Kampfsport und Performance-Training. Jeder Quadratmeter ist darauf ausgelegt, dich zu einem besseren Athleten zu machen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              className="rounded-2xl overflow-hidden"
            >
              <CarouselContent className="ml-0">
                {galleryImages.map((img, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      
                      {/* Image Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-display font-bold">{img.title}</h3>
                        <p className="text-muted-foreground text-sm">{img.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? "bg-primary w-6" : "bg-muted hover:bg-muted-foreground"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => api?.scrollPrev()}
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => api?.scrollNext()}
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">
              Alles was du brauchst, um zu <span className="gradient-text">performen</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Unsere Einrichtung wurde von Kämpfern für Kämpfer entwickelt. Ob du für Wettkämpfe trainierst oder einfach deine Fitness verbessern möchtest - du findest alles an einem Ort.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-display font-bold mb-2">Atmosphäre & Gemeinschaft</h4>
              <p className="text-muted-foreground text-sm">
                Über die Ausstattung hinaus haben wir ein Trainingsumfeld geschaffen, das Neuankömmlinge willkommen heißt und gleichzeitig genug Herausforderung für erfahrene Wettkämpfer bietet. Jeder respektiert den anderen, Egos bleiben an der Tür, und der Fokus liegt immer auf Verbesserung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
