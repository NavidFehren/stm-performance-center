# Bildanforderungen STM Performance Center

Dieses Dokument beschreibt alle benötigten Bilder für die Website, technische Anforderungen und KI-Prompts zur Generierung.

## Zusammenfassung

Die Website benötigt insgesamt **11 Bilder**, aufgeteilt in 3 Kategorien:

| Kategorie | Anzahl | Status |
|-----------|--------|--------|
| Hero-Bild | 1 | Platzhalter vorhanden |
| Trainer-Bilder | 6 | Nur 3 Platzhalter (werden doppelt verwendet) |
| Facility-Bilder | 4 | Platzhalter vorhanden |

---

## 1. Hero-Hintergrundbild

**Aktueller Dateiname:** `src/assets/hero-bg.jpg`

**Verwendung:** Vollbild-Hintergrundbild auf der Startseite mit Gradient-Overlay

### Technische Anforderungen

- **Auflösung:** Mindestens 1920x1080px (empfohlen 2560x1440px)
- **Format:** JPG (optimiert, max. 500KB)
- **Seitenverhältnis:** 16:9 oder breiter
- **Wichtig:** Motiv sollte rechts sein, da links Text-Overlay erscheint

### Inhaltliche Anforderungen

- Atmosphärisches MMA/Kampfsport-Motiv
- Dunkle, professionelle Stimmung
- Mögliche Motive: Training im Cage, Sparring-Szene, Krafttraining
- Kein Gesicht zentral (wird von Gradient überdeckt)

---

## 2. Trainer-Bilder (6 Stück)

### Aktuelles Problem

Die Website zeigt 6 Trainer, aber nur 3 Bilder sind vorhanden:
- `coach-1.jpg` → wird für Anatolij UND Marc verwendet
- `coach-2.jpg` → wird für Paul UND Anastasia verwendet
- `coach-3.jpg` → wird für Axel UND Daniel verwendet

### Technische Anforderungen (für alle)

- **Auflösung:** Mindestens 800x1000px
- **Format:** JPG (optimiert, max. 200KB pro Bild)
- **Seitenverhältnis:** 4:5 (Hochformat)
- **Hintergrund:** Neutral dunkel oder Gym-Umgebung
- **Beschnitt:** Kopf bis Hüfte oder Brustbild

### Inhaltliche Anforderungen (für alle)

- Professionelle Portraitfotos
- Einheitlicher Stil für alle Trainer
- Sportliche Kleidung oder Kampfsport-Ausrüstung
- Selbstbewusste, freundliche Ausstrahlung

### Individuelle Trainer

| Dateiname (Vorschlag) | Trainer | Rolle | Besonderheit |
|----------------------|---------|-------|--------------|
| `coach-anatolij.jpg` | Anatolij | Head Coach - Kraftausdauer, Boxen, MMA, BJJ | Boxhandschuhe oder MMA-Gear |
| `coach-marc.jpg` | Marc | Kickboxen, Thaiboxen | Kickbox-Ausrüstung |
| `coach-paul.jpg` | Paul | Kickboxen, Thaiboxen | Thaibox-Shorts/Ausrüstung |
| `coach-axel.jpg` | Axel | BJJ | Gi oder No-Gi Rashguard |
| `coach-anastasia.jpg` | Anastasia | Kids Club, Krabbelgruppe | Freundlich, kinderfreundlich |
| `coach-daniel.jpg` | Daniel | Kids Club, Krabbelgruppe | Freundlich, kinderfreundlich |

---

## 3. Facility-Bilder (4 Stück)

**Speicherort:** `src/assets/`

### Technische Anforderungen

- **Auflösung:** Mindestens 1200x900px
- **Format:** JPG (optimiert, max. 300KB pro Bild)
- **Seitenverhältnis:** 4:3 (Querformat)
- **Beleuchtung:** Professionell, gut ausgeleuchtet

### Benötigte Räumlichkeiten

| Aktueller Dateiname | Bereich | Beschreibung |
|--------------------|---------|--------------|
| `gym-1.jpg` | MMA Cage | 8x8m Cage mit Matten, Trainingsszene möglich |
| `gym-2.jpg` | Fitness Bereich | Kraftgeräte, Hanteln, Cardio-Equipment |
| `gym-3.jpg` | Haupttrainingsfläche | 300qm Trainingsfläche, Boxsäcke, Matten |
| `gym-4.jpg` | Zweite Trainingsfläche | 100qm Fläche, flexible Nutzung |

### Optionale Erweiterung der Galerie

- `gym-sauna.jpg` - Saunabereich mit Lounge
- `gym-locker.jpg` - Umkleidekabinen
- `gym-lounge.jpg` - Theken-Lounge für Eltern/Mitglieder

---

## Empfehlungen für echte Fotos

Falls echte Fotos gemacht werden sollen:

1. **Fotograf:** Professioneller Fotograf mit Sport-Erfahrung
2. **Beleuchtung:** Gute Beleuchtung (evtl. zusätzliche Lichtquellen)
3. **Trainer:** Alle Trainer in einheitlichem Stil fotografieren
4. **Facility:** Fotos ohne Personen oder mit trainierenden Athleten
5. **Zeitpunkt:** Goldene Stunde vermeiden (Innenaufnahmen)

---

## KI-Generierte Bilder - Prompts

Falls die Bilder mit KI generiert werden sollen (z.B. Midjourney, DALL-E, Stable Diffusion):

### Allgemeine Negative Prompts (für alle Bilder)

```
cartoon, anime, illustration, drawing, painting, blurry, low quality,
distorted faces, extra limbs, deformed, watermark, logo, text
```

---

### Hero-Hintergrundbild

**Variante 1 - Gym-Interior:**
```
Professional MMA gym interior, dramatic lighting, octagon cage in the background,
punching bags hanging, dark moody atmosphere, cinematic, depth of field, 
high-end sports facility, modern industrial design, 8k, photorealistic --ar 16:9
```

**Variante 2 - Training-Action:**
```
MMA fighter training in a professional gym, motion blur, dramatic spotlight,
dark background with red accent lighting, cage visible in background,
epic atmosphere, cinematic composition, focus on the right side --ar 16:9
```

---

### Trainer-Portraits

**Allgemeiner Basis-Prompt:**
```
Professional portrait of a [male/female] martial arts coach, 
athletic build, confident expression, dark gym background with soft lighting,
wearing [specific gear], 4:5 aspect ratio, photorealistic, studio quality,
sharp focus on face, bokeh background --ar 4:5
```

**Anatolij (Head Coach - MMA/Boxen):**
```
Professional portrait of a confident male MMA head coach, mid-30s, 
athletic muscular build, short hair, wearing black branded rashguard,
MMA gloves visible, dark gym background with red accent lights,
powerful stance, professional sports photography --ar 4:5
```

**Marc (Kickboxen/Thaiboxen):**
```
Professional portrait of a male kickboxing coach, athletic build,
wearing Muay Thai shorts and hand wraps, confident fighter stance,
dark gym environment, dramatic side lighting, photorealistic --ar 4:5
```

**Paul (Kickboxen/Thaiboxen):**
```
Professional portrait of a young male Thai boxing instructor,
athletic lean build, wearing kickboxing gear, focused intense expression,
dark moody gym background, cinematic lighting, photorealistic --ar 4:5
```

**Axel (BJJ):**
```
Professional portrait of a male Brazilian Jiu-Jitsu instructor,
wearing a black or blue BJJ gi, athletic build, calm confident expression,
dark dojo background, soft professional lighting, photorealistic --ar 4:5
```

**Anastasia (Kids Club):**
```
Professional portrait of a friendly female fitness instructor,
warm approachable smile, athletic build, wearing sports clothing,
bright but soft lighting, clean gym background, welcoming expression,
photorealistic, suitable for children's program --ar 4:5
```

**Daniel (Kids Club):**
```
Professional portrait of a friendly young male fitness instructor,
warm genuine smile, athletic build, wearing sports polo shirt,
clean modern gym background, approachable and trustworthy appearance,
photorealistic, suitable for children's program --ar 4:5
```

---

### Facility-Bilder

**MMA Cage:**
```
Professional MMA octagon cage inside modern gym, 8x8 meters,
black cage fence with padded posts, blue competition mats,
dramatic overhead lighting, empty cage ready for training,
high-end sports facility, architectural photography --ar 4:3
```

**Fitness Bereich:**
```
Modern gym fitness area, weight racks with dumbbells and barbells,
cable machines, rubber flooring, professional lighting,
clean organized space, high-end equipment, no people,
interior architecture photography --ar 4:3
```

**Haupttrainingsfläche (300qm):**
```
Large martial arts training floor, 300 square meters, blue and red training mats,
hanging heavy bags, mirrors on walls, professional gym lighting,
spacious open training area, modern sports facility design,
architectural interior photography --ar 4:3
```

**Zweite Trainingsfläche (100qm):**
```
Secondary martial arts training room, 100 square meters,
tatami mats on floor, minimal clean design, wall-mounted mirrors,
natural and artificial lighting mix, versatile training space,
modern minimalist gym interior --ar 4:3
```

---

## Wichtige Hinweise für KI-Generierung

### 1. Konsistenz
Alle Bilder sollten einen einheitlichen Stil haben. Verwende bei allen Generierungen ähnliche Seed-Werte oder Style-References.

### 2. Nachbearbeitung
KI-generierte Bilder sollten nachbearbeitet werden für:
- Farbkorrektur (einheitliche Farbtemperatur)
- Gesichter prüfen (Hände und Gesichter sind oft fehlerhaft)
- Komprimierung für Web-Optimierung (TinyPNG, Squoosh)

### 3. Rechtliche Hinweise
- Für Trainer-Bilder werden **echte Fotos empfohlen**, da KI-Gesichter rechtliche Fragen aufwerfen können und weniger authentisch wirken
- KI-generierte Bilder sollten gekennzeichnet werden falls rechtlich erforderlich
- Bei kommerzieller Nutzung Lizenzbedingungen des KI-Tools prüfen

---

## Priorisierung

| Priorität | Bilder | Grund |
|-----------|--------|-------|
| **Hoch** | Trainer-Bilder (6x) | Aktuell werden Bilder doppelt verwendet - unprofessionell |
| **Mittel** | Hero-Hintergrundbild | Sichtbarstes Element der Website |
| **Niedrig** | Facility-Bilder (4x) | Platzhalter funktionieren bereits |

---

## Code-Änderungen nach Bilderhalt

Nach Erhalt der neuen Trainer-Bilder muss die Datei `src/components/Coaches.tsx` aktualisiert werden:

```typescript
// Alte Imports ersetzen:
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

// Durch individuelle Imports:
import coachAnatolij from "@/assets/coach-anatolij.jpg";
import coachMarc from "@/assets/coach-marc.jpg";
import coachPaul from "@/assets/coach-paul.jpg";
import coachAxel from "@/assets/coach-axel.jpg";
import coachAnastasia from "@/assets/coach-anastasia.jpg";
import coachDaniel from "@/assets/coach-daniel.jpg";
```
