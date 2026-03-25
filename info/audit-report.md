# Audit Report — Gutsy (Hamburguer Artesanal & Cocktails)
_Generated: 2026-03-25_

## Critical (must fix before launch)

- [ ] **No `.env` file** — only `.env.example` exists with `NEXT_PUBLIC_SITE_URL=http://localhost:3000`. Must create `.env` with production URL, Resend API key, Formspree ID, and Google Review URL before deploy
- [ ] **No `favicon.ico`** — missing from `public/`, browsers will show default icon
- [ ] **No `og-image.jpg`** — missing from `public/`, social shares will have no preview image
- [ ] **Maps embed URL is placeholder** — both EN and PT `contact.map.mapsEmbedUrl` contain fabricated coordinates (`0x0%3A0x0`). The embed will not show the actual restaurant location. Need real Place ID from Google Maps
- [ ] **PT menu burger prices all wrong** — EN has `~€10` for most burgers (matching info.md), PT has `€12.50` for ALL burgers. These are factual data that must be identical across languages
- [ ] **PT menu burger descriptions are fabricated** — EN descriptions contain real ingredient lists (e.g. "100% beef, Sao Jorge island cheese, jalapeno peppers, arugula, fresh tomato on seeded bun"). PT descriptions are generic filler (e.g. "O nosso classico hamburguer artesanal com ingredientes premium"). Every PT burger description needs to be a real translation of the EN ingredients
- [ ] **PT fish burger prices wrong** — EN has `~€10`, PT has `€12.50` for Fearless/Charming/Codfish
- [ ] **PT vegetarian burger prices wrong** — EN has `~€10`, PT has `€11.50` for Tofu/Seitan
- [ ] **PT specialty descriptions are fabricated** — EN has real ingredient details, PT has generic filler text
- [ ] **`home.description` is placeholder** (EN) — "This is the starting point of your project. Edit this page to get started." is the default scaffold text
- [ ] **Services icon mismatch** — EN uses `🍹` for Cocktails & Drinks, PT uses `🍸`. Icons must be identical across languages
- [ ] **statsCounters cocktails mismatch** — EN says `15+` cocktails, PT says `10+`. The menu lists exactly 10 cocktails, so EN is wrong (should be `10+`)

## Warning (should verify with client)

- [ ] **Uber Eats URL unverified** — `https://www.ubereats.com/pt/store/gutsy-carcavelos/6hCviMoCWMepsbAN5RdGGg` appears in both dicts but is not confirmed in info.md. Verify it is current and active
- [ ] **TheFork / reservation integration missing** — populate-report.md notes info.md mentions thefork.pt but no TheFork URL is in the dicts. Consider adding if Gutsy uses TheFork for reservations
- [ ] **Social media links not structured** — Instagram (@gutsyoriginal) and Facebook (/GutsyOriginal) are only mentioned in `contact.body` text (EN), not as structured links. PT `contact.body` does not mention them at all. Should add as proper footer/contact links
- [ ] **Google Review URL empty** — `.env.example` has `NEXT_PUBLIC_GOOGLE_REVIEW_URL=` blank. The `googleReviews` section CTA ("Leave a Google Review") needs a real URL to function
- [ ] **`RESEND_API_KEY` and `CONTACT_TO_EMAIL` blank** — contact form will not send emails without these
- [ ] **`NEXT_PUBLIC_FORMSPREE_ID` blank** — reservation form will not work without this
- [ ] **All reviews are 4-5 stars** — 4 reviews at 5 stars, 2 at 4 stars. This is real data (from Google), but verify these are still the best representative reviews
- [ ] **Review avatars all null** — all 6 reviews have `"avatar": null`. Consider adding real Google profile photos or a default avatar
- [ ] **About section body text unverified** — the story about Sao Jorge cheese and artisan burgers is plausible but was not confirmed against client-provided copy
- [ ] **Copyright year 2025** — footer.copyright says "2025" in both dicts. Verify if this should be updated to 2026
- [ ] **Pricing disclaimer mismatch** — EN says "Available for dine-in", PT says "Disponivel para comer no local e takeaway" (adds takeaway). These should match in meaning
- [ ] **PT FAQ items differ from EN** — EN FAQ has 6 items (booking, vegetarian, hours, parking, outdoor, kids). PT FAQ has 6 items but different questions (hours, vegetarian, booking, outdoor, takeaway, kids). The takeaway Q is only in PT, and the parking Q is only in EN. Should be equivalent

## Info (nice to have)

- [ ] **No `site.webmanifest`** — not critical but helps with PWA/mobile add-to-home-screen
- [ ] **Default Next.js SVGs still in public/** — `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` are unused scaffold files. Should remove for cleanliness
- [ ] **Gallery images are large** — 8 gallery images at 1.7-2.4MB each (total ~15MB). Consider optimizing to ~200-500KB each for faster load times
- [ ] **Menu images are large** — 65 menu images averaging ~1.6MB each (total ~105MB in `public/menu/`). These should be optimized significantly
- [ ] **Hero image is large** — `hero-black.jpg` is 1.8MB, `about.jpg` is 2.3MB. Should optimize
- [ ] **EN pricing section named "SHARING PLATES"** — the pricing section repackages sharing items and kids menu as "deals". Title could be confusing since there is already a "To Share" menu category
- [ ] **PT pricing plan name "Gutsy Familia"** differs from EN "Family" — EN uses "Family", PT uses "Gutsy Familia" for the same plan. Minor naming inconsistency (not a data mismatch, just branding)
- [ ] **Menu category keys differ between EN and PT** — EN uses `burgers-meat`, PT uses `burgers-carne`; EN uses `specialties`, PT uses `especialidades`; etc. This is fine if the code only uses them as local keys, but could cause issues if keys are used for routing or anchors

## Summary

| Severity | Count |
|----------|-------|
| Critical | 12 |
| Warning  | 14 |
| Info     | 8 |

**Image coverage**: All 65 menu images, 8 gallery images, hero, and about images exist in `public/`. No missing image files referenced in the dicts.

**Data consistency**: Phone (+351 21 828 5795), email (gutsyoriginalpt@gmail.com), and address (Praca Do Junqueiro 6B, 2775-597 Carcavelos) are consistent across all sections in both languages. Hours are consistent (format differs by language as expected).

**Reviews**: All 6 reviews are real Google reviews (confirmed by populate-report.md). Ratings are authentic (4x 5-star, 2x 4-star).
