# Rhombus Contractors — Modern Construction & Steel Website

A modern, high-fidelity responsive website built for **Rhombus Contractors**, matching the client's reference design with pixel-perfect accuracy, bespoke organic image masks, architectural typography, and interactive components.

---

## 🏗️ Design Highlights & Implemented Features

1. **Header & Navigation Bar**:
   - High-precision geometric Rhombus logo mark in brand crimson (`#BA2826`) and deep steel navy (`#11283B`).
   - Deep navy navigation block featuring `Home`, `About Us`, `Services`, `Certifications`, `Contact`, social media links (LinkedIn, Instagram), and an interactive **Get a Quote** action.
   - Fully responsive with mobile hamburger navigation drawer.

2. **Hero Section ("Building Strength. Shaping Tomorrow.")**:
   - Breadcrumb tag: `steel \ Architecture \ Construction`.
   - Serif display typography with authentic handwriting script for `Shaping Tomorrow.` in brand crimson.
   - Iconic **cathedral arch masked image frame** featuring structural steel framing against a bright sky.
   - Floating angled cursive badge: *Quality, Precision, Durability* with underline.
   - Interactive slide counter `01 | 04` with cross-fading slide content.
   - Outlined call-to-action button: `EXPLORE OUR SERVICES →` with smooth scrolling.

3. **Our Services Section ("Your Vision, Our Expertise")**:
   - 4 organic masked service cards matching the exact geometries:
     - **01. Construction Material Supply** (Horizontal pebble mask)
     - **02. Fabrication & Installation of Metal Work** (Vertical arch pill mask)
     - **03. Powder Coating** (Circular mask)
     - **04. Sub Contracting in Construction** (Tilted asymmetric pebble with decorative contour ring)
   - Interactive click handlers opening a **Full Service Specifications Modal** with technical capabilities, standards (AISC, AWS, Qualicoat), and quotation CTAs.

4. **About Rhombus Section ("Precision in Every Structure.")**:
   - Asymmetrical arch image frame paired with angled handwritten script: *Trusted Partnerships Lasting Structures*.
   - Technical 3D isometric architectural blueprint wireframe with dimension axis and amber accent line.
   - Interactive **Learn More** company profile modal.

5. **Why Choose Us Bar ("Experience. Quality. Trust.")**:
   - Deep steel navy industrial background with subtle framework overlay.
   - Left title block with vertical amber accent indicator.
   - 4 feature columns with clean dividers:
     - 🛡️ **Safety First**
     - ⚙️ **Superior Workmanship**
     - ⏱️ **On-Time Delivery**
     - 🤝 **Long-Term Partnerships**

6. **Client-Ready Production Features**:
   - **Featured Projects Portfolio** with category filters (*Structural Steel*, *Commercial Hubs*, *Custom Fabrication*).
   - **Performance Stats Counter** (*18+ Years*, *450+ Structures*, *99.8% On-Time*, *Zero Incidents*).
   - **Interactive Bid & Quote Request Modal** with form fields and instant feedback.
   - **Comprehensive Footer** with headquarters coordinates, direct lines, navigation, and copyright.

---

## 🚀 Getting Started

### 1. Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build
Generate an optimized production build in the `/dist` directory:
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 File Structure

```
rhombus/
├── index.html                 # Main website template with semantic markup
├── package.json               # Project dependencies and build scripts
├── src/
│   ├── style.css              # Bespoke design system, organic masks & responsive CSS
│   └── main.js                # Slider, modals, quote requests & filter logic
├── public/
│   └── images/
│       ├── rhombus-logo.svg           # Scalable vector logo mark
│       ├── hero_exact.jpg             # High-fidelity hero structural steel
│       ├── service1_exact.jpg         # Construction material hollow pipes
│       ├── service2_exact.jpg         # Certified welder spark fabrication
│       ├── service3_exact.jpg         # Powder coating architectural fins
│       ├── service4_exact.jpg         # Commercial building framework
│       ├── about_exact.jpg            # Diagonal structural perspective
│       ├── blueprint-wireframe.svg    # Isometric 3D steel wireframe
│       └── why_choose_bg.jpg          # Industrial background texture
└── README.md
```
