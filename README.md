# Agent Details Page — Standalone Demo

A standalone, portfolio-ready extraction of the **Agent Details** page from
[Manzel](https://beyotech.com) (Next.js App Router real-estate platform).
This repo contains only the page and its own component tree, refactored so it
runs as an independent Next.js 14 application with zero backend dependencies —
all data is static demo data.

## Live demo

> Deployed on Vercel — add your URL here after the first deploy, e.g.:
> https://standalone-agent-details.vercel.app

## What's in the page

![stack](https://img.shields.io/badge/Next.js-14-black) ![react](https://img.shields.io/badge/React-18-blue)

| Section | Details |
|---|---|
| **Hero** | Agent identity with verified badge, role, tagline, location / languages / experience / certification pills, WhatsApp / call / message CTAs, social links row and native **Web Share API** with clipboard fallback (`sweetalert2` confirmation) |
| **Hero stats** | Active listings / client rating / deals closed, RTL-aware border handling |
| **About** | Read more / read less expander for long agent bios, member-since badge |
| **Properties grid** | Sortable listings (newest, price asc/desc) with "showing X of Y" toolbar, lazy-loaded images, sale/rent tags, favorite hover state, price overlay, "load more" pagination |
| **Contact card** | Email / WhatsApp / office address rows, click-to-WhatsApp action, share profile |
| **Quick stats ("At a glance")** | Response time, listings posted, average price range, primary area, spoken languages |
| **Request a match** | Pronoun-aware CTA card |

## Architecture notes

- **Next.js 14 App Router** with a `[slug]` route and `generateMetadata` for per-agent titles/descriptions
- The page component is loaded with `next/dynamic` so the route ships a minimal payload
- **CSS Modules + Tailwind CSS** — the page ships a fully self-contained design
  system (custom properties for colors, radii, shadows, typography) so it can
  render alone, decoupled from the host platform's global styles
- **i18n-ready** — a standalone `translate()` helper with the full EN/AR locale
  files extracted from the platform, so every label is production-translation-backed
- Zero external services: redux, settings API and property API calls of the
  original implementation were refactored out; the components keep the same
  props interfaces (`agentInfo`, `propertiesData`, `handleShare`) so they can be
  dropped back into a live data-driven app as-is

## File map

```
app/
  layout.tsx                     # fonts (Inter/Manrope/Montserrat), demo shell
  globals.css                    # tailwind + base styles
  page.tsx                       # redirects to the demo agent
  agent-details/[slug]/          # the page itself
    page.tsx                     # metadata + dynamic client component
    AgentDetailsClient.jsx       # agent data + share handling
    agent-details.module.css     # self-contained design tokens
components/
  Crumb/crumb.jsx                # breadcrumb
  Agents/Agent/
    body.jsx · hero.jsx · two-column.jsx
    main/       (about, properties-grid, property-card)
    sidebar/    (contact-card, quick-stats, request-match)
lib/
  translate.js · locale/{en,ar}.json
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## Extracted from

This is a faithful extraction of the agent-details page I built for the
Manzel real-estate platform (full product: property listings, agents,
photographer sessions, 3D tours). The demo data mirrors the real UI contract.
