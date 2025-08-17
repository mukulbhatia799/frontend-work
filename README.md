# Biccas Landing — Remix + Tailwind + Framer Motion

A single-page landing built in **Remix** (as requested), styled with **Tailwind CSS**, and animated with **Framer Motion**.
It’s responsive and loosely follows the screenshots you provided. You can tweak styles/content as needed.

## Quickstart

```bash
# 1) Install deps
npm i

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
npm start
```


### Where to edit

- `app/routes/_index.tsx` — the entire landing page (sections, content, and animations).
- `app/components/Nav.tsx` — navbar.
- `app/tailwind.css` — global styles & tiny utility classes.
- `tailwind.config.ts` — Tailwind theme tweaks.

### Notes

- I used **Framer Motion** for entrance/floating animations. If you prefer GSAP, you can add it too.
- All sections are mobile-first responsive.
- Color palette is close to your mock (greens and subtle gradients), but you can alter easily via Tailwind.
