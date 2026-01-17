import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact = () => {
  const whatsappNumber = "491781307309";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

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
          {/* WhatsApp CTA Card */}
          <div className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/30 rounded-2xl p-8 flex flex-col justify-center">
            {/* WhatsApp Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-[#25D366]">
                <WhatsAppIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                SCHREIB UNS AUF <span className="text-[#25D366]">WHATSAPP</span>
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8">
              Hast du Fragen zu unseren Kursen oder möchtest ein Probetraining vereinbaren? 
              Schreib uns direkt auf WhatsApp!
            </p>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:brightness-110 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#25D366]/40 w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Jetzt auf WhatsApp schreiben
            </a>

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

              {/* WhatsApp Card with Link */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 group-hover:text-[#25D366] transition-colors">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Schreib uns direkt</p>
                  <p className="text-sm text-muted-foreground">auf WhatsApp</p>
                </div>
              </a>
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
