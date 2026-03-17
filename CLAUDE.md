# awaze-feast-hub — Claude Code Context

## Overview
Restaurant website for Awaze Ethiopian Cuisine (Harlem, NYC). Single-page React app.

## Stack
- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3 + shadcn/ui (Radix primitives)
- Framer Motion for animations
- React Hook Form + Zod for form validation
- Sonner for toast notifications

## Structure
```
src/
  components/     # Page sections (Header, Hero, Menu, Photos, Hours, etc.)
  components/ui/  # shadcn/ui primitives (51 components)
  pages/          # Index.tsx (single page), NotFound.tsx
  hooks/          # use-mobile, use-toast
  lib/            # utils.ts (cn helper)
  assets/         # Images (logo, hero, dishes, gallery)
```

## Design System
- Primary color: Awaze red (#C41E3A)
- Fonts: Space Grotesk (display), Inter (body), Space Mono (mono)
- Dark mode supported (class-based via next-themes)

## Commands
- `npm run dev` — dev server on port 8080
- `npm run build` — production build
- `npm run test` — run vitest

## Known Issues
- Reservations section is a placeholder (Square Appointments widget not integrated)
- Social media links are placeholder `#` hrefs
- TypeScript strict mode is off
- Many shadcn/ui components are installed but unused
