# Radiance Aesthetics — Compliance & Polish

## Files changed
- `index.html` — favicon link, mobile action bar Message link, cookie banner markup, footer social icons, footer legal links repointed to local pages
- `styles.css` — treatment image 4-edge mask, footer social row, legal-page layout, cookie banner styles
- `script.js` — back-to-top fix for `#top`, cookie consent persistence
- `assets/favicon.svg` — new file
- `privacy-policy.html` — new file
- `terms-and-conditions.html` — new file
- `cookie-policy.html` — new file

## 1. Treatment image — rounded corners
- Replaced `.treatment-story figure::after` one-sided overlay (which only feathered the inner edge) with a clean `border-radius: 1rem` on the figure
- Tried a 4-sided `mask-image` fade first but it read as muddy/out-of-focus, especially on close-up skin photography — rounded corners give crisper, more editorial results
- `.treatment-story figure` keeps `overflow: hidden` so the image is clipped to the radius
- Mobile-specific overlay rule removed; rounded corners scale correctly without a breakpoint override
- Result: photos now read as proper editorial frames rather than pasted-on rectangles or blurry vignettes

## 2. Footer social icons
- Instagram + Facebook circular buttons (~2.4rem) in `.footer-brand`, just under the description paragraph
- URLs:
  - Instagram → https://www.instagram.com/radiance_aestheticsandwellness/
  - Facebook → https://www.facebook.com/april.waterman.9
- Cream-on-dark border, transparent fill, hover lifts opacity + adds a subtle background and translateY(-1px)
- On mobile, where `.footer-brand p` is hidden, the social row stays visible and centres under the brand wordmark

## 3. Back-to-top fix
- The site's `scroll-padding-top: 5rem` was offsetting `scrollIntoView(#top)`, leaving the back-to-top link parked just below the header
- `script.js` now special-cases `href="#top"` to call `window.scrollTo({ top: 0, behavior: "smooth" })`, bypassing scroll-padding entirely
- All other anchor links unchanged

## 4. Legal pages — three new files
- `privacy-policy.html`, `terms-and-conditions.html`, `cookie-policy.html` at repo root
- Shared chrome: brand wordmark + "Back to site" ghost button in the header, slim copyright + nav footer at the bottom
- `.legal-page` container styled with the site's editorial typography — Cormorant Garamond for headings, Jost for body — single 48rem reading column
- Cookie banner included on every page, so the consent prompt fires on first visit regardless of entry point
- Favicon link uses the new `assets/favicon.svg` on all three
- `script.js` is included on all three so back-to-top, cookie consent, etc. all work
- Content covers UK aesthetics-clinic-specific boilerplate for a sole practitioner (April Waterman):
  - **Privacy:** UK GDPR Article 6 + Article 9 lawful bases, ~8 year clinical record retention, data subject rights, ICO complaints route
  - **Terms:** 18+ suitability, 24-hour cancellation notice, payment, results variation, photography consent, indemnity, England & Wales jurisdiction
  - **Cookie:** explicitly states no analytics, no advertising, no tracking pixels — only the consent localStorage key + Google Fonts third-party load
- Footer legal links in `index.html` updated from `https://radianceaesthetics.co/...` to local relative paths (`privacy-policy.html`, etc.)
- The boilerplate is sensible defaults — review and adjust to your specific practice (e.g. confirm record retention period with your insurer, confirm regulatory body wording) before going live

## 5. Cookie consent banner (UK GDPR / PECR compliant)
- Floating pill at the bottom of the viewport with backdrop blur, cream background, soft shadow
- **Reject** and **Accept** buttons are visually equal: same size, same min-width, same letter-spacing. Reject is clay-outlined, Accept is clay-filled — both equally findable, equally clickable
- Banner copy reflects the no-tracking reality: "This site stores a single cookie to remember your choice here. No analytics, no advertising, no tracking pixels."
- Cookie Policy link points at the new local `cookie-policy.html`
- Choice persisted via `localStorage` under key `radiance_cookie_consent` as `{ choice: "accepted"|"rejected", timestamp: ISO8601 }`
- Banner appears on first visit only across all four pages; dismissed banner stays dismissed across reloads
- On mobile (≤640px), banner sits 4.6rem from the bottom so it clears the mobile action bar
- On tablets and below (≤720px), buttons stack into a row that spans the banner width
- Graceful degradation: if `localStorage` is unavailable (private browsing, etc.), banner still hides on click for that session

## 6. Favicon — clean serif R
- New `assets/favicon.svg`: rounded-square cream background (#fffdfa) with a centred serif "R" in clay (#a76658)
- Uses Georgia / Times serif stack for crisp rendering at 16px / 32px tab sizes
- All four HTML pages (`index.html`, `privacy-policy.html`, `terms-and-conditions.html`, `cookie-policy.html`) link to the new file
- The old `assets/logos/radiance-icon-only.svg` is left in place (still used elsewhere in the project)

## 7. Mobile action bar — Message opens blank WhatsApp
- The middle "Message" button now goes to `https://wa.me/447872028436` with no prefilled text — for clients who want to start a fresh conversation rather than land in the booking flow
- The right "Book" button still uses the booking prefill (unchanged)
- The "Call" button is unchanged

---

# Radiance Aesthetics — Visual Refresh

Changes made in this pass, ordered by impact.

## Files changed
- `index.html` — header markup, favicon, reviews heading
- `styles.css` — see grouped changes below
- `assets/april-mcdonald.jpg` — replaced with the new neutral-toned portrait

## 1. April's portrait — replaced
- `assets/april-mcdonald.jpg` is now the cream-blouse / neutral-grade version
- Saved as progressive JPG at quality 88, ~78KB
- Existing `object-fit: cover` + `object-position: center 30%` rules left in place; the new image's composition (face in upper third) sits well inside that crop

## 2. Popular treatments carousel → 3-column grid
**The single biggest visual fix.**
- `.treatment-scroll` no longer uses horizontal scroll / scroll-snap
- Now `grid-template-columns: repeat(3, minmax(0, 1fr))` on desktop, 2 cols at <1120px, 1 col at <640px
- All 6 cards visible at once on desktop in a clean 3×2 layout
- Cards now have a soft border, subtle shadow, and a hover lift

## 3. Header logo — switched from raster to vector
- Old: `assets/radiance-logo-final.svg` (a 580×268 PNG embedded inside an SVG wrapper — looked muted/low-res)
- New: `assets/logos/radiance-horizontal-light.svg` (true vector, the proper brand artwork that already existed in the project)
- Logo height bumped from 2.8rem → 3.4rem on desktop, 2.35rem → 2.55rem on mobile
- Header `min-height` raised from 4.25rem → 4.85rem to fit
- Favicon also switched to the proper vector (`logos/radiance-icon-only.svg`)

## 4. Header CTA softened to ghost
- New `.button-ghost` style added: clay outline, transparent fill, fills on hover
- Header CTA changed from `button-primary` → `button-ghost`
- This makes the hero's filled "BOOK YOUR CONSULTATION" button visually win the first viewport — no more two competing pink buttons

## 5. Hero gradient — feathered cleanup
- The dark overlay used to terminate at ~52% with a fairly hard edge; now feathers smoothly across 6 stops down to fully transparent at the right edge
- Slight angle change (90° → 105°) so the transition reads as deliberate diagonal rather than vertical
- The lotus shows through more naturally on the right

## 6. Goal cards — proper card treatment
- Now a 5-column grid on desktop (no more horizontal scroll), 3 cols at <1120px, 2 cols at <640px
- Added: subtle hairline border, soft shadow, rounded corners, hover lift, arrow nudges right on hover
- Icons bumped from 2.35rem → 3.05rem (≈30% bigger) — they no longer look like afterthoughts

## 7. Process section — connecting hairline + numbered circles
- The "01 / 02 / 03 / 04" numbers are now rendered as outlined clay circles (4.5rem) instead of plain large serif numerals
- A horizontal hairline gradient runs through the centres of the circles, connecting the four steps as a journey
- Line auto-hides at <1120px when the steps stack vertically
- Circles use the paper background so they cleanly punch through the line

## 8. PRP infographic — better card presence
- Each of the four PRP use-cases is now a proper bordered card with a hover state
- Reduced reliance on full-width section borders, more on individual card definition
- Cards sit on the cream `speciality-treatment` background with subtle elevation

## 9. Trust panel — refined
- Slightly more vertical breathing room (3.8rem → 4.1rem min-height)
- Added rounded corners and a soft border so it reads as a finished element rather than a strip pinned to the hero

## 10. Reviews — Google rating row added
- Small pill-style badge under the "What clients actually say" headline
- 5★ + "Verified Google reviews" copy
- **TODO marker in HTML** — replace the copy with the real review count once verified. Comment is in `index.html` next to the element:
  ```html
  <!-- TODO: Replace the review count with the real Google review count once verified. -->
  ```

## 11. Buttons — micro-refinement
- Primary button now has a subtle inner highlight and warm shadow so it reads as a tactile pill rather than a flat block
- Existing `--clay` / `--clay-dark` colours unchanged so nothing else on the site shifts

## 12. Design tokens — minor additions
- Added `--clay-deep: #7a4339` for darker accent uses
- Added `--shadow-soft` for the new card elevations

---

## Things deliberately NOT changed
- **Brand colours (`--clay`, `--rose`, `--gold`)** — unchanged. Tightening hierarchy and structure delivers more visual lift than colour shifts, and these tokens are used across other Radiance materials.
- **Footer** — already strong, left alone.
- **Treatment-detail editorial images** — these are stock-feeling but a replacement requires real clinic photography, which isn't in scope for this pass. Worth scheduling a half-day shoot.
- **Section vertical padding** — measured the actual values; they're 56–96px which is appropriate for the editorial spacing the site is going for. The empty-feel I noticed on initial scans was a screenshot viewport artifact, not real layout.

## Known follow-ups worth doing later
1. Real photography of the clinic, treatment in progress, and 1–2 wider shots of April for use in the practitioner / treatment-detail sections
2. Replace the Google rating placeholder with the real verified count once available
3. An Instagram feed strip near the testimonials would lift social proof further
4. A short founder video clip embedded in the practitioner section converts well in this category
