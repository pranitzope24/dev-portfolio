# Design System Specification: Editorial Depth & Atmospheric Immersion

## 1. Overview & Creative North Star: "The Celestial Observer"
This design system is built to transcend the standard "dark mode" template. Our Creative North Star is **"The Celestial Observer"**—a philosophy that treats the screen not as a flat surface, but as a vast, pressurized expanse of light and shadow.

To achieve a signature, high-end editorial feel, we move away from rigid grids and 1px lines. We embrace **intentional asymmetry**, where large-scale typography anchors the layout while glassmorphism components float with organic weightlessness. By layering semi-transparent surfaces and utilizing high-contrast accents against a crushing midnight base, we create a UI that feels curated, premium, and deeply immersive.

---

## 2. Color & Atmospheric Surface Strategy
The palette is built on a foundation of absolute darkness, punctuated by high-energy gas-giant hues.

### The "No-Line" Rule
Traditional borders are strictly prohibited for sectioning. Definition between content areas must be achieved through:
1. **Background Shifts:** Transitioning from `surface` (#131313) to `surface_container_low` (#1c1b1b).
2. **Tonal Transitions:** Using soft, radial gradients of `primary` or `secondary` at 2% opacity to "wash" a section.
3. **Negative Space:** Utilizing the `20` (7rem) and `24` (8.5rem) spacing tokens to create mental boundaries.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Each step up in importance requires a step up in surface luminosity:
* **Base Layer:** `surface_container_lowest` (#0e0e0e) for the background.
* **Content Sections:** `surface` (#131313).
* **Floating Cards:** `surface_container_high` (#2a2a2a) with 60% opacity and a `backdrop-filter: blur(20px)`.

### The "Glass & Gradient" Rule
To inject "soul" into the interface, primary CTAs and hero elements must use a **Signature Texture**: a linear gradient from `primary_container` (#00d4ff) to `secondary` (#edb1ff) at a 135-degree angle. This creates a shimmering, neon-horizon effect that flat colors cannot replicate.

---

## 3. Typography: The Editorial Voice
We use **Inter** for its technical precision and **Space Grotesk** for utilitarian labels to create a high-contrast, "aerospace-manual" aesthetic.

* **Display-LG (3.5rem):** Used for hero statements. Tighten letter-spacing to -0.04em. This is your anchor; allow it to bleed off-center for an asymmetrical, editorial look.
* **Headline-MD (1.75rem):** Used for section titles. Always pair with a `secondary_fixed_dim` color to distinguish from body content.
* **Label-MD (Space Grotesk, 0.75rem):** Used for metadata and tags. All-caps with 0.1em letter spacing.
* **Body-LG (1rem):** Set to `on_surface_variant` (#bbc9cf) to reduce eye strain against the midnight background.

---

## 4. Elevation, Depth & The "Ghost Border"
Hierarchy is conveyed through **Tonal Layering** rather than structural shadows.

### The Layering Principle
Instead of drop shadows, place a `surface_container_highest` element inside a `surface_container_low` parent. This "inner glow" feel mimics how light behaves in a void.

### Ambient Shadows
For "floating" interactive states, use a custom shadow:
* **Color:** `primary` (#a8e8ff) at 8% opacity.
* **Blur:** 40px to 80px.
* **Spread:** -10px.
This creates a "neon bloom" effect rather than a muddy grey shadow.

### The "Ghost Border"
If a container requires a boundary (e.g., input fields), use the **Ghost Border**:
* **Stroke:** 1px solid.
* **Color:** `outline_variant` (#3c494e) at **20% opacity**.
* **Effect:** Add a subtle `box-shadow: 0 0 10px rgba(0, 212, 255, 0.1)` to mimic luminosity.

---

## 5. Components

### Buttons (High-Luminance)
* **Primary:** A gradient fill (`primary` to `secondary`). Roundedness: `full` (9999px). No border. Text color: `on_primary_fixed`.
* **Secondary:** `surface_container_highest` background with a 1px "Ghost Border". Roundedness: `DEFAULT` (1rem).
* **Tertiary:** Text-only in `primary_fixed`, featuring a 2px underline that expands on hover.

### Cards (The Glass Container)
* **Styling:** Background `surface_variant` at 40% opacity.
* **Blur:** `backdrop-filter: blur(16px)`.
* **Edge:** 1px `outline_variant` at 10% opacity on the top and left edges only (simulating a light source from the top-left).
* **Radius:** `lg` (2rem).

### Inputs & Selection
* **Text Fields:** `surface_container_lowest` fill. On focus, the Ghost Border transitions from 20% opacity to 100% `primary` opacity with a subtle outer glow.
* **Chips:** Selection chips use `secondary_container` with `on_secondary_container` text. Use `sm` (0.5rem) roundedness for a sharper, more technical feel.

### Lists
* **Forbid Dividers:** Use `10` (3.5rem) vertical padding between list items. Separate logic through subtle background shifts on hover (moving from `surface` to `surface_bright`).

---

## 6. Do’s and Don’ts

### Do:
* **Embrace Asymmetry:** Offset your Display text. Let a card overlap a section boundary by `10` (3.5rem) to create depth.
* **Use Tonal Shifts:** Define containers by moving from #131313 to #201f1f rather than drawing a line.
* **Apply "Bloom":** Use primary-colored blurs behind key images or components to simulate atmospheric glow.

### Don’t:
* **No Pure White:** Never use #FFFFFF. Use `on_surface` (#e5e2e1) for high-contrast text.
* **No Sharp Corners:** Avoid the `none` roundedness token. Everything in this system should feel weathered and smoothed by "orbital friction."
* **No Heavy Borders:** If a border is 100% opaque, it is a design failure. Stick to the 10-20% opacity rule for the Ghost Border.