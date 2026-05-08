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
