// Hidden Gems Data for Florianópolis
const gems = [
    // ===== SECRET BEACHES (5) =====
    {
        name: "Praia da Gravatá",
        category: "Secret Beach",
        emoji: "🏖️",
        nickname: "The Hidden Cove",
        description: "A tiny secluded beach wedged between Mole and Galheta, invisible from the road. Only accessible by a steep trail or swimming around the rocks.",
        theSecret: "Look for the unmarked trail 200m before Praia Mole parking. The descent is steep but short—fewer than 50 people know this beach exists.",
        effort: "Moderate",
        effortDetail: "15-minute steep trail or swim from Mole",
        bestTime: "Morning",
        season: "Year-round",
        warning: "Rocky entry, bring water shoes",
        tags: ["secluded", "snorkeling", "locals-only"]
    },
    {
        name: "Praia do Saquinho",
        category: "Secret Beach",
        emoji: "🐚",
        nickname: "The Forgotten Shore",
        description: "A pristine stretch of sand between Solidão and Pântano do Sul, with virtually no infrastructure. The kind of beach postcards dream about.",
        theSecret: "Access via the trail from Solidão beach (30 min) or by boat from Pântano do Sul. Bring everything—there's nothing here but paradise.",
        effort: "Hard",
        effortDetail: "30-minute trail or boat access",
        bestTime: "All day",
        season: "Year-round",
        warning: "No facilities, no shade, no signal",
        tags: ["wilderness", "photography", "escape"]
    },
    {
        name: "Praia de Naufragados",
        category: "Secret Beach",
        emoji: "🚢",
        nickname: "Shipwreck Beach",
        description: "At the island's southern tip, this beach requires effort to reach but rewards with a historic lighthouse (1861) and wild, untouched beauty.",
        theSecret: "The 3km trail from Caieira da Barra do Sul passes through Atlantic Forest. Time your visit to explore the lighthouse ruins at low tide.",
        effort: "Hard",
        effortDetail: "3km forest trail (1.5 hours)",
        bestTime: "Morning for hiking",
        season: "Year-round",
        warning: "Start early, bring water, check tide times",
        tags: ["historic", "adventure", "lighthouse"]
    },
    {
        name: "Lagoinha do Leste",
        category: "Secret Beach",
        emoji: "🏝️",
        nickname: "The Island's Crown Jewel",
        description: "The most beautiful beach in Floripa, accessible only by trail. A pristine lagoon meets the Atlantic with zero development in sight.",
        theSecret: "Go via Pântano do Sul (shorter, steeper) not Matadeiro. Arrive before 8am on weekends—the Instagram crowd shows up by 10am.",
        effort: "Hard",
        effortDetail: "2.2km steep trail from Pântano do Sul",
        bestTime: "Sunrise",
        season: "Year-round",
        warning: "No infrastructure, bring 2L+ water",
        tags: ["pristine", "instagram", "hiking"]
    },
    {
        name: "Praia da Galheta",
        category: "Secret Beach",
        emoji: "🌅",
        nickname: "The Free Beach",
        description: "Floripa's only official nudist beach, but clothing is optional—many visitors stay dressed. Wild, beautiful, and refreshingly unpretentious.",
        theSecret: "Access from the north end of Praia Mole (10-minute walk). The southern section is quieter. Best beach for watching the sunrise over Mole.",
        effort: "Easy",
        effortDetail: "10-minute walk from Mole",
        bestTime: "Sunrise or late afternoon",
        season: "Year-round",
        warning: "Naturist beach—respect the culture",
        tags: ["naturist", "sunrise", "alternative"]
    },

    // ===== EPIC VIEWPOINTS (6) =====
    {
        name: "Morro da Coroa",
        category: "Epic Viewpoint",
        emoji: "📸",
        nickname: "The Floating Rock",
        description: "The island's most photographed viewpoint—the complete panorama of Lagoinha do Leste with its lagoon and the famous 'floating rock' photo spot.",
        theSecret: "For an empty summit, arrive at 6am. The 'floating rock' photo requires patience—wait for the queue to clear or visit on a cloudy weekday.",
        effort: "Hard",
        effortDetail: "600m climb from beach, hands required",
        bestTime: "Sunrise",
        season: "Year-round",
        warning: "NOT after rain—slippery rocks. No cell signal.",
        tags: ["instagram-famous", "sunrise", "challenging"]
    },
    {
        name: "Pedra do Urubu",
        category: "Epic Viewpoint",
        emoji: "🦅",
        nickname: "Vulture's Rock",
        description: "360° views in just 20 minutes of hiking. See Lagoa da Conceição, Joaquina dunes, Campeche, and the airport from one spectacular summit.",
        theSecret: "The trailhead is unmarked—enter via Rua das Corucacas in Campeche. Best sunrise spot for photographers who can't do the Lagoinha hike.",
        effort: "Moderate",
        effortDetail: "1.3km trail, 20-30 minutes",
        bestTime: "Sunrise",
        season: "Year-round",
        warning: "Steep in sections, wear proper shoes",
        tags: ["panorama", "accessible", "photography"]
    },
    {
        name: "Morro das Aranhas",
        category: "Epic Viewpoint",
        emoji: "🕷️",
        nickname: "Spider Hill",
        description: "Panoramic views of three beaches plus 5,000-year-old indigenous petroglyphs at the trailhead. History meets horizon.",
        theSecret: "The petroglyphs are easy to miss—look for the interpretive sign at the trail start near Costão do Santinho. Take the left fork for Moçambique views.",
        effort: "Moderate",
        effortDetail: "40-50 minute trail, mostly shaded",
        bestTime: "Sunrise",
        season: "Year-round",
        warning: "Left trail is muddier but has best views",
        tags: ["petroglyphs", "history", "sunrise"]
    },
    {
        name: "Mirante Morro das Pedras",
        category: "Epic Viewpoint",
        emoji: "🐋",
        nickname: "Whale Watching Point",
        description: "The only viewpoint with reliable whale sightings (July-November). Located at Casa de Retiros Vila Fátima, a spiritual retreat with public access.",
        theSecret: "Come between July-October for southern right whales nursing their calves. They often approach within 30 meters of the coastline below.",
        effort: "Easy",
        effortDetail: "Drive-up access",
        bestTime: "Morning, calm days",
        season: "Jul-Nov for whales",
        seasonBadge: "WHALE SEASON",
        warning: "Respect the retreat atmosphere—cameras monitored",
        tags: ["whale-watching", "unique", "spiritual"]
    },
    {
        name: "Santo Antônio Sunset",
        category: "Epic Viewpoint",
        emoji: "🌇",
        nickname: "The Golden Hour Village",
        description: "The most famous sunset spot on the island. Historic Azorean buildings frame fishing boats as the sun drops over the continent.",
        theSecret: "Combine with dinner at Marisqueira Sintra—sit under the century-old fig tree. The bacalhau here is better than most places in Portugal.",
        effort: "Easy",
        effortDetail: "Drive, 15km from center",
        bestTime: "Sunset",
        season: "Year-round",
        warning: "Weekends get crowded—arrive by 5pm",
        tags: ["sunset", "romantic", "dining"]
    },
    {
        name: "Mirante Ponto de Vista",
        category: "Epic Viewpoint",
        emoji: "🍺",
        nickname: "View With a Beer",
        description: "Drive-up viewpoint with craft beer kiosk, artisan shops, and restaurant. The opposite angle from Morro da Lagoa—see Costa da Lagoa and the historic church.",
        theSecret: "Order the local craft beer and the pão de queijo. Best viewpoint for lazy sunset watchers who want their car nearby.",
        effort: "Easy",
        effortDetail: "Drive-up on SC-406",
        bestTime: "Late afternoon",
        season: "Year-round",
        warning: "None—this one's easy",
        tags: ["accessible", "craft-beer", "casual"]
    },

    // ===== HIDDEN EATS (7) =====
    {
        name: "Zé do Cacupé",
        category: "Hidden Eat",
        emoji: "🐟",
        nickname: "The Whole Fish Secret",
        description: "Since 1987, serving whole fried fish (rare in Floripa) with a procession of seafood dishes. Grandma Zair's crab recipe is legendary.",
        theSecret: "Order the 'Especial Estrela do Mar' for the full procession. Ask for 'Siri da Vó Zair'—it's the casquinha de siri from the original family recipe.",
        effort: "Easy",
        effortDetail: "15-minute drive, Cacupé",
        bestTime: "Sunset",
        season: "Year-round",
        warning: "Weekends generate lines—arrive early",
        tags: ["family-run", "traditional", "sunset-view"]
    },
    {
        name: "Bistrô Isadora Duncan",
        category: "Hidden Eat",
        emoji: "🕯️",
        nickname: "The Proposal Spot",
        description: "Only 5-10 tables in a mystical candlelit space. The most romantic restaurant on the island, with shrimp dishes named 'Blessed' and 'Enchanted'.",
        theSecret: "Say 'Guia Floripa' for complimentary chocolate mousse flambéed with Cointreau. Book the corner table for maximum privacy.",
        effort: "Easy",
        effortDetail: "Barra da Lagoa",
        bestTime: "Dinner",
        season: "Year-round",
        warning: "Reservations essential—only 5 tables",
        tags: ["romantic", "fine-dining", "secret-password"]
    },
    {
        name: "Sambaqui Sunday Sessions",
        category: "Hidden Eat",
        emoji: "🦪",
        nickname: "The Quiet Oyster Village",
        description: "Skip touristy Santo Antônio for this quieter fishing village with equally stunning sunsets and fresher oysters straight from the bay.",
        theSecret: "Sunday afternoons locals gather for oysters and cold beer. The vibe is more authentic—fishermen, families, zero pretension.",
        effort: "Easy",
        effortDetail: "18km from center",
        bestTime: "Sunday afternoon",
        season: "Year-round",
        warning: "Limited restaurant options—come for the vibe",
        tags: ["authentic", "oysters", "sunday-ritual"]
    },
    {
        name: "Box 32",
        category: "Hidden Eat",
        emoji: "🥟",
        nickname: "The Democratic Counter",
        description: "The most democratic counter in Brazil—presidents, celebrities, and fishermen stand together ordering pastel de camarão and coxinha de rã (frog leg croquette).",
        theSecret: "Order the pastel de berbigão (clam pastry) with caldo de cana (sugarcane juice). Come Saturday afternoon for live samba with feijoada.",
        effort: "Easy",
        effortDetail: "Mercado Público, Centro",
        bestTime: "Saturday afternoon",
        season: "Year-round",
        warning: "Cash preferred, expect crowds",
        tags: ["iconic", "street-food", "samba"]
    },
    {
        name: "Costa da Lagoa by Boat",
        category: "Hidden Eat",
        emoji: "⛵",
        nickname: "Adventure Dining",
        description: "Six family-run restaurants accessible only by boat. The 40-minute journey through the lagoon is half the experience.",
        theSecret: "Order 'Carapeva'—a fish found only in this region. After lunch, take the 15-minute trail to the hidden waterfall at Ponto 16.",
        effort: "Moderate",
        effortDetail: "Boat from Lagoa, 40-50 min",
        bestTime: "Lunch",
        season: "Year-round",
        warning: "Cash only—no cell signal. Check boat return times.",
        tags: ["boat-access", "adventure", "waterfall"]
    },
    {
        name: "Cantinho Marinho",
        category: "Hidden Eat",
        emoji: "🍤",
        nickname: "Best Sequência in Floripa",
        description: "Locals vote this Barra da Lagoa spot as the island's best sequência de camarão. The fish sauce sets it apart from all competitors.",
        theSecret: "The sequência serves 2-4 people—don't over-order. Their pirão (fish broth with manioc flour) is the benchmark.",
        effort: "Easy",
        effortDetail: "Barra da Lagoa",
        bestTime: "Lunch or dinner",
        season: "Year-round",
        warning: "Expect to wait on weekends",
        tags: ["sequência", "local-favorite", "seafood"]
    },
    {
        name: "Sergio Lanches",
        category: "Hidden Eat",
        emoji: "🌙",
        nickname: "The 3AM Lifesaver",
        description: "Giant sandwiches served until the early hours. When everything else is closed, Sergio is still slinging legendary late-night food.",
        theSecret: "One sandwich feeds two people. This is the only place open at 'madrugada'—the Brazilian word for those lost hours between 2am and dawn.",
        effort: "Easy",
        effortDetail: "Lagoa da Conceição",
        bestTime: "After midnight",
        season: "Year-round",
        warning: "Portions are massive—share!",
        tags: ["late-night", "budget", "legendary"]
    },

    // ===== RARE EXPERIENCES (5) =====
    {
        name: "Whale Watching from Shore",
        category: "Rare Experience",
        emoji: "🐋",
        nickname: "Whales at Arm's Length",
        description: "Southern right whales migrate from Antarctica to birth and nurse calves. They regularly approach within 30 meters of beaches.",
        theSecret: "Best spot: SC-405 roadside viewpoint above Praia da Armação. Early morning, flat calm days. Binoculars help but aren't essential—they're that close.",
        effort: "Easy",
        effortDetail: "Drive to Armação",
        bestTime: "Early morning, calm days",
        season: "Jul-Nov",
        seasonBadge: "SEASONAL",
        warning: "Peak: September-October. No guarantee.",
        tags: ["wildlife", "seasonal", "unforgettable"]
    },
    {
        name: "Bioluminescence Paddle",
        category: "Rare Experience",
        emoji: "✨",
        nickname: "Swimming in Starlight",
        description: "Paddle through blue neon light as bioluminescent plankton glow with every stroke. One of nature's most magical phenomena.",
        theSecret: "Join Kanoa Sambaqui kayak club for pre-dawn paddles (5-6am). New moon, winter months (June-August), calm seas. Cannot be guaranteed—but when it happens, unforgettable.",
        effort: "Moderate",
        effortDetail: "Pre-dawn kayak session",
        bestTime: "5-6am, new moon",
        season: "Jun-Aug",
        seasonBadge: "RARE",
        warning: "Unpredictable—consider it a bonus if it happens",
        tags: ["bioluminescence", "kayak", "bucket-list"]
    },
    {
        name: "Oyster Farm Tour",
        category: "Rare Experience",
        emoji: "🦪",
        nickname: "From Farm to Fork",
        description: "Boat out to offshore oyster farms with the maricultors who raise them. Taste oysters 30 meters from where they grew.",
        theSecret: "Freguesia Oyster Bar (Santo Antônio) runs 45-minute boat tours Mon-Thu 15h-18h, groups 2-4. Book in advance—they fill up fast.",
        effort: "Easy",
        effortDetail: "Boat tour from Santo Antônio",
        bestTime: "Afternoon",
        season: "Year-round",
        warning: "Book ahead—limited spots",
        tags: ["culinary", "boat-tour", "hands-on"]
    },
    {
        name: "Beach Capoeira Roda",
        category: "Rare Experience",
        emoji: "🥁",
        nickname: "The Circle on the Sand",
        description: "Join or watch an authentic capoeira roda (circle) on the beach. Drums, movement, and Afro-Brazilian tradition under the open sky.",
        theSecret: "Praia do Santinho hosts monthly sessions every third Sunday (Escola Maré Brasil). Mercado Público has first Saturday of each month at 10am.",
        effort: "Easy",
        effortDetail: "Show up and watch or join",
        bestTime: "Check monthly schedule",
        season: "Year-round",
        warning: "Participation welcome—no experience needed",
        tags: ["cultural", "capoeira", "free"]
    },
    {
        name: "FENAOSTRA Festival",
        category: "Rare Experience",
        emoji: "🎉",
        nickname: "The Oyster Olympics",
        description: "Brazil's national oyster festival. 12+ restaurants, 40,000+ dozen oysters, live music, 60+ artisan exhibitors. Peak Floripa culture.",
        theSecret: "Free admission weekday daytimes. Evenings and weekends: R$20 or 1kg food donation. 2025 dates: July 16-27 at CentroSul.",
        effort: "Easy",
        effortDetail: "CentroSul convention center",
        bestTime: "Weekday daytime for free entry",
        season: "July",
        seasonBadge: "JULY ONLY",
        warning: "2025: July 16-27. Book accommodation early.",
        tags: ["festival", "oysters", "music"]
    },

    // ===== INSIDER SECRETS (4) =====
    {
        name: "The Guia Floripa Password",
        category: "Insider Secret",
        emoji: "🔑",
        nickname: "The Magic Words",
        description: "At Bistrô Isadora Duncan, mention 'Guia Floripa' and receive complimentary chocolate mousse flambéed with Cointreau at your table.",
        theSecret: "Say it to your server after ordering. Works consistently—it's a local guidebook partnership they honor for those 'in the know.'",
        effort: "Easy",
        effortDetail: "Just say the words",
        bestTime: "During dinner",
        season: "Year-round",
        warning: "Only works at Isadora Duncan",
        tags: ["password", "free-dessert", "insider"]
    },
    {
        name: "Intisica Pour",
        category: "Insider Secret",
        emoji: "🥃",
        nickname: "The Artisanal Cachaça",
        description: "Ostradamus restaurant serves Intisica—a small-batch artisanal cachaça from a local producer that never appears on menus.",
        theSecret: "Ask specifically for 'Intisica' by name. Pair it with oysters—the combination is legendary among those who know.",
        effort: "Easy",
        effortDetail: "Request at Ostradamus",
        bestTime: "With oysters",
        season: "Year-round",
        warning: "Only at Ostradamus, ask by name",
        tags: ["cachaça", "pairing", "off-menu"]
    },
    {
        name: "Tainha Season",
        category: "Insider Secret",
        emoji: "🐟",
        nickname: "The Mullet Migration",
        description: "May through July, mullet schools migrate past the island. Traditional Azorean 'tainha escalada' (split, salted, grilled) appears on menus.",
        theSecret: "Bar do Arante in Pântano do Sul: tainha escalada na brasa (R$185/two). The restaurant walls are covered with 40+ years of customer notes—add yours.",
        effort: "Easy",
        effortDetail: "Seasonal menus island-wide",
        bestTime: "May-July",
        season: "May-Jul",
        seasonBadge: "SEASONAL",
        warning: "Only available during migration season",
        tags: ["seasonal", "traditional", "azorean"]
    },
    {
        name: "Dourado Dawn Run",
        category: "Insider Secret",
        emoji: "🎣",
        nickname: "The Golden Fish Hunt",
        description: "October through March, Dourado (mahi-mahi) run the waters offshore. Local fishing charters leave at 5am for the hunt.",
        theSecret: "Book with Cultura Radical (Barra da Lagoa). Departure 5am, return 3pm. Deposit required. The early wake is worth the golden prize.",
        effort: "Hard",
        effortDetail: "Full-day fishing charter, 5am start",
        bestTime: "October-March",
        season: "Oct-Mar",
        seasonBadge: "SEASONAL",
        warning: "R$300+ balance, early departure",
        tags: ["fishing", "adventure", "seasonal"]
    }
];

// Get a random gem
function getRandomGem() {
    return gems[Math.floor(Math.random() * gems.length)];
}

// Get gems by category
function getGemsByCategory(category) {
    return gems.filter(g => g.category === category);
}

// Get all unique categories
function getCategories() {
    return [...new Set(gems.map(g => g.category))];
}

// Category colors for styling
const categoryColors = {
    "Secret Beach": { bg: "rgba(127, 181, 168, 0.2)", border: "#7FB5A8", icon: "🏖️" },
    "Epic Viewpoint": { bg: "rgba(232, 93, 76, 0.2)", border: "#E85D4C", icon: "📸" },
    "Hidden Eat": { bg: "rgba(201, 162, 39, 0.2)", border: "#C9A227", icon: "🍽️" },
    "Rare Experience": { bg: "rgba(45, 90, 107, 0.2)", border: "#2D5A6B", icon: "✨" },
    "Insider Secret": { bg: "rgba(139, 90, 43, 0.2)", border: "#8B5A2B", icon: "🔑" }
};
