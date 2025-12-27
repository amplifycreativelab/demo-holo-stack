# Development Tasks - HoloStack (Holographic Glassmorphism SaaS)

Source docs:

- `HoloStack/HoloStack.md`
- Reference format: `cafe-restaurant-demo/Demo 1 - Cafe - Restaurant - Tasks.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; later phases depend on earlier setup.

## Phase 0 - Project Decisions

- [ ] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [ ] Confirm primary CTA used site-wide: Start free trial.
- [ ] Confirm secondary CTA used site-wide: Request demo.
- [ ] Choose styling approach: Tailwind OR CSS tokens + modules (pick one and stick to it).
- [ ] Choose islands framework (only if needed): SolidJS OR Preact.
- [ ] Confirm pages and routes: `/`, `/features/`, `/integrations/`, `/pricing/`, `/security/`, `/contact/`.
- [ ] Confirm pricing model (tiers + monthly/annual toggle behavior).
- [ ] Confirm data sets needed: features, integrations, pricing, testimonials.

## Phase 1 - Astro Setup (SSG + GitHub Pages)

- [ ] Create Astro 4 project (static output / SSG).
- [ ] Configure `astro.config.mjs` with `site` + `base` placeholders for GitHub Pages.
- [ ] Enable Astro View Transitions globally.
- [ ] Ensure internal links and asset URLs work under the base path (no hard-coded `/`).
- [ ] Add/verify scripts: `dev`, `build`, `preview`.
- [ ] Add fonts (Sora + Inter) and confirm they load with good FOIT/FOUT behavior.
- [ ] Set up `astro:assets` and add placeholder assets (OG image, icons, any product screenshots).
- [ ] If using islands: install the Astro integration for Solid/Preact.
- [ ] If using Motion One in islands: add the `motion` dependency and keep it scoped to islands.

## Phase 2 - Design System (Holo Glass)

- [ ] Create tokens (CSS variables or Tailwind theme) for the exact palette:
  - [ ] Night `#070A12`
  - [ ] Glass `rgba(255,255,255,0.08)` and strong `rgba(255,255,255,0.12)`
  - [ ] Edge/border `rgba(255,255,255,0.18)`
  - [ ] Text primary `#EAF0FF`, muted `rgba(234,240,255,0.70)`
  - [ ] Accents: Holo A `#7C5CFF`, Holo B `#00E5FF`, Signal `#FF4D8D`
- [ ] Implement layered background fields (required):
  - [ ] Large radial gradients ("light blobs") using holo accents at 5-12% opacity max
  - [ ] Asymmetric placement for depth (no flat background behind glass)
- [ ] Implement glass construction rules:
  - [ ] Mandatory: `backdrop-filter: blur(18px) saturate(160%)`
  - [ ] Add fallback for browsers without `backdrop-filter` (solid/less transparent panel)
  - [ ] 1px bright edge (no heavy outlines) + soft controlled directional shadows
- [ ] Typography scale:
  - [ ] H1 uses `clamp(2.2rem, 5vw, 4.8rem)`
  - [ ] Ensure H2/H3 feel editorial (not hype-y) and remain readable on glass
- [ ] Implement focus-visible styles and ensure contrast passes (especially text on glass panels).
- [ ] Implement `prefers-reduced-motion` baseline (disable non-essential motion effects).

## Phase 3 - Core Layout & Shared Components

- [ ] Create `src/layouts/MainLayout.astro` with:
  - [ ] Skip link
  - [ ] Header/nav + footer
  - [ ] SEO meta slots/placeholders (title/description/canonical/OG/Twitter)
  - [ ] Base background layers and global styles
- [ ] Build core components (deliverables):
  - [ ] `GlassPanel.astro` (supports multiple intensities and edge/shadow variants)
  - [ ] `HoloButton.astro` (primary/secondary; glow only on hover; strong focus-visible ring)
  - [ ] `BentoGlassGrid.astro` (hero bento grid layout)
  - [ ] `PricingToggleIsland.tsx` (monthly/annual toggle, minimal JS)
- [ ] Add supporting components as needed:
  - [ ] `FeatureCard.astro` (data-forward cards; icon micro-interactions)
  - [ ] `IntegrationCloud.astro` (icon cloud inside a large glass container)
  - [ ] `PricingTierCard.astro` (tiers + "Most Popular" label)
  - [ ] `TestimonialCard.astro`
  - [ ] `TrustBadge.astro` (for Security page)

## Phase 4 - Data Layer (Static + Typed)

- [ ] Create `src/data/features.ts` (typed) and add realistic sample feature content.
- [ ] Create `src/data/integrations.ts` (typed) and add integration icons/names/categories.
- [ ] Create `src/data/pricing.ts` (typed) with tiers, feature lists, and monthly/annual pricing.
- [ ] Create `src/data/testimonials.ts` (typed) with quotes, names, roles, and optional avatars.

## Phase 5 - Pages (IA + Conversion)

### Home (`src/pages/index.astro`)

- [ ] Hero: layered holo background + bento glass grid + clear value proposition.
- [ ] Above-the-fold CTAs: Start free trial (primary) + Request demo (secondary).
- [ ] Features preview section (render from `features.ts`).
- [ ] Integrations preview (icon cloud inside glass).
- [ ] Testimonials section (render from `testimonials.ts`).

### Features (`src/pages/features/index.astro`)

- [ ] Full feature list with data-forward cards and crisp hierarchy.

### Integrations (`src/pages/integrations/index.astro`)

- [ ] Integration cloud inside a large glass container.
- [ ] Optional depth layering effect (must remain subtle and readable).

### Pricing (`src/pages/pricing/index.astro`)

- [ ] Pricing tiers rendered from `pricing.ts` with one highlighted ("Most Popular").
- [ ] Wire `PricingToggleIsland.tsx` to switch monthly/annual prices.
- [ ] Clear conversion CTAs and FAQ/support blocks as needed (keep copy minimal).

### Security (`src/pages/security/index.astro`)

- [ ] Trust strip with compliance badges.
- [ ] Reduced glass usage; more structure and clarity than other pages.

### Contact (`src/pages/contact/index.astro`)

- [ ] Demo request form UI (non-functional OK) with accessible labels.
- [ ] Reinforce conversion CTAs and link back to Pricing.

## Phase 6 - Motion (Light Refraction) + Reduced Motion

- [ ] Scroll-linked light interaction:
  - [ ] Use CSS Scroll-Timeline where supported
  - [ ] Provide minimal-JS fallback otherwise
  - [ ] Effects: slight gradient shift + brief edge highlight intensification
- [ ] Hover interactions:
  - [ ] Panel tilt limited to 1-2 degrees max + specular sweep (no excessive blur/glow)
  - [ ] Buttons glow only on hover (no idle pulsing)
  - [ ] Icons micro-lift + opacity change
- [ ] View Transitions enabled site-wide; keep transitions fast and restrained.
- [ ] Reduced motion behavior:
  - [ ] Disable tilt, gradient sweeps, and scroll-linked highlights
  - [ ] Keep layout and readability intact

## Phase 7 - SEO & Semantics

- [ ] Set per-page titles + meta descriptions (conversion-focused, not fluffy).
- [ ] Canonical URLs respect `site` + `base`.
- [ ] Add OpenGraph + Twitter meta with placeholder OG image.
- [ ] Inject JSON-LD:
  - [ ] `SoftwareApplication`
  - [ ] `Organization`
- [ ] Ensure clean heading structure (one H1 per page).

## Phase 8 - Accessibility & UX Checks

- [ ] Keyboard navigation works across nav, panels, and forms.
- [ ] Focus-visible is obvious on glass backgrounds.
- [ ] Contrast checks pass (especially for muted text on glass panels).
- [ ] Reduced motion mode disables non-essential animation without hiding information.

## Phase 9 - Performance, QA & Deployment

- [ ] Keep glass effects performant:
  - [ ] Limit the number/size of `backdrop-filter` panels on screen
  - [ ] Avoid stacking multiple translucent layers unnecessarily
- [ ] Use `astro:assets` for images where possible (sizing, lazy-load, formats).
- [ ] Verify build works under GitHub Pages base path (no broken links/assets).
- [ ] Add a minimal `README.md` with install/dev/build/preview + GH Pages base path notes + reduced motion notes.

## Optional / Bonus

- [ ] Add a small feature comparison toggle (island) if it improves conversion.
- [ ] Add a dedicated "Alert/Signal" example UI state using Signal `#FF4D8D` (errors/urgent) without overwhelming the palette.
