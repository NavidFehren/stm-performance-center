import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type LegalType = "datenschutz" | "agb" | "impressum";

interface LegalDialogProps {
  type: LegalType;
  trigger: React.ReactNode;
}

const legalContent: Record<LegalType, { title: string; content: React.ReactNode }> = {
  datenschutz: {
    title: "Datenschutzerklärung",
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">1. Datenschutz auf einen Blick</h3>
          <h4 className="font-semibold mb-2 text-foreground">Allgemeine Hinweise</h4>
          <p className="text-muted-foreground leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können.
          </p>
        </section>
        
        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">2. Datenerfassung auf dieser Website</h3>
          <h4 className="font-semibold mb-2 text-foreground">Wer ist verantwortlich für die Datenerfassung?</h4>
          <p className="text-muted-foreground leading-relaxed">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie 
            dem Impressum dieser Website entnehmen.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">3. Ihre Rechte</h3>
          <p className="text-muted-foreground leading-relaxed">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
            personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser 
            Daten zu verlangen.
          </p>
        </section>

        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mt-6">
          <p className="text-sm text-muted-foreground italic">
            Dies ist ein Platzhaltertext. Bitte ersetzen Sie diesen durch Ihre vollständige Datenschutzerklärung.
          </p>
        </div>
      </div>
    ),
  },
  agb: {
    title: "Allgemeine Geschäftsbedingungen",
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">§1 Geltungsbereich</h3>
          <p className="text-muted-foreground leading-relaxed">
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen dem STM Performance Center KG 
            (nachfolgend "Anbieter") und dem Mitglied über die Nutzung der Trainingseinrichtungen und Dienstleistungen.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">§2 Mitgliedschaft</h3>
          <p className="text-muted-foreground leading-relaxed">
            Die Mitgliedschaft beginnt mit dem im Vertrag vereinbarten Datum. Der Mitgliedsbeitrag ist monatlich im 
            Voraus zu entrichten. Die Mindestvertragslaufzeit richtet sich nach dem gewählten Tarif.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">§3 Kündigung</h3>
          <p className="text-muted-foreground leading-relaxed">
            Die Kündigung der Mitgliedschaft muss schriftlich erfolgen. Die Kündigungsfrist beträgt einen Monat zum 
            Ende der vereinbarten Vertragslaufzeit.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">§4 Hausordnung</h3>
          <p className="text-muted-foreground leading-relaxed">
            Das Mitglied verpflichtet sich, die Hausordnung des Studios einzuhalten und die Trainingsgeräte 
            pfleglich zu behandeln.
          </p>
        </section>

        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mt-6">
          <p className="text-sm text-muted-foreground italic">
            Dies ist ein Platzhaltertext. Bitte ersetzen Sie diesen durch Ihre vollständigen AGB.
          </p>
        </div>
      </div>
    ),
  },
  impressum: {
    title: "Impressum",
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">Angaben gemäß § 5 TMG</h3>
          <div className="text-muted-foreground leading-relaxed space-y-1">
            <p className="font-semibold text-foreground">STM Performance Center KG</p>
            <p>Mahdentahlstraße 96-98</p>
            <p>71065 Sindelfingen</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">Kontakt</h3>
          <div className="text-muted-foreground leading-relaxed space-y-1">
            <p>Telefon: +49 1781307309</p>
            <p>E-Mail: info@stm-performance-center.de</p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">Vertreten durch</h3>
          <p className="text-muted-foreground leading-relaxed">
            [Name des/der Geschäftsführer(s)]
          </p>
        </section>

        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">Registereintrag</h3>
          <div className="text-muted-foreground leading-relaxed space-y-1">
            <p>Registergericht: [Amtsgericht]</p>
            <p>Registernummer: [HRA/HRB Nummer]</p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-display font-bold mb-3 text-foreground">Umsatzsteuer-ID</h3>
          <p className="text-muted-foreground leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [USt-IdNr.]
          </p>
        </section>

        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mt-6">
          <p className="text-sm text-muted-foreground italic">
            Bitte ergänzen Sie die fehlenden Angaben in den eckigen Klammern.
          </p>
        </div>
      </div>
    ),
  },
};

const LegalDialog = ({ type, trigger }: LegalDialogProps) => {
  const { title, content } = legalContent[type];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] bg-background border-border">
        <DialogHeader className="pb-4 border-b border-border">
          <DialogTitle className="text-2xl font-display font-bold">
            <span className="gradient-text">{title}</span>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="py-4">{content}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDialog;
