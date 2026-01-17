import { useState, useEffect } from "react";
import {
  Menu,
  Users,
  Dumbbell,
  Calendar,
  Award,
  Building2,
  CreditCard,
  MessageCircle,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Über uns", href: "#about", icon: Users },
  { label: "Programme", href: "#programs", icon: Dumbbell },
  { label: "Trainingsplan", href: "#schedule", icon: Calendar },
  { label: "Trainer", href: "#coaches", icon: Award },
  { label: "Ausstattung", href: "#facility", icon: Building2 },
  { label: "Preise", href: "#pricing", icon: CreditCard },
  { label: "Kontakt", href: "#contact", icon: MessageCircle },
];

const animationDelays = [
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
  "animation-delay-500",
  "animation-delay-600",
  "animation-delay-700",
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-tight">
              STM<span className="gradient-text">Performance</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Kostenloses Probetraining</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-foreground"
                aria-label="Menü öffnen"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-background border-l border-border p-0">
              <VisuallyHidden.Root>
                <SheetTitle>Navigation</SheetTitle>
              </VisuallyHidden.Root>
              
              {/* Sheet Header with Logo */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <a href="#" className="flex items-center gap-2">
                  <span className="font-display text-xl font-bold tracking-tight">
                    STM<span className="gradient-text">Performance</span>
                  </span>
                </a>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col py-6">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <SheetClose asChild key={item.label}>
                      <a
                        href={item.href}
                        className={`nav-item-hover group flex items-center justify-between min-h-16 px-6 animate-slide-in-right ${animationDelays[index]}`}
                      >
                        <div className="flex items-center gap-4">
                          <IconComponent 
                            size={22} 
                            className="nav-item-icon text-muted-foreground transition-colors duration-300" 
                          />
                          <span className="nav-item-text font-display text-2xl font-bold tracking-wide text-muted-foreground transition-all duration-300">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight 
                          size={20} 
                          className="text-muted-foreground/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                        />
                      </a>
                    </SheetClose>
                  );
                })}
              </nav>

              {/* CTA Button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-background">
                <SheetClose asChild>
                  <Button variant="hero" size="lg" className="w-full animate-slide-in-right animation-delay-700" asChild>
                    <a href="#contact">Kostenloses Probetraining</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
