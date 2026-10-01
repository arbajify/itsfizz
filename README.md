# Itzfizz Hero

Scroll-animated hero section. Next.js (App Router) + Tailwind CSS + GSAP / ScrollTrigger.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start   # production check
```

## How it works
- `components/Hero.jsx` holds everything.
- Intro timeline: letters, then orb, then stats stagger in (time-based).
- Scroll timeline: ScrollTrigger with `scrub: 1` moves the orb, headline and stats (progress-based).
- Only `transform` and `opacity` are animated. Reduced-motion users get a static layout.
