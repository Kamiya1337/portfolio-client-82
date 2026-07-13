---
name: Academic Elegance
colors:
  surface: '#fdf7ff'
  surface-dim: '#dfd6f0'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f1ff'
  surface-container: '#f3eaff'
  surface-container-high: '#eee4ff'
  surface-container-highest: '#e8def9'
  on-surface: '#1e192b'
  on-surface-variant: '#594046'
  inverse-surface: '#332d41'
  inverse-on-surface: '#f5eeff'
  outline: '#8c7076'
  outline-variant: '#e0bec5'
  surface-tint: '#b8105a'
  primary: '#b40a58'
  on-primary: '#ffffff'
  primary-container: '#d62f70'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb1c4'
  secondary: '#b51a57'
  on-secondary: '#ffffff'
  secondary-container: '#fd568b'
  on-secondary-container: '#5e0028'
  tertiary: '#814c61'
  on-tertiary: '#ffffff'
  tertiary-container: '#9d647a'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c4'
  on-primary-fixed: '#3f001a'
  on-primary-fixed-variant: '#8f0043'
  secondary-fixed: '#ffd9e0'
  secondary-fixed-dim: '#ffb1c2'
  on-secondary-fixed: '#3f0018'
  on-secondary-fixed-variant: '#8f0041'
  tertiary-fixed: '#ffd9e5'
  tertiary-fixed-dim: '#f7b4cd'
  on-tertiary-fixed: '#350c20'
  on-tertiary-fixed-variant: '#69374c'
  background: '#fdf7ff'
  on-background: '#1e192b'
  surface-variant: '#e8def9'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 128px
---

## Brand & Style
This design system establishes a "luxury-cute" academic aesthetic, blending the rigor of a high-end portfolio with a soft, confident feminine energy. The brand personality is mature yet approachable, prioritizing editorial clarity over functional density. 

The visual style is **Soft Editorial Minimalism**. It moves away from standard SaaS patterns by utilizing generous whitespace, delicate borders, and a sophisticated, layered surface logic. The goal is to evoke the feeling of a premium printed lookbook or a high-end stationery set—tactile, intentional, and intellectually vibrant.

## Colors
The palette is rooted in an **Ivory (#FFFDFB)** base to provide a warm, gallery-like backdrop. 

- **Primary Accents:** **Rose (#E83E7D)** serves as the primary call-to-action and interactive highlight, while **Deep Berry (#B91E5A)** provides high-contrast emphasis for critical information or active states.
- **Surface Logic:** Secondary surfaces use a trio of soft tints—**Blush**, **Warm Cream**, and **Lavender Pink**—to categorize content areas without harsh transitions.
- **Typography:** **Ink Navy** ensures maximum legibility for body content, while **Soft Mauve** is used for secondary metadata and captions to maintain the delicate tonal balance.
- **Borders:** A consistent **Pale Rose (#F2AFC8)** is used for hair-line borders, providing structure without the severity of gray or black lines.

## Typography
The system uses **Plus Jakarta Sans** exclusively to maintain a modern, clean, yet friendly geometric profile. 

The typographic hierarchy relies on **extreme contrast**. Display titles should be set in ExtraBold or Bold with tight letter-spacing to feel impactful and confident. Conversely, body text is set with generous line heights (1.6) to ensure an effortless reading experience for academic essays or project descriptions. Labels utilize uppercase tracking to create a rhythmic, structured feel that anchors the softer elements of the UI.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain the "editorial page" feel, centered within the viewport.

- **Editorial Whitespace:** Large vertical gaps (128px) between sections prevent the UI from feeling cluttered or "app-like."
- **Grid:** A 12-column grid is used for desktop, but content should frequently "break" the grid or use offset columns to create a dynamic, asymmetrical portfolio look.
- **Mobile Adaption:** On mobile, margins shrink to 24px, and the 128px section gaps scale down to 64px. Typography scales aggressively to ensure the "Display" headers remain the focal point without overflowing the screen.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Ambient Soft Shadows** rather than traditional elevation.

- **Surfaces:** Instead of shadows, use the Blush and Warm Cream surfaces to denote different content modules. 
- **Shadows:** When used (e.g., for hovering cards), shadows must be extremely diffused. Use a Deep Berry tint in the shadow color at very low opacity (3-5%) to maintain the warmth of the palette.
- **Borders:** Every container should feature a 1px border in **Pale Rose**. This "framing" technique reinforces the academic, paper-like quality of the design system.

## Shapes
The shape language is defined by **Soft Roundedness (12px / 0.75rem)**. 

This specific radius strikes a balance between the "cuteness" of fully rounded shapes and the "luxury" of sharper, more professional corners. 
- **Buttons and Chips:** Should follow the `rounded-lg` (16px) or `rounded-xl` (24px) tokens to feel inviting and "squishy" under interaction.
- **Cards and Large Containers:** Stick strictly to the base 12px roundedness to maintain structural integrity.

## Components
- **Buttons:** Primary buttons use a solid **Rose** fill with white text. Secondary buttons use a **Pale Rose** border with **Rose** text. All buttons feature a subtle lift on hover via a soft tinted shadow.
- **Cards:** Portfolio cards use the **Warm Cream** or **Blush** background with a 1px **Pale Rose** border. There is no shadow in the default state; depth is only introduced on hover.
- **Chips/Tags:** Used for academic subjects or skills. These should have a **Lavender Pink** background and **Soft Mauve** text, using a pill shape (`rounded-xl`).
- **Inputs:** Text fields are Ivory with a Pale Rose bottom-border only (editorial style), transitioning to a full Rose outline on focus.
- **Lists:** Use custom bullet points (small Rose diamonds or circles) rather than standard discs to reinforce the premium aesthetic.
- **Additional Components:** Consider "Pull Quotes" for academic citations, using larger Soft Mauve typography and a Rose-colored vertical accent line.