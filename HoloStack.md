Senior Expert Prompt — “HoloStack”

(Astro + High-End Glassmorphism SaaS / Holographic UI)

Role

You are a Principal Frontend Architect & Motion Systems Engineer.

You design interfaces where visual complexity is carefully engineered, not decorative.
This demo must prove that glassmorphism can be premium, readable, and conversion-driven, not blurry or novelty-driven.

Objective:
Build a modern SaaS/product landing demo that showcases tasteful, performance-safe glassmorphism with strong hierarchy, crisp typography, and confident motion restraint.

Design Philosophy
“Glass, light, and precision.”

This UI should feel:

Optical, not glossy

Layered, not cluttered

Futuristic, but grounded in usability

Think:

Architectural glass

Holographic UI panels

Light refracting through layered surfaces

Data floating in space, but always readable

Avoid:

Over-blurred frosted glass

Neon cyberpunk chaos

Excessive glow or bloom

“Apple Vision Pro parody” visuals

0) Non-Negotiables

Astro 4.x SSG, GitHub Pages compatible (correct base path)

Conversion-first:

Primary CTA: Start free trial

Secondary CTA: Request demo

Glassmorphism must:

Pass contrast checks

Remain readable on low-end displays

prefers-reduced-motion must disable all non-essential motion

Performance matters as much as aesthetics

1) Visual Design System — “Holo Glass”

(Heavy glassmorphism, executed with discipline)

Core Color Tokens

Night (background): #070A12

Glass Panel: rgba(255,255,255,0.08)

Glass Panel (strong): rgba(255,255,255,0.12)

Edge / Border: rgba(255,255,255,0.18)

Primary text: #EAF0FF

Muted text: rgba(234,240,255,0.70)

Holographic Accents (used sparingly)

Holo A (violet): #7C5CFF

Holo B (cyan): #00E5FF

Signal / Alert: #FF4D8D

Accent colors should never dominate layout.
They exist to guide focus, not decorate surfaces.

Glass Construction Rules (Very Important)

Glass panels MUST:

Sit on top of layered gradient fields

Never float on a flat background

Mandatory glass effect:

backdrop-filter: blur(18px) saturate(160%);


Background layers:

Large radial gradients (“light blobs”) in holo accents

Opacity: 5–12% max

Positioned asymmetrically for depth

Borders:

1px bright edge

No heavy outlines

Shadows:

Soft, directional, controlled

No heavy glow or drop-shadow stacking

Glass ≠ blur everywhere.
Hierarchy comes from layering, spacing, and contrast, not opacity alone.

2) Typography System

Typography must anchor the futuristic visuals with clarity and restraint.

Headings: Sora

Geometric, tech-forward, clean

Body: Inter

High readability, neutral, scalable

Scale

H1: clamp(2.2rem, 5vw, 4.8rem)

H2/H3 must feel editorial, not marketing fluff

Avoid overly tight letter-spacing; glass UIs need breathing room

3) Motion Strategy — “Light Refraction”

Motion exists to simulate light interaction, not entertainment.

Scroll Behavior

Panels subtly “catch light” as user scrolls

Use:

CSS Scroll-Timeline where supported

Otherwise minimal JS

Effects:

Slight gradient shift

Edge highlight intensifies briefly

Hover Interactions

Glass panels:

Tilt 1–2 degrees max

Add specular gradient sweep

Buttons:

Glow only on hover

No idle pulsing

Icons:

Micro-lift + opacity change

Navigation

Use View Transitions API

For complex sequences:

Motion One

Only inside small islands

Reduced Motion

Disable:

Tilt

Gradient sweeps

Scroll-linked highlights

Keep layout and clarity intact

4) Architecture & Data

Keep data clean and static-first.

Data Files

features.ts

integrations.ts

pricing.ts

testimonials.ts

Optional Islands (minimal JS)

Pricing toggle (monthly / annual)

Feature filter or comparison toggle

5) Pages

/ — Home

/features/

/integrations/

/pricing/ (core conversion page)

/security/

/contact/ — Demo request

Each page should feel like a layered glass deck, not a flat scroll page.

6) Signature Sections (Must Feel Distinct)
Hero

Glass bento grid

Multiple panel sizes

Animated holo blobs behind

Clear value proposition + CTA contrast

Features

Data-forward cards

Icons float within glass

No illustrations unless abstract

Integrations

Icon cloud inside a large glass container

Soft parallax or depth layering

Pricing

Glass pricing tiers

One highlighted (“Most Popular”)

Clear contrast between tiers

Security

Trust strip with compliance badges

Feels solid, not decorative

Reduced glass, more structure

7) SEO & Semantics

JSON-LD:

SoftwareApplication

Organization

Clean heading structure

Fast LCP despite glass effects

8) Deliverables
Core Components

GlassPanel.astro

HoloButton.astro

BentoGlassGrid.astro

PricingToggleIsland.tsx

Each component must:

Support multiple glass intensities

Respect reduced motion

Be reusable across pages

Final Quality Bar

This demo should feel like:

A Series A SaaS website

Designed by engineers who understand optics, motion, and restraint

A reference example clients point to and say:
“That’s the kind of modern we want.”