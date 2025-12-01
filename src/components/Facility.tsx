import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import gym1 from "@/assets/gym-1.jpg";
import gym2 from "@/assets/gym-2.jpg";
import gym3 from "@/assets/gym-3.jpg";
import gym4 from "@/assets/gym-4.jpg";

const galleryImages = [
  { src: gym1, title: "MMA Cage & Training Area", description: "Full-size competition cage with premium Zebra mats" },
  { src: gym2, title: "Strength & Conditioning", description: "State-of-the-art equipment including Rogue, Eleiko, and Concept2" },
  { src: gym3, title: "Grappling Mats", description: "2,000 sq ft of dedicated mat space for BJJ and wrestling" },
  { src: gym4, title: "Striking Zone", description: "Heavy bags, speed bags, and padded striking area" },
];

const features = [
  "10,000+ sq ft training facility",
  "Full-size MMA cage",
  "2,000 sq ft mat space",
  "Complete strength gym",
  "Heavy bag stations",
  "Speed & agility area",
  "Pro-grade locker rooms",
  "Recovery & stretching zone",
];

const Facility = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="facility" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Our Facility</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            TRAIN IN A <span className="gradient-text">WORLD-CLASS</span> SPACE
          </h2>
          <p className="text-muted-foreground text-lg">
            Purpose-built for combat sports and performance training. Every square foot designed to help you become a better athlete.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-bold">{galleryImages[currentImage].title}</h3>
                <p className="text-muted-foreground text-sm">{galleryImages[currentImage].description}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? "bg-primary w-6" : "bg-muted hover:bg-muted-foreground"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
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
                  onClick={() => setCurrentImage(index)}
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
              Everything You Need to <span className="gradient-text">Perform</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Our facility was designed by fighters, for fighters. Whether you're training for competition or simply looking to improve your fitness, you'll find everything you need in one location.
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
              <h4 className="font-display font-bold mb-2">Atmosphere & Community</h4>
              <p className="text-muted-foreground text-sm">
                Beyond equipment, we've cultivated a training environment that's welcoming to newcomers yet challenging enough for seasoned competitors. Everyone respects each other, egos stay at the door, and the focus is always on improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
