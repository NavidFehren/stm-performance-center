# STM Performance Center

## Tech Stack

- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.19
- **Routing:** React Router v6.30.1
- **Styling:** Tailwind CSS 3.4.17 with custom utilities
- **UI Library:** shadcn/ui components (built on Radix UI)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Carousel:** Embla Carousel

## Project Structure

```
/src
├── pages/
│   ├── Index.tsx          # Main landing page
│   └── NotFound.tsx       # 404 page
├── components/
│   ├── Header.tsx         # Fixed navigation bar
│   ├── Hero.tsx           # Full-screen hero section
│   ├── About.tsx          # "More than a gym" section
│   ├── Programs.tsx       # Training program cards
│   ├── Schedule.tsx       # Class schedule
│   ├── Coaches.tsx        # Coach profiles
│   ├── Facility.tsx       # Image gallery carousel
│   ├── Pricing.tsx        # 3-tier pricing cards
│   ├── Testimonials.tsx   # Member testimonials
│   ├── FAQ.tsx            # Accordion FAQ
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer with links
│   └── ui/                # 50+ shadcn/ui components
├── assets/                # Images
├── hooks/                 # Custom React hooks
├── lib/
│   └── utils.ts           # cn utility for classnames
├── App.tsx                # Router setup
├── main.tsx               # React DOM entry
└── index.css              # Global styles + CSS variables
```

## Styling

- **Theme:** Dark MMA gym aesthetic
- **Colors:** HSL-based CSS variables in `index.css`
- **Fonts:** Oswald (headings), Inter (body)
- **Custom Classes:**
  - `.gradient-text` - white gradient text effect
  - `.gradient-border` - gradient border effect
  - `.section-padding` - consistent section spacing
  - `.container-custom` - max-width container with padding
  - `.card-hover` - hover animation for cards

## Navigation

Single-page app with anchor navigation:
- About (#about)
- Programs (#programs)
- Schedule (#schedule)
- Coaches (#coaches)
- Facility (#facility)
- Pricing (#pricing)
- Contact (#contact)

## Component Pattern

```tsx
import { Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComponentName = () => {
  return (
    <section id="section-id" className="section-padding">
      <div className="container-custom">
        {/* Content */}
      </div>
    </section>
  );
};

export default ComponentName;
```

## Development

- **Development Server:** http://localhost:8080/stm-performance-center/

## Git Conventions

- **Commit messages:** Always in English
