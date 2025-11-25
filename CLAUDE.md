# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static web project with interactive tools to help visitors discover Florianópolis beaches, neighborhoods, and hidden gems. No build step required—open HTML files directly in browser.

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
├── beach.md                # Source data for beaches
├── stay.md                 # Source data for neighborhoods
└── hiddengems.md           # Source data for hidden gems
```

## Data Structures

### beaches.js
- `beaches[]` - 27 beach objects with properties:
  - Matching: `vibe`, `effort`, `priority`, `practical`
  - Ratings: `waves`, `crowds`, `infrastructure` (1-5 scale)
  - Display: `name`, `nickname`, `emoji`, `type`, `region`, `description`
  - Practical: `parking`, `food`, `bestTime`, `bestSeason`, `proTip`, `access`
  - `tags[]` for bonus matching
- `beachQuestions[]` - 4 quiz questions
- `calculateBeachMatch(answers)` - returns best matching beach

### neighborhoods.js
- `neighborhoods[]` - 17 neighborhood objects with properties:
  - Matching: `tripType`, `budget`, `scene`, `priority`
  - Prices: `shortTermLow`, `shortTermHigh`, `longTerm`
  - Display: `name`, `nickname`, `emoji`, `type`, `region`, `description`
  - `bestFor`, `notIdealFor`, `nearbyBeaches[]`, `proTip`
  - Optional: `coworking`, `internet`
- `neighborhoodQuestions[]` - 4 quiz questions
- `calculateNeighborhoodMatch(answers)` - returns `{best, alternatives[]}`

### gems.js
- `gems[]` - 27 hidden gem objects across 5 categories:
  - Secret Beach (5): secluded beaches requiring effort to reach
  - Epic Viewpoint (6): sunrise/sunset spots and panoramic views
  - Hidden Eat (7): local restaurants and food secrets
  - Rare Experience (5): seasonal/unique activities
  - Insider Secret (4): passwords, off-menu items, local knowledge
- Each gem has:
  - `name`, `nickname`, `emoji`, `category`, `description`
  - `theSecret` - the key insider tip
  - `effort` (Easy/Moderate/Hard), `effortDetail`
  - `bestTime`, `season`, optional `seasonBadge`
  - `warning` - heads up info
  - `tags[]`
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
- Parchment texture with compass rose decoration
- Confetti celebration on result reveal

## Development

No build process. Edit files directly and refresh browser.
- Shared CSS in `css/style.css`
- Page-specific styles in `<style>` blocks within HTML
- Data and logic in separate JS files for maintainability
