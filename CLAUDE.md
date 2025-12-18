# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Vamos Floripa** — A bilingual (Portuguese/English) static web project with interactive tools to help visitors discover Florianópolis beaches, neighborhoods, and hidden gems. Targets Brazilian and South American tourists. No build step required—open HTML files directly in browser.

**Brand:** Vamos Floripa (same in both languages)
**Planned Domain:** vamosfloripa.com

## Project Structure

```
/
├── index.html              # Landing page linking all three tools
├── find-your-beach.html    # Beach finder quiz (4 questions → best match)
├── where-to-stay.html      # Neighborhood finder quiz (4 questions → best match)
├── hidden-gems.html        # Treasure chest random reveal (27 secrets)
├── css/
│   └── style.css           # Shared styles (vintage nautical map aesthetic)
├── js/
│   ├── beaches.js          # Beach data + quiz questions + matching logic
│   ├── neighborhoods.js    # Neighborhood data + quiz questions + matching logic
│   └── gems.js             # Hidden gems data + category colors
├── images/
│   ├── title1.png          # Hero island illustration (landing page)
│   ├── fancy_icon_1.png    # Beach icon (landing + find-your-beach)
│   ├── fancy_icon_2.png    # House icon (landing + where-to-stay)
│   ├── fancy_icon_3.png    # Key icon (landing + hidden-gems)
│   ├── og-home.png         # OG preview for landing page
│   ├── og-beach.png        # OG preview for beach quiz
│   ├── og-stay.png         # OG preview for neighborhood quiz
│   └── og-gems.png         # OG preview for hidden gems
├── .claude/
│   └── agents/
│       └── translator.md   # Translation agent for adding new content
├── beach.md                # Source data for beaches
├── stay.md                 # Source data for neighborhoods
└── hiddengems.md           # Source data for hidden gems
```

## Internationalization (i18n)

### Default Language
- **Portuguese (pt-BR)** is the default language
- All pages load in Portuguese first
- User preference persists via `localStorage` key `floripa-lang`

### Bilingual Data Format
All user-facing text in JS files uses bilingual objects:
```javascript
nickname: { en: "The Surfer's Cathedral", pt: "A Catedral do Surf" },
description: { en: "Iconic dunes meet...", pt: "Dunas icônicas encontram..." }
```

### Language Toggle
- EN/PT buttons in top-right corner of every page
- Stored in `localStorage` as `floripa-lang`
- Instant switching without page reload

### HTML i18n Attributes
Static HTML text uses data attributes:
```html
<h1 data-i18n-en="Find Your Beach" data-i18n-pt="Encontre Sua Praia">
  Encontre Sua Praia
</h1>
```

### Helper Functions (in each HTML file)
- `getLocalizedValue(value)` - extracts correct language from `{en, pt}` objects
- `setLanguage(lang)` - switches UI language and saves preference
- `t(key)` - translates UI labels from `i18n` object

## Data Structures

### beaches.js
- `beaches[]` - 27 beach objects with bilingual properties:
  - Matching: `vibe`, `effort`, `priority`, `practical` (not translated)
  - Ratings: `waves`, `crowds`, `infrastructure` (1-5 scale)
  - Display: `name`, `nickname`, `emoji`, `type`, `region`, `description` (bilingual)
  - Practical: `parking`, `food`, `bestTime`, `bestSeason`, `proTip`, `access` (bilingual)
  - `tags[]` for bonus matching
- `beachQuestions[]` - 4 quiz questions with bilingual `label`, `text`, and options
- `calculateBeachMatch(answers)` - returns best matching beach

### neighborhoods.js
- `neighborhoods[]` - 17 neighborhood objects with bilingual properties:
  - Matching: `tripType`, `budget`, `scene`, `priority` (not translated)
  - Prices: `shortTermLow`, `shortTermHigh`, `longTerm`
  - Display: `name`, `nickname`, `emoji`, `type`, `region`, `description` (bilingual)
  - `bestFor`, `notIdealFor`, `nearbyBeaches[]`, `proTip` (bilingual)
  - Optional: `coworking`, `internet`
- `neighborhoodQuestions[]` - 4 quiz questions with bilingual content
- `calculateNeighborhoodMatch(answers)` - returns `{best, alternatives[]}`

### gems.js
- `gems[]` - 27 hidden gem objects across 5 categories (bilingual):
  - Secret Beach (5): secluded beaches requiring effort to reach
  - Epic Viewpoint (6): sunrise/sunset spots and panoramic views
  - Hidden Eat (7): local restaurants and food secrets
  - Rare Experience (5): seasonal/unique activities
  - Insider Secret (4): passwords, off-menu items, local knowledge
- Each gem has bilingual: `nickname`, `category`, `description`, `theSecret`, `effort`, `effortDetail`, `bestTime`, `season`, `seasonBadge`, `warning`
- `getRandomGem()` - returns a random gem
- `categoryColors{}` - styling for each category

## Tool Behaviors

**Beach Quiz (find-your-beach.html):**
- 4 questions → weighted matching → single best result
- Weights: vibe 5 pts | priority 4 pts | effort 3 pts | practical 2 pts
- Bonus for tag matches and attribute alignment

**Neighborhood Quiz (where-to-stay.html):**
- 4 questions → weighted matching → best + 2 alternatives
- Weights: tripType 5 pts | budget 4 pts | priority 4 pts | scene 3 pts
- Bonus for coworking (remote workers), surf tags, family tags

**Hidden Gems (hidden-gems.html):**
- Treasure chest UI → random reveal (no quiz)
- Each tap reveals a new random gem with confetti
- Different interaction pattern to avoid quiz fatigue

## Visual Design

Vintage nautical map aesthetic with:
- CSS variables in `:root` (ocean-deep, coral, gold, sea-glass, etc.)
- Animated ocean background and wave overlay
- Parchment texture background
- Confetti celebration on result reveal

### Single-Screen Layout
All intro screens are viewport-constrained (no scrolling):
- `min-height: calc(100vh - 140px)` with flexbox centering
- Fluid sizing using `clamp()` based on viewport height
- Content adapts to screen size without overflow

### Staggered Entrance Animations
Each page loads with orchestrated reveal animations:
| Element | Delay | Animation |
|---------|-------|-----------|
| Icon | 0.0s | fadeSlideDown |
| Title | 0.15s | fadeSlideUp |
| Subtitle | 0.25s | fadeSlideUp |
| Intro text | 0.35s | fadeSlideUp |
| Button/Cards/Chest | 0.45s+ | fadeSlideUp |

### Custom Icons
All major icons use custom PNG illustrations instead of emojis:
- **Hero island** (`title1.png`): `clamp(120px, 18vh, 180px)`, float animation
- **Landing cards** (`fancy_icon_*.png`): `clamp(50px, 8vh, 80px)` with hover scale
- **Page headers** (`fancy_icon_*.png`): `clamp(80px, 15vh, 130px)` centered

### Responsive Breakpoints
```css
/* Mobile (< 700px): Cards stack vertically */
/* Short screens (< 650px): Hide descriptions, compact layout */
/* Tall screens (> 800px): More generous spacing */
```

### Language Toggle
- EN/PT buttons positioned top-right (15px) on all pages
- Ocean-blue tint (`rgba(45, 90, 107, 0.25)`) when inactive
- Coral highlight when active
- Consistent styling across all pages

### Treasure Chest (hidden-gems.html)
Detailed CSS-drawn pirate chest with elaborate animations:
- **Structure**: Wood grain texture, metal bands, corner brackets, ornate gold lock with keyhole
- **Idle animations**: Float (4s), wiggle attention-grab (5s), keyhole glow pulse (3s)
- **Hover**: Scale up with deeper shadow, particles speed up
- **Opening reveal**: 3D lid flip, 7 golden light rays, 8 sparkle stars burst, golden glow
- **Floating particles**: 8 gold specks drift upward continuously

## SEO & Social Sharing

### Technical SEO
- **Sitemap**: `sitemap.xml` with all 4 pages
- **Robots**: `robots.txt` allowing all crawlers
- **Canonical URLs**: `<link rel="canonical">` on all pages
- **Hreflang**: `<link rel="alternate" hreflang="pt-BR|en|x-default">` for bilingual support
- **Schema.org**: JSON-LD structured data (Organization + WebPage types)

### Meta Tags (all bilingual)
- `<meta name="description">` with Portuguese keywords
- Open Graph tags (`og:title`, `og:description`, `og:image`)
- Twitter Card tags for Twitter/X previews
- OG images are 1200×630px PNGs in `/images/`

### Target Keywords (Portuguese)
- "praias floripa" / "praias florianópolis"
- "onde ficar em floripa" / "onde ficar florianópolis"
- "segredos floripa" / "dicas locais florianópolis"

### Google Search Console
To monitor SEO performance:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://vamosfloripa.com`
3. Verify via DNS TXT record (Squarespace)
4. Submit sitemap: `https://vamosfloripa.com/sitemap.xml`

## Deployment

- **Live at**: https://vamosfloripa.com
- **Hosted on**: GitHub Pages (via CNAME)
- **Repository**: https://github.com/sahasand/FloripaWeb
- Push to `main` branch auto-deploys
- No build step required

## Development

Edit files directly and refresh browser.
- Shared CSS in `css/style.css`
- Page-specific styles in `<style>` blocks within HTML
- Data and logic in separate JS files for maintainability

### Adding New Content
When adding new beaches, neighborhoods, or gems:
1. Use the bilingual format: `property: { en: "English", pt: "Portuguese" }`
2. Keep place names unchanged (don't translate proper nouns)
3. Use informal Brazilian Portuguese (pt-BR) with contractions like "pra", "pro"
4. The `.claude/agents/translator.md` agent can help with translations
