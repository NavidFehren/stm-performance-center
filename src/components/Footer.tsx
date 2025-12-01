import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  training: [
    { label: "MMA", href: "#programs" },
    { label: "Brazilian Jiu-Jitsu", href: "#programs" },
    { label: "Striking Arts", href: "#programs" },
    { label: "Strength & Conditioning", href: "#programs" },
    { label: "Youth Programs", href: "#programs" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Coaches", href: "#coaches" },
    { label: "Facility", href: "#facility" },
    { label: "Schedule", href: "#schedule" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Pricing", href: "#pricing" },
    { label: "Free Trial", href: "#contact" },
    { label: "Membership", href: "#pricing" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Imprint", href: "#" },
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
                APEX<span className="gradient-text">MMA</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              World-class MMA training and performance coaching. Transform your body, mind, and spirit.
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
            <h4 className="font-display font-bold mb-4">Company</h4>
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
            <h4 className="font-display font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} APEX MMA Performance Center. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            123 Fighter's Way, Downtown, CA 90210 • (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
