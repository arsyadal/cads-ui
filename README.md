# cads-ui

Premium motion components for React, Tailwind, and shadcn-style projects.

## MVP 0.1

- Free Core: Button, Badge, Card, Input, Textarea, Basic Dialog
- Pro Motion: Floating Island Navbar, Morph Modal, Magnifier Dock, Color Orbit Card, Animated Pricing Card, Spotlight Card
- Landing page with Free Core vs Pro Motion positioning
- Component docs with sidebar, live previews, usage, props, and accessibility notes

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## CLI foundation

```bash
npm run cli -- list
npm run cli -- info button
npm run cli -- add button --dry-run
```

Target future usage:

```bash
npx cads-ui add button
```

## Structure

```txt
app/                  Next.js app routes
app/docs/page.tsx     Registry-powered docs index
components/cads-ui/   Copy-paste component source
registry/             Component metadata for docs and CLI
bin/cads-ui.mjs       CLI foundation
lib/utils.ts          cn() helper
prd.md                Product requirements
```

## Philosophy

cads-ui is copy-paste first. Components live in `components/cads-ui/*` so developers can own and customize the source.

## Planning

- Product requirements: `prd.md`
- Execution roadmap: `execution-plan.md`
