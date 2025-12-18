// Neighborhood data for "Where to Stay" quiz
const neighborhoods = [
    // NORTH REGION
    {
        name: "Jurere Internacional",
        nickname: { en: "Miami Brasileira", pt: "Miami Brasileira" },
        emoji: "🥂",
        type: { en: "Luxury Beach Club District", pt: "Distrito de Beach Clubs de Luxo" },
        region: "North",
        description: {
            en: "The glamour capital of Floripa. Master-planned with Oscar Niemeyer influence, featuring mansions, designer beach clubs, and celebrity sightings. P12, Cafe de la Musique, and Donna transform afternoons into DJ-fueled parties.",
            pt: "A capital do glamour de Floripa. Planejada com influencia de Oscar Niemeyer, com mansoes, beach clubs de grife e celebridades. P12, Cafe de la Musique e Donna transformam as tardes em festas com DJs."
        },
        bestFor: {
            en: "Luxury seekers, beach club enthusiasts, celebrities, those wanting to be seen",
            pt: "Quem busca luxo, amantes de beach clubs, celebridades, quem quer ver e ser visto"
        },
        notIdealFor: {
            en: "Budget travelers, families seeking quiet, those wanting authentic local culture",
            pt: "Viajantes economicos, familias que buscam sossego, quem quer cultura local autentica"
        },
        shortTermLow: "R$700-1,500/night",
        shortTermHigh: "R$1,500-3,000+/night",
        longTerm: "R$5,000-18,000/month",
        nearbyBeaches: ["Jurere Beach", "Forte Beach", "Daniela"],
        proTip: {
            en: "Beach clubs charge entrance (R$80-200+) but include loungers and full service. Book ahead for New Year's and Carnival.",
            pt: "Beach clubs cobram entrada (R$80-200+) mas incluem espreguicadeiras e servico completo. Reserve com antecedencia pro Ano Novo e Carnaval."
        },
        tags: ["luxury", "party", "beach clubs", "celebrities", "nightlife"],
        personality: "Beach Scene Star",
        tripType: "party", budget: "luxury", scene: "social", priority: "nightlife"
    },
    {
        name: "Jurere Tradicional",
        nickname: { en: "Jurere Velha", pt: "Jurere Velha" },
        emoji: "🏖️",
        type: { en: "Family-Friendly Value", pt: "Custo-Beneficio pra Familias" },
        region: "North",
        description: {
            en: "Same gorgeous calm, warm, crystal-clear water as Internacional but at a fraction of the price. Walk through the alamedas (public paths) designed by Oscar Niemeyer. More affordable with authentic local culture.",
            pt: "A mesma agua calma, quentinha e cristalina do Internacional, mas por uma fracao do preco. Caminhe pelas alamedas projetadas por Oscar Niemeyer. Mais acessivel e com cultura local autentica."
        },
        bestFor: {
            en: "Families with children, couples seeking value, first-time Floripa visitors",
            pt: "Familias com criancas, casais buscando economia, quem visita Floripa pela primeira vez"
        },
        notIdealFor: {
            en: "Surfers, party-seekers, luxury seekers",
            pt: "Surfistas, quem busca festa, quem quer luxo"
        },
        shortTermLow: "R$350-550/night",
        shortTermHigh: "R$550-800/night",
        longTerm: "R$2,500-5,500/month",
        nearbyBeaches: ["Jurere Beach", "Forte Beach", "Canasvieiras"],
        proTip: {
            en: "Walk through Oscar Niemeyer's alamedas design. Same beach quality as Internacional without premium prices.",
            pt: "Caminhe pelas alamedas projetadas por Oscar Niemeyer. Mesma qualidade de praia do Internacional sem pagar caro."
        },
        tags: ["family", "budget-friendly", "calm waters", "local culture"],
        personality: "Smart Beach Lover",
        tripType: "family", budget: "midrange", scene: "families", priority: "beach"
    },
    {
        name: "Canasvieiras",
        nickname: { en: "International Hub", pt: "Polo Internacional" },
        emoji: "🌍",
        type: { en: "Complete Beach Town", pt: "Cidade Praiana Completa" },
        region: "North",
        description: {
            en: "The north's commercial heart with bilingual services (Portuguese-Spanish), complete infrastructure, and TICAN bus terminal. Calm, turquoise waters ideal for children. Population doubles in summer with Argentine tourists.",
            pt: "O coracao comercial do norte com servicos bilingues (portugues-espanhol), infraestrutura completa e terminal de onibus TICAN. Aguas calmas e turquesa, ideais pra criancas. A populacao dobra no verao com turistas argentinos."
        },
        bestFor: {
            en: "Families, budget travelers wanting beach access, Spanish speakers, first-time visitors",
            pt: "Familias, viajantes economicos que querem praia, quem fala espanhol, primeira visita"
        },
        notIdealFor: {
            en: "Those seeking exclusivity or quiet beaches, surfers",
            pt: "Quem busca exclusividade ou praias tranquilas, surfistas"
        },
        shortTermLow: "R$80-300/night",
        shortTermHigh: "R$300-600/night",
        longTerm: "R$2,000-4,500/month",
        nearbyBeaches: ["Canasvieiras Beach", "Jurere", "Cachoeira do Bom Jesus"],
        proTip: {
            en: "TICAN terminal provides best north-island transit connections. 24-hour UPA hospital, banks, pharmacies all available.",
            pt: "O terminal TICAN tem as melhores conexoes de onibus do norte da ilha. UPA 24 horas, bancos e farmacias disponiveis."
        },
        tags: ["infrastructure", "family", "budget", "international", "calm waters"],
        personality: "Practical Explorer",
        tripType: "family", budget: "budget", scene: "families", priority: "central"
    },
    {
        name: "Ingleses",
        nickname: { en: "Self-Sufficient Beach City", pt: "Cidade Praiana Autossuficiente" },
        emoji: "🏙️",
        type: { en: "Urban Beach Town", pt: "Cidade Praiana Urbana" },
        region: "North",
        description: {
            en: "With 4.8km of sand and complete urban infrastructure, Ingleses functions as a mini-city. Southern section has calm family waters, northern end offers surfable waves. Sand dunes for sandboarding nearby.",
            pt: "Com 4,8km de areia e infraestrutura urbana completa, Ingleses funciona como uma mini-cidade. A parte sul tem aguas calmas pra familias, o norte oferece ondas pra surfar. Dunas pra sandboard pertinho."
        },
        bestFor: {
            en: "Long-term stays, budget travelers, families wanting infrastructure",
            pt: "Estadias longas, viajantes economicos, familias que querem infraestrutura"
        },
        notIdealFor: {
            en: "Those seeking boutique experience, nightlife seekers",
            pt: "Quem busca experiencia boutique, quem quer vida noturna"
        },
        shortTermLow: "R$80-350/night",
        shortTermHigh: "R$350-600/night",
        longTerm: "R$3,000/month average",
        nearbyBeaches: ["Ingleses Beach", "Santinho", "Mocambique"],
        proTip: {
            en: "Costa Norte Ingleses Hotel is the standout property with tennis, pools, and spa. Most affordable major beach neighborhood.",
            pt: "O Costa Norte Ingleses Hotel e o destaque com tenis, piscinas e spa. Bairro de praia mais acessivel da ilha."
        },
        tags: ["affordable", "infrastructure", "family", "long-term", "urban"],
        personality: "Value Seeker",
        tripType: "family", budget: "budget", scene: "families", priority: "beach"
    },
    {
        name: "Santinho",
        nickname: { en: "Resort Destination", pt: "Destino de Resort" },
        emoji: "🏨",
        type: { en: "All-Inclusive Paradise", pt: "Paraiso All-Inclusive" },
        region: "North",
        description: {
            en: "Dominated by the five-star Costao do Santinho Resort, backed by 750,000+ m2 of native forest. Archaeological sites feature prehistoric rock inscriptions (4,000-5,000 years old). White sand and good waves.",
            pt: "Dominado pelo resort cinco estrelas Costao do Santinho, com mais de 750.000 m2 de mata nativa. Sitios arqueologicos com inscricoes rupestres de 4.000 a 5.000 anos. Areia branca e boas ondas."
        },
        bestFor: {
            en: "Resort seekers, families wanting all-inclusive, nature enthusiasts",
            pt: "Quem busca resort, familias que querem all-inclusive, amantes da natureza"
        },
        notIdealFor: {
            en: "Independent travelers, budget seekers, nightlife",
            pt: "Viajantes independentes, quem busca economia, vida noturna"
        },
        shortTermLow: "R$1,200/night",
        shortTermHigh: "R$2,500+/night",
        longTerm: { en: "Limited options outside resort", pt: "Poucas opcoes fora do resort" },
        nearbyBeaches: ["Santinho Beach", "Mocambique", "Ingleses"],
        proTip: {
            en: "Costao do Santinho Resort consistently ranks as Brazil's best beach resort-645 rooms, 11 pools, L'Occitane spa.",
            pt: "O Costao do Santinho sempre aparece como melhor resort de praia do Brasil - 645 quartos, 11 piscinas, spa L'Occitane."
        },
        tags: ["resort", "all-inclusive", "nature", "archaeology", "family"],
        personality: "Resort Retreater",
        tripType: "beach", budget: "luxury", scene: "families", priority: "beach"
    },
    {
        name: "Praia Brava",
        nickname: { en: "Surfer's Enclave", pt: "Reduto dos Surfistas" },
        emoji: "🏄",
        type: { en: "Upscale Surf District", pt: "Bairro de Surf Sofisticado" },
        region: "North",
        description: {
            en: "Powerful waves, crystal-clear water, and a single access road over a steep hill. The Mirante viewpoint offers spectacular photos. Upscale residential with trendy summer crowd.",
            pt: "Ondas fortes, agua cristalina e uma unica estrada de acesso por um morro ingreme. O Mirante oferece fotos espetaculares. Residencial de alto padrao com galera descolada no verao."
        },
        bestFor: {
            en: "Surfers, wealthy vacationers seeking exclusivity, paragliding enthusiasts",
            pt: "Surfistas, turistas com grana buscando exclusividade, amantes de parapente"
        },
        notIdealFor: {
            en: "Families with small children, anyone without a car, budget travelers",
            pt: "Familias com criancas pequenas, quem nao tem carro, viajantes economicos"
        },
        shortTermLow: "R$300-600/night",
        shortTermHigh: "R$600-1,200/night",
        longTerm: "R$3,500-12,000/month",
        nearbyBeaches: ["Praia Brava", "Lagoinha do Norte"],
        proTip: {
            en: "Single access road creates traffic nightmares in summer-arrive early. The mirante photo op is mandatory!",
            pt: "A unica estrada de acesso vira pesadelo no verao - chegue cedo. A foto no mirante e obrigatoria!"
        },
        tags: ["surf", "upscale", "exclusive", "views", "young adults"],
        personality: "Wave Chaser",
        tripType: "surf", budget: "midrange", scene: "social", priority: "beach"
    },

    // EAST REGION
    {
        name: "Lagoa da Conceicao",
        nickname: { en: "Beating Heart of Floripa", pt: "Coracao Pulsante de Floripa" },
        emoji: "🎭",
        type: { en: "Bohemian Digital Nomad Hub", pt: "Polo Boemio de Nomades Digitais" },
        region: "East",
        description: {
            en: "THE primary digital nomad hub. Bohemian village around a stunning 20km2 lagoon with cafes, coworking, nightlife, and Brazil's best surf beaches nearby. Centrinho concentrates restaurants and bars along the waterfront.",
            pt: "O PRINCIPAL polo de nomades digitais. Vila boemia ao redor de uma lagoa deslumbrante de 20km2, com cafes, coworkings, vida noturna e as melhores praias de surf do Brasil pertinho. O Centrinho concentra restaurantes e bares na beira da lagoa."
        },
        bestFor: {
            en: "Digital nomads, young travelers, party-goers, water sports enthusiasts, surfers, foodies",
            pt: "Nomades digitais, jovens viajantes, festeiros, amantes de esportes aquaticos, surfistas, gastronomos"
        },
        notIdealFor: {
            en: "Families seeking quiet, those needing direct ocean beach, light sleepers",
            pt: "Familias buscando sossego, quem precisa de praia de mar, quem tem sono leve"
        },
        shortTermLow: "R$50-200/night",
        shortTermHigh: "R$400-1,500/night",
        longTerm: "R$1,790-4,650/month",
        nearbyBeaches: ["Praia Mole (5km)", "Joaquina (5km)", "Galheta (5km + trail)"],
        proTip: {
            en: "Traffic brutal Dec-Feb-15 min becomes 60-90 min. Multiple coworking spaces: Impact Hub, Village, Sandbox.",
            pt: "Transito brutal de dez a fev - 15 min viram 60-90 min. Varios coworkings: Impact Hub, Village, Sandbox."
        },
        coworking: { en: "We Cowork It Out, Sandbox, Impact Hub, Village Coworking", pt: "We Cowork It Out, Sandbox, Impact Hub, Village Coworking" },
        internet: { en: "Excellent-50-100 Mbps typical, fiber widely available", pt: "Excelente - 50-100 Mbps tipico, fibra disponivel em toda parte" },
        tags: ["digital nomad", "nightlife", "bohemian", "coworking", "water sports"],
        personality: "Digital Nomad Pioneer",
        tripType: "remote", budget: "midrange", scene: "social", priority: "nightlife"
    },
    {
        name: "Barra da Lagoa",
        nickname: { en: "Surf Village Haven", pt: "Refugio da Vila de Surf" },
        emoji: "🐢",
        type: { en: "Traditional Fishing Village", pt: "Vila de Pescadores Tradicional" },
        region: "East",
        description: {
            en: "Where the lagoon meets the Atlantic through a picturesque channel. Functioning fishing community, surf schools, and colivings. Projeto TAMAR turtle conservation center. Quieter than Lagoa.",
            pt: "Onde a lagoa encontra o Atlantico por um canal pitoresco. Comunidade de pescadores ativa, escolas de surf e colivings. Centro de conservacao de tartarugas Projeto TAMAR. Mais tranquilo que a Lagoa."
        },
        bestFor: {
            en: "Beginner surfers, nature lovers, families, budget travelers, digital nomads seeking tranquility",
            pt: "Surfistas iniciantes, amantes da natureza, familias, viajantes economicos, nomades digitais buscando tranquilidade"
        },
        notIdealFor: {
            en: "Nightlife seekers (must travel to Lagoa), those without transport",
            pt: "Quem busca vida noturna (precisa ir ate a Lagoa), quem nao tem transporte"
        },
        shortTermLow: "R$45-150/night",
        shortTermHigh: "R$150-400/night",
        longTerm: "R$1,800-3,500/month",
        nearbyBeaches: ["Barra da Lagoa", "Mocambique (11km)", "Prainha"],
        proTip: {
            en: "Sea Wolf Surf Hostel for authentic experience. Nomadico and Rosemary colivings have fiber WiFi. 20-30% cheaper than Lagoa.",
            pt: "Sea Wolf Surf Hostel pra experiencia autentica. Nomadico e Rosemary colivings tem WiFi fibra. 20-30% mais barato que a Lagoa."
        },
        coworking: { en: "Coliving spaces with work areas", pt: "Colivings com areas de trabalho" },
        internet: { en: "Good fiber available", pt: "Boa fibra disponivel" },
        tags: ["surf", "beginner friendly", "fishing village", "turtles", "budget"],
        personality: "Surf Village Seeker",
        tripType: "surf", budget: "budget", scene: "solo", priority: "beach"
    },

    // SOUTH REGION
    {
        name: "Campeche",
        nickname: { en: "Digital Nomad Alternative", pt: "Alternativa pros Nomades Digitais" },
        emoji: "🐋",
        type: { en: "Bohemian Surf Culture", pt: "Cultura de Surf Boemia" },
        region: "South",
        description: {
            en: "Quieter alternative to Lagoa with the island's most complete southern infrastructure. Only 7km from airport-closest beach neighborhood. Growing expat community, excellent surf, whale watching July-August.",
            pt: "Alternativa mais tranquila a Lagoa com a infraestrutura mais completa do sul da ilha. So 7km do aeroporto - bairro de praia mais proximo. Comunidade de expats crescendo, surf excelente, avistamento de baleias em julho-agosto."
        },
        bestFor: {
            en: "Surfers, digital nomads seeking Lagoa alternative, young professionals, beach lifestyle with infrastructure",
            pt: "Surfistas, nomades digitais buscando alternativa a Lagoa, jovens profissionais, estilo de vida praiano com infraestrutura"
        },
        notIdealFor: {
            en: "Those wanting warm calm water, nightlife seekers",
            pt: "Quem quer agua calma e quentinha, quem busca vida noturna"
        },
        shortTermLow: "R$80-375/night",
        shortTermHigh: "R$375-700/night",
        longTerm: "R$3,700-6,500/month",
        nearbyBeaches: ["Campeche Beach", "Morro das Pedras", "Armacao"],
        proTip: {
            en: "Airport proximity (15-20 min) is unbeatable. Watch for whales from shore during winter! Zen Telecom offers up to 1000 Mbps fiber.",
            pt: "Proximidade do aeroporto (15-20 min) e imbativel. Observe baleias da praia no inverno! Zen Telecom oferece fibra de ate 1000 Mbps."
        },
        coworking: { en: "Limited locally; 20-min drive to Lagoa spaces", pt: "Limitado localmente; 20 min de carro ate os espacos da Lagoa" },
        internet: { en: "Good fiber up to 1000 Mbps (Zen Telecom)", pt: "Boa fibra ate 1000 Mbps (Zen Telecom)" },
        tags: ["surf", "digital nomad", "whales", "airport proximity", "quiet"],
        personality: "Surf & Work Seeker",
        tripType: "remote", budget: "midrange", scene: "solo", priority: "quiet"
    },
    {
        name: "Armacao",
        nickname: { en: "Gateway to Paradise", pt: "Portal pro Paraiso" },
        emoji: "⛪",
        type: { en: "Historic Fishing Village", pt: "Vila de Pescadores Historica" },
        region: "South",
        description: {
            en: "Traditional fishing village and departure point for Ilha do Campeche (the 'Brazilian Caribbean'). Historic 1772 Santa Ana church from whaling era. Gateway to Matadeiro beach and legendary Lagoinha do Leste trail.",
            pt: "Vila de pescadores tradicional e ponto de partida pra Ilha do Campeche (o 'Caribe Brasileiro'). Igreja historica de Santa Ana de 1772, da era baleeira. Portal pra praia do Matadeiro e a lendaria trilha da Lagoinha do Leste."
        },
        bestFor: {
            en: "Hikers, nature photographers, experienced surfers, those seeking authentic atmosphere",
            pt: "Trilheiros, fotografos de natureza, surfistas experientes, quem busca atmosfera autentica"
        },
        notIdealFor: {
            en: "Families with children (beach conditions), infrastructure-dependent travelers",
            pt: "Familias com criancas (condicoes da praia), viajantes que dependem de infraestrutura"
        },
        shortTermLow: "R$365-620/night",
        shortTermHigh: "R$620-1,000/night",
        longTerm: { en: "Limited-primarily seasonal rentals", pt: "Limitado - principalmente alugueis de temporada" },
        nearbyBeaches: ["Armacao", "Matadeiro (1.3km walk)", "Lagoinha do Leste (4km trail)"],
        proTip: {
            en: "Book Ilha do Campeche boat trips early in summer. The church and Ilha das Campanhas viewpoint are worth visiting.",
            pt: "Reserve os passeios de barco pra Ilha do Campeche cedo no verao. A igreja e o mirante da Ilha das Campanhas valem a visita."
        },
        tags: ["historic", "trails", "authentic", "nature", "photography"],
        personality: "Trail Explorer",
        tripType: "beach", budget: "midrange", scene: "couples", priority: "quiet"
    },
    {
        name: "Pantano do Sul",
        nickname: { en: "Aldeia dos Pescadores", pt: "Aldeia dos Pescadores" },
        emoji: "🦐",
        type: { en: "Authentic Fishing Culture", pt: "Cultura de Pesca Autentica" },
        region: "South",
        description: {
            en: "The southernmost tip preserves manezinho culture-local accent intact, artisan fishermen, legendary seafood. Bar do Arante has walls covered in visitor messages, fresh fish never frozen. Electricity only arrived 1968.",
            pt: "A ponta mais ao sul preserva a cultura manezinha - sotaque local intacto, pescadores artesanais, frutos do mar lendarios. O Bar do Arante tem paredes cobertas de recados de visitantes, peixe fresco nunca congelado. Luz eletrica so chegou em 1968."
        },
        bestFor: {
            en: "Authentic experience seekers, seafood lovers, hikers, cultural enthusiasts, families (calm beach section)",
            pt: "Quem busca experiencia autentica, amantes de frutos do mar, trilheiros, entusiastas culturais, familias (trecho calmo da praia)"
        },
        notIdealFor: {
            en: "Those needing infrastructure, nightlife, frequent transport",
            pt: "Quem precisa de infraestrutura, vida noturna, transporte frequente"
        },
        shortTermLow: "R$200-400/night",
        shortTermHigh: "R$400-700/night",
        longTerm: { en: "Very limited-contact locals", pt: "Muito limitado - fale com os locais" },
        nearbyBeaches: ["Pantano do Sul", "Acores", "Lagoinha do Leste (2.2km trail)"],
        proTip: {
            en: "Must try: sequencia de camarao, tainha grelhada at Bar do Arante. Shorter Lagoinha do Leste trail (50-60 min) starts here.",
            pt: "Tem que provar: sequencia de camarao, tainha grelhada no Bar do Arante. A trilha mais curta pra Lagoinha do Leste (50-60 min) comeca aqui."
        },
        tags: ["authentic", "seafood", "fishing village", "cultural", "trails"],
        personality: "Culture & Cuisine Seeker",
        tripType: "beach", budget: "budget", scene: "couples", priority: "quiet"
    },
    {
        name: "Ribeirao da Ilha",
        nickname: { en: "Oyster Capital", pt: "Capital da Ostra" },
        emoji: "🦪",
        type: { en: "Gastronomic Heritage", pt: "Patrimonio Gastronomico" },
        region: "South",
        description: {
            en: "Brazil's largest oyster producer (98% of national production) with 18th-century Azorean architecture perfectly preserved. Not a beach destination-a gastronomic pilgrimage with famous sunset views.",
            pt: "Maior produtor de ostras do Brasil (98% da producao nacional) com arquitetura acoriana do seculo XVIII perfeitamente preservada. Nao e destino de praia - e uma peregrinacao gastronomica com por do sol famoso."
        },
        bestFor: {
            en: "Food lovers (especially oyster enthusiasts), history buffs, sunset photographers",
            pt: "Amantes da gastronomia (especialmente de ostras), apaixonados por historia, fotografos de por do sol"
        },
        notIdealFor: {
            en: "Beach vacations, long-term stays, swimmers",
            pt: "Ferias de praia, estadias longas, banhistas"
        },
        shortTermLow: { en: "Day trip recommended", pt: "Recomendado como passeio de um dia" },
        shortTermHigh: { en: "Limited pousadas R$300-600/night", pt: "Poucas pousadas R$300-600/noite" },
        longTerm: { en: "Not recommended", pt: "Nao recomendado" },
        nearbyBeaches: ["Bay beaches (narrow, not for swimming)", "Naufragados (combine trip)"],
        proTip: {
            en: "Ostradamus is among Brazil's 100 best restaurants. October Oyster Festival is spectacular. Visit oyster farms!",
            pt: "O Ostradamus esta entre os 100 melhores restaurantes do Brasil. A Festa da Ostra em outubro e espetacular. Visite as fazendas de ostras!"
        },
        tags: ["gastronomy", "oysters", "historic", "sunset", "Azorean"],
        personality: "Gastronomy Pilgrim",
        tripType: "beach", budget: "midrange", scene: "couples", priority: "nightlife"
    },

    // CENTRAL URBAN
    {
        name: "Centro",
        nickname: { en: "Transportation Hub", pt: "Centro de Transporte" },
        emoji: "🚌",
        type: { en: "Urban Commercial Center", pt: "Centro Comercial Urbano" },
        region: "Central",
        description: {
            en: "The island's best public transit (TICEN terminal connects everywhere), hospitals, government offices, and historic Mercado Publico. Not a vacation base-but for business or budget stays, it works.",
            pt: "O melhor transporte publico da ilha (terminal TICEN conecta tudo), hospitais, reparticoes publicas e o historico Mercado Publico. Nao e base de ferias - mas pra negocios ou estadia economica, funciona."
        },
        bestFor: {
            en: "Business travelers, students, budget-conscious residents needing transit",
            pt: "Viajantes a negocios, estudantes, moradores economicos que precisam de transporte"
        },
        notIdealFor: {
            en: "Beach vacationers, families, those seeking quiet",
            pt: "Turistas de praia, familias, quem busca sossego"
        },
        shortTermLow: "R$25-200/night",
        shortTermHigh: "R$400-600/night",
        longTerm: "R$1,500-3,500/month",
        nearbyBeaches: ["Beira Mar (not for swimming)", "Day trips to all beaches"],
        proTip: {
            en: "TICEN terminal connects to all island regions. Exercise caution near bus terminal after dark. 20-40% cheaper than beaches.",
            pt: "O terminal TICEN conecta todas as regioes da ilha. Tenha cuidado perto da rodoviaria a noite. 20-40% mais barato que as praias."
        },
        tags: ["urban", "transit hub", "budget", "business", "central"],
        personality: "Urban Practical",
        tripType: "remote", budget: "budget", scene: "solo", priority: "central"
    },
    {
        name: "Trindade",
        nickname: { en: "University District", pt: "Bairro Universitario" },
        emoji: "🎓",
        type: { en: "Student Quarter", pt: "Bairro Estudantil" },
        region: "Central",
        description: {
            en: "Home to UFSC (Federal University of Santa Catarina), buzzing with young energy, affordable eateries, and the best budget long-term rentals on the island. Vibrant bar scene along Rua Lauro Linhares.",
            pt: "Lar da UFSC (Universidade Federal de Santa Catarina), vibrando com energia jovem, restaurantes acessiveis e os melhores alugueis de longo prazo da ilha. Cena de bares animada na Rua Lauro Linhares."
        },
        bestFor: {
            en: "Students, young professionals, budget-conscious digital nomads",
            pt: "Estudantes, jovens profissionais, nomades digitais economicos"
        },
        notIdealFor: {
            en: "Families, beach seekers, those wanting quiet",
            pt: "Familias, quem busca praia, quem quer sossego"
        },
        shortTermLow: "R$50-150/night",
        shortTermHigh: "R$150-300/night",
        longTerm: "R$1,200-3,000/month (best value on island)",
        nearbyBeaches: ["Day trips-20-30 min to east beaches"],
        proTip: {
            en: "Best value on island for long-term rentals. Hospital Universitario, Shopping Villa Romana nearby. Great nightlife.",
            pt: "Melhor custo-beneficio da ilha pra alugueis de longo prazo. Hospital Universitario, Shopping Villa Romana pertinho. Otima vida noturna."
        },
        coworking: { en: "Vilaj Coworking (SC's first, 5,000+ members)", pt: "Vilaj Coworking (primeiro de SC, mais de 5.000 membros)" },
        internet: { en: "Excellent fiber coverage", pt: "Excelente cobertura de fibra" },
        tags: ["student", "budget", "nightlife", "young", "value"],
        personality: "Budget Pioneer",
        tripType: "remote", budget: "budget", scene: "social", priority: "central"
    },
    {
        name: "Santa Monica",
        nickname: { en: "Upscale Residential", pt: "Residencial de Alto Padrao" },
        emoji: "🏡",
        type: { en: "Family Professional District", pt: "Bairro de Familias e Profissionais" },
        region: "Central",
        description: {
            en: "Flat terrain, tree-lined streets, high-end gastronomy along Avenida Madre Benvenuta, and some of Floripa's best schools. Among the safest neighborhoods with active community watch.",
            pt: "Terreno plano, ruas arborizadas, gastronomia de alto nivel na Avenida Madre Benvenuta e algumas das melhores escolas de Floripa. Um dos bairros mais seguros com vigilancia comunitaria ativa."
        },
        bestFor: {
            en: "Families, professionals, remote workers wanting comfort and safety",
            pt: "Familias, profissionais, trabalhadores remotos que querem conforto e seguranca"
        },
        notIdealFor: {
            en: "Beach seekers, nightlife, budget travelers",
            pt: "Quem busca praia, vida noturna, viajantes economicos"
        },
        shortTermLow: "R$250-400/night",
        shortTermHigh: "R$400-700/night",
        longTerm: "R$4,000-9,000/month",
        nearbyBeaches: ["Easy access via SC-404 to east beaches"],
        proTip: {
            en: "Among the safest neighborhoods-excellent lighting, community watch. Great schools for families relocating.",
            pt: "Um dos bairros mais seguros - excelente iluminacao, vigilancia comunitaria. Otimas escolas pra familias se mudando."
        },
        tags: ["family", "safe", "upscale", "residential", "schools"],
        personality: "Family Settler",
        tripType: "family", budget: "luxury", scene: "families", priority: "quiet"
    },

    // NORTHWEST BAY
    {
        name: "Santo Antonio de Lisboa",
        nickname: { en: "Gastronomy Capital", pt: "Capital da Gastronomia" },
        emoji: "🌅",
        type: { en: "Historic Sunset Village", pt: "Vila Historica do Por do Sol" },
        region: "Northwest Bay",
        description: {
            en: "Founded 1698, this historic village is Floripa's premier dining destination. Cobblestone streets (first paved in Santa Catarina) wind past colorful colonial houses to waterfront restaurants. Famous sunsets with DJs at golden hour.",
            pt: "Fundada em 1698, esta vila historica e o principal destino gastronomico de Floripa. Ruas de pedra (as primeiras calcadas de Santa Catarina) serpenteiam por casas coloniais coloridas ate restaurantes a beira-mar. Por do sol famoso com DJs na hora dourada."
        },
        bestFor: {
            en: "Gastronomy lovers, history enthusiasts, couples seeking romance, photographers",
            pt: "Amantes da gastronomia, entusiastas de historia, casais buscando romance, fotografos"
        },
        notIdealFor: {
            en: "Beach seekers, surfers, nightlife beyond restaurants",
            pt: "Quem busca praia, surfistas, vida noturna alem de restaurantes"
        },
        shortTermLow: "R$300-500/night",
        shortTermHigh: "R$500-800/night",
        longTerm: { en: "Limited options", pt: "Poucas opcoes" },
        nearbyBeaches: ["Bay beaches (calm, for sunset not swimming)", "Cacupe"],
        proTip: {
            en: "Rota Gastronomica do Sol Poente (Setting Sun Route) has exceptional restaurants. Visit the 1860 functioning flour mill.",
            pt: "A Rota Gastronomica do Sol Poente tem restaurantes excepcionais. Visite o moinho de farinha de 1860 ainda em funcionamento."
        },
        tags: ["gastronomy", "sunset", "historic", "romantic", "Azorean"],
        personality: "Sunset Gastronome",
        tripType: "beach", budget: "midrange", scene: "couples", priority: "nightlife"
    },
    {
        name: "Sambaqui",
        nickname: { en: "Preserved Village", pt: "Vila Preservada" },
        emoji: "🎸",
        type: { en: "Authentic Fishing Community", pt: "Comunidade de Pesca Autentica" },
        region: "Northwest Bay",
        description: {
            en: "Named after prehistoric shell mounds, Sambaqui has resisted development more than anywhere on the island. Population ~1,500. Sunday nights: locals gather for live Brazilian roots music at a fisherman's house.",
            pt: "Batizado em homenagem aos montes de conchas pre-historicos, Sambaqui resistiu ao desenvolvimento mais que qualquer lugar da ilha. Populacao de cerca de 1.500. Domingos a noite: os locais se reunem pra musica brasileira de raiz ao vivo na casa de um pescador."
        },
        bestFor: {
            en: "Authentic fishing village experience, quiet contemplation, sunset photography",
            pt: "Experiencia autentica de vila de pescadores, contemplacao tranquila, fotografia de por do sol"
        },
        notIdealFor: {
            en: "Beach swimmers, infrastructure seekers, nightlife beyond local music",
            pt: "Banhistas, quem busca infraestrutura, vida noturna alem da musica local"
        },
        shortTermLow: "R$115-250/night",
        shortTermHigh: "R$250-350/night",
        longTerm: { en: "Very limited Airbnb options", pt: "Poucas opcoes no Airbnb" },
        nearbyBeaches: ["Sambaqui bay beach", "Santo Antonio de Lisboa"],
        proTip: {
            en: "Sunday nights: find the fisherman's house with live Brazilian roots music-tourists rarely find this. Magical experience.",
            pt: "Domingos a noite: encontre a casa do pescador com musica brasileira de raiz ao vivo - turistas raramente descobrem isso. Experiencia magica."
        },
        tags: ["authentic", "sunset", "music", "preserved", "quiet"],
        personality: "Authenticity Seeker",
        tripType: "beach", budget: "budget", scene: "solo", priority: "quiet"
    },
    {
        name: "Cacupe",
        nickname: { en: "Luxury Retreat", pt: "Refugio de Luxo" },
        emoji: "🏢",
        type: { en: "Exclusive Residential", pt: "Residencial Exclusivo" },
        region: "Northwest Bay",
        description: {
            en: "High-end condominiums balanced with traditional fishermen's homes. Spectacular Centro/bridge views across bay. Hotel SESC Cacupe offers 132,000 m2 property with family programming.",
            pt: "Condominios de alto padrao equilibrados com casas tradicionais de pescadores. Vista espetacular do Centro e da ponte atraves da baia. O Hotel SESC Cacupe oferece propriedade de 132.000 m2 com programacao familiar."
        },
        bestFor: {
            en: "Upscale residential living, tech professionals (near SC-401 corridor), SESC hotel guests",
            pt: "Moradia residencial de alto padrao, profissionais de tecnologia (perto do corredor da SC-401), hospedes do hotel SESC"
        },
        notIdealFor: {
            en: "Beach seekers, nightlife, budget travelers",
            pt: "Quem busca praia, vida noturna, viajantes economicos"
        },
        shortTermLow: "R$200-400/night",
        shortTermHigh: "R$400-700/night",
        longTerm: "R$3,000-5,000/month",
        nearbyBeaches: ["Bay beaches", "Santo Antonio de Lisboa"],
        proTip: {
            en: "Strategic position between city and north beaches. 100% of reviews rate it safe-no flooding risk.",
            pt: "Posicao estrategica entre a cidade e as praias do norte. 100% das avaliacoes classificam como seguro - sem risco de alagamento."
        },
        tags: ["exclusive", "safe", "bay views", "residential", "tech corridor"],
        personality: "Executive Retreater",
        tripType: "remote", budget: "luxury", scene: "couples", priority: "quiet"
    }
];

// Quiz questions for neighborhood finder
const neighborhoodQuestions = [
    {
        label: { en: "The Purpose", pt: "O Proposito" },
        text: { en: "What brings you to Floripa?", pt: "O que te traz a Floripa?" },
        options: [
            { value: "beach", icon: "🏖️", title: { en: "Beach Vacation", pt: "Ferias de Praia" }, desc: { en: "Sun, sand, relaxation", pt: "Sol, areia, relaxamento" } },
            { value: "party", icon: "🎉", title: { en: "Nightlife & Parties", pt: "Vida Noturna & Festas" }, desc: { en: "Beach clubs, bars, scene", pt: "Beach clubs, bares, badalacao" } },
            { value: "remote", icon: "💻", title: { en: "Remote Work", pt: "Trabalho Remoto" }, desc: { en: "Digital nomad life", pt: "Vida de nomade digital" } },
            { value: "family", icon: "👨‍👩‍👧‍👦", title: { en: "Family Trip", pt: "Viagem em Familia" }, desc: { en: "Kid-friendly adventure", pt: "Aventura pras criancas" } },
            { value: "surf", icon: "🏄", title: { en: "Surf Focused", pt: "Foco no Surf" }, desc: { en: "Chasing waves", pt: "Atras das ondas" } }
        ]
    },
    {
        label: { en: "The Budget", pt: "O Orcamento" },
        text: { en: "What's your accommodation style?", pt: "Qual seu estilo de hospedagem?" },
        options: [
            { value: "budget", icon: "🎒", title: { en: "Backpacker", pt: "Mochileiro" }, desc: { en: "Hostels, basic stays, under R$150/night", pt: "Hostels, estadias basicas, menos de R$150/noite" } },
            { value: "midrange", icon: "🏨", title: { en: "Mid-Range", pt: "Intermediario" }, desc: { en: "Comfortable hotels, R$200-500/night", pt: "Hoteis confortaveis, R$200-500/noite" } },
            { value: "luxury", icon: "✨", title: { en: "Luxury", pt: "Luxo" }, desc: { en: "Resorts, premium stays, R$700+/night", pt: "Resorts, estadias premium, R$700+/noite" } }
        ]
    },
    {
        label: { en: "The Vibe", pt: "A Vibe" },
        text: { en: "Who are you traveling with?", pt: "Com quem voce ta viajando?" },
        options: [
            { value: "social", icon: "🥳", title: { en: "Young & Social", pt: "Jovem & Social" }, desc: { en: "Meeting people, nightlife", pt: "Conhecer gente, vida noturna" } },
            { value: "couples", icon: "💑", title: { en: "Couples", pt: "Casal" }, desc: { en: "Romance, quality time", pt: "Romance, tempo de qualidade" } },
            { value: "families", icon: "👨‍👩‍👧", title: { en: "Families", pt: "Familias" }, desc: { en: "Kid-friendly everything", pt: "Tudo pra criancas" } },
            { value: "solo", icon: "🧭", title: { en: "Solo Explorer", pt: "Explorador Solo" }, desc: { en: "Independence, flexibility", pt: "Independencia, flexibilidade" } }
        ]
    },
    {
        label: { en: "The Priority", pt: "A Prioridade" },
        text: { en: "What matters most in your base?", pt: "O que mais importa na sua base?" },
        options: [
            { value: "beach", icon: "🏝️", title: { en: "Walking to Beach", pt: "Ir a Pe pra Praia" }, desc: { en: "Steps from the sand", pt: "Pertinho da areia" } },
            { value: "nightlife", icon: "🍽️", title: { en: "Restaurants & Scene", pt: "Restaurantes & Badalacao" }, desc: { en: "Food, bars, action", pt: "Comida, bares, agito" } },
            { value: "quiet", icon: "🧘", title: { en: "Quiet & Peaceful", pt: "Tranquilo & Sossegado" }, desc: { en: "Escape the crowds", pt: "Fugir da multidao" } },
            { value: "central", icon: "📍", title: { en: "Central Location", pt: "Localizacao Central" }, desc: { en: "Access to everything", pt: "Acesso a tudo" } }
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
