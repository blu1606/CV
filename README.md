# magiCV – Run Instructions

## Prerequisites
- Node.js 18.18+ (or 20+ recommended)
- npm 9+

Verify versions:
```bash
node -v
npm -v
```

## Install dependencies
On Windows PowerShell (to avoid React 19 peer warnings):
```bash
npm install --no-audit --no-fund --legacy-peer-deps
```

## Start the development server
```bash
npm run dev
```
Then open `http://localhost:3000`.

## Build for production
```bash
npm run build
```

## Start production server
```bash
npm run start
```
The default port is `3000`.

## Project notes
- Videos are served from `public/`. The landing page background uses `/galaxy.mp4` → place your file at `public/galaxy.mp4`.
- Fonts are loaded via `next/font`:
  - Normal text: Space Grotesk
  - Headings: Instrument Serif (weight `400`)

## Troubleshooting
- Peer dependency conflict during install:
  - Use `npm install --legacy-peer-deps` (already shown above).
- Font error "Missing weight for Instrument Serif":
  - Ensure `Instrument_Serif({ weight: "400" })` is set in `app/layout.tsx`.
- Port 3000 is busy:
  - Set a different port: `PORT=3001 npm run dev` (PowerShell: `$env:PORT=3001; npm run dev`).
- Static file not found (e.g., video):
  - Confirm the asset exists at `public/<name>` and is referenced as `/<name>`.

## Scripts
- `npm run dev` – Start Next.js in dev mode
- `npm run build` – Build the app
- `npm run start` – Start the production server

## Links
- Space Grotesk: https://fonts.google.com/specimen/Space+Grotesk
- Instrument Serif: https://fonts.google.com/specimen/Instrument+Serif
