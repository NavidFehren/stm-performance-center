import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import LegalDialog from "./LegalDialog";

const footerLinks = {
  training: [
    { label: "MMA", href: "#programs" },
    { label: "Brazilian Jiu-Jitsu", href: "#programs" },
    { label: "Boxen & Thai-Boxen", href: "#programs" },
    { label: "Kraftausdauer", href: "#programs" },
    { label: "Jugendprogramme", href: "#programs" },
  ],
  company: [
    { label: "Über uns", href: "#about" },
    { label: "Trainer", href: "#coaches" },
    { label: "Ausstattung", href: "#facility" },
    { label: "Trainingsplan", href: "#schedule" },
    { label: "Kontakt", href: "#contact" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Preise", href: "#pricing" },
    { label: "Probetraining", href: "#contact" },
    { label: "Mitgliedschaft", href: "#pricing" },
  ],
  legal: [
    { label: "Datenschutz", type: "datenschutz" as const },
    { label: "AGB", type: "agb" as const },
    { label: "Impressum", type: "impressum" as const },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold tracking-tight">
                STM<span className="gradient-text">Performance</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              Professionelles Kampfsport-Training und Fitness in Sindelfingen. Transformiere deinen Körper, Geist und Geist.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-display font-bold mb-4">Training</h4>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <LegalDialog
                    type={link.type}
                    trigger={
                      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                        {link.label}
                      </button>
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} STM Performance Center KG. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-muted-foreground">
            Mahdentahlstraße 96-98, 71065 Sindelfingen • +49 1781307309
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
