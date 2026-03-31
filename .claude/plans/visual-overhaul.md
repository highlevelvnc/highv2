# Visual Overhaul — Premium Effects & 3D Upgrade

## Problem
The site currently has a solid dark-tech foundation but feels static and flat. It's missing the advanced scroll-driven effects, 3D interactions, smooth scrolling, and cinematic transitions that separate $50k+ agency sites from templates.

## New Dependencies to Install
```bash
npm install lenis gsap @gsap/react split-type
```
- **Lenis** — Buttery smooth scroll with momentum (used by all award-winning sites)
- **GSAP + ScrollTrigger** — Industry-standard for scroll-driven animations, pinning, horizontal scroll
- **SplitType** — Character/word-level text splitting for cinematic text reveals

---

## Phase 1: Foundation — Smooth Scroll + Global Effects

### 1.1 Lenis Smooth Scroll Provider
**Create:** `components/providers/SmoothScrollProvider.tsx`
- Wrap the entire app in Lenis smooth scroll
- Buttery momentum-based scrolling instead of native jerky scroll
- Integrate with GSAP ScrollTrigger so both systems sync
- Expose lenis instance via React context for components that need it

**Modify:** `src/app/layout.tsx`
- Wrap `<body>` children with `<SmoothScrollProvider>`

### 1.2 GSAP Registration
**Create:** `lib/gsap.ts`
- Register ScrollTrigger, import once, configure defaults
- Set up Lenis ↔ ScrollTrigger sync

### 1.3 Global Noise/Grain Overlay
**Create:** `components/ui/NoiseOverlay.tsx`
- Subtle animated film grain over the entire page (CSS-only, 0.015 opacity)
- Adds texture and depth to the dark backgrounds
- Uses CSS `background-image` with SVG feTurbulence, animates subtly

**Modify:** `src/app/layout.tsx` — add `<NoiseOverlay />` inside body

---

## Phase 2: Hero Section — Cinematic Upgrade

### 2.1 Hero Text Scramble/Decode Effect
**Create:** `components/animations/TextDecode.tsx`
- Characters scramble through random glyphs before settling on the real text
- Like a terminal/hacker decode effect: `W̷e̷ → We`
- Staggered per-character with the "Growth." word getting a special gradient reveal
- Uses SplitType to split into chars, GSAP timeline to animate

### 2.2 Hero Parallax Depth
**Modify:** `components/sections/HeroSection.tsx`
- Headline moves at 0.8x scroll speed (slight parallax lag)
- Subheadline at 0.9x
- CTAs at 1.0x (normal)
- Creates depth as you scroll away from hero
- Background particles move at 0.5x (deep layer)

### 2.3 Floating Gradient Orbs
**Modify:** `components/sections/HeroBackground.tsx`
- Add 2-3 large floating gradient orbs (200-400px) that drift slowly
- Animate with GSAP (position + scale + opacity over 15-20s loops)
- Blurred heavily (80-120px blur) so they feel atmospheric, not distracting
- Creates living, breathing background instead of static gradients

---

## Phase 3: Scroll-Driven Section Effects

### 3.1 Section Reveal with Clip-Path
**Create:** `components/animations/SectionReveal.tsx`
- Sections reveal with a `clip-path: inset()` animation as they enter viewport
- Like a curtain opening from center outward
- GSAP ScrollTrigger: `clip-path: inset(15% 25%) → inset(0% 0%)`
- Much more dramatic than simple fade-in

### 3.2 Parallax on Every Section
**Modify:** Multiple section components
- Each section's background glow/gradients move at different speeds
- Content elements have subtle Y-parallax offsets
- Creates a layered depth feel as you scroll through the entire page

### 3.3 Horizontal Scroll Case Studies
**Modify:** `components/sections/FeaturedWorkSection.tsx`
- GSAP ScrollTrigger pin: section stays fixed while cards scroll horizontally
- Each case study card flies in from the right as you scroll down
- Cards have 3D perspective tilt as they enter/exit
- Progress bar shows which card you're on
- This is the single most impactful visual upgrade — transforms the whole page feel

### 3.4 Staggered Grid Reveals
**Modify:** `components/sections/ServicePillarsSection.tsx`
- Cards reveal one by one with scale(0.8) → scale(1) + opacity + slight rotation
- Stagger delay: 0.15s between each card
- Each card gets a subtle 3D tilt on entrance (rotateX: 5deg → 0)

### 3.5 Manifesto Parallax Text
**Modify:** `components/sections/ManifestoSection.tsx`
- Each line of text moves at a slightly different parallax speed
- "growth engineering" gradient words get a shimmer animation on scroll-into-view
- Pillar items stagger in with a slide-from-left effect

### 3.6 Process Timeline — Scroll-Triggered Steps
**Modify:** `components/sections/ProcessSection.tsx`
- Each step card reveals as you scroll, with a "drawing" connecting line
- Step numbers get a CountUp as they enter view
- Cards have a subtle entrance from below with 3D perspective

### 3.7 Infinite Scroll Marquee for Client Logos
**Create:** `components/animations/InfiniteMarquee.tsx`
- Replace static client marks with an infinite-scrolling marquee
- Speed increases when user scrolls faster (scroll velocity effect)
- Duplicated content seamlessly loops
- Hover pauses the marquee

**Modify:** `components/sections/SocialProofSection.tsx`
- Replace `ClientMarkStrip` with `InfiniteMarquee`
- Metrics get a more dramatic entrance (scale up from small)

---

## Phase 4: Interactive 3D Effects

### 4.1 3D Perspective Card Tilt
**Create:** `components/animations/TiltCard.tsx`
- Wrapper component: tracks mouse position over card
- Applies `rotateX` and `rotateY` transforms based on mouse position
- Subtle (max ±8°) but creates a tangible 3D feel
- Adds a specular highlight that follows the mouse (like a glossy surface)
- `perspective: 800px` on parent, `transform-style: preserve-3d` on card

**Apply to:** ServicePillarsSection cards, IndustryCards, TestimonialCards, ProcessStep cards

### 4.2 Magnetic Buttons — Enhanced
**Modify:** `components/ui/CustomCursor.tsx`
- Make magnetic effect more dramatic (50% attraction instead of 35%)
- Add subtle scale pulse on magnetic elements when cursor approaches
- Button content (text + arrow) shifts toward cursor position too

---

## Phase 5: Micro-Interactions & Polish

### 5.1 Scroll Progress Bar
**Create:** `components/ui/ScrollProgress.tsx`
- Thin (2px) gradient progress bar at the very top of the viewport
- Shows how far down the page you've scrolled
- Gradient matches the brand accent (`#6C3AFF → #3B82F6`)
- Fixed position, always visible

### 5.2 Section Transition Dividers
**Create:** `components/shared/SectionDivider.tsx`
- Animated gradient line between sections
- Line draws itself as it enters viewport (scaleX: 0 → 1)
- Replaces hard color-change boundaries between sections

### 5.3 Enhanced Page Transitions
**Modify:** `components/layout/PageTransition.tsx`
- Scale transition: pages scale down slightly (0.97) on exit
- Overlay wipe: a gradient overlay sweeps across during transition
- More cinematic than current simple blur

### 5.4 Image Hover Parallax
**Apply to:** CaseStudyMedia, ArticleCard images
- On hover, the image shifts slightly based on mouse position
- Creates an "inner parallax" effect within the image container
- Max shift: ±15px

---

## Implementation Order (Priority)
1. **Install deps** — `lenis`, `gsap`, `@gsap/react`, `split-type`
2. **Lenis smooth scroll** — Biggest instant impact on feel
3. **Horizontal scroll case studies** — Most dramatic visual change
4. **3D card tilts** — Adds interactivity everywhere
5. **Hero text decode + floating orbs** — Upgrades the first impression
6. **Section clip-path reveals** — Makes scrolling feel cinematic
7. **Infinite marquee** — Adds motion and energy
8. **Parallax layers** — Depth throughout the page
9. **Scroll progress bar** — Polish detail
10. **Enhanced page transitions** — Route change wow factor

---

## Performance Safeguards
- All GSAP animations use `will-change: transform` only when active
- Lenis uses `requestAnimationFrame` — no jank
- 3D tilts use `transform3d` (GPU-accelerated)
- Horizontal scroll uses GSAP pinning (proven performant)
- All scroll-driven effects respect `prefers-reduced-motion`
- Heavy effects (particles, orbs) remain desktop-only

## Files Created (New)
- `components/providers/SmoothScrollProvider.tsx`
- `lib/gsap.ts`
- `components/ui/NoiseOverlay.tsx`
- `components/ui/ScrollProgress.tsx`
- `components/animations/TextDecode.tsx`
- `components/animations/SectionReveal.tsx`
- `components/animations/InfiniteMarquee.tsx`
- `components/animations/TiltCard.tsx`
- `components/shared/SectionDivider.tsx`

## Files Modified (Existing)
- `src/app/layout.tsx` — SmoothScrollProvider + NoiseOverlay + ScrollProgress
- `components/sections/HeroSection.tsx` — text decode + parallax layers
- `components/sections/HeroBackground.tsx` — floating gradient orbs
- `components/sections/FeaturedWorkSection.tsx` — horizontal scroll
- `components/sections/ServicePillarsSection.tsx` — 3D tilt cards
- `components/sections/ManifestoSection.tsx` — parallax text layers
- `components/sections/ProcessSection.tsx` — enhanced timeline
- `components/sections/SocialProofSection.tsx` — marquee + 3D tilt
- `components/sections/IndustriesSection.tsx` — 3D tilt cards
- `components/sections/InsightsSection.tsx` — 3D tilt article cards
- `components/sections/TechSection.tsx` — enhanced diagram parallax
- `components/sections/FinalCTASection.tsx` — enhanced glow + entrance
- `components/layout/PageTransition.tsx` — cinematic transitions
- `components/ui/CustomCursor.tsx` — enhanced magnetic
- `package.json` — new deps
