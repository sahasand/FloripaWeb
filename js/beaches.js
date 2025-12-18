// Beach data for "Find Your Beach" quiz
const beaches = [
    // HIDDEN GEMS
    {
        name: "Lagoinha do Leste",
        nickname: { en: "The Island's Crown Jewel", pt: "A Joia da Coroa da Ilha" },
        emoji: "🥾",
        type: { en: "Pristine Wilderness", pt: "Natureza Intocada" },
        region: "South",
        description: {
            en: "Earned through jungle trails and coastal paths, this pristine crescent rewards the adventurous. A stunning freshwater lagoon meets the sea, creating a geological phenomenon. Wild camping is permitted, with fresh water available from a stream.",
            pt: "Conquistada através de trilhas na mata e caminhos costeiros, essa praia em forma de meia-lua recompensa os aventureiros. Uma lagoa de água doce deslumbrante encontra o mar, criando um fenômeno geológico. Camping selvagem é permitido, com água doce disponível de um riacho."
        },
        waves: 5, crowds: 1, infrastructure: 0,
        water: { en: "Crystal clear, cold Atlantic", pt: "Cristalina, Atlântico gelado" },
        bestFor: { en: "Adventurers, hikers, photographers", pt: "Aventureiros, trilheiros, fotógrafos" },
        notIdealFor: { en: "Children, elderly, those wanting facilities", pt: "Crianças, idosos, quem quer infraestrutura" },
        parking: { en: "Pântano do Sul (~R$30) or Armação", pt: "Pântano do Sul (~R$30) ou Armação" },
        food: { en: "BRING EVERYTHING — zero commerce", pt: "TRAGA TUDO — zero comércio" },
        bestTime: { en: "Leave by 7-8am for full day", pt: "Saia às 7-8h pra ter o dia inteiro" },
        bestSeason: { en: "March-April or Sept-Nov", pt: "Março-abril ou set-nov" },
        proTip: {
            en: "Hike in from Matadeiro when fresh, return via Pântano do Sul, then reward yourself at Bar do Arante restaurant.",
            pt: "Entre pela trilha do Matadeiro quando estiver descansado, volte pelo Pântano do Sul e se presenteie com um almoço no Bar do Arante."
        },
        access: { en: "1-3 hour hike only (or boat ~R$50-80)", pt: "Apenas trilha de 1-3 horas (ou barco ~R$50-80)" },
        tags: ["pristine", "hiking", "adventure", "photography", "camping"],
        personality: "Hidden Cove Seeker",
        vibe: "hidden", effort: "hike", priority: "nature", practical: "surprise"
    },
    {
        name: "Praia do Saquinho",
        nickname: { en: "Off-Grid Paradise", pt: "Paraíso Fora da Rede" },
        emoji: "🏝️",
        type: { en: "Untouched Solitude", pt: "Solidão Intocada" },
        region: "South",
        description: {
            en: "Among the emptiest beaches on the island, this off-grid paradise has no electricity and only ~20 families live here. The turquoise waters and complete isolation make it worth every step of the journey.",
            pt: "Uma das praias mais vazias da ilha, esse paraíso sem eletricidade tem apenas ~20 famílias morando aqui. As águas turquesa e o isolamento total fazem cada passo valer a pena."
        },
        waves: 3, crowds: 1, infrastructure: 0.5,
        water: { en: "Crystal clear, turquoise", pt: "Cristalina, turquesa" },
        bestFor: { en: "Solitude seekers, photographers", pt: "Quem busca solidão, fotógrafos" },
        notIdealFor: { en: "Those wanting any conveniences", pt: "Quem quer qualquer comodidade" },
        parking: { en: "End of road at Solidão (~R$20-30)", pt: "Final da estrada na Solidão (~R$20-30)" },
        food: { en: "Bar do Quirino serves fresh fish—bring cash", pt: "Bar do Quirino serve peixe fresco—traga dinheiro" },
        bestTime: { en: "Full day excursion, arrive early", pt: "Excursão de dia inteiro, chegue cedo" },
        bestSeason: { en: "Summer for swimming", pt: "Verão pra nadar" },
        proTip: {
            en: "The cement trail can be extremely slippery when wet due to moss—proper footwear essential. No cell signal in most areas.",
            pt: "A trilha de cimento fica extremamente escorregadia quando molhada por causa do limo—calçado adequado é essencial. Sem sinal de celular na maior parte."
        },
        access: { en: "30-45 min hike from Solidão", pt: "Trilha de 30-45 min da Solidão" },
        tags: ["solitude", "pristine", "off-grid", "photography"],
        personality: "Solitude Seeker",
        vibe: "hidden", effort: "hike", priority: "nature", practical: "surprise"
    },
    {
        name: "Praia dos Naufragados",
        nickname: { en: "Shipwreck Beach", pt: "Praia dos Náufragos" },
        emoji: "⚓",
        type: { en: "Historic Adventure", pt: "Aventura Histórica" },
        region: "South",
        description: {
            en: "Named for the 1753 shipwreck that killed 180+ Azorean settlers. The 1861 lighthouse delivers stunning panoramic views, and WWII-era cannons at Forte Marechal Moura add to the history. A freshwater river crosses the beach.",
            pt: "Nomeada pelo naufrágio de 1753 que matou mais de 180 colonos açorianos. O farol de 1861 oferece vistas panorâmicas deslumbrantes, e os canhões da Segunda Guerra no Forte Marechal Moura complementam a história. Um rio de água doce cruza a praia."
        },
        waves: 4, crowds: 1.5, infrastructure: 1,
        water: { en: "Powerful waves, clear, cold", pt: "Ondas fortes, água clara e gelada" },
        bestFor: { en: "History buffs, adventurers", pt: "Amantes de história, aventureiros" },
        notIdealFor: { en: "Non-swimmers, those wanting luxury", pt: "Quem não sabe nadar, quem quer luxo" },
        parking: { en: "Caieira da Barra do Sul (~R$20)", pt: "Caieira da Barra do Sul (~R$20)" },
        food: { en: "Basic seafood restaurants on beach", pt: "Restaurantes simples de frutos do mar na praia" },
        bestTime: { en: "Morning departure, check tide for lighthouse", pt: "Saia de manhã, cheque a maré pro farol" },
        bestSeason: { en: "Year-round (avoid muddy trail after heavy rain)", pt: "O ano todo (evite a trilha lamacenta após chuva forte)" },
        proTip: {
            en: "Return options include asking fishermen for boat rides (~R$20-30). Check tide schedules for lighthouse access.",
            pt: "Na volta, você pode pedir carona de barco pros pescadores (~R$20-30). Cheque a tábua de marés pra acessar o farol."
        },
        access: { en: "50 min hike (~3km) or boat", pt: "Trilha de 50 min (~3km) ou barco" },
        tags: ["history", "adventure", "lighthouse", "hiking"],
        personality: "History Explorer",
        vibe: "hidden", effort: "hike", priority: "nature", practical: "surprise"
    },
    {
        name: "Praia do Gravatá",
        nickname: { en: "The Secret Cove", pt: "A Enseada Secreta" },
        emoji: "💎",
        type: { en: "Intimate Escape", pt: "Refúgio Intimista" },
        region: "East",
        description: {
            en: "Unknown even to most locals, this 60-80 meter intimate cove transforms into a 'big blue pool' when swells come from the East or South. Only 2 fishermen's shacks exist here. The Pedra do Urubu viewpoint offers 360° panoramas.",
            pt: "Desconhecida até pela maioria dos locais, essa enseada intimista de 60-80 metros se transforma numa 'grande piscina azul' quando a ondulação vem do Leste ou Sul. Só existem 2 ranchos de pescadores aqui. O mirante da Pedra do Urubu oferece panoramas de 360°."
        },
        waves: 3, crowds: 1, infrastructure: 0,
        water: { en: "Cold, crystal clear, highly saline", pt: "Gelada, cristalina, muito salgada" },
        bestFor: { en: "Couples, photographers, solitude seekers", pt: "Casais, fotógrafos, quem busca solidão" },
        notIdealFor: { en: "Those needing any facilities", pt: "Quem precisa de qualquer infraestrutura" },
        parking: { en: "Praia Mole lots (R$30-50 summer)", pt: "Estacionamentos da Praia Mole (R$30-50 no verão)" },
        food: { en: "Bring everything", pt: "Traga tudo" },
        bestTime: { en: "Golden hour for photography", pt: "Hora dourada pra fotografia" },
        bestSeason: { en: "E/S swells create calm lagoon conditions", pt: "Ondulações de L/S criam condições de lagoa calma" },
        proTip: {
            en: "Trail begins at the paragliding ramp (Rampa Praia Mole). At the fork, go LEFT (right leads to private property with dogs).",
            pt: "A trilha começa na rampa de parapente (Rampa Praia Mole). Na bifurcação, vá pela ESQUERDA (direita leva a propriedade privada com cachorros)."
        },
        access: { en: "30 min trail from Praia Mole", pt: "Trilha de 30 min da Praia Mole" },
        tags: ["secret", "romantic", "photography", "intimate"],
        personality: "Secret Spot Finder",
        vibe: "hidden", effort: "walk", priority: "nature", practical: "surprise"
    },
    {
        name: "Costa da Lagoa",
        nickname: { en: "Boat-Access Paradise", pt: "Paraíso Acessível por Barco" },
        emoji: "⛵",
        type: { en: "Culinary Adventure", pt: "Aventura Gastronômica" },
        region: "Lagoon",
        description: {
            en: "Accessible only by 40-minute boat ride or 3-hour trail, this hidden gem features multiple beaches, a crystal pool waterfall, and 15+ restaurants serving authentic seafood including the famous carapeva fish found only in this lagoon.",
            pt: "Acessível apenas por barco (40 minutos) ou trilha de 3 horas, esse tesouro escondido tem várias praias, uma cachoeira com piscina cristalina e mais de 15 restaurantes servindo frutos do mar autênticos, incluindo o famoso peixe carapeva encontrado só nessa lagoa."
        },
        waves: 1, crowds: 2, infrastructure: 3,
        water: { en: "Calm lagoon", pt: "Lagoa calma" },
        bestFor: { en: "Day trips, gastronomy, couples, adventurous families", pt: "Passeios de dia, gastronomia, casais, famílias aventureiras" },
        notIdealFor: { en: "Late visitors (boats stop 6pm)", pt: "Visitantes tardios (barcos param às 18h)" },
        parking: { en: "Free at Terminal Lacustre", pt: "Gratuito no Terminal Lacustre" },
        food: { en: "EXCELLENT — Restaurante Cachoeira, Lagoa Azul", pt: "EXCELENTE — Restaurante Cachoeira, Lagoa Azul" },
        bestTime: { en: "Leave 11:30am for lunch", pt: "Saia às 11h30 pro almoço" },
        bestSeason: { en: "Year-round", pt: "O ano todo" },
        proTip: {
            en: "Try the carapeva fish—unique to this lagoon. Walk 15 minutes from Point 16 to visit the Cachoeira da Costa waterfall.",
            pt: "Experimente o peixe carapeva—exclusivo dessa lagoa. Caminhe 15 minutos do Ponto 16 pra visitar a Cachoeira da Costa."
        },
        access: { en: "Boat only (40-50 min, R$25 round trip) OR 3-hour trail", pt: "Apenas barco (40-50 min, R$25 ida e volta) OU trilha de 3 horas" },
        tags: ["gastronomy", "boat", "waterfall", "unique"],
        personality: "Culinary Explorer",
        vibe: "hidden", effort: "walk", priority: "restaurants", practical: "surprise"
    },

    // EAST COAST - SURF
    {
        name: "Praia da Joaquina",
        nickname: { en: "Joaca", pt: "Joaca" },
        emoji: "🏄",
        type: { en: "Championship Surf", pt: "Surf de Campeonato" },
        region: "East",
        description: {
            en: "Brazil's first international surf competition site (1986). Powerful beach breaks produce waves to 3+ meters. Famous left-handers break from the rocks toward the middle. The adjacent dunes offer sandboarding rentals.",
            pt: "Primeiro local de competição internacional de surf do Brasil (1986). Ondas potentes de até 3+ metros. Famosas esquerdas quebram das pedras pro meio. As dunas ao lado oferecem aluguel de pranchas de sandboard."
        },
        waves: 5, crowds: 5, infrastructure: 4,
        water: { en: "Rough surf, steep drop-off, dangerous currents", pt: "Surf pesado, fundo irregular, correntes perigosas" },
        bestFor: { en: "Experienced surfers, sandboard enthusiasts", pt: "Surfistas experientes, entusiastas de sandboard" },
        notIdealFor: { en: "Small children, non-swimmers", pt: "Crianças pequenas, quem não sabe nadar" },
        parking: { en: "Paid parking at entrance", pt: "Estacionamento pago na entrada" },
        food: { en: "Kiosks at beach; Lagoa da Conceição 3km away", pt: "Quiosques na praia; Lagoa da Conceição a 3km" },
        bestTime: { en: "Early morning (less crowd, cleaner conditions)", pt: "Bem cedinho (menos gente, mar mais limpo)" },
        bestSeason: { en: "Winter/autumn for biggest swells", pt: "Inverno/outono pras maiores ondulações" },
        proTip: {
            en: "Works best with South and East swells, offshore winds from northwest. Don't miss the dunes for sandboarding!",
            pt: "Funciona melhor com ondulação de Sul e Leste, vento terral de noroeste. Não perca as dunas pro sandboard!"
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["surf", "championship", "dunes", "sandboarding"],
        personality: "Wave Hunter",
        vibe: "surf", effort: "drive", priority: "waves", practical: "parking"
    },
    {
        name: "Praia Mole",
        nickname: { en: "The Scene Beach", pt: "A Praia do Agito" },
        emoji: "🎭",
        type: { en: "Surf & Social Hub", pt: "Point de Surf e Social" },
        region: "East",
        description: {
            en: "Strong, consistent waves to 3+ meters meet the island's vibrant social scene. The north end is the recognized LGBT+-friendly area, home to Bar do Deca (39+ years operating). Site of Gabriel Medina's first professional victory (2009).",
            pt: "Ondas fortes e consistentes de até 3+ metros encontram a cena social mais vibrante da ilha. A ponta norte é a área LGBT+ reconhecida, lar do Bar do Deca (39+ anos de funcionamento). Local da primeira vitória profissional de Gabriel Medina (2009)."
        },
        waves: 5, crowds: 5, infrastructure: 4,
        water: { en: "Rough surf, steep beach, dangerous currents", pt: "Surf pesado, praia íngreme, correntes perigosas" },
        bestFor: { en: "Surfers, young partygoers, LGBT+ travelers", pt: "Surfistas, jovens festeiros, viajantes LGBT+" },
        notIdealFor: { en: "Children, non-swimmers (one of most dangerous for drowning)", pt: "Crianças, quem não sabe nadar (uma das mais perigosas pra afogamento)" },
        parking: { en: "Paid and free options", pt: "Opções pagas e gratuitas" },
        food: { en: "Bar do Deca, açaí, seafood", pt: "Bar do Deca, açaí, frutos do mar" },
        bestTime: { en: "Morning for surf; afternoon for scene; sunset for parties", pt: "Manhã pro surf; tarde pro agito; pôr do sol pras festas" },
        bestSeason: { en: "Year-round; autumn-winter for biggest waves", pt: "O ano todo; outono-inverno pras maiores ondas" },
        proTip: {
            en: "The Gravatá Point at the south corner holds big waves (12+ feet) during major south swells—expert surfers only.",
            pt: "A Ponta do Gravatá no canto sul segura ondas grandes (4+ metros) durante grandes ondulações de sul—apenas surfistas experientes."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["surf", "LGBT+", "nightlife", "social", "scene"],
        personality: "Scene Surfer",
        vibe: "party", effort: "drive", priority: "waves", practical: "infrastructure"
    },
    {
        name: "Praia da Galheta",
        nickname: { en: "Naturist Beach", pt: "Praia de Naturismo" },
        emoji: "🌿",
        type: { en: "Free Spirit's Shore", pt: "Praia dos Espíritos Livres" },
        region: "East",
        description: {
            en: "A conservation area with clothing-optional status, attracting free spirits and nature lovers. Smaller than Mole but with excellent tubular waves. Protected from north/northeast winds at the left corner. Part of the Federação Brasileira de Naturismo.",
            pt: "Uma área de preservação com status de roupa opcional, atraindo espíritos livres e amantes da natureza. Menor que a Mole, mas com excelentes tubos. Protegida dos ventos norte/nordeste no canto esquerdo. Faz parte da Federação Brasileira de Naturismo."
        },
        waves: 4, crowds: 2.5, infrastructure: 1.5,
        water: { en: "Moderate surf, great tubes", pt: "Surf moderado, ótimos tubos" },
        bestFor: { en: "Naturists, LGBT+ travelers, surfers seeking uncrowded waves", pt: "Naturistas, viajantes LGBT+, surfistas buscando ondas vazias" },
        notIdealFor: { en: "Families, those uncomfortable with nudity", pt: "Famílias, quem não se sente confortável com nudez" },
        parking: { en: "None — park at Praia Mole", pt: "Nenhum — estacione na Praia Mole" },
        food: { en: "Limited beach kiosks; bring your own", pt: "Quiosques limitados; traga o seu" },
        bestTime: { en: "Morning for surf; all day for naturism", pt: "Manhã pro surf; o dia todo pro naturismo" },
        bestSeason: { en: "Aug-Nov for best surf (east swells = long lefts)", pt: "Ago-nov pro melhor surf (ondulação leste = esquerdas longas)" },
        proTip: {
            en: "Naturism status is legally contested—practice at your own discretion. Some harassment incidents reported—stay aware.",
            pt: "O status de naturismo é juridicamente contestado—pratique por sua conta e risco. Alguns incidentes de assédio foram reportados—fique atento."
        },
        access: { en: "10-20 min trail from Praia Mole", pt: "Trilha de 10-20 min da Praia Mole" },
        tags: ["naturist", "LGBT+", "surf", "nature", "freedom"],
        personality: "Free Spirit Explorer",
        vibe: "hidden", effort: "walk", priority: "nature", practical: "surprise"
    },
    {
        name: "Barra da Lagoa",
        nickname: { en: "Barra", pt: "Barra" },
        emoji: "🎓",
        type: { en: "Beginner's Paradise", pt: "Paraíso dos Iniciantes" },
        region: "East",
        description: {
            en: "Mellow waves perfect for learning to surf, with a full village of surf schools, hostels, and the Projeto Tamar sea turtle conservation center. The canal walk to the lighthouse is beautiful. Strong localism when conditions are good.",
            pt: "Ondas suaves perfeitas pra aprender a surfar, com uma vila completa de escolas de surf, hostels e o centro de conservação de tartarugas marinhas Projeto Tamar. A caminhada pelo canal até o farol é linda. Localismo forte quando as condições estão boas."
        },
        waves: 2.5, crowds: 3.5, infrastructure: 5,
        water: { en: "Gentle to moderate, more forgiving", pt: "Suave a moderado, mais tranquilo" },
        bestFor: { en: "Beginners, longboarders, families, backpackers", pt: "Iniciantes, longboarders, famílias, mochileiros" },
        notIdealFor: { en: "Advanced surfers (except rare big days)", pt: "Surfistas avançados (exceto dias raros de ondas grandes)" },
        parking: { en: "Street parking; difficult high season", pt: "Estacionamento na rua; difícil na alta temporada" },
        food: { en: "Excellent — traditional seafood, cafes", pt: "Excelente — frutos do mar tradicionais, cafés" },
        bestTime: { en: "Morning before wind", pt: "Manhã antes do vento" },
        bestSeason: { en: "Autumn/winter for consistency; year-round for beginners", pt: "Outono/inverno pra consistência; o ano todo pra iniciantes" },
        proTip: {
            en: "Visit Projeto Tamar (R$20) for sea turtle conservation. Stay at Sea Wolf Surf Hostel for authentic experience.",
            pt: "Visite o Projeto Tamar (R$20) pra conhecer a conservação das tartarugas marinhas. Fique no Sea Wolf Surf Hostel pra uma experiência autêntica."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["beginner", "surf school", "family", "turtles", "village"],
        personality: "Surf Apprentice",
        vibe: "surf", effort: "drive", priority: "waves", practical: "infrastructure"
    },
    {
        name: "Praia do Moçambique",
        nickname: { en: "Moçamba", pt: "Moçamba" },
        emoji: "🦅",
        type: { en: "Wild & Empty", pt: "Selvagem e Vazia" },
        region: "East",
        description: {
            en: "The least crowded major surf beach with 8.5km of zero facilities. Powerful, tubular waves with heavy shorebreak. Named after the white clam (moçambique/marisco branco) abundant here. Multiple peaks spread along the beach.",
            pt: "A praia de surf grande menos lotada, com 8,5km sem nenhuma infraestrutura. Ondas potentes e tubulares com shorebreak pesado. Nomeada pelo moçambique (marisco branco) abundante aqui. Vários picos espalhados pela praia."
        },
        waves: 5, crowds: 1.5, infrastructure: 1,
        water: { en: "Rough surf, cold, strong currents", pt: "Surf pesado, gelado, correntes fortes" },
        bestFor: { en: "Experienced surfers, nature lovers, campers", pt: "Surfistas experientes, amantes da natureza, campistas" },
        notIdealFor: { en: "Families, beginners, anyone needing facilities", pt: "Famílias, iniciantes, quem precisa de infraestrutura" },
        parking: { en: "Limited; Rio Vermelho Park access", pt: "Limitado; acesso pelo Parque Rio Vermelho" },
        food: { en: "None — bring everything", pt: "Nenhuma — traga tudo" },
        bestTime: { en: "Morning with offshore winds", pt: "Manhã com vento terral" },
        bestSeason: { en: "Winter/autumn for biggest swells", pt: "Inverno/outono pras maiores ondulações" },
        proTip: {
            en: "The Trilha Moçambique-Santinho crossing Morro das Aranhas is spectacular for hiking. Camping available at Rio Vermelho Park.",
            pt: "A Trilha Moçambique-Santinho cruzando o Morro das Aranhas é espetacular pra caminhada. Camping disponível no Parque Rio Vermelho."
        },
        access: { en: "Moderate to difficult; 4x4 recommended for some areas", pt: "Moderado a difícil; 4x4 recomendado pra algumas áreas" },
        tags: ["wild", "empty", "powerful surf", "nature", "camping"],
        personality: "Wilderness Surfer",
        vibe: "surf", effort: "walk", priority: "waves", practical: "surprise"
    },

    // SOUTH COAST
    {
        name: "Praia do Campeche",
        nickname: { en: "The Local Favorite", pt: "A Favorita dos Locais" },
        emoji: "🐋",
        type: { en: "Surf & Whale Watching", pt: "Surf e Observação de Baleias" },
        region: "South",
        description: {
            en: "One of the longest right-hand waves in Brazil when conditions align. The dunes area is protected Natural Heritage. Baleias-franca (right whales) visit July-August as nursery grounds—one of the best watching spots on the island.",
            pt: "Uma das direitas mais longas do Brasil quando as condições se alinham. A área de dunas é Patrimônio Natural protegido. Baleias-franca visitam em julho-agosto como área de reprodução—um dos melhores pontos de observação da ilha."
        },
        waves: 4, crowds: 4, infrastructure: 4,
        water: { en: "Rough surf, cold", pt: "Surf pesado, gelado" },
        bestFor: { en: "Surfers, kitesurfers, active people", pt: "Surfistas, kitesurfistas, pessoas ativas" },
        notIdealFor: { en: "Non-swimmers, those seeking calm waters", pt: "Quem não sabe nadar, quem busca águas calmas" },
        parking: { en: "Street and paid lots", pt: "Rua e estacionamentos pagos" },
        food: { en: "Excellent — Av. Pequeno Príncipe restaurants", pt: "Excelente — restaurantes da Av. Pequeno Príncipe" },
        bestTime: { en: "Morning for calmer winds", pt: "Manhã pra ventos mais calmos" },
        bestSeason: { en: "July-August for whale watching", pt: "Julho-agosto pra observação de baleias" },
        proTip: {
            en: "Best waves with south swell + west/north wind. Watch for whales from shore during winter months!",
            pt: "Melhores ondas com ondulação de sul + vento oeste/norte. Observe as baleias da praia durante os meses de inverno!"
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["surf", "whales", "local favorite", "long waves"],
        personality: "Wave Hunter",
        vibe: "surf", effort: "drive", priority: "waves", practical: "parking"
    },
    {
        name: "Praia do Novo Campeche",
        nickname: { en: "The Trendy Hidden Gem", pt: "O Tesouro Escondido da Moda" },
        emoji: "☕",
        type: { en: "Sophisticated Surf Village", pt: "Vila de Surf Sofisticada" },
        region: "South",
        description: {
            en: "A modern 'mini-bairro' with wide streets, excellent restaurants, organic markets—feels like a surf village. Preserved restinga vegetation gives rustic charm. Low-profile atmosphere attracts digital nomads and quality-of-life seekers.",
            pt: "Um 'mini-bairro' moderno com ruas largas, restaurantes excelentes, feiras orgânicas—parece uma vila de surf. A vegetação de restinga preservada dá um charme rústico. O clima discreto atrai nômades digitais e quem busca qualidade de vida."
        },
        waves: 3.5, crowds: 2.5, infrastructure: 2,
        water: { en: "Rough surf, cold", pt: "Surf pesado, gelado" },
        bestFor: { en: "Sophisticated travelers, surfers, families wanting quiet", pt: "Viajantes sofisticados, surfistas, famílias que querem sossego" },
        notIdealFor: { en: "Those wanting beach kiosks, nightlife", pt: "Quem quer quiosques na praia, vida noturna" },
        parking: { en: "Good — organized neighborhood", pt: "Bom — bairro organizado" },
        food: { en: "Excellent neighborhood restaurants, food trucks", pt: "Excelentes restaurantes de bairro, food trucks" },
        bestTime: { en: "Morning for surf, sunset for walks", pt: "Manhã pro surf, pôr do sol pra caminhadas" },
        bestSeason: { en: "Year-round; best waves winter/autumn", pt: "O ano todo; melhores ondas no inverno/outono" },
        proTip: {
            en: "Lagoa Pequena nearby offers hidden swimming trails. Check out the organic markets and artisan food trucks.",
            pt: "A Lagoa Pequena por perto oferece trilhas escondidas pra nadar. Confira as feiras orgânicas e food trucks artesanais."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["trendy", "digital nomads", "quiet", "quality", "organic"],
        personality: "Quality Seeker",
        vibe: "relaxation", effort: "drive", priority: "nature", practical: "parking"
    },
    {
        name: "Praia da Armação",
        nickname: { en: "The Gateway", pt: "O Portal" },
        emoji: "⛪",
        type: { en: "Historic Base Camp", pt: "Acampamento Base Histórico" },
        region: "South",
        description: {
            en: "Main departure point for boats to Ilha do Campeche (the 'Brazilian Caribbean'). Historic 1772 Santa Ana church built during whaling era. Gateway to Matadeiro and Lagoinha do Leste trails. Walk to Ilha das Campanhas for beautiful views.",
            pt: "Principal ponto de partida de barcos pra Ilha do Campeche (o 'Caribe Brasileiro'). Igreja histórica de Santa Ana de 1772, construída na era baleeira. Portal pras trilhas do Matadeiro e Lagoinha do Leste. Caminhe até a Ilha das Campanhas pra vistas lindas."
        },
        waves: 3, crowds: 3, infrastructure: 4,
        water: { en: "Mixed — calm bay (south), moderate surf (north)", pt: "Misto — baía calma (sul), surf moderado (norte)" },
        bestFor: { en: "Families, history lovers, base for south exploration", pt: "Famílias, amantes de história, base pra explorar o sul" },
        notIdealFor: { en: "Those seeking isolated beaches", pt: "Quem busca praias isoladas" },
        parking: { en: "Free street and paid lots", pt: "Rua gratuita e estacionamentos pagos" },
        food: { en: "Traditional seafood restaurants", pt: "Restaurantes tradicionais de frutos do mar" },
        bestTime: { en: "All day", pt: "O dia todo" },
        bestSeason: { en: "Year-round; winter for whale watching", pt: "O ano todo; inverno pra observação de baleias" },
        proTip: {
            en: "Book boat trips to Ilha do Campeche early in summer. The church and Ilha das Campanhas are worth visiting.",
            pt: "Reserve os passeios de barco pra Ilha do Campeche cedo no verão. A igreja e a Ilha das Campanhas valem a visita."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["historic", "gateway", "island trips", "family", "versatile"],
        personality: "Explorer Base Camper",
        vibe: "family", effort: "drive", priority: "restaurants", practical: "infrastructure"
    },
    {
        name: "Praia do Matadeiro",
        nickname: { en: "Slaughterhouse Beach", pt: "Praia do Matadouro" },
        emoji: "🌊",
        type: { en: "Surfer's Refuge", pt: "Refúgio do Surfista" },
        region: "South",
        description: {
            en: "Only south island surf option when south winds blow (protected position). Cross the river from Armação early morning when tide is lowest. 900 meters of preserved beach with native vegetation. Starting point for the long trail to Lagoinha do Leste.",
            pt: "Única opção de surf no sul da ilha quando sopra vento sul (posição protegida). Atravesse o rio da Armação bem cedo quando a maré está mais baixa. 900 metros de praia preservada com vegetação nativa. Ponto de partida pra longa trilha até Lagoinha do Leste."
        },
        waves: 4, crowds: 2, infrastructure: 2,
        water: { en: "Rough, crystal clear, cold", pt: "Agitado, cristalino, gelado" },
        bestFor: { en: "Surfers, nature lovers, couples", pt: "Surfistas, amantes da natureza, casais" },
        notIdealFor: { en: "Families with small children, mobility issues", pt: "Famílias com crianças pequenas, pessoas com mobilidade reduzida" },
        parking: { en: "None — park in Armação", pt: "Nenhum — estacione na Armação" },
        food: { en: "One bar; bring snacks", pt: "Um bar; traga lanches" },
        bestTime: { en: "Morning for surf", pt: "Manhã pro surf" },
        bestSeason: { en: "Best with east swell, south winds", pt: "Melhor com ondulação de leste, ventos sul" },
        proTip: {
            en: "Cross the river early morning at low tide. This is the gateway to the epic Lagoinha do Leste trail (2-3 hours).",
            pt: "Atravesse o rio bem cedo na maré baixa. Esse é o portal pra épica trilha da Lagoinha do Leste (2-3 horas)."
        },
        access: { en: "10-20 min walk — cross river from Armação", pt: "Caminhada de 10-20 min — atravesse o rio da Armação" },
        tags: ["surf", "protected", "nature", "trail gateway"],
        personality: "Trail Surfer",
        vibe: "surf", effort: "walk", priority: "waves", practical: "surprise"
    },
    {
        name: "Pântano do Sul",
        nickname: { en: "Aldeia dos Pescadores", pt: "Aldeia dos Pescadores" },
        emoji: "🦐",
        type: { en: "Seafood Paradise", pt: "Paraíso dos Frutos do Mar" },
        region: "South",
        description: {
            en: "Largest artisanal fishing center on the island. Bar do Arante is iconic—walls covered with notes from visitors, fresh fish never frozen. Archaeological site with sambaqui (shell mounds) from 4,500 years ago. Boat departures for Lagoinha do Leste.",
            pt: "Maior centro de pesca artesanal da ilha. O Bar do Arante é icônico—paredes cobertas de bilhetes de visitantes, peixe fresco nunca congelado. Sítio arqueológico com sambaqui de 4.500 anos atrás. Saída de barcos pra Lagoinha do Leste."
        },
        waves: 2, crowds: 3, infrastructure: 4,
        water: { en: "Calm bay, can have undertow in SW section", pt: "Baía calma, pode ter correnteza na seção SW" },
        bestFor: { en: "Families, foodies, authentic fishing culture", pt: "Famílias, foodies, cultura de pesca autêntica" },
        notIdealFor: { en: "Surfers, nightlife seekers", pt: "Surfistas, quem busca vida noturna" },
        parking: { en: "Limited — arrive early; paid available", pt: "Limitado — chegue cedo; pago disponível" },
        food: { en: "EXCELLENT — legendary Bar do Arante", pt: "EXCELENTE — lendário Bar do Arante" },
        bestTime: { en: "Lunch for seafood", pt: "Almoço pros frutos do mar" },
        bestSeason: { en: "May-July for tainha fishing season", pt: "Maio-julho pra temporada de pesca da tainha" },
        proTip: {
            en: "Must try: sequência de camarão, tainha grelhada, caldeirada at Bar do Arante. Book boat to Lagoinha do Leste here.",
            pt: "Tem que provar: sequência de camarão, tainha grelhada, caldeirada no Bar do Arante. Reserve o barco pra Lagoinha do Leste aqui."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["seafood", "fishing village", "authentic", "family", "gastronomy"],
        personality: "Culinary Explorer",
        vibe: "family", effort: "drive", priority: "restaurants", practical: "infrastructure"
    },
    {
        name: "Ribeirão da Ilha",
        nickname: { en: "Oyster Capital", pt: "Capital da Ostra" },
        emoji: "🦪",
        type: { en: "Gastronomic Heritage", pt: "Patrimônio Gastronômico" },
        region: "South",
        description: {
            en: "Brazil's largest oyster producer with 18th-century Azorean architecture perfectly preserved. Igreja Nossa Senhora da Lapa (1806) built with whale oil and stone. Visit oyster farms for unique experience. Famous sunset views over the bay.",
            pt: "Maior produtor de ostras do Brasil com arquitetura açoriana do século XVIII perfeitamente preservada. Igreja Nossa Senhora da Lapa (1806) construída com óleo de baleia e pedra. Visite as fazendas de ostras pra uma experiência única. Famosas vistas do pôr do sol sobre a baía."
        },
        waves: 1, crowds: 2, infrastructure: 3,
        water: { en: "Calm, shallow bay", pt: "Baía calma e rasa" },
        bestFor: { en: "Foodies, history lovers, sunset watching", pt: "Foodies, amantes de história, observadores de pôr do sol" },
        notIdealFor: { en: "Beach swimmers (muddy bottom, narrow sand)", pt: "Banhistas (fundo lamacento, faixa de areia estreita)" },
        parking: { en: "Available along road", pt: "Disponível ao longo da estrada" },
        food: { en: "EXCEPTIONAL — Ostradamus, Rancho Açoriano, Porto do Contrato", pt: "EXCEPCIONAL — Ostradamus, Rancho Açoriano, Porto do Contrato" },
        bestTime: { en: "Sunset (west-facing), lunch for oysters", pt: "Pôr do sol (voltado pro oeste), almoço pras ostras" },
        bestSeason: { en: "October for Oyster Festival", pt: "Outubro pra Festa da Ostra" },
        proTip: {
            en: "Try fresh oysters at the source! Visit the oyster farms and combine with a trip to Naufragados beach.",
            pt: "Experimente ostras frescas na fonte! Visite as fazendas de ostras e combine com uma ida à praia dos Naufragados."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["oysters", "gastronomy", "historic", "sunset", "Azorean"],
        personality: "Gastronomy Connoisseur",
        vibe: "relaxation", effort: "drive", priority: "restaurants", practical: "infrastructure"
    },

    // NORTH COAST
    {
        name: "Jurerê Internacional",
        nickname: { en: "Miami Brasileira", pt: "Miami Brasileira" },
        emoji: "🥂",
        type: { en: "Luxury Beach Club", pt: "Beach Club de Luxo" },
        region: "North",
        description: {
            en: "Recognized as 'Best Urban Beach in Ibero-America' (2025). Beach clubs with loungers and full service. Calm, warm, emerald-green waters. The New York Times called it 'the place to be' in 2009. Peak scene during New Year's and Carnival.",
            pt: "Reconhecida como 'Melhor Praia Urbana da Ibero-América' (2025). Beach clubs com espreguiçadeiras e serviço completo. Águas calmas, mornas e verde-esmeralda. O New York Times chamou de 'o lugar pra estar' em 2009. Pico do agito no Ano Novo e Carnaval."
        },
        waves: 1, crowds: 5, infrastructure: 5,
        water: { en: "Calm, warm, emerald-green", pt: "Calma, morna, verde-esmeralda" },
        bestFor: { en: "Luxury travelers, party-goers, celebrities", pt: "Viajantes de luxo, festeiros, celebridades" },
        notIdealFor: { en: "Budget travelers, those avoiding crowds", pt: "Viajantes econômicos, quem evita multidões" },
        parking: { en: "Paid at beach clubs and shopping", pt: "Pago nos beach clubs e shopping" },
        food: { en: "High-end restaurants, Café de la Musique, Parador 12", pt: "Restaurantes sofisticados, Café de la Musique, Parador 12" },
        bestTime: { en: "All day; sunset for drinks; night for parties", pt: "O dia todo; pôr do sol pros drinks; noite pras festas" },
        bestSeason: { en: "Summer; New Year's Eve and Carnival especially", pt: "Verão; especialmente Réveillon e Carnaval" },
        proTip: {
            en: "Beach clubs charge entrance but include loungers and full service. Book ahead for major holiday weekends.",
            pt: "Os beach clubs cobram entrada, mas incluem espreguiçadeiras e serviço completo. Reserve com antecedência pros feriados."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["luxury", "party", "beach clubs", "celebrities", "nightlife"],
        personality: "Beach Scene Star",
        vibe: "party", effort: "drive", priority: "restaurants", practical: "infrastructure"
    },
    {
        name: "Jurerê Tradicional",
        nickname: { en: "Jurerê Velha", pt: "Jurerê Velha" },
        emoji: "🏖️",
        type: { en: "Local's Alternative", pt: "Alternativa dos Locais" },
        region: "North",
        description: {
            en: "Same gorgeous calm, warm, crystal-clear water as Internacional but at a fraction of the price. Walk through the alamedas (public paths) designed by Oscar Niemeyer. More affordable with authentic local culture.",
            pt: "Mesma água linda, calma, morna e cristalina da Internacional, mas por uma fração do preço. Caminhe pelas alamedas projetadas por Oscar Niemeyer. Mais acessível com cultura local autêntica."
        },
        waves: 1, crowds: 3, infrastructure: 4,
        water: { en: "Calm, warm, crystal-clear green", pt: "Calma, morna, verde cristalina" },
        bestFor: { en: "Families, budget travelers, local culture", pt: "Famílias, viajantes econômicos, cultura local" },
        notIdealFor: { en: "Surfers, party-seekers", pt: "Surfistas, quem busca festas" },
        parking: { en: "Moderate — alameda parking", pt: "Moderado — estacionamento nas alamedas" },
        food: { en: "Local seafood spots", pt: "Restaurantes locais de frutos do mar" },
        bestTime: { en: "All day; beautiful sunset", pt: "O dia todo; pôr do sol lindo" },
        bestSeason: { en: "Year-round; summer peak", pt: "O ano todo; pico no verão" },
        proTip: {
            en: "Walk through Oscar Niemeyer's alamedas design. Same beach quality as Internacional without the premium prices.",
            pt: "Caminhe pelas alamedas projetadas por Oscar Niemeyer. Mesma qualidade de praia da Internacional sem os preços premium."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["family", "budget-friendly", "calm", "local", "Niemeyer"],
        personality: "Smart Beach Lover",
        vibe: "family", effort: "drive", priority: "calm", practical: "parking"
    },
    {
        name: "Praia Brava",
        nickname: { en: "Fierce Beach", pt: "Praia Feroz" },
        emoji: "💪",
        type: { en: "North's Surf Spot", pt: "Point de Surf do Norte" },
        region: "North",
        description: {
            en: "One of the best surf spots in the north with powerful waves to 2.5m. Stop at the Mirante da Praia Brava for spectacular photos before descending. Irregular sandy bottom creates powerful breaks. Not for beginners.",
            pt: "Um dos melhores picos de surf do norte com ondas potentes de até 2,5m. Pare no Mirante da Praia Brava pra fotos espetaculares antes de descer. Fundo de areia irregular cria quebras potentes. Não é pra iniciantes."
        },
        waves: 4.5, crowds: 4, infrastructure: 4,
        water: { en: "Rough surf, strong currents, to 2.5m", pt: "Surf pesado, correntes fortes, até 2,5m" },
        bestFor: { en: "Surfers, bodyboarders, young adults", pt: "Surfistas, bodyboarders, jovens adultos" },
        notIdealFor: { en: "Young children, non-swimmers", pt: "Crianças pequenas, quem não sabe nadar" },
        parking: { en: "Free lots — arrive before 9am in summer", pt: "Estacionamentos gratuitos — chegue antes das 9h no verão" },
        food: { en: "Beach bars, upscale restaurants", pt: "Bares de praia, restaurantes sofisticados" },
        bestTime: { en: "Morning for surf; sunset from mirante", pt: "Manhã pro surf; pôr do sol do mirante" },
        bestSeason: { en: "Year-round; east/southeast swells with west winds", pt: "O ano todo; ondulação leste/sudeste com ventos oeste" },
        proTip: {
            en: "The mirante (lookout) photo op is mandatory! Dangerous rip currents—respect the ocean here.",
            pt: "A foto no mirante é obrigatória! Correntes de retorno perigosas—respeite o mar aqui."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["surf", "powerful", "mirante", "north surf"],
        personality: "Power Wave Rider",
        vibe: "surf", effort: "drive", priority: "waves", practical: "parking"
    },
    {
        name: "Praia do Santinho",
        nickname: { en: "Archaeology Beach", pt: "Praia da Arqueologia" },
        emoji: "🏛️",
        type: { en: "Surf & History", pt: "Surf e História" },
        region: "North",
        description: {
            en: "Best surf waves in north region combined with the largest open-air archaeological site on the island. Rock art (Inscrições Rupestres) at Costão do Santinho dates back 4,000-5,000 years. Hosted WQS surf competitions.",
            pt: "Melhores ondas de surf da região norte combinadas com o maior sítio arqueológico a céu aberto da ilha. Arte rupestre (Inscrições Rupestres) no Costão do Santinho datam de 4.000-5.000 anos. Já sediou competições WQS de surf."
        },
        waves: 4, crowds: 3, infrastructure: 3.5,
        water: { en: "Strong waves, dangerous in rough conditions", pt: "Ondas fortes, perigoso em condições agitadas" },
        bestFor: { en: "Surfers, archaeology enthusiasts, hikers", pt: "Surfistas, entusiastas de arqueologia, trilheiros" },
        notIdealFor: { en: "Families with small children in water", pt: "Famílias com crianças pequenas na água" },
        parking: { en: "Available near beach and resort", pt: "Disponível perto da praia e resort" },
        food: { en: "Resort dining, kiosks", pt: "Restaurantes do resort, quiosques" },
        bestTime: { en: "Morning for surf; afternoon for rock art", pt: "Manhã pro surf; tarde pra arte rupestre" },
        bestSeason: { en: "Year-round", pt: "O ano todo" },
        proTip: {
            en: "Don't miss the Inscrições Rupestres (rock art). Trilha do Morro das Aranhas connects to Moçambique with spectacular views.",
            pt: "Não perca as Inscrições Rupestres. A Trilha do Morro das Aranhas conecta ao Moçambique com vistas espetaculares."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["surf", "archaeology", "rock art", "history", "hiking"],
        personality: "Culture Surfer",
        vibe: "surf", effort: "drive", priority: "waves", practical: "parking"
    },
    {
        name: "Lagoinha do Norte",
        nickname: { en: "Peaceful Escape", pt: "Refúgio de Paz" },
        emoji: "🧘",
        type: { en: "Tranquil Haven", pt: "Refúgio Tranquilo" },
        region: "North",
        description: {
            en: "Quiet even in summer, this calm estuary where river meets sea offers perfect conditions for families seeking tranquility and stress recovery. The Trilha do Morro do Rapa starts here—connecting to Praia Brava with stunning views.",
            pt: "Calma até no verão, esse estuário tranquilo onde o rio encontra o mar oferece condições perfeitas pra famílias buscando tranquilidade e recuperação do estresse. A Trilha do Morro do Rapa começa aqui—conectando à Praia Brava com vistas deslumbrantes."
        },
        waves: 1, crowds: 1.5, infrastructure: 2,
        water: { en: "Calm, warm, river-meets-sea", pt: "Calma, morna, rio encontra o mar" },
        bestFor: { en: "Families seeking tranquility, stress recovery", pt: "Famílias buscando tranquilidade, recuperação do estresse" },
        notIdealFor: { en: "Nightlife, shopping", pt: "Vida noturna, compras" },
        parking: { en: "Limited — arrive early weekends", pt: "Limitado — chegue cedo nos fins de semana" },
        food: { en: "Simple local restaurants", pt: "Restaurantes locais simples" },
        bestTime: { en: "All day; quiet mornings", pt: "O dia todo; manhãs tranquilas" },
        bestSeason: { en: "Year-round; excellent off-season", pt: "O ano todo; excelente na baixa temporada" },
        proTip: {
            en: "The Trilha do Morro do Rapa to Praia Brava (2.8km, 1.5hrs) offers stunning panoramic views.",
            pt: "A Trilha do Morro do Rapa até a Praia Brava (2,8km, 1h30) oferece vistas panorâmicas deslumbrantes."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["peaceful", "family", "calm", "estuary", "hiking"],
        personality: "Tranquility Seeker",
        vibe: "relaxation", effort: "drive", priority: "calm", practical: "surprise"
    },
    {
        name: "Praia do Forte",
        nickname: { en: "Hidden Northern Gem", pt: "Joia Escondida do Norte" },
        emoji: "🏰",
        type: { en: "Historic Hideaway", pt: "Refúgio Histórico" },
        region: "North",
        description: {
            en: "Very quiet with historic Fortaleza de São José da Ponta Grossa (built 1739-1745). Watch local oyster farming boats—this is where famous Floripa oysters originate. Perfect for history buffs seeking solitude.",
            pt: "Muito tranquila com a histórica Fortaleza de São José da Ponta Grossa (construída 1739-1745). Observe os barcos de cultivo de ostras—aqui é onde as famosas ostras de Floripa se originam. Perfeita pra amantes de história buscando solidão."
        },
        waves: 1, crowds: 1.5, infrastructure: 2,
        water: { en: "Calm, warm", pt: "Calma, morna" },
        bestFor: { en: "History buffs, solitude seekers", pt: "Amantes de história, quem busca solidão" },
        notIdealFor: { en: "Those wanting amenities", pt: "Quem quer comodidades" },
        parking: { en: "Limited — arrive early summer", pt: "Limitado — chegue cedo no verão" },
        food: { en: "Few seafood restaurants", pt: "Poucos restaurantes de frutos do mar" },
        bestTime: { en: "Morning; combine with fort visit", pt: "Manhã; combine com visita ao forte" },
        bestSeason: { en: "Year-round", pt: "O ano todo" },
        proTip: {
            en: "Visit Fortaleza de São José da Ponta Grossa (R$8 entry). The oyster farming boats are fascinating to watch.",
            pt: "Visite a Fortaleza de São José da Ponta Grossa (entrada R$8). Os barcos de cultivo de ostras são fascinantes de observar."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["historic", "fort", "quiet", "oysters", "solitude"],
        personality: "History Explorer",
        vibe: "hidden", effort: "drive", priority: "nature", practical: "surprise"
    },

    // LAGOON & CALM WATERS
    {
        name: "Lagoa da Conceição",
        nickname: { en: "Avenida das Rendeiras", pt: "Avenida das Rendeiras" },
        emoji: "🚣",
        type: { en: "Water Sports Hub", pt: "Centro de Esportes Aquáticos" },
        region: "Lagoon",
        description: {
            en: "Brackish lagoon reaching 27°C in summer, perfect for SUP and kayak. Excellent restaurants line the shore. Rent SUP at EasySUP (R$30/half hour). Best route: downwind across lagoon to Costa da Lagoa restaurants.",
            pt: "Lagoa salobra que chega a 27°C no verão, perfeita pra SUP e caiaque. Excelentes restaurantes ao longo da margem. Alugue SUP na EasySUP (R$30/meia hora). Melhor rota: a favor do vento atravessando a lagoa até os restaurantes da Costa da Lagoa."
        },
        waves: 1, crowds: 3, infrastructure: 4,
        water: { en: "Brackish lagoon, warm (27°C summer)", pt: "Lagoa salobra, morna (27°C no verão)" },
        bestFor: { en: "Families, SUP, kayak, couples dining", pt: "Famílias, SUP, caiaque, casais jantando" },
        notIdealFor: { en: "Surfers, those expecting beach sand", pt: "Surfistas, quem espera areia de praia" },
        parking: { en: "Difficult summer; paid lots R$6/hour", pt: "Difícil no verão; estacionamentos pagos R$6/hora" },
        food: { en: "Excellent — Canto do Chico, many seafood spots", pt: "Excelente — Canto do Chico, muitos restaurantes de frutos do mar" },
        bestTime: { en: "Late afternoon for sunset", pt: "Fim de tarde pro pôr do sol" },
        bestSeason: { en: "Year-round", pt: "O ano todo" },
        proTip: {
            en: "Check balneability reports before swimming. Best SUP route: paddle to Costa da Lagoa for lunch!",
            pt: "Cheque os relatórios de balneabilidade antes de nadar. Melhor rota de SUP: reme até a Costa da Lagoa pro almoço!"
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["SUP", "kayak", "dining", "sunset", "water sports"],
        personality: "Paddle Explorer",
        vibe: "relaxation", effort: "drive", priority: "calm", practical: "infrastructure"
    },
    {
        name: "Lagoa do Peri",
        nickname: { en: "Freshwater Heaven", pt: "Paraíso de Água Doce" },
        emoji: "💧",
        type: { en: "Blue Flag Paradise", pt: "Paraíso Bandeira Azul" },
        region: "South",
        description: {
            en: "The largest freshwater lake on the Santa Catarina coast, Blue Flag certified as among Brazil's cleanest swimming areas. Best SUP/kayak spot for beginners. Take Trilha da Gurita to beautiful Cachoeira da Gurita waterfall.",
            pt: "A maior lagoa de água doce da costa catarinense, certificada Bandeira Azul como uma das áreas de banho mais limpas do Brasil. Melhor lugar de SUP/caiaque pra iniciantes. Faça a Trilha da Gurita até a linda Cachoeira da Gurita."
        },
        waves: 1, crowds: 2, infrastructure: 2,
        water: { en: "FRESHWATER — Blue Flag certified", pt: "ÁGUA DOCE — certificada Bandeira Azul" },
        bestFor: { en: "Families with children, picnics, kayak", pt: "Famílias com crianças, piqueniques, caiaque" },
        notIdealFor: { en: "Ocean lovers", pt: "Amantes do oceano" },
        parking: { en: "FREE large lot", pt: "Estacionamento GRATUITO grande" },
        food: { en: "Peri Restaurante; bring picnic", pt: "Peri Restaurante; traga piquenique" },
        bestTime: { en: "Morning for birds; all day", pt: "Manhã pros pássaros; o dia todo" },
        bestSeason: { en: "Year-round", pt: "O ano todo" },
        proTip: {
            en: "Visit Projeto Lontra (Otter Project)—book ahead at (48) 3237-5071. The Trilha da Gurita waterfall is beautiful.",
            pt: "Visite o Projeto Lontra—reserve com antecedência pelo (48) 3237-5071. A cachoeira da Trilha da Gurita é linda."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["freshwater", "family", "Blue Flag", "clean", "kayak"],
        personality: "Nature Family",
        vibe: "family", effort: "drive", priority: "calm", practical: "parking"
    },
    {
        name: "Santo Antônio de Lisboa",
        nickname: { en: "Sunset Capital", pt: "Capital do Pôr do Sol" },
        emoji: "🌅",
        type: { en: "Golden Hour Destination", pt: "Destino da Hora Dourada" },
        region: "North Bay",
        description: {
            en: "Famous sunsets over the bay with the 'Rota Gastronômica do Sol Poente' (Setting Sun Gastronomic Route). Visit Feira das Alfaias artisan fair on weekends. Igreja Nossa Senhora das Necessidades (1750) and the 1860 functioning flour mill.",
            pt: "Famosos pôr do sol sobre a baía com a 'Rota Gastronômica do Sol Poente'. Visite a Feira das Alfaias nos fins de semana. Igreja Nossa Senhora das Necessidades (1750) e o moinho de farinha de 1860 em funcionamento."
        },
        waves: 1, crowds: 2, infrastructure: 4,
        water: { en: "Calm bay (not ideal for swimming)", pt: "Baía calma (não ideal pra banho)" },
        bestFor: { en: "Sunset watching, gastronomy, couples", pt: "Observar pôr do sol, gastronomia, casais" },
        notIdealFor: { en: "Beach swimming", pt: "Banho de praia" },
        parking: { en: "Street and restaurant lots", pt: "Rua e estacionamentos de restaurantes" },
        food: { en: "EXCEPTIONAL — Rota Gastronômica do Sol Poente", pt: "EXCEPCIONAL — Rota Gastronômica do Sol Poente" },
        bestTime: { en: "4-7pm — FAMOUS sunsets", pt: "16h-19h — pôr do sol FAMOSO" },
        bestSeason: { en: "Year-round", pt: "O ano todo" },
        proTip: {
            en: "Visit Casarão Engenho dos Andrade (1860 functioning flour mill)—call (48) 9615-4080 for reservation.",
            pt: "Visite o Casarão Engenho dos Andrade (moinho de farinha de 1860 em funcionamento)—ligue (48) 9615-4080 pra reserva."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["sunset", "gastronomy", "romantic", "historic", "Azorean"],
        personality: "Sunset Chaser",
        vibe: "relaxation", effort: "drive", priority: "sunset", practical: "infrastructure"
    },
    {
        name: "Sambaqui",
        nickname: { en: "The Authentic Village", pt: "A Vila Autêntica" },
        emoji: "🎸",
        type: { en: "Local Music Scene", pt: "Cena Musical Local" },
        region: "North Bay",
        description: {
            en: "Sunday nights, locals gather for live Brazilian roots music at a fisherman's house on the beach—tourists rarely find this. Multiple beach sections to explore. Archaeological significance from prehistoric shell mounds (sambaqui).",
            pt: "Nas noites de domingo, os locais se reúnem pra música ao vivo de raízes brasileiras na casa de um pescador na praia—turistas raramente encontram isso. Várias seções de praia pra explorar. Significado arqueológico dos sambaquis (montes de conchas pré-históricos)."
        },
        waves: 1, crowds: 2, infrastructure: 3,
        water: { en: "Calm bay", pt: "Baía calma" },
        bestFor: { en: "Families, sunset, authentic experience", pt: "Famílias, pôr do sol, experiência autêntica" },
        notIdealFor: { en: "Pristine sand beach seekers", pt: "Quem busca praia de areia impecável" },
        parking: { en: "Free along road", pt: "Gratuito ao longo da estrada" },
        food: { en: "Botequim das Flores (2023 champion), Posto Alfandegário", pt: "Botequim das Flores (campeão 2023), Posto Alfandegário" },
        bestTime: { en: "Late afternoon; Sunday for live music", pt: "Fim de tarde; domingo pra música ao vivo" },
        bestSeason: { en: "Year-round", pt: "O ano todo" },
        proTip: {
            en: "Sunday nights: find the fisherman's house with live Brazilian roots music. Locals only—magical experience.",
            pt: "Noites de domingo: encontre a casa do pescador com música ao vivo de raízes brasileiras. Só locais—experiência mágica."
        },
        access: { en: "Drive right up", pt: "Acesso direto de carro" },
        tags: ["authentic", "music", "local", "sunset", "archaeology"],
        personality: "Culture Seeker",
        vibe: "relaxation", effort: "drive", priority: "sunset", practical: "surprise"
    }
];

// Quiz questions for beach finder
const beachQuestions = [
    {
        label: { en: "The Call", pt: "O Chamado" },
        text: { en: "What's calling you to the shore?", pt: "O que está te chamando pro litoral?" },
        options: [
            { value: "surf", icon: "🏄", title: { en: "Waves & Adventure", pt: "Ondas e Aventura" }, desc: { en: "I came to ride", pt: "Vim pra surfar" } },
            { value: "relaxation", icon: "🧘", title: { en: "Peace & Restoration", pt: "Paz e Restauração" }, desc: { en: "Reset my soul", pt: "Resetar minha alma" } },
            { value: "family", icon: "👨‍👩‍👧", title: { en: "Family Time", pt: "Tempo em Família" }, desc: { en: "Making memories together", pt: "Criando memórias juntos" } },
            { value: "hidden", icon: "🗺️", title: { en: "Secret Places", pt: "Lugares Secretos" }, desc: { en: "Off the beaten path", pt: "Fora do caminho comum" } },
            { value: "party", icon: "🎉", title: { en: "Social Scene", pt: "Cena Social" }, desc: { en: "Where the people are", pt: "Onde o povo está" } }
        ]
    },
    {
        label: { en: "The Journey", pt: "A Jornada" },
        text: { en: "How much effort to reach paradise?", pt: "Quanto esforço pra chegar no paraíso?" },
        options: [
            { value: "drive", icon: "🚗", title: { en: "Drive Right Up", pt: "Chegar de Carro" }, desc: { en: "Beach should be easy", pt: "Praia tem que ser fácil" } },
            { value: "walk", icon: "🚶", title: { en: "Short Walk", pt: "Caminhada Curta" }, desc: { en: "A little effort, big reward", pt: "Pouco esforço, grande recompensa" } },
            { value: "hike", icon: "🥾", title: { en: "Trail Adventure", pt: "Aventura de Trilha" }, desc: { en: "The journey IS the destination", pt: "A jornada É o destino" } }
        ]
    },
    {
        label: { en: "The Dream", pt: "O Sonho" },
        text: { en: "What matters most when you arrive?", pt: "O que mais importa quando você chega?" },
        options: [
            { value: "waves", icon: "🌊", title: { en: "Epic Waves", pt: "Ondas Épicas" }, desc: { en: "Surfable swells", pt: "Ondulações surfáveis" } },
            { value: "calm", icon: "🪷", title: { en: "Calm Waters", pt: "Águas Calmas" }, desc: { en: "Peaceful swimming", pt: "Banho tranquilo" } },
            { value: "restaurants", icon: "🍽️", title: { en: "Food & Drinks", pt: "Comida e Bebida" }, desc: { en: "Beachside bites", pt: "Petiscos na praia" } },
            { value: "nature", icon: "🌴", title: { en: "Pristine Nature", pt: "Natureza Intocada" }, desc: { en: "Untouched beauty", pt: "Beleza preservada" } },
            { value: "sunset", icon: "🌅", title: { en: "Sunset Views", pt: "Vistas do Pôr do Sol" }, desc: { en: "Golden hour magic", pt: "Magia da hora dourada" } }
        ]
    },
    {
        label: { en: "The Reality", pt: "A Realidade" },
        text: { en: "One more thing that would make it perfect?", pt: "Mais uma coisa que deixaria perfeito?" },
        options: [
            { value: "infrastructure", icon: "🏪", title: { en: "Good Amenities", pt: "Boa Infraestrutura" }, desc: { en: "Restrooms, showers, rentals", pt: "Banheiros, chuveiros, aluguéis" } },
            { value: "parking", icon: "🅿️", title: { en: "Easy Parking", pt: "Estacionamento Fácil" }, desc: { en: "No stress arrival", pt: "Chegada sem estresse" } },
            { value: "dog", icon: "🐕", title: { en: "Dog-Friendly", pt: "Aceita Cachorros" }, desc: { en: "Bringing my buddy", pt: "Trazendo meu parceiro" } },
            { value: "surprise", icon: "🎲", title: { en: "Surprise Me", pt: "Me Surpreenda" }, desc: { en: "I'm feeling adventurous", pt: "Tô me sentindo aventureiro" } }
        ]
    }
];

// Helper function to calculate best beach match
function calculateBeachMatch(answers) {
    let bestMatch = beaches[0];
    let bestScore = 0;

    beaches.forEach(beach => {
        let score = 0;
        if (beach.vibe === answers.vibe) score += 5;
        if (beach.effort === answers.effort) score += 3;
        if (beach.priority === answers.priority) score += 4;
        if (beach.practical === answers.practical) score += 2;

        // Tag bonuses
        Object.values(answers).forEach(answer => {
            if (beach.tags.some(tag => tag.toLowerCase().includes(answer.toLowerCase()))) {
                score += 1;
            }
        });

        // Special matching logic
        if (answers.priority === 'calm' && beach.waves <= 2) score += 2;
        if (answers.priority === 'waves' && beach.waves >= 4) score += 2;
        if (answers.practical === 'infrastructure' && beach.infrastructure >= 4) score += 2;

        if (score > bestScore) {
            bestScore = score;
            bestMatch = beach;
        }
    });

    return bestMatch;
}
