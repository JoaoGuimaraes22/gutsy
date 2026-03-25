# Populate Report for Gutsy – Hambúrguer Artesanal & Cocktails
_Updated: 2026-03-25_

## Changes Made

### EN Dictionary

| Field | Change |
|-------|--------|
| `metadata` | Added SEO fields: `name`, `phone`, `email`, `address`, `type` (Restaurant) |
| `home.description` | Replaced scaffold placeholder with real tagline |
| `footer.copyright` | Updated year from 2025 to 2026 |
| `statsCounters.items[3].target` | Changed cocktails from 15 to 10 (matches actual menu count) |

### PT Dictionary

| Field | Change |
|-------|--------|
| `metadata` | Added SEO fields: `name`, `phone`, `email`, `address`, `type` (Restaurant) |
| `footer.copyright` | Updated year from 2025 to 2026 |
| `services.items[1].icon` | Changed `🍸` to `🍹` (match EN) |
| `services.items[2].icon` | Changed `🌿` to `🌱` (match EN) |
| `menu` — 12 meat burgers | Replaced fabricated descriptions with real ingredient lists translated from EN; fixed prices from `€12.50` to `~€10` (Empoderada stays `€11.95`) |
| `menu` — 3 fish burgers | Replaced fabricated descriptions with real ingredient translations; fixed prices from `€12.50` to `~€10` |
| `menu` — 2 vegetarian burgers | Replaced fabricated descriptions with real ingredient translations; fixed prices from `€11.50` to `~€10` |
| `menu` — 3 specialties | Replaced fabricated descriptions with real ingredient translations (prices were already correct) |
| `pricing.disclaimer` | Removed "e takeaway" to match EN ("Available for dine-in") |
| `faq.items` | Reordered to match EN sequence; replaced takeaway Q with parking Q; updated answers to match EN content |
| `contact.body` | Added Instagram @gutsyoriginal and Facebook /GutsyOriginal mentions (matching EN) |

## Verified (unchanged, confirmed correct)

- `contact.phone`: "+351 21 828 5795" — matches info.md
- `contact.email`: "gutsyoriginalpt@gmail.com" — matches info.md
- `contact.address`: "Praça Do Junqueiro 6B, 2775-597 Carcavelos" — matches info.md
- `contact.hours`: matches info.md (Mon-Thu 12-23, Fri-Sat 12-23:30, Sun 12-23)
- `footer` phone/email/address/hours: identical to contact in both languages
- `hero.stats` / `about.stats`: 88+ reviews, 4.1 rating — matches info.md (4.13 rounded)
- `statsCounters`: reviews (88), rating (4.1), menu items (30+), cocktails (10) — all correct
- All menu prices for cocktails, plates, sharing, wraps, salads, drinks, wines, spirits — match info.md
- All 6 reviews are real Google reviews (confirmed in prior populate run)

## Still Unverified (verify with client)

- `contact.map.mapsEmbedUrl` — placeholder coordinates (`0x0:0x0`), needs real Google Place ID
- Uber Eats URL — present in dict but not confirmed in info.md
- TheFork reservation URL — info.md mentions thefork.pt but no specific URL in dict
- `about.body` — story text sounds accurate but not client-confirmed
- Google Review URL — `.env.example` has it blank, CTA button needs real URL
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_FORMSPREE_ID` — all blank in `.env.example`

## Summary

| Category | Count |
|----------|-------|
| EN fields fixed | 4 |
| PT fields fixed | 26 (17 menu items + 6 FAQ + icon + disclaimer + contact body) |
| Metadata SEO fields added | 10 (5 per language) |
| Total edits | 40 |
