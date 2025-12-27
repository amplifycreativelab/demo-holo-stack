# HoloStack v2.0 — Enhanced Specification
## Senior Expert Prompt — "HoloStack" (Astro + High-End Glassmorphism SaaS / Holographic UI)

**Role:** Principal Frontend Architect & Motion Systems Engineer (15+ years experience)

You design interfaces where visual complexity is carefully engineered, not decorative. This demo must prove that glassmorphism can be premium, readable, and conversion-driven, not blurry or novelty-driven.

---

## DEEP REASONING CHAIN

### 1. Architectural Analysis & Problem Identification

#### Critical Issues in Current Implementation:

**1.1 Tech Stack Inconsistency**
- **Problem:** [`PricingToggleIsland.tsx`](src/components/PricingToggleIsland.tsx:1) uses SolidJS (`createSignal` from "solid-js") while the rest of the project is Astro + React ecosystem
- **Impact:** Bundle bloat (two reactive frameworks), developer cognitive load, inconsistent patterns
- **Solution:** Migrate to React islands using `@astrojs/react` for consistency

**1.2 Accessibility Violations (WCAG 2.1 AA)**
- **Missing Focus States:** Glass panels and buttons lack visible focus indicators
- **ARIA Label Gaps:** Interactive elements without proper labeling
- **Color Contrast Risk:** Text on glass backgrounds may fail 4.5:1 ratio on certain displays
- **Motion Sensitivity:** Reduced motion implementation is incomplete

**1.3 Performance Anti-Patterns**
- **Excessive Backdrop Filter:** Every glass element applies `backdrop-filter: blur(18px)`, causing GPU overload
- **Missing GPU Acceleration:** Animations lack `will-change` and `transform` optimization
- **Unoptimized Blobs:** Background blobs animate continuously even when off-screen
- **No Intersection Observer:** Scroll animations trigger regardless of viewport presence

**1.4 Visual Differentiation Failure**
- **Generic Animations:** Standard hover effects (scale, translate) are ubiquitous
- **Predictable Layouts:** Grid-based bento boxes are overused in modern SaaS
- **Lack of Identity:** Could be mistaken for any glassmorphism template

**1.5 Edge Case Blindness**
- **No Print Styles:** Glass effects break in print media
- **Browser Compatibility:** No fallbacks for Safari backdrop-filter bugs
- **Touch Device Issues:** Hover effects don't translate to touch interactions
- **Low-End Device Support:** No progressive enhancement for 4K displays

**1.6 Component Architecture Gaps**
- **Missing Primitives:** No Modal, Accordion, or Toast components
- **Hard-Coded Values:** Magic numbers scattered throughout (e.g., `blur-[120px]`, `w-[600px]`)
- **No Design Tokens:** Colors and spacing lack systematic abstraction

---

## ENHANCED DESIGN PHILOSOPHY

### "Optical Depth, Not Visual Noise"

This UI should feel:

**Architectural, not decorative** — Every glass layer serves a purpose
**Measured, not maximalist** — Motion and effects exist to guide, not distract
**Accessible, not exclusive** — Premium experience for all abilities
**Performant, not pretty** — 60fps is non-negotiable

### Core Principles:

1. **Progressive Glassmorphism:** Start with solid, enhance with glass when performance allows
2. **Intentful Motion:** Every animation must answer "Why does this move?"
3. **Universal Design:** WCAG AAA compliance, not just AA
4. **Performance Budget:** 3MB total, 100KB critical path, <1s LCP

---

## 0) NON-NEGOTIABLES (Enhanced)

### 0.1 Technical Requirements
- **Astro 4.x SSG** with GitHub Pages compatibility (correct base path)
- **React Islands** via `@astrojs/react` (no SolidJS)
- **TypeScript** strict mode throughout
- **ESLint + Prettier** with custom rules for glassmorphism

### 0.2 Conversion-First Design
- **Primary CTA:** "Start free trial" (high contrast, pulse animation on first visit)
- **Secondary CTA:** "Request demo" (glass style, subtle hover)
- **Trust Signals:** Social proof above the fold, pricing anchors visible

### 0.3 Accessibility Standards (WCAG 2.1 AAA)
- **Contrast Ratio:** Minimum 7:1 for normal text, 4.5:1 for large text
- **Focus Indicators:** 3px visible outline with offset, not just color change
- **Screen Reader Support:** All interactive elements properly labeled
- **Keyboard Navigation:** Full keyboard accessibility without mouse
- **Reduced Motion:** Complete motion disable with `prefers-reduced-motion`

### 0.4 Performance Budgets
- **LCP:** <1.2s (target 0.8s)
- **FID:** <100ms
- **CLS:** <0.1
- **TBT:** <300ms
- **Bundle Size:** <200KB gzipped for critical path

---

## 1) ENHANCED VISUAL DESIGN SYSTEM — "Holo Glass v2"

### 1.1 Comprehensive Color Tokens

```css
/* Primary Palette */
--color-night: #070A12;              /* Background base */
--color-night-elevated: #0D111A;     /* Elevated surfaces */
--color-night-surface: #131822;      /* Card backgrounds */

/* Glass Opacities (Performance-Optimized) */
--color-glass-light: rgba(255, 255, 255, 0.06);
--color-glass-medium: rgba(255, 255, 255, 0.10);
--color-glass-strong: rgba(255, 255, 255, 0.14);

/* Border System */
--color-glass-edge-subtle: rgba(255, 255, 255, 0.12);
--color-glass-edge: rgba(255, 255, 255, 0.18);
--color-glass-edge-strong: rgba(255, 255, 255, 0.25);

/* Text Hierarchy */
--color-text-primary: #EAF0FF;       /* 7:1 contrast on night */
--color-text-secondary: rgba(234, 240, 255, 0.85);
--color-text-muted: rgba(234, 240, 255, 0.60);
--color-text-disabled: rgba(234, 240, 255, 0.40);

/* Holographic Accents (Semantic) */
--color-holo-primary: #7C5CFF;       /* Primary actions, CTAs */
--color-holo-secondary: #00E5FF;     /* Secondary accents, tech elements */
--color-holo-tertiary: #FF4D8D;     /* Alerts, errors, warnings */
--color-holo-success: #00D9A5;      /* Success states, confirmations */

/* Semantic States */
--color-state-hover: rgba(255, 255, 255, 0.15);
--color-state-active: rgba(255, 255, 255, 0.20);
--color-state-focus: rgba(124, 92, 255, 0.30);
--color-state-disabled: rgba(255, 255, 255, 0.05);

/* Shadow System (Directional, Layered) */
--shadow-glass-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
--shadow-glass-md: 0 4px 16px rgba(0, 0, 0, 0.4);
--shadow-glass-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
--shadow-glass-xl: 0 16px 64px rgba(0, 0, 0, 0.6);
--shadow-glass-glow: 0 0 40px rgba(124, 92, 255, 0.15);

/* Gradient Mesh (Background) */
--gradient-mesh-1: radial-gradient(ellipse at 20% 20%, rgba(124, 92, 255, 0.08) 0%, transparent 50%);
--gradient-mesh-2: radial-gradient(ellipse at 80% 80%, rgba(0, 229, 255, 0.06) 0%, transparent 50%);
--gradient-mesh-3: radial-gradient(ellipse at 50% 50%, rgba(124, 92, 255, 0.04) 0%, transparent 60%);
```

### 1.2 Typography System (Enhanced)

**Font Stack:**
```css
--font-display: "Sora", system-ui, -apple-system, sans-serif;
--font-body: "Inter Variable", "Inter", system-ui, sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

**Type Scale (Fluid):**
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);    /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);      /* 14-16px */
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);      /* 16-18px */
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);     /* 18-20px */
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);     /* 20-24px */
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);       /* 24-30px */
--text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem); /* 30-36px */
--text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);      /* 36-48px */
--text-5xl: clamp(3rem, 2.4rem + 3vw, 4.5rem);           /* 48-72px */
```

**Letter Spacing (Optical Adjustment):**
```css
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

**Line Height (Reading Comfort):**
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### 1.3 Spacing System (8pt Grid)

```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

### 1.4 Border Radius System

```css
--radius-sm: 0.5rem;    /* 8px */
--radius-md: 0.75rem;   /* 12px */
--radius-lg: 1rem;      /* 16px */
--radius-xl: 1.5rem;    /* 24px */
--radius-2xl: 2rem;     /* 32px */
--radius-3xl: 3rem;     /* 48px */
--radius-full: 9999px;
```

### 1.5 Enhanced Glass Construction Rules

**Mandatory Glass Effect (Performance-Optimized):**
```css
.glass {
    /* Core glass properties */
    background: var(--color-glass-medium);
    border: 1px solid var(--color-glass-edge);
    box-shadow: var(--shadow-glass-md);

    /* Backdrop filter (with Safari fallback) */
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);

    /* GPU acceleration */
    transform: translateZ(0);
    will-change: transform;

    /* Smooth transitions */
    transition: 
        background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-strong {
    background: var(--color-glass-strong);
    border: 1px solid var(--color-glass-edge-strong);
    box-shadow: var(--shadow-glass-lg);
    backdrop-filter: blur(20px) saturate(170%);
    -webkit-backdrop-filter: blur(20px) saturate(170%);
}
```

**Background Layers (Optimized):**
```css
/* Gradient mesh instead of animated blobs */
.bg-gradient-mesh {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    background:
        var(--gradient-mesh-1),
        var(--gradient-mesh-2),
        var(--gradient-mesh-3);
    background-blend-mode: screen;
    opacity: 0.6;
}

/* Subtle parallax on scroll (Intersection Observer) */
.bg-gradient-mesh.parallax-active {
    transform: translateY(calc(var(--scroll-y) * 0.1));
    transition: transform 0.1s linear;
}
```

**Borders (Multi-Layered):**
```css
/* Primary border */
.glass::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(255, 255, 255, 0.1) 100%
    );
    -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}

/* Focus ring (accessibility) */
.glass:focus-visible::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: inherit;
    border: 2px solid var(--color-holo-primary);
    pointer-events: none;
}
```

**Shadows (Directional Depth):**
```css
/* Top-left light source simulation */
.glass {
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.1),    /* Top highlight */
        inset 0 -1px 0 rgba(0, 0, 0, 0.1),         /* Bottom shadow */
        0 4px 16px rgba(0, 0, 0, 0.3),             /* Drop shadow */
        0 0 32px rgba(124, 92, 255, 0.05);         /* Ambient glow */
}
```

---

## 2) ENHANCED MOTION STRATEGY — "Optical Refraction v2"

### 2.1 Motion Principles

**Every Animation Must:**
1. **Guide Attention:** Draw eye to conversion points
2. **Provide Feedback:** Confirm user actions
3. **Create Depth:** Establish spatial hierarchy
4. **Respect Preferences:** Honor `prefers-reduced-motion`

**Motion Budget:**
- **Entry Animations:** <500ms total
- **Hover Effects:** <300ms
- **Scroll Animations:** Trigger only when 80% visible
- **Idle Animations:** Disabled by default

### 2.2 Scroll Behavior (Intersection Observer)

```javascript
// Optimized scroll-linked animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.2, 0.5, 0.8, 1]
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const element = entry.target;
        
        if (entry.isIntersecting) {
            // Add visible class when 20% in view
            if (entry.intersectionRatio >= 0.2) {
                element.classList.add('scroll-visible');
            }
            
            // Add fully-visible class when 80% in view
            if (entry.intersectionRatio >= 0.8) {
                element.classList.add('scroll-fully-visible');
            }
        } else {
            // Remove when completely out of view
            if (entry.intersectionRatio === 0) {
                element.classList.remove('scroll-visible', 'scroll-fully-visible');
            }
        }
    });
}, observerOptions);
```

**CSS Scroll Animations:**
```css
/* Entry animation (staggered) */
.scroll-animate {
    opacity: 0;
    transform: translateY(20px);
    transition: 
        opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Stagger delays */
.scroll-animate:nth-child(1) { transition-delay: 0ms; }
.scroll-animate:nth-child(2) { transition-delay: 50ms; }
.scroll-animate:nth-child(3) { transition-delay: 100ms; }
.scroll-animate:nth-child(4) { transition-delay: 150ms; }
.scroll-animate:nth-child(5) { transition-delay: 200ms; }
.scroll-animate:nth-child(6) { transition-delay: 250ms; }

/* Edge highlight on scroll (CSS Scroll-Timeline) */
@supports (animation-timeline: scroll()) {
    .scroll-highlight {
        animation: edge-highlight linear both;
        animation-timeline: view();
        animation-range: entry 10% cover 30%;
    }

    @keyframes edge-highlight {
        0% {
            border-color: var(--color-glass-edge);
            box-shadow: var(--shadow-glass-md);
        }
        50% {
            border-color: var(--color-glass-edge-strong);
            box-shadow: var(--shadow-glass-glow);
        }
        100% {
            border-color: var(--color-glass-edge);
            box-shadow: var(--shadow-glass-md);
        }
    }
}
```

### 2.3 Hover Interactions (Enhanced)

**Glass Panels:**
```css
.glass-interactive {
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-interactive:hover {
    transform: translateY(-4px) scale(1.01);
    background: var(--color-state-hover);
    border-color: var(--color-glass-edge-strong);
    box-shadow: 
        var(--shadow-glass-lg),
        0 0 40px rgba(124, 92, 255, 0.1);
}

/* Specular gradient sweep */
.glass-interactive::before {
    content: '';
    position: absolute;
    inset: -100%;
    background: linear-gradient(
        105deg,
        transparent 40%,
        rgba(255, 255, 255, 0.08) 45%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.08) 55%,
        transparent 60%
    );
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
}

.glass-interactive:hover::before {
    transform: translateX(100%);
}
```

**Buttons:**
```css
/* Primary button */
.btn-primary {
    background: var(--color-holo-primary);
    color: white;
    border: none;
    box-shadow: 0 4px 16px rgba(124, 92, 255, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
    background: #8B6DFF;
    box-shadow: 
        0 8px 24px rgba(124, 92, 255, 0.4),
        0 0 40px rgba(124, 92, 255, 0.2);
    transform: translateY(-2px);
}

.btn-primary:active {
    transform: translateY(0) scale(0.98);
}

/* Secondary button (glass) */
.btn-secondary {
    background: var(--color-glass-medium);
    border: 1px solid var(--color-glass-edge);
    color: var(--color-text-primary);
    backdrop-filter: blur(16px) saturate(150%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
    background: var(--color-state-hover);
    border-color: var(--color-glass-edge-strong);
    transform: translateY(-2px);
}
```

**Icons:**
```css
.icon-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-hover:hover {
    transform: scale(1.1) rotate(5deg);
    color: var(--color-holo-secondary);
    filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.5));
}
```

### 2.4 Navigation (View Transitions API)

```javascript
// Enhanced page transitions
document.addEventListener('astro:after-preparation', () => {
    document.documentElement.style.viewTransitionName = 'page-transition';
});

// Custom transition types
const transitionTypes = {
    fade: 'fade',
    slide: 'slide',
    scale: 'scale',
    morph: 'morph'
};

// Apply transition based on route
const getTransitionType = (from, to) => {
    // Determine transition type based on route hierarchy
    if (to.includes('pricing')) return transitionTypes.scale;
    if (to.includes('features')) return transitionTypes.slide;
    return transitionTypes.fade;
};
```

**CSS Transitions:**
```css
/* Fade transition */
::view-transition-old(page-transition),
::view-transition-new(page-transition) {
    animation-duration: 0.4s;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

::view-transition-old(page-transition) {
    animation: fade-out 0.4s ease-out;
}

::view-transition-new(page-transition) {
    animation: fade-in 0.4s ease-out;
}

@keyframes fade-out {
    from { opacity: 1; }
    to { opacity: 0; }
}

@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Scale transition (for pricing) */
::view-transition-old(page-transition.scale) {
    animation: scale-out 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

::view-transition-new(page-transition.scale) {
    animation: scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes scale-out {
    from { 
        opacity: 1;
        transform: scale(1);
    }
    to { 
        opacity: 0;
        transform: scale(0.95);
    }
}

@keyframes scale-in {
    from { 
        opacity: 0;
        transform: scale(1.05);
    }
    to { 
        opacity: 1;
        transform: scale(1);
    }
}
```

### 2.5 Reduced Motion (Complete Implementation)

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

    /* Disable all non-essential motion */
    .bg-blob,
    .specular-sweep,
    .scroll-animate,
    .icon-hover,
    .glass-interactive::before {
        animation: none !important;
        transition: none !important;
        transform: none !important;
    }

    /* Keep layout and clarity */
    .glass-interactive:hover {
        transform: none;
        background: var(--color-state-hover);
    }

    /* Focus states still work */
    .glass:focus-visible::after {
        animation: none;
    }
}
```

---

## 3) ENHANCED ARCHITECTURE & DATA

### 3.1 Component Architecture

**Component Hierarchy:**
```
src/
├── components/
│   ├── atoms/           # Smallest reusable units
│   │   ├── GlassPanel.astro
│   │   ├── HoloButton.astro
│   │   ├── HoloIcon.astro
│   │   └── HoloBadge.astro
│   ├── molecules/       # Combinations of atoms
│   │   ├── BentoGlassGrid.astro
│   │   ├── FeatureCard.astro
│   │   ├── TestimonialCard.astro
│   │   └── PricingCard.astro
│   ├── organisms/       # Complex sections
│   │   ├── HeroSection.astro
│   │   ├── FeaturesSection.astro
│   │   ├── PricingSection.astro
│   │   └── TestimonialsSection.astro
│   ├── templates/       # Page templates
│   │   └── PageTemplate.astro
│   └── islands/         # Interactive React components
│       ├── PricingToggleIsland.tsx
│       ├── ModalIsland.tsx
│       ├── AccordionIsland.tsx
│       └── ToastIsland.tsx
```

### 3.2 Data Files (TypeScript)

**features.ts (Enhanced):**
```typescript
export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
    category: 'core' | 'security' | 'performance' | 'visualization';
    isNew?: boolean;
    isPro?: boolean;
}

export const features: Feature[] = [
    {
        id: "neural-sync",
        title: "Neural Sync",
        description: "Distributed infrastructure that scales with zero manual intervention. Adapts to load spikes in microseconds.",
        icon: "Zap",
        category: "core",
        isNew: true
    },
    {
        id: "quantum-sec",
        title: "Quantum Secure",
        description: "Post-quantum encryption algorithms protect your data against the threats of tomorrow. Zero-trust by default.",
        icon: "Lock",
        category: "security"
    },
    {
        id: "edge-compute",
        title: "Edge Substrate",
        description: "Deploy logic globally within 400ms. The world is your server with our distributed edge compute mesh.",
        icon: "Cpu",
        category: "performance"
    },
    {
        id: "holographic-viz",
        title: "Holo Viz",
        description: "Real-time 3D data visualization that brings your metrics to life. See your stack like never before.",
        icon: "Globe",
        category: "visualization",
        isPro: true
    }
];

export const featureCategories = [
    { id: 'all', label: 'All Features' },
    { id: 'core', label: 'Core Infrastructure' },
    { id: 'security', label: 'Security' },
    { id: 'performance', label: 'Performance' },
    { id: 'visualization', label: 'Visualization' }
] as const;
```

**pricing.ts (Enhanced):**
```typescript
export interface PricingPlan {
    id: string;
    name: string;
    monthlyPrice: number;
    annualPrice: number;
    description: string;
    features: PricingFeature[];
    isPopular?: boolean;
    ctaText?: string;
    badgeText?: string;
}

export interface PricingFeature {
    text: string;
    included: boolean;
    tooltip?: string;
}

export const pricingPlans: PricingPlan[] = [
    {
        id: "starter",
        name: "Starter",
        monthlyPrice: 0,
        annualPrice: 0,
        description: "Perfect for exploring the holographic future.",
        features: [
            { text: "5 Neural Nodes", included: true },
            { text: "Standard Encryption", included: true },
            { text: "Community Support", included: true },
            { text: "Basic Analytics", included: true },
            { text: "Quantum Encryption", included: false, tooltip: "Available on Pro plan" },
            { text: "Custom Domains", included: false }
        ],
        ctaText: "Get Started Free",
        badgeText: "Free Forever"
    },
    {
        id: "pro",
        name: "Pro",
        monthlyPrice: 49,
        annualPrice: 39,
        description: "Advanced stack for high-growth teams.",
        features: [
            { text: "Unlimited Nodes", included: true },
            { text: "Quantum Encryption", included: true },
            { text: "24/7 Priority Support", included: true },
            { text: "Advanced Holo Viz", included: true },
            { text: "Custom Domains", included: true },
            { text: "API Access", included: true }
        ],
        isPopular: true,
        ctaText: "Start Pro Trial",
        badgeText: "Most Popular"
    },
    {
        id: "enterprise",
        name: "Enterprise",
        monthlyPrice: 199,
        annualPrice: 159,
        description: "The ultimate substrate for scale.",
        features: [
            { text: "Global Mesh Access", included: true },
            { text: "Dedicated Infrastructure", included: true },
            { text: "White-glove Onboarding", included: true },
            { text: "Audit Logs & SSO", included: true },
            { text: "Custom SLA", included: true },
            { text: "Dedicated Account Manager", included: true }
        ],
        ctaText: "Contact Sales",
        badgeText: "Enterprise"
    }
];
```

**testimonials.ts (Enhanced):**
```typescript
export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
    rating?: number;
    verified?: boolean;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        quote: "HoloStack reduced our infrastructure costs by 40% while improving performance. The neural sync feature is game-changing for our real-time applications.",
        author: "Sarah Chen",
        role: "CTO",
        company: "Nebula AI",
        rating: 5,
        verified: true
    },
    {
        id: "2",
        quote: "We deployed globally in minutes instead of days. The holographic visualization gives our team unprecedented insight into our stack.",
        author: "Marcus Rodriguez",
        role: "VP Engineering",
        company: "Quantum Labs",
        rating: 5,
        verified: true
    },
    {
        id: "3",
        quote: "Security was our top concern. HoloStack's quantum encryption gave us confidence to migrate our most sensitive workloads.",
        author: "Emily Watson",
        role: "Security Lead",
        company: "Fortress Data",
        rating: 5,
        verified: true
    }
];
```

### 3.3 React Islands (Migration from SolidJS)

**PricingToggleIsland.tsx (React version):**
```typescript
import { useState, useCallback } from 'react';
import { PricingPlan } from '../../data/pricing';

interface Props {
    plans: PricingPlan[];
    onPlanSelect?: (planId: string) => void;
}

export default function PricingToggleIsland({ plans, onPlanSelect }: Props) {
    const [isAnnual, setIsAnnual] = useState(false);

    const handlePlanSelect = useCallback((planId: string) => {
        onPlanSelect?.(planId);
    }, [onPlanSelect]);

    return (
        <div className="w-full max-w-7xl mx-auto px-6">
            {/* Toggle */}
            <div className="flex justify-center mb-16">
                <div 
                    className="glass p-1 rounded-full flex items-center gap-1"
                    role="radiogroup"
                    aria-label="Billing period"
                >
                    <button
                        onClick={() => setIsAnnual(false)}
                        role="radio"
                        aria-checked={!isAnnual}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            !isAnnual 
                                ? 'bg-holo-primary text-white shadow-lg' 
                                : 'text-text-muted hover:text-text-primary'
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsAnnual(true)}
                        role="radio"
                        aria-checked={isAnnual}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            isAnnual 
                                ? 'bg-holo-primary text-white shadow-lg' 
                                : 'text-text-muted hover:text-text-primary'
                        }`}
                    >
                        Annual{' '}
                        <span className="text-[10px] ml-1 opacity-80 uppercase tracking-tighter">
                            -20%
                        </span>
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`glass rounded-[2rem] p-10 relative flex flex-col transition-all duration-500 hover:translate-y-[-8px] ${
                            plan.isPopular 
                                ? 'border-holo-primary/50 shadow-[0_0_40px_rgba(124,92,255,0.15)] ring-1 ring-holo-primary/20' 
                                : ''
                        }`}
                    >
                        {/* Badge */}
                        {plan.badgeText && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-holo-primary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-xl">
                                {plan.badgeText}
                            </div>
                        )}

                        {/* Plan Info */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-sm text-text-muted">{plan.description}</p>
                        </div>

                        {/* Price */}
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-4xl font-bold">$</span>
                            <span className="text-6xl font-bold tracking-tighter">
                                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                            </span>
                            <span className="text-text-muted">/mo</span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-10 flex-grow">
                            {plan.features.map((feature, index) => (
                                <li 
                                    key={index}
                                    className={`flex items-center gap-3 text-sm ${
                                        feature.included 
                                            ? 'text-text-muted' 
                                            : 'text-text-disabled'
                                    }`}
                                >
                                    <div 
                                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                            feature.included 
                                                ? 'bg-holo-secondary/10' 
                                                : 'bg-white/5'
                                        }`}
                                    >
                                        {feature.included ? (
                                            <svg 
                                                className="w-3 h-3 text-holo-secondary" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="3" 
                                                    d="M5 13l4 4L19 7" 
                                                />
                                            </svg>
                                        ) : (
                                            <svg 
                                                className="w-3 h-3 text-text-disabled" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="3" 
                                                    d="M6 18L18 6M6 6l12 12" 
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <span>{feature.text}</span>
                                    {feature.tooltip && (
                                        <span 
                                            className="ml-auto text-[10px] text-text-muted cursor-help"
                                            title={feature.tooltip}
                                        >
                                            ℹ️
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <button
                            onClick={() => handlePlanSelect(plan.id)}
                            className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                                plan.isPopular 
                                    ? 'bg-holo-primary text-white hover:bg-holo-primary/90 shadow-lg shadow-holo-primary/20' 
                                    : 'bg-white/5 border border-glass-edge hover:bg-white/10'
                            }`}
                        >
                            {plan.ctaText || 'Select Plan'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
```

---

## 4) ENHANCED ACCESSIBILITY (WCAG 2.1 AAA)

### 4.1 Focus Management

**Visible Focus Indicators:**
```css
/* High-contrast focus rings */
*:focus-visible {
    outline: none;
}

*:focus-visible::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: inherit;
    border: 2px solid var(--color-holo-primary);
    box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.2);
    pointer-events: none;
}

/* Skip link for keyboard users */
.skip-link {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-holo-primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    z-index: 9999;
    transition: top 0.3s ease;
}

.skip-link:focus {
    top: 1rem;
}
```

### 4.2 ARIA Labels & Roles

**Complete ARIA Implementation:**
```astro
---
// Example: GlassPanel with full accessibility
interface Props {
    class?: string;
    intensity?: "light" | "strong";
    interactive?: boolean;
    role?: string;
    ariaLabel?: string;
    ariaDescribedby?: string;
}

const {
    class: className,
    intensity = "light",
    interactive = false,
    role,
    ariaLabel,
    ariaDescribedby,
} = Astro.props;

const intensityClass = intensity === "strong" ? "glass-strong" : "glass";
const interactiveClasses = interactive
    ? "transition-all duration-300 hover:scale-[1.01] hover:border-white/30 cursor-pointer scroll-highlight"
    : "";
---

<div
    class:list={[
        "rounded-[--radius-glass] overflow-hidden relative group",
        intensityClass,
        interactiveClasses,
        className,
    ]}
    role={interactive ? "button" : role}
    tabindex={interactive ? 0 : undefined}
    aria-label={ariaLabel}
    aria-describedby={ariaDescribedby}
>
    {interactive && <div class="specular-sweep pointer-events-none" />}
    <div class="relative z-10 h-full">
        <slot />
    </div>
</div>
```

### 4.3 Color Contrast Validation

**Contrast Checker Utility:**
```typescript
// utils/contrast.ts
export function getContrastRatio(
    foreground: string,
    background: string
): number {
    const lum1 = getLuminance(foreground);
    const lum2 = getLuminance(background);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

export function getLuminance(hex: string): number {
    const rgb = hexToRgb(hex);
    const [r, g, b] = rgb.map((c) => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function hexToRgb(hex: string): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
        ]
        : [0, 0, 0];
}

// WCAG AAA: 7:1 for normal text, 4.5:1 for large text
export function meetsAAAContrast(
    foreground: string,
    background: string,
    isLargeText = false
): boolean {
    const ratio = getContrastRatio(foreground, background);
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
}
```

### 4.4 Screen Reader Optimization

**Semantic HTML Structure:**
```astro
---
// Hero section with proper semantics
---

<section 
    aria-labelledby="hero-heading"
    class="pt-32 pb-20 px-6"
>
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <div
                class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-holo-primary/30 text-xs font-bold uppercase tracking-widest text-holo-primary mb-6"
                role="status"
                aria-live="polite"
            >
                <span 
                    class="relative flex h-2 w-2"
                    aria-hidden="true"
                >
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-holo-primary opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-holo-primary"></span>
                </span>
                v2.0 Substrate Now Live
            </div>
            
            <h1 
                id="hero-heading"
                class="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto"
            >
                Scale with the speed of{' '}
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-holo-primary to-holo-secondary">
                    Optics
                </span>.
            </h1>
            
            <p 
                class="text-text-muted text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
                HoloStack is the world's first holographic infrastructure
                layer. Designed for extreme performance and effortless
                scaling.
            </p>
            
            <div 
                class="flex flex-col sm:flex-row items-center justify-center gap-4"
                role="group"
                aria-label="Call to action buttons"
            >
                <HoloButton 
                    href={`${baseUrl}contact`} 
                    showIcon
                    aria-label="Start free trial"
                >
                    Start free trial
                </HoloButton>
                <HoloButton 
                    href={`${baseUrl}pricing`} 
                    variant="secondary"
                    aria-label="View pricing plans"
                >
                    View pricing
                </HoloButton>
            </div>
        </div>
        
        <BentoGlassGrid aria-label="Feature showcase" />
    </div>
</section>
```

---

## 5) ENHANCED PERFORMANCE OPTIMIZATION

### 5.1 Critical CSS Extraction

**Critical Path Optimization:**
```css
/* critical.css - Inline in head */
:root {
    color-scheme: dark;
}

body {
    background: #070A12;
    color: #EAF0FF;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
}

/* Critical glass styles (above the fold) */
.glass {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
}

/* Critical typography */
h1, h2, h3, h4, h5, h6 {
    font-family: "Sora", system-ui, sans-serif;
    font-weight: 600;
    letter-spacing: -0.025em;
}

/* Critical layout */
.container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.5rem;
}
```

### 5.2 Image Optimization

**Responsive Images:**
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../images/hero.webp';
---

<picture>
    <source 
        srcset={heroImage.srcset} 
        type="image/webp"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    <Image
        src={heroImage}
        alt="HoloStack dashboard showing holographic visualization"
        width={1200}
        height={800}
        loading="eager"
        decoding="async"
        class="w-full h-auto rounded-2xl"
    />
</picture>
```

### 5.3 Code Splitting & Lazy Loading

**Dynamic Imports:**
```typescript
// Lazy load non-critical components
const PricingToggleIsland = lazy(() => 
    import('../../components/islands/PricingToggleIsland')
);

const ModalIsland = lazy(() => 
    import('../../components/islands/ModalIsland')
);

// Preload critical components
import { preloadComponent } from 'astro:preload';
preloadComponent('../../components/Header.astro');
preloadComponent('../../components/Footer.astro');
```

### 5.4 Service Worker for Caching

**Service Worker Registration:**
```typescript
// sw.js
const CACHE_NAME = 'holostack-v2';
const urlsToCache = [
    '/',
    '/features',
    '/pricing',
    '/styles/global.css',
    '/fonts/sora.woff2',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
```

---

## 6) ENHANCED COMPONENTS

### 6.1 Modal Component

```astro
---
// src/components/Modal.astro
interface Props {
    id: string;
    title: string;
    isOpen?: boolean;
    onClose?: () => void;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const { id, title, isOpen = false, onClose, size = 'md' } = Astro.props;

const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
};
---

<div
    id={id}
    class={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}
    role="dialog"
    aria-modal="true"
    aria-labelledby={`${id}-title`}
>
    <!-- Backdrop -->
    <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
    ></div>
    
    <!-- Modal Content -->
    <div
        class={`relative glass-strong rounded-[2rem] p-8 w-full ${sizeClasses[size]} transform transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
    >
        <!-- Close Button -->
        <button
            onClick={onClose}
            class="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
        >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        
        <!-- Modal Header -->
        <h2 id={`${id}-title`} class="text-2xl font-bold mb-4">
            {title}
        </h2>
        
        <!-- Modal Body -->
        <div class="mb-6">
            <slot />
        </div>
        
        <!-- Modal Footer -->
        <div class="flex justify-end gap-3">
            <slot name="footer" />
        </div>
    </div>
</div>

<script>
    const modal = document.getElementById('{id}');
    const closeOnEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            // Trigger close
        }
    };
    
    if (modal) {
        modal.addEventListener('keydown', closeOnEscape);
    }
</script>
```

### 6.2 Accordion Component

```astro
---
// src/components/Accordion.astro
interface AccordionItem {
    id: string;
    title: string;
    content: string;
    isOpen?: boolean;
}

interface Props {
    items: AccordionItem[];
    allowMultiple?: boolean;
}

const { items, allowMultiple = false } = Astro.props;
---

<div class="space-y-4">
    {items.map((item, index) => (
        <div class="glass rounded-xl overflow-hidden">
            <button
                class="w-full px-6 py-4 flex items-center justify-between text-left"
                aria-expanded={item.isOpen}
                aria-controls={`accordion-content-${item.id}`}
                data-accordion-trigger={item.id}
            >
                <span class="font-semibold">{item.title}</span>
                <svg
                    class={`w-5 h-5 transition-transform duration-300 ${
                        item.isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                id={`accordion-content-${item.id}`}
                class={`overflow-hidden transition-all duration-300 ${
                    item.isOpen ? 'max-h-96' : 'max-h-0'
                }`}
                role="region"
                aria-labelledby={`accordion-trigger-${item.id}`}
            >
                <div class="px-6 pb-4 text-text-muted">
                    {item.content}
                </div>
            </div>
        </div>
    ))}
</div>

<script>
    document.querySelectorAll('[data-accordion-trigger]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const id = trigger.dataset.accordionTrigger;
            const content = document.getElementById(`accordion-content-${id}`);
            
            if (content) {
                const isOpen = content.classList.contains('max-h-96');
                
                // Close all if allowMultiple is false
                if (!{allowMultiple}) {
                    document.querySelectorAll('[id^="accordion-content-"]').forEach(c => {
                        c.classList.remove('max-h-96');
                        c.classList.add('max-h-0');
                    });
                    document.querySelectorAll('[data-accordion-trigger]').forEach(t => {
                        t.setAttribute('aria-expanded', 'false');
                        t.querySelector('svg').classList.remove('rotate-180');
                    });
                }
                
                // Toggle current
                if (isOpen) {
                    content.classList.remove('max-h-96');
                    content.classList.add('max-h-0');
                    trigger.setAttribute('aria-expanded', 'false');
                    trigger.querySelector('svg').classList.remove('rotate-180');
                } else {
                    content.classList.remove('max-h-0');
                    content.classList.add('max-h-96');
                    trigger.setAttribute('aria-expanded', 'true');
                    trigger.querySelector('svg').classList.add('rotate-180');
                }
            }
        });
    });
</script>
```

### 6.3 Toast Notification Component

```typescript
// src/components/islands/ToastIsland.tsx
import { createPortal } from 'react-dom';

export interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
}

interface ToastProps {
    toasts: Toast[];
    onRemove: (id: string) => void;
}

export default function ToastIsland({ toasts, onRemove }: ToastProps) {
    const typeStyles = {
        success: 'bg-holo-success/10 border-holo-success/30 text-holo-success',
        error: 'bg-holo-tertiary/10 border-holo-tertiary/30 text-holo-tertiary',
        warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500',
        info: 'bg-holo-secondary/10 border-holo-secondary/30 text-holo-secondary',
    };

    return createPortal(
        <div 
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
            role="alert"
            aria-live="polite"
        >
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`glass rounded-xl px-6 py-4 flex items-center gap-3 animate-slide-in ${typeStyles[toast.type]}`}
                >
                    <span className="flex-shrink-0">
                        {toast.type === 'success' && '✓'}
                        {toast.type === 'error' && '✕'}
                        {toast.type === 'warning' && '⚠'}
                        {toast.type === 'info' && 'ℹ'}
                    </span>
                    <span className="flex-grow">{toast.message}</span>
                    <button
                        onClick={() => onRemove(toast.id)}
                        className="flex-shrink-0 hover:opacity-70 transition-opacity"
                        aria-label="Close notification"
                    >
                        ✕
                    </button>
                </div>
            ))}
        </div>,
        document.body
    );
}
```

---

## 7) ENHANCED PAGE TEMPLATES

### 7.1 Home Page Improvements

**Enhanced Hero Section:**
```astro
---
// src/pages/index.astro
import MainLayout from "../layouts/MainLayout.astro";
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
import BentoGlassGrid from "../components/BentoGlassGrid.astro";
import HoloButton from "../components/HoloButton.astro";
import GlassPanel from "../components/GlassPanel.astro";
import { features } from "../data/features";
import { testimonials } from "../data/testimonials";

import { Zap, ShieldCheck, Cpu, Globe, ArrowUpRight, Play, Star } from "lucide-astro";

const baseUrl = import.meta.env.BASE_URL;

const iconMap = {
    Zap,
    Lock: ShieldCheck,
    Cpu,
    Globe,
};
---

<MainLayout title="Next Gen Holographic SaaS">
    <Header slot="header" />

    {/* Hero Section - Enhanced */}
    <section 
        class="pt-32 pb-20 px-6 relative overflow-hidden"
        aria-labelledby="hero-heading"
    >
        {/* Animated gradient mesh */}
        <div class="absolute inset-0 bg-gradient-mesh opacity-60"></div>
        
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="text-center mb-16 scroll-animate">
                {/* Status Badge */}
                <div
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-holo-primary/30 text-xs font-bold uppercase tracking-widest text-holo-primary mb-6"
                    role="status"
                    aria-live="polite"
                >
                    <span 
                        class="relative flex h-2 w-2"
                        aria-hidden="true"
                    >
                        <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-holo-primary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-holo-primary"></span>
                    </span>
                    v2.0 Substrate Now Live
                </div>
                
                {/* Main Heading */}
                <h1 
                    id="hero-heading"
                    class="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto"
                >
                    Scale with the speed of{' '}
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-holo-primary to-holo-secondary animate-gradient-x">
                        Optics
                    </span>.
                </h1>
                
                {/* Subheading */}
                <p 
                    class="text-text-muted text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    HoloStack is the world's first holographic infrastructure
                    layer. Designed for extreme performance and effortless
                    scaling.
                </p>
                
                {/* CTAs */}
                <div 
                    class="flex flex-col sm:flex-row items-center justify-center gap-4"
                    role="group"
                    aria-label="Call to action buttons"
                >
                    <HoloButton 
                        href={`${baseUrl}contact`} 
                        showIcon
                        aria-label="Start free trial"
                    >
                        Start free trial
                    </HoloButton>
                    <HoloButton 
                        href={`${baseUrl}pricing`} 
                        variant="secondary"
                        aria-label="View pricing plans"
                    >
                        View pricing
                    </HoloButton>
                </div>
                
                {/* Social Proof */}
                <div class="mt-12 flex items-center justify-center gap-8 text-text-muted">
                    <div class="flex items-center gap-2">
                        <Star class="w-5 h-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                        <span class="font-semibold">4.9/5</span>
                        <span class="text-sm">from 2,847 reviews</span>
                    </div>
                    <div class="hidden sm:block w-px h-6 bg-white/20"></div>
                    <div class="flex items-center gap-2">
                        <span class="font-semibold">10M+</span>
                        <span class="text-sm">requests/day</span>
                    </div>
                    <div class="hidden sm:block w-px h-6 bg-white/20"></div>
                    <div class="flex items-center gap-2">
                        <span class="font-semibold">99.99%</span>
                        <span class="text-sm">uptime</span>
                    </div>
                </div>
            </div>

            <BentoGlassGrid />
        </div>
    </section>

    {/* Features Preview - Enhanced */}
    <section 
        class="py-24 px-6 relative overflow-hidden"
        aria-labelledby="features-heading"
    >
        <div class="bg-gradient-mesh opacity-40"></div>
        
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="flex flex-col md:flex-row items-end justify-between gap-6 mb-16 scroll-animate">
                <div class="max-w-2xl">
                    <h2 
                        id="features-heading"
                        class="text-4xl font-bold mb-4"
                    >
                        Engineered for the Infinite.
                    </h2>
                    <p class="text-text-muted">
                        Our substrate is built on principled modularity and
                        extreme efficiency. No compromises.
                    </p>
                </div>
                <a
                    href={`${baseUrl}features`}
                    class="text-holo-primary font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
                    aria-label="Explore all features"
                >
                    Explore all features 
                    <ArrowUpRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                    const Icon = iconMap[feature.icon as keyof typeof iconMap] || Zap;
                    return (
                        <GlassPanel 
                            interactive 
                            class="p-8 group scroll-animate"
                            style={{ animationDelay: `${index * 50}ms` }}
                            aria-label={`${feature.title}: ${feature.description}`}
                        >
                            <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-glass-edge group-hover:border-holo-primary/50 transition-colors">
                                <Icon class="w-6 h-6 text-holo-primary" aria-hidden="true" />
                            </div>
                            <h3 class="text-xl font-bold mb-3">
                                {feature.title}
                            </h3>
                            <p class="text-sm text-text-muted leading-relaxed">
                                {feature.description}
                            </p>
                            {feature.isNew && (
                                <span class="inline-block mt-4 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-holo-primary/20 text-holo-primary rounded">
                                    New
                                </span>
                            )}
                        </GlassPanel>
                    );
                })}
            </div>
        </div>
    </section>

    {/* Testimonials - Enhanced */}
    <section 
        class="py-24 px-6 bg-white/[0.02]"
        aria-labelledby="testimonials-heading"
    >
        <div class="max-w-7xl mx-auto">
            <h2 
                id="testimonials-heading"
                class="text-3xl font-bold mb-16 text-center"
            >
                Trusted by Industry Leaders
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <GlassPanel 
                        class="p-10 flex flex-col justify-between scroll-animate"
                        style={{ animationDelay: `${index * 100}ms` }
                    >
                        <div class="mb-6">
                            <div class="flex gap-1 mb-4" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                                {[...Array(t.rating || 5)].map((_, i) => (
                                    <Star 
                                        key={i}
                                        class="w-4 h-4 text-yellow-500 fill-yellow-500"
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p class="text-lg text-text-primary/90 italic leading-relaxed mb-8">
                                "{t.quote}"
                            </p>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-holo-primary to-holo-secondary p-[1px]">
                                <div class="w-full h-full rounded-full bg-night flex items-center justify-center font-bold text-xs">
                                    {t.author.split(" ").map((n) => n[0]).join("")}
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-sm">
                                    {t.author}
                                </div>
                                <div class="text-xs text-text-muted uppercase tracking-wider">
                                    {t.role}
                                </div>
                                {t.company && (
                                    <div class="text-xs text-text-muted">
                                        {t.company}
                                    </div>
                                )}
                            </div>
                            {t.verified && (
                                <div 
                                    class="ml-auto"
                                    title="Verified customer"
                                >
                                    <svg 
                                        class="w-5 h-5 text-holo-success" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </GlassPanel>
                ))}
            </div>
        </div>
    </section>

    {/* Final CTA Section */}
    <section class="py-24 px-6">
        <div class="max-w-4xl mx-auto text-center scroll-animate">
            <GlassPanel 
                intensity="strong"
                class="p-12 rounded-[3rem] relative overflow-hidden border-holo-primary/30 ring-1 ring-holo-primary/20"
            >
                <div class="absolute inset-0 bg-gradient-to-br from-holo-primary/5 to-holo-secondary/5"></div>
                <div class="relative z-10">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Scale with Optics?
                    </h2>
                    <p class="text-text-muted mb-10 max-w-xl mx-auto">
                        Join thousands of teams already using HoloStack to power
                        their next-generation applications.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <HoloButton 
                            href={`${baseUrl}contact`} 
                            showIcon
                            aria-label="Start free trial"
                        >
                            Start free trial
                        </HoloButton>
                        <HoloButton 
                            href={`${baseUrl}pricing`} 
                            variant="secondary"
                            aria-label="View pricing plans"
                        >
                            View pricing
                        </HoloButton>
                    </div>
                </div>
            </GlassPanel>
        </div>
    </section>

    <Footer slot="footer" />
</MainLayout>

<style>
    @keyframes gradient-x {
        0%, 100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 3s ease infinite;
    }

    @keyframes slide-in {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .animate-slide-in {
        animation: slide-in 0.3s ease-out;
    }
</style>
```

---

## 8) ENHANCED SEO & SEMANTICS

### 8.1 JSON-LD Structured Data

**SoftwareApplication Schema:**
```astro
---
// Add to MainLayout.astro
const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "HoloStack",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2847"
    },
    "featureList": [
        "Neural Sync",
        "Quantum Secure",
        "Edge Substrate",
        "Holo Viz"
    ]
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

**Organization Schema:**
```astro
---
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HoloStack",
    "url": "https://holostack.com",
    "logo": "https://holostack.com/logo.png",
    "description": "Next-generation holographic infrastructure layer for modern applications"
};
---

<script type="application/ld+json" set:html={JSON.stringify(organizationSchema)} />
```

### 8.2 Meta Tags Optimization

```astro
---
// Enhanced meta tags
const title = "HoloStack - Next Gen Holographic SaaS";
const description = "HoloStack is the world's first holographic infrastructure layer. Scale with the speed of optics. Built for extreme performance and effortless scaling.";
const image = `${baseUrl}og-image.png`;
const url = `${baseUrl}`;
---

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/svg+xml" href={`${baseUrl}favicon.svg`} />
<meta name="generator" content={Astro.generator} />

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={image} />

<!-- Canonical URL -->
<link rel="canonical" href={url} />

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

---

## 9) EDGE CASE HANDLING

### 9.1 Browser Compatibility

**Safari Backdrop Filter Fallback:**
```css
@supports not (backdrop-filter: blur(16px)) {
    .glass {
        background: rgba(255, 255, 255, 0.15);
    }
}

@supports not (-webkit-backdrop-filter: blur(16px)) {
    .glass {
        background: rgba(255, 255, 255, 0.15);
    }
}
```

**CSS Scroll-Timeline Fallback:**
```css
@supports not (animation-timeline: scroll()) {
    .scroll-highlight {
        /* Use Intersection Observer instead */
        transition: border-color 0.3s ease;
    }
    
    .scroll-highlight.visible {
        border-color: var(--color-glass-edge-strong);
    }
}
```

### 9.2 Print Styles

```css
@media print {
    /* Reset glass effects for print */
    .glass,
    .glass-strong {
        background: white !important;
        border: 1px solid #ccc !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        box-shadow: none !important;
    }
    
    /* Hide non-essential elements */
    .bg-gradient-mesh,
    .specular-sweep,
    .bg-blob,
    header,
    footer,
    button,
    a:not([href^="#"]) {
        display: none !important;
    }
    
    /* Ensure text is readable */
    body {
        background: white !important;
        color: black !important;
    }
    
    /* Print-friendly links */
    a[href^="#"]::after {
        content: " (page " attr(href) ")";
    }
}
```

### 9.3 Touch Device Optimization

```css
@media (hover: none) and (pointer: coarse) {
    /* Remove hover effects on touch devices */
    .glass-interactive:hover {
        transform: none;
    }
    
    /* Increase tap targets */
    button,
    a {
        min-height: 44px;
        min-width: 44px;
    }
    
    /* Disable specular sweep */
    .glass-interactive::before {
        display: none;
    }
}
```

### 9.4 Low-End Device Support

```css
@media (max-width: 768px) and (max-resolution: 1dppx) {
    /* Reduce expensive effects */
    .bg-blob {
        animation: none;
        filter: blur(80px);
        opacity: 0.06;
    }
    
    .glass {
        backdrop-filter: blur(12px) saturate(140%);
        -webkit-backdrop-filter: blur(12px) saturate(140%);
    }
    
    .glass-strong {
        backdrop-filter: blur(16px) saturate(160%);
        -webkit-backdrop-filter: blur(16px) saturate(160%);
    }
    
    /* Disable complex animations */
    .scroll-animate {
        opacity: 1;
        transform: none;
    }
}
```

---

## 10) DELIVERABLES & QUALITY BAR

### 10.1 Core Components (Enhanced)

**Required Components:**
1. [`GlassPanel.astro`](src/components/GlassPanel.astro:1) - Enhanced with accessibility, performance, and edge cases
2. [`HoloButton.astro`](src/components/HoloButton.astro:1) - Enhanced with focus states and ARIA
3. [`BentoGlassGrid.astro`](src/components/BentoGlassGrid.astro:1) - Enhanced with staggered animations
4. [`PricingToggleIsland.tsx`](src/components/PricingToggleIsland.tsx:1) - Migrated to React, enhanced with accessibility
5. **Modal.astro** - New component for dialogs
6. **Accordion.astro** - New component for collapsible content
7. **ToastIsland.tsx** - New component for notifications

**Each Component Must:**
- Support multiple glass intensities
- Respect reduced motion preferences
- Be fully keyboard accessible
- Have visible focus indicators
- Pass WCAG 2.1 AAA contrast checks
- Be reusable across pages
- Include comprehensive ARIA labels
- Handle edge cases (print, touch, low-end devices)

### 10.2 Final Quality Bar

**This demo should feel like:**

✅ A Series A SaaS website  
✅ Designed by engineers who understand optics, motion, and restraint  
✅ A reference example clients point to and say: "That's the kind of modern we want."  
✅ Accessible to users with disabilities (WCAG 2.1 AAA)  
✅ Performant on low-end devices (60fps, <1s LCP)  
✅ Unique and memorable, not another glassmorphism template  
✅ Production-ready with comprehensive error handling  
✅ SEO-optimized with structured data  

---

## 11) IMPLEMENTATION CHECKLIST

### Phase 1: Foundation (Week 1)
- [ ] Set up comprehensive design token system
- [ ] Migrate PricingToggleIsland from SolidJS to React
- [ ] Implement enhanced GlassPanel with accessibility
- [ ] Add focus indicators and ARIA labels to all components
- [ ] Create Modal, Accordion, and Toast components

### Phase 2: Performance (Week 2)
- [ ] Optimize backdrop-filter usage
- [ ] Implement Intersection Observer for scroll animations
- [ ] Add GPU acceleration to animations
- [ ] Create critical CSS extraction
- [ ] Implement service worker for caching

### Phase 3: Visual Differentiation (Week 3)
- [ ] Replace animated blobs with gradient mesh
- [ ] Create unique hover animations
- [ ] Add staggered entry animations
- [ ] Implement custom view transitions
- [ ] Enhance social proof elements

### Phase 4: Edge Cases (Week 4)
- [ ] Add print styles
- [ ] Implement Safari fallbacks
- [ ] Optimize for touch devices
- [ ] Add low-end device support
- [ ] Test across browsers and devices

### Phase 5: SEO & Analytics (Week 5)
- [ ] Add JSON-LD structured data
- [ ] Optimize meta tags
- [ ] Implement analytics tracking
- [ ] Add performance monitoring
- [ ] Create sitemap and robots.txt

---

## 12) TESTING & VALIDATION

### 12.1 Accessibility Testing
- [ ] WAVE toolbar validation
- [ ] axe DevTools audit
- [ ] Keyboard navigation testing
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Color contrast validation (7:1 for normal text)

### 12.2 Performance Testing
- [ ] Lighthouse audit (target 90+ scores)
- [ ] WebPageTest analysis
- [ ] Core Web Vitals monitoring
- [ ] Bundle size analysis
- [ ] Memory leak testing

### 12.3 Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## CONCLUSION

This enhanced specification transforms HoloStack from a good glassmorphism demo into a **production-ready, accessible, performant, and unique** SaaS landing page. The improvements address:

1. **Technical Debt:** SolidJS migration, consistent architecture
2. **Accessibility:** WCAG 2.1 AAA compliance, full keyboard support
3. **Performance:** Optimized animations, GPU acceleration, critical path optimization
4. **Differentiation:** Unique animations, gradient mesh, staggered reveals
5. **Robustness:** Edge case handling, browser compatibility, print styles
6. **SEO:** Structured data, meta tags, semantic HTML

The result is a reference implementation that demonstrates how glassmorphism can be premium, readable, and conversion-driven—not blurry or novelty-driven.

---

**Version:** 2.0  
**Last Updated:** 2025-12-27  
**Author:** Principal Frontend Architect & Motion Systems Engineer  
**Status:** Ready for Implementation
