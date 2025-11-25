// Neighborhood data for "Where to Stay" quiz
const neighborhoods = [
    // NORTH REGION
    {
        name: "Jurerê Internacional",
        nickname: "Miami Brasileira",
        emoji: "🥂",
        type: "Luxury Beach Club District",
        region: "North",
        description: "The glamour capital of Floripa. Master-planned with Oscar Niemeyer influence, featuring mansions, designer beach clubs, and celebrity sightings. P12, Café de la Musique, and Donna transform afternoons into DJ-fueled parties.",
        bestFor: "Luxury seekers, beach club enthusiasts, celebrities, those wanting to be seen",
        notIdealFor: "Budget travelers, families seeking quiet, those wanting authentic local culture",
        shortTermLow: "R$700-1,500/night",
        shortTermHigh: "R$1,500-3,000+/night",
        longTerm: "R$5,000-18,000/month",
        nearbyBeaches: ["Jurerê Beach", "Forte Beach", "Daniela"],
        proTip: "Beach clubs charge entrance (R$80-200+) but include loungers and full service. Book ahead for New Year's and Carnival.",
        tags: ["luxury", "party", "beach clubs", "celebrities", "nightlife"],
        personality: "Beach Scene Star",
        tripType: "party", budget: "luxury", scene: "social", priority: "nightlife"
    },
    {
        name: "Jurerê Tradicional",
        nickname: "Jurerê Velha",
        emoji: "🏖️",
        type: "Family-Friendly Value",
        region: "North",
        description: "Same gorgeous calm, warm, crystal-clear water as Internacional but at a fraction of the price. Walk through the alamedas (public paths) designed by Oscar Niemeyer. More affordable with authentic local culture.",
        bestFor: "Families with children, couples seeking value, first-time Floripa visitors",
        notIdealFor: "Surfers, party-seekers, luxury seekers",
        shortTermLow: "R$350-550/night",
        shortTermHigh: "R$550-800/night",
        longTerm: "R$2,500-5,500/month",
        nearbyBeaches: ["Jurerê Beach", "Forte Beach", "Canasvieiras"],
        proTip: "Walk through Oscar Niemeyer's alamedas design. Same beach quality as Internacional without premium prices.",
        tags: ["family", "budget-friendly", "calm waters", "local culture"],
        personality: "Smart Beach Lover",
        tripType: "family", budget: "midrange", scene: "families", priority: "beach"
    },
    {
        name: "Canasvieiras",
        nickname: "International Hub",
        emoji: "🌍",
        type: "Complete Beach Town",
        region: "North",
        description: "The north's commercial heart with bilingual services (Portuguese-Spanish), complete infrastructure, and TICAN bus terminal. Calm, turquoise waters ideal for children. Population doubles in summer with Argentine tourists.",
        bestFor: "Families, budget travelers wanting beach access, Spanish speakers, first-time visitors",
        notIdealFor: "Those seeking exclusivity or quiet beaches, surfers",
        shortTermLow: "R$80-300/night",
        shortTermHigh: "R$300-600/night",
        longTerm: "R$2,000-4,500/month",
        nearbyBeaches: ["Canasvieiras Beach", "Jurerê", "Cachoeira do Bom Jesus"],
        proTip: "TICAN terminal provides best north-island transit connections. 24-hour UPA hospital, banks, pharmacies all available.",
        tags: ["infrastructure", "family", "budget", "international", "calm waters"],
        personality: "Practical Explorer",
        tripType: "family", budget: "budget", scene: "families", priority: "central"
    },
    {
        name: "Ingleses",
        nickname: "Self-Sufficient Beach City",
        emoji: "🏙️",
        type: "Urban Beach Town",
        region: "North",
        description: "With 4.8km of sand and complete urban infrastructure, Ingleses functions as a mini-city. Southern section has calm family waters, northern end offers surfable waves. Sand dunes for sandboarding nearby.",
        bestFor: "Long-term stays, budget travelers, families wanting infrastructure",
        notIdealFor: "Those seeking boutique experience, nightlife seekers",
        shortTermLow: "R$80-350/night",
        shortTermHigh: "R$350-600/night",
        longTerm: "R$3,000/month average",
        nearbyBeaches: ["Ingleses Beach", "Santinho", "Moçambique"],
        proTip: "Costa Norte Ingleses Hotel is the standout property with tennis, pools, and spa. Most affordable major beach neighborhood.",
        tags: ["affordable", "infrastructure", "family", "long-term", "urban"],
        personality: "Value Seeker",
        tripType: "family", budget: "budget", scene: "families", priority: "beach"
    },
    {
        name: "Santinho",
        nickname: "Resort Destination",
        emoji: "🏨",
        type: "All-Inclusive Paradise",
        region: "North",
        description: "Dominated by the five-star Costão do Santinho Resort, backed by 750,000+ m² of native forest. Archaeological sites feature prehistoric rock inscriptions (4,000-5,000 years old). White sand and good waves.",
        bestFor: "Resort seekers, families wanting all-inclusive, nature enthusiasts",
        notIdealFor: "Independent travelers, budget seekers, nightlife",
        shortTermLow: "R$1,200/night",
        shortTermHigh: "R$2,500+/night",
        longTerm: "Limited options outside resort",
        nearbyBeaches: ["Santinho Beach", "Moçambique", "Ingleses"],
        proTip: "Costão do Santinho Resort consistently ranks as Brazil's best beach resort—645 rooms, 11 pools, L'Occitane spa.",
        tags: ["resort", "all-inclusive", "nature", "archaeology", "family"],
        personality: "Resort Retreater",
        tripType: "beach", budget: "luxury", scene: "families", priority: "beach"
    },
    {
        name: "Praia Brava",
        nickname: "Surfer's Enclave",
        emoji: "🏄",
        type: "Upscale Surf District",
        region: "North",
        description: "Powerful waves, crystal-clear water, and a single access road over a steep hill. The Mirante viewpoint offers spectacular photos. Upscale residential with trendy summer crowd.",
        bestFor: "Surfers, wealthy vacationers seeking exclusivity, paragliding enthusiasts",
        notIdealFor: "Families with small children, anyone without a car, budget travelers",
        shortTermLow: "R$300-600/night",
        shortTermHigh: "R$600-1,200/night",
        longTerm: "R$3,500-12,000/month",
        nearbyBeaches: ["Praia Brava", "Lagoinha do Norte"],
        proTip: "Single access road creates traffic nightmares in summer—arrive early. The mirante photo op is mandatory!",
        tags: ["surf", "upscale", "exclusive", "views", "young adults"],
        personality: "Wave Chaser",
        tripType: "surf", budget: "midrange", scene: "social", priority: "beach"
    },

    // EAST REGION
    {
        name: "Lagoa da Conceição",
        nickname: "Beating Heart of Floripa",
        emoji: "🎭",
        type: "Bohemian Digital Nomad Hub",
        region: "East",
        description: "THE primary digital nomad hub. Bohemian village around a stunning 20km² lagoon with cafes, coworking, nightlife, and Brazil's best surf beaches nearby. Centrinho concentrates restaurants and bars along the waterfront.",
        bestFor: "Digital nomads, young travelers, party-goers, water sports enthusiasts, surfers, foodies",
        notIdealFor: "Families seeking quiet, those needing direct ocean beach, light sleepers",
        shortTermLow: "R$50-200/night",
        shortTermHigh: "R$400-1,500/night",
        longTerm: "R$1,790-4,650/month",
        nearbyBeaches: ["Praia Mole (5km)", "Joaquina (5km)", "Galheta (5km + trail)"],
        proTip: "Traffic brutal Dec-Feb—15 min becomes 60-90 min. Multiple coworking spaces: Impact Hub, Village, Sandbox.",
        coworking: "We Cowork It Out, Sandbox, Impact Hub, Village Coworking",
        internet: "Excellent—50-100 Mbps typical, fiber widely available",
        tags: ["digital nomad", "nightlife", "bohemian", "coworking", "water sports"],
        personality: "Digital Nomad Pioneer",
        tripType: "remote", budget: "midrange", scene: "social", priority: "nightlife"
    },
    {
        name: "Barra da Lagoa",
        nickname: "Surf Village Haven",
        emoji: "🐢",
        type: "Traditional Fishing Village",
        region: "East",
        description: "Where the lagoon meets the Atlantic through a picturesque channel. Functioning fishing community, surf schools, and colivings. Projeto TAMAR turtle conservation center. Quieter than Lagoa.",
        bestFor: "Beginner surfers, nature lovers, families, budget travelers, digital nomads seeking tranquility",
        notIdealFor: "Nightlife seekers (must travel to Lagoa), those without transport",
        shortTermLow: "R$45-150/night",
        shortTermHigh: "R$150-400/night",
        longTerm: "R$1,800-3,500/month",
        nearbyBeaches: ["Barra da Lagoa", "Moçambique (11km)", "Prainha"],
        proTip: "Sea Wolf Surf Hostel for authentic experience. Nomadico and Rosemary colivings have fiber WiFi. 20-30% cheaper than Lagoa.",
        coworking: "Coliving spaces with work areas",
        internet: "Good fiber available",
        tags: ["surf", "beginner friendly", "fishing village", "turtles", "budget"],
        personality: "Surf Village Seeker",
        tripType: "surf", budget: "budget", scene: "solo", priority: "beach"
    },

    // SOUTH REGION
    {
        name: "Campeche",
        nickname: "Digital Nomad Alternative",
        emoji: "🐋",
        type: "Bohemian Surf Culture",
        region: "South",
        description: "Quieter alternative to Lagoa with the island's most complete southern infrastructure. Only 7km from airport—closest beach neighborhood. Growing expat community, excellent surf, whale watching July-August.",
        bestFor: "Surfers, digital nomads seeking Lagoa alternative, young professionals, beach lifestyle with infrastructure",
        notIdealFor: "Those wanting warm calm water, nightlife seekers",
        shortTermLow: "R$80-375/night",
        shortTermHigh: "R$375-700/night",
        longTerm: "R$3,700-6,500/month",
        nearbyBeaches: ["Campeche Beach", "Morro das Pedras", "Armação"],
        proTip: "Airport proximity (15-20 min) is unbeatable. Watch for whales from shore during winter! Zen Telecom offers up to 1000 Mbps fiber.",
        coworking: "Limited locally; 20-min drive to Lagoa spaces",
        internet: "Good fiber up to 1000 Mbps (Zen Telecom)",
        tags: ["surf", "digital nomad", "whales", "airport proximity", "quiet"],
        personality: "Surf & Work Seeker",
        tripType: "remote", budget: "midrange", scene: "solo", priority: "quiet"
    },
    {
        name: "Armação",
        nickname: "Gateway to Paradise",
        emoji: "⛪",
        type: "Historic Fishing Village",
        region: "South",
        description: "Traditional fishing village and departure point for Ilha do Campeche (the 'Brazilian Caribbean'). Historic 1772 Santa Ana church from whaling era. Gateway to Matadeiro beach and legendary Lagoinha do Leste trail.",
        bestFor: "Hikers, nature photographers, experienced surfers, those seeking authentic atmosphere",
        notIdealFor: "Families with children (beach conditions), infrastructure-dependent travelers",
        shortTermLow: "R$365-620/night",
        shortTermHigh: "R$620-1,000/night",
        longTerm: "Limited—primarily seasonal rentals",
        nearbyBeaches: ["Armação", "Matadeiro (1.3km walk)", "Lagoinha do Leste (4km trail)"],
        proTip: "Book Ilha do Campeche boat trips early in summer. The church and Ilha das Campanhas viewpoint are worth visiting.",
        tags: ["historic", "trails", "authentic", "nature", "photography"],
        personality: "Trail Explorer",
        tripType: "beach", budget: "midrange", scene: "couples", priority: "quiet"
    },
    {
        name: "Pântano do Sul",
        nickname: "Aldeia dos Pescadores",
        emoji: "🦐",
        type: "Authentic Fishing Culture",
        region: "South",
        description: "The southernmost tip preserves manezinho culture—local accent intact, artisan fishermen, legendary seafood. Bar do Arante has walls covered in visitor messages, fresh fish never frozen. Electricity only arrived 1968.",
        bestFor: "Authentic experience seekers, seafood lovers, hikers, cultural enthusiasts, families (calm beach section)",
        notIdealFor: "Those needing infrastructure, nightlife, frequent transport",
        shortTermLow: "R$200-400/night",
        shortTermHigh: "R$400-700/night",
        longTerm: "Very limited—contact locals",
        nearbyBeaches: ["Pântano do Sul", "Açores", "Lagoinha do Leste (2.2km trail)"],
        proTip: "Must try: sequência de camarão, tainha grelhada at Bar do Arante. Shorter Lagoinha do Leste trail (50-60 min) starts here.",
        tags: ["authentic", "seafood", "fishing village", "cultural", "trails"],
        personality: "Culture & Cuisine Seeker",
        tripType: "beach", budget: "budget", scene: "couples", priority: "quiet"
    },
    {
        name: "Ribeirão da Ilha",
        nickname: "Oyster Capital",
        emoji: "🦪",
        type: "Gastronomic Heritage",
        region: "South",
        description: "Brazil's largest oyster producer (98% of national production) with 18th-century Azorean architecture perfectly preserved. Not a beach destination—a gastronomic pilgrimage with famous sunset views.",
        bestFor: "Food lovers (especially oyster enthusiasts), history buffs, sunset photographers",
        notIdealFor: "Beach vacations, long-term stays, swimmers",
        shortTermLow: "Day trip recommended",
        shortTermHigh: "Limited pousadas R$300-600/night",
        longTerm: "Not recommended",
        nearbyBeaches: ["Bay beaches (narrow, not for swimming)", "Naufragados (combine trip)"],
        proTip: "Ostradamus is among Brazil's 100 best restaurants. October Oyster Festival is spectacular. Visit oyster farms!",
        tags: ["gastronomy", "oysters", "historic", "sunset", "Azorean"],
        personality: "Gastronomy Pilgrim",
        tripType: "beach", budget: "midrange", scene: "couples", priority: "nightlife"
    },

    // CENTRAL URBAN
    {
        name: "Centro",
        nickname: "Transportation Hub",
        emoji: "🚌",
        type: "Urban Commercial Center",
        region: "Central",
        description: "The island's best public transit (TICEN terminal connects everywhere), hospitals, government offices, and historic Mercado Público. Not a vacation base—but for business or budget stays, it works.",
        bestFor: "Business travelers, students, budget-conscious residents needing transit",
        notIdealFor: "Beach vacationers, families, those seeking quiet",
        shortTermLow: "R$25-200/night",
        shortTermHigh: "R$400-600/night",
        longTerm: "R$1,500-3,500/month",
        nearbyBeaches: ["Beira Mar (not for swimming)", "Day trips to all beaches"],
        proTip: "TICEN terminal connects to all island regions. Exercise caution near bus terminal after dark. 20-40% cheaper than beaches.",
        tags: ["urban", "transit hub", "budget", "business", "central"],
        personality: "Urban Practical",
        tripType: "remote", budget: "budget", scene: "solo", priority: "central"
    },
    {
        name: "Trindade",
        nickname: "University District",
        emoji: "🎓",
        type: "Student Quarter",
        region: "Central",
        description: "Home to UFSC (Federal University of Santa Catarina), buzzing with young energy, affordable eateries, and the best budget long-term rentals on the island. Vibrant bar scene along Rua Lauro Linhares.",
        bestFor: "Students, young professionals, budget-conscious digital nomads",
        notIdealFor: "Families, beach seekers, those wanting quiet",
        shortTermLow: "R$50-150/night",
        shortTermHigh: "R$150-300/night",
        longTerm: "R$1,200-3,000/month (best value on island)",
        nearbyBeaches: ["Day trips—20-30 min to east beaches"],
        proTip: "Best value on island for long-term rentals. Hospital Universitário, Shopping Villa Romana nearby. Great nightlife.",
        coworking: "Vilaj Coworking (SC's first, 5,000+ members)",
        internet: "Excellent fiber coverage",
        tags: ["student", "budget", "nightlife", "young", "value"],
        personality: "Budget Pioneer",
        tripType: "remote", budget: "budget", scene: "social", priority: "central"
    },
    {
        name: "Santa Mônica",
        nickname: "Upscale Residential",
        emoji: "🏡",
        type: "Family Professional District",
        region: "Central",
        description: "Flat terrain, tree-lined streets, high-end gastronomy along Avenida Madre Benvenuta, and some of Floripa's best schools. Among the safest neighborhoods with active community watch.",
        bestFor: "Families, professionals, remote workers wanting comfort and safety",
        notIdealFor: "Beach seekers, nightlife, budget travelers",
        shortTermLow: "R$250-400/night",
        shortTermHigh: "R$400-700/night",
        longTerm: "R$4,000-9,000/month",
        nearbyBeaches: ["Easy access via SC-404 to east beaches"],
        proTip: "Among the safest neighborhoods—excellent lighting, community watch. Great schools for families relocating.",
        tags: ["family", "safe", "upscale", "residential", "schools"],
        personality: "Family Settler",
        tripType: "family", budget: "luxury", scene: "families", priority: "quiet"
    },

    // NORTHWEST BAY
    {
        name: "Santo Antônio de Lisboa",
        nickname: "Gastronomy Capital",
        emoji: "🌅",
        type: "Historic Sunset Village",
        region: "Northwest Bay",
        description: "Founded 1698, this historic village is Floripa's premier dining destination. Cobblestone streets (first paved in Santa Catarina) wind past colorful colonial houses to waterfront restaurants. Famous sunsets with DJs at golden hour.",
        bestFor: "Gastronomy lovers, history enthusiasts, couples seeking romance, photographers",
        notIdealFor: "Beach seekers, surfers, nightlife beyond restaurants",
        shortTermLow: "R$300-500/night",
        shortTermHigh: "R$500-800/night",
        longTerm: "Limited options",
        nearbyBeaches: ["Bay beaches (calm, for sunset not swimming)", "Cacupé"],
        proTip: "Rota Gastronômica do Sol Poente (Setting Sun Route) has exceptional restaurants. Visit the 1860 functioning flour mill.",
        tags: ["gastronomy", "sunset", "historic", "romantic", "Azorean"],
        personality: "Sunset Gastronome",
        tripType: "beach", budget: "midrange", scene: "couples", priority: "nightlife"
    },
    {
        name: "Sambaqui",
        nickname: "Preserved Village",
        emoji: "🎸",
        type: "Authentic Fishing Community",
        region: "Northwest Bay",
        description: "Named after prehistoric shell mounds, Sambaqui has resisted development more than anywhere on the island. Population ~1,500. Sunday nights: locals gather for live Brazilian roots music at a fisherman's house.",
        bestFor: "Authentic fishing village experience, quiet contemplation, sunset photography",
        notIdealFor: "Beach swimmers, infrastructure seekers, nightlife beyond local music",
        shortTermLow: "R$115-250/night",
        shortTermHigh: "R$250-350/night",
        longTerm: "Very limited Airbnb options",
        nearbyBeaches: ["Sambaqui bay beach", "Santo Antônio de Lisboa"],
        proTip: "Sunday nights: find the fisherman's house with live Brazilian roots music—tourists rarely find this. Magical experience.",
        tags: ["authentic", "sunset", "music", "preserved", "quiet"],
        personality: "Authenticity Seeker",
        tripType: "beach", budget: "budget", scene: "solo", priority: "quiet"
    },
    {
        name: "Cacupé",
        nickname: "Luxury Retreat",
        emoji: "🏢",
        type: "Exclusive Residential",
        region: "Northwest Bay",
        description: "High-end condominiums balanced with traditional fishermen's homes. Spectacular Centro/bridge views across bay. Hotel SESC Cacupé offers 132,000 m² property with family programming.",
        bestFor: "Upscale residential living, tech professionals (near SC-401 corridor), SESC hotel guests",
        notIdealFor: "Beach seekers, nightlife, budget travelers",
        shortTermLow: "R$200-400/night",
        shortTermHigh: "R$400-700/night",
        longTerm: "R$3,000-5,000/month",
        nearbyBeaches: ["Bay beaches", "Santo Antônio de Lisboa"],
        proTip: "Strategic position between city and north beaches. 100% of reviews rate it safe—no flooding risk.",
        tags: ["exclusive", "safe", "bay views", "residential", "tech corridor"],
        personality: "Executive Retreater",
        tripType: "remote", budget: "luxury", scene: "couples", priority: "quiet"
    }
];

// Quiz questions for neighborhood finder
const neighborhoodQuestions = [
    {
        label: "The Purpose",
        text: "What brings you to Floripa?",
        options: [
            { value: "beach", icon: "🏖️", title: "Beach Vacation", desc: "Sun, sand, relaxation" },
            { value: "party", icon: "🎉", title: "Nightlife & Parties", desc: "Beach clubs, bars, scene" },
            { value: "remote", icon: "💻", title: "Remote Work", desc: "Digital nomad life" },
            { value: "family", icon: "👨‍👩‍👧‍👦", title: "Family Trip", desc: "Kid-friendly adventure" },
            { value: "surf", icon: "🏄", title: "Surf Focused", desc: "Chasing waves" }
        ]
    },
    {
        label: "The Budget",
        text: "What's your accommodation style?",
        options: [
            { value: "budget", icon: "🎒", title: "Backpacker", desc: "Hostels, basic stays, under R$150/night" },
            { value: "midrange", icon: "🏨", title: "Mid-Range", desc: "Comfortable hotels, R$200-500/night" },
            { value: "luxury", icon: "✨", title: "Luxury", desc: "Resorts, premium stays, R$700+/night" }
        ]
    },
    {
        label: "The Vibe",
        text: "Who are you traveling with?",
        options: [
            { value: "social", icon: "🥳", title: "Young & Social", desc: "Meeting people, nightlife" },
            { value: "couples", icon: "💑", title: "Couples", desc: "Romance, quality time" },
            { value: "families", icon: "👨‍👩‍👧", title: "Families", desc: "Kid-friendly everything" },
            { value: "solo", icon: "🧭", title: "Solo Explorer", desc: "Independence, flexibility" }
        ]
    },
    {
        label: "The Priority",
        text: "What matters most in your base?",
        options: [
            { value: "beach", icon: "🏝️", title: "Walking to Beach", desc: "Steps from the sand" },
            { value: "nightlife", icon: "🍽️", title: "Restaurants & Scene", desc: "Food, bars, action" },
            { value: "quiet", icon: "🧘", title: "Quiet & Peaceful", desc: "Escape the crowds" },
            { value: "central", icon: "📍", title: "Central Location", desc: "Access to everything" }
        ]
    }
];

// Helper function to calculate best neighborhood match
function calculateNeighborhoodMatch(answers) {
    let scores = neighborhoods.map(n => {
        let score = 0;

        // Trip type match (highest weight)
        if (n.tripType === answers.tripType) score += 5;

        // Budget match
        if (n.budget === answers.budget) score += 4;

        // Scene match
        if (n.scene === answers.scene) score += 3;

        // Priority match
        if (n.priority === answers.priority) score += 4;

        // Tag bonuses
        if (answers.tripType === 'remote' && n.coworking) score += 2;
        if (answers.tripType === 'surf' && n.tags.includes('surf')) score += 2;
        if (answers.scene === 'families' && n.tags.includes('family')) score += 2;
        if (answers.budget === 'budget' && n.tags.includes('budget')) score += 2;
        if (answers.priority === 'nightlife' && n.tags.includes('nightlife')) score += 2;

        return { neighborhood: n, score };
    });

    // Sort by score
    scores.sort((a, b) => b.score - a.score);

    // Return best match + 2 alternatives
    return {
        best: scores[0].neighborhood,
        alternatives: [scores[1].neighborhood, scores[2].neighborhood]
    };
}
