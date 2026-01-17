import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei dir.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            STARTE DEINE <span className="gradient-text">REISE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bereit für die Transformation? Nimm Kontakt auf und mache den ersten Schritt zu deinem besten Ich.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold mb-6">Sende uns eine Nachricht</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Dein Name"
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Deine Telefonnummer"
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">
                  E-Mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="deine@email.de"
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Nachricht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Erzähle uns von deinen Zielen..."
                  rows={5}
                  className="bg-secondary border-border resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Nachricht senden
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Mahdentahlstraße 96-98</p>
                  <p className="text-muted-foreground">71065 Sindelfingen</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-sm text-muted-foreground">Mahdentahlstraße 96-98</p>
                  <p className="text-sm text-muted-foreground">71065 Sindelfingen</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <p className="text-sm text-muted-foreground">+49 1781307309</p>
                  <p className="text-sm text-muted-foreground">+49 17662616747</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-Mail</h4>
                  <p className="text-sm text-muted-foreground">info@stm-performance-center.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Anfragen am besten</p>
                  <p className="text-sm text-muted-foreground">über WhatsApp stellen</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Folge uns:</span>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
