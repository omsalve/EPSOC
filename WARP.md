# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Tooling and commands

### Dependencies
- Install Node dependencies (recommended):
  - `npm install`

### Development
- Run the dev server (Next.js App Router):
  - `npm run dev`
- The app serves at `http://localhost:3000` by default.

### Build and run
- Create a production build:
  - `npm run build`
- Run the production server (after `npm run build`):
  - `npm start`

### Linting
- Run ESLint with the Next.js TypeScript rules:
  - `npm run lint`

### Testing
- There is currently **no test script or test framework configured** in `package.json`.
- Before adding tests, create an appropriate test setup and expose it via an npm script (for example, `"test"`) so future agents can run it directly.

## Application architecture

### Framework and routing
- This is a **Next.js App Router** application using the `app/` directory.
- Global entrypoints:
  - `app/layout.tsx` defines the root HTML structure, fonts, and global providers.
  - `app/page.tsx` composes the main landing page sections.
- A dynamic blog route is defined at `app/blogs/[slugs]/page.tsx`, which maps string slugs to React components under `app/content/blogs`.

### Layout and global providers
- `app/layout.tsx`:
  - Imports `Geist` and `Geist_Mono` from `next/font/google` and wires them into CSS variables used by Tailwind via `app/globals.css`.
  - Wraps the entire app with `LenisProvider` (smooth scrolling) and includes a global `Header` and `BottomBlur` visual overlay.
  - Renders all routed content inside `<main className="pt-16">{children}</main>`.
- `app/Providers/LenisProvider.tsx`:
  - Initializes `@studio-freight/lenis` once on mount and drives it via a `requestAnimationFrame` loop.
  - Any scroll-dependent behavior should assume Lenis is the scroll driver.

### Home page composition
- `app/page.tsx` is a thin composition layer that renders the following sections in order:
  - `Hero` – main hero with the fluid background and rotating logo.
  - `AboutUs` – mission/vision content.
  - `MustReads` – curated article list tiles.
  - `Events` – recent events highlight.
  - `Faq` – Homoeconomicus FAQ accordion.
  - `FooterStack` – stacked PreFooter + Footer animation.
- Each section lives under `app/Components/Sections/` as a client component and primarily handles layout, copy, and Framer Motion animations.

### UI building blocks
- **Section components** (`app/Components/Sections/*`): structured slices of the landing page that orchestrate layout and use shared UI primitives.
- **Misc components** (`app/Components/Misc/*`): reusable building blocks used across sections:
  - `Button` – styled button with variants (`primary`, `secondary`, `outline`) and hover transitions.
  - `Card` – glassy content container with consistent padding, border, and inner highlight.
  - `Indicator` – pill-shaped label used for small status/context tags.
  - `Header` – fixed top header with gradient background, central home icon, and a `Menu` button that opens `AnimatedMenu`.
  - `AnimatedMenu` – mobile/overlay navigation sheet using `framer-motion` and `lucide-react` icons.
  - `BottomBlur` – fixed bottom blur/mask overlay to create depth over page content.
  - `Footer` and `PreFooter` – lower-page call-to-action and site footer, coordinated by `FooterStack`.
- **Background components** (`app/Components/Background/*`):
  - `LiquidEther` – a complex Three.js-based fluid simulation used as the hero background. It sets up its own WebGL renderer, simulation pipeline, and observers (resize and intersection) and exposes options via props (e.g., `mouseForce`, `cursorSize`, `colors`, `autoDemo` controls).
  - `Stars` – generates animated "shooting star" elements whose styling and keyframes are defined in `app/globals.css`.

### Blog system
- Dynamic route: `app/blogs/[slugs]/page.tsx`:
  - Imports specific blog components from `app/content/blogs/*` and maps slugs to components via a `blogPosts` object.
  - If a slug is not present in the mapping, it calls `notFound()`.
- To add a new blog post under this system:
  - Create a React component under `app/content/blogs/YourPost.tsx` that renders the full post content.
  - Register the slug and component in the `blogPosts` map in `app/blogs/[slugs]/page.tsx`.
  - Ensure slug keys are consistent with the `[slugs]` URL segment.

### Styling, fonts, and Tailwind
- Global styles live in `app/globals.css`:
  - Uses Tailwind CSS v4 via `@import "tailwindcss";` and an `@theme inline` block wired to the Geist font variables.
  - Overrides `body` typography and colors and defines the `.shooting-star` animation used by the `Stars` component.
  - Declares custom font faces:
    - `Alterglam` for headings, backed by files in `public/fonts/heading/*`.
    - `Kamerik` for body text, backed by `public/fonts/body/Kamerik105Cyrillic-Bold.ttf`.
- `postcss.config.mjs` configures Tailwind as a PostCSS plugin via `"@tailwindcss/postcss"`.

### Configuration and tooling
- `tsconfig.json`:
  - Uses `moduleResolution: "bundler"` with strict TypeScript settings and React JSX.
  - Provides a path alias `@/*` that maps to the project root; many components use `@/app/...` imports.
- `eslint.config.mjs`:
  - Extends `eslint-config-next` (`core-web-vitals` and `typescript`) and sets global ignores for `/.next`, `out`, `build`, and `next-env.d.ts`.
- `next.config.ts`:
  - Currently uses the default exported `NextConfig` shape with no custom options; any framework-level tweaks (e.g., image domains, experimental flags) should be added here.
