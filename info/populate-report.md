# Populate Report for Gutsy – Hambúrguer Artesanal & Cocktails

## Verified ✅
Fields confirmed correct by info.md:
- contact.phone: "+351 21 828 5795" ✅
- contact.email: "gutsyoriginalpt@gmail.com" ✅
- contact.address: "Praça Do Junqueiro 6B, 2775-597 Carcavelos" ✅
- contact.hours: "Mon–Thu 12:00–23:00 · Fri–Sat 12:00–23:30 · Sun 12:00–23:00" ✅
- footer.phone, footer.email, footer.address, footer.hours: all match contact ✅
- hero.stats: 88+ reviews, 4.1★ rating ✅ (info.md says 4.13, rounded to 4.1)
- about.stats: same as hero ✅
- statsCounters: 88+ reviews, 4.1★ rating ✅
- menu: all items, descriptions, and prices match info.md ✅
- faq.hours answer: matches info.md hours ✅

## Corrected 🔧
Fields updated with real data from info.md:
- reviews.items (EN): 6 fabricated reviews → 6 real Google reviews (Susana Rodrigues, Mateus Felipe, Mar Dragon, Graça Diogo, Michelle Mertens, Diogo Marques)
- reviews.items (PT): 6 fabricated reviews → 6 real Google reviews (same reviewers, Portuguese text)

## Unverified ⚠️
Fields with no data in info.md to confirm — KEEP AS-IS but verify with client:
- about.body: story text about São Jorge cheese, artisan burgers — sounds accurate but unverified
- services.items: 6 "Why Gutsy" items — plausible but unverified (artisan burgers, cocktails, vegetarian, outdoor, kid-friendly, reservations)
- galleryStrip.images: 8 gallery images with alt text — unverified
- reservation.times: time slots 12:00–22:30 — consistent with hours but unverified

## Fabricated 🔴
Content that was generated and needs real data from client:
- ~~reviews.items: all 6 reviews were fabricated~~ → **FIXED** with real Google reviews

## Missing from info.md 📋
- Google Maps embed URL in contact.map.mapsEmbedUrl — currently a placeholder URL
- Instagram / Facebook links not in dict (only mentioned in contact.body text)
- Uber Eats link — present in dict, not confirmed in info.md
- TheFork reservation URL — info.md mentions thefork.pt but no specific URL in dict
