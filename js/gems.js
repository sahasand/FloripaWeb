// Hidden Gems Data for Florianópolis
const gems = [
    // ===== SECRET BEACHES (5) =====
    {
        name: "Praia da Gravatá",
        category: { en: "Secret Beach", pt: "Praia Secreta" },
        emoji: "🏖️",
        nickname: { en: "The Hidden Cove", pt: "A Enseada Escondida" },
        description: {
            en: "A tiny secluded beach wedged between Mole and Galheta, invisible from the road. Only accessible by a steep trail or swimming around the rocks.",
            pt: "Uma praia pequena e isolada entre Mole e Galheta, invisível da estrada. Só dá pra chegar por uma trilha íngreme ou nadando contornando as pedras."
        },
        theSecret: {
            en: "Look for the unmarked trail 200m before Praia Mole parking. The descent is steep but short—fewer than 50 people know this beach exists.",
            pt: "Procure a trilha sem sinalização 200m antes do estacionamento da Praia Mole. A descida é íngreme mas curta—menos de 50 pessoas sabem que essa praia existe."
        },
        effort: { en: "Moderate", pt: "Moderado" },
        effortDetail: { en: "15-minute steep trail or swim from Mole", pt: "Trilha íngreme de 15 minutos ou nadar da Mole" },
        bestTime: { en: "Morning", pt: "Manhã" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Rocky entry, bring water shoes", pt: "Entrada com pedras, traga sapatilha de neoprene" },
        tags: ["secluded", "snorkeling", "locals-only"]
    },
    {
        name: "Praia do Saquinho",
        category: { en: "Secret Beach", pt: "Praia Secreta" },
        emoji: "🐚",
        nickname: { en: "The Forgotten Shore", pt: "A Praia Esquecida" },
        description: {
            en: "A pristine stretch of sand between Solidão and Pântano do Sul, with virtually no infrastructure. The kind of beach postcards dream about.",
            pt: "Uma faixa de areia intocada entre Solidão e Pântano do Sul, praticamente sem infraestrutura. O tipo de praia que os cartões-postais sonham."
        },
        theSecret: {
            en: "Access via the trail from Solidão beach (30 min) or by boat from Pântano do Sul. Bring everything—there's nothing here but paradise.",
            pt: "Acesso pela trilha da praia da Solidão (30 min) ou de barco do Pântano do Sul. Traga tudo—não tem nada aqui além do paraíso."
        },
        effort: { en: "Hard", pt: "Difícil" },
        effortDetail: { en: "30-minute trail or boat access", pt: "Trilha de 30 minutos ou acesso de barco" },
        bestTime: { en: "All day", pt: "O dia todo" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "No facilities, no shade, no signal", pt: "Sem estrutura, sem sombra, sem sinal" },
        tags: ["wilderness", "photography", "escape"]
    },
    {
        name: "Praia de Naufragados",
        category: { en: "Secret Beach", pt: "Praia Secreta" },
        emoji: "🚢",
        nickname: { en: "Shipwreck Beach", pt: "Praia dos Naufragados" },
        description: {
            en: "At the island's southern tip, this beach requires effort to reach but rewards with a historic lighthouse (1861) and wild, untouched beauty.",
            pt: "No extremo sul da ilha, essa praia exige esforço pra chegar mas recompensa com um farol histórico (1861) e uma beleza selvagem e intocada."
        },
        theSecret: {
            en: "The 3km trail from Caieira da Barra do Sul passes through Atlantic Forest. Time your visit to explore the lighthouse ruins at low tide.",
            pt: "A trilha de 3km da Caieira da Barra do Sul passa pela Mata Atlântica. Planeje sua visita pra explorar as ruínas do farol na maré baixa."
        },
        effort: { en: "Hard", pt: "Difícil" },
        effortDetail: { en: "3km forest trail (1.5 hours)", pt: "Trilha na mata de 3km (1,5 hora)" },
        bestTime: { en: "Morning for hiking", pt: "Manhã pra trilha" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Start early, bring water, check tide times", pt: "Comece cedo, traga água, confira a tábua de marés" },
        tags: ["historic", "adventure", "lighthouse"]
    },
    {
        name: "Lagoinha do Leste",
        category: { en: "Secret Beach", pt: "Praia Secreta" },
        emoji: "🏝️",
        nickname: { en: "The Island's Crown Jewel", pt: "A Joia da Coroa da Ilha" },
        description: {
            en: "The most beautiful beach in Floripa, accessible only by trail. A pristine lagoon meets the Atlantic with zero development in sight.",
            pt: "A praia mais bonita de Floripa, acessível apenas por trilha. Uma lagoa intocada encontra o Atlântico sem nenhuma construção à vista."
        },
        theSecret: {
            en: "Go via Pântano do Sul (shorter, steeper) not Matadeiro. Arrive before 8am on weekends—the Instagram crowd shows up by 10am.",
            pt: "Vá pelo Pântano do Sul (mais curto, mais íngreme), não pelo Matadeiro. Chegue antes das 8h nos fins de semana—o pessoal do Instagram aparece às 10h."
        },
        effort: { en: "Hard", pt: "Difícil" },
        effortDetail: { en: "2.2km steep trail from Pântano do Sul", pt: "Trilha íngreme de 2,2km do Pântano do Sul" },
        bestTime: { en: "Sunrise", pt: "Nascer do sol" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "No infrastructure, bring 2L+ water", pt: "Sem infraestrutura, traga mais de 2L de água" },
        tags: ["pristine", "instagram", "hiking"]
    },
    {
        name: "Praia da Galheta",
        category: { en: "Secret Beach", pt: "Praia Secreta" },
        emoji: "🌅",
        nickname: { en: "The Free Beach", pt: "A Praia Livre" },
        description: {
            en: "Floripa's only official nudist beach, but clothing is optional—many visitors stay dressed. Wild, beautiful, and refreshingly unpretentious.",
            pt: "A única praia oficialmente naturista de Floripa, mas a roupa é opcional—muitos visitantes ficam vestidos. Selvagem, bonita e refrescantemente despojada."
        },
        theSecret: {
            en: "Access from the north end of Praia Mole (10-minute walk). The southern section is quieter. Best beach for watching the sunrise over Mole.",
            pt: "Acesso pelo extremo norte da Praia Mole (caminhada de 10 minutos). A parte sul é mais tranquila. Melhor praia pra ver o nascer do sol sobre a Mole."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "10-minute walk from Mole", pt: "Caminhada de 10 minutos da Mole" },
        bestTime: { en: "Sunrise or late afternoon", pt: "Nascer do sol ou fim de tarde" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Naturist beach—respect the culture", pt: "Praia naturista—respeite a cultura" },
        tags: ["naturist", "sunrise", "alternative"]
    },

    // ===== EPIC VIEWPOINTS (6) =====
    {
        name: "Morro da Coroa",
        category: { en: "Epic Viewpoint", pt: "Mirante Épico" },
        emoji: "📸",
        nickname: { en: "The Floating Rock", pt: "A Pedra Flutuante" },
        description: {
            en: "The island's most photographed viewpoint—the complete panorama of Lagoinha do Leste with its lagoon and the famous 'floating rock' photo spot.",
            pt: "O mirante mais fotografado da ilha—o panorama completo da Lagoinha do Leste com sua lagoa e o famoso ponto da foto da 'pedra flutuante'."
        },
        theSecret: {
            en: "For an empty summit, arrive at 6am. The 'floating rock' photo requires patience—wait for the queue to clear or visit on a cloudy weekday.",
            pt: "Pra ter o topo vazio, chegue às 6h. A foto da 'pedra flutuante' exige paciência—espere a fila acabar ou visite num dia nublado de semana."
        },
        effort: { en: "Hard", pt: "Difícil" },
        effortDetail: { en: "600m climb from beach, hands required", pt: "Subida de 600m da praia, precisa usar as mãos" },
        bestTime: { en: "Sunrise", pt: "Nascer do sol" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "NOT after rain—slippery rocks. No cell signal.", pt: "NÃO vá depois de chuva—pedras escorregadias. Sem sinal de celular." },
        tags: ["instagram-famous", "sunrise", "challenging"]
    },
    {
        name: "Pedra do Urubu",
        category: { en: "Epic Viewpoint", pt: "Mirante Épico" },
        emoji: "🦅",
        nickname: { en: "Vulture's Rock", pt: "Pedra do Urubu" },
        description: {
            en: "360° views in just 20 minutes of hiking. See Lagoa da Conceição, Joaquina dunes, Campeche, and the airport from one spectacular summit.",
            pt: "Vista 360° em apenas 20 minutos de trilha. Veja a Lagoa da Conceição, as dunas da Joaquina, Campeche e o aeroporto de um único pico espetacular."
        },
        theSecret: {
            en: "The trailhead is unmarked—enter via Rua das Corucacas in Campeche. Best sunrise spot for photographers who can't do the Lagoinha hike.",
            pt: "O início da trilha não tem sinalização—entre pela Rua das Corucacas no Campeche. Melhor lugar pro nascer do sol pra fotógrafos que não conseguem fazer a trilha da Lagoinha."
        },
        effort: { en: "Moderate", pt: "Moderado" },
        effortDetail: { en: "1.3km trail, 20-30 minutes", pt: "Trilha de 1,3km, 20-30 minutos" },
        bestTime: { en: "Sunrise", pt: "Nascer do sol" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Steep in sections, wear proper shoes", pt: "Íngreme em alguns trechos, use tênis adequado" },
        tags: ["panorama", "accessible", "photography"]
    },
    {
        name: "Morro das Aranhas",
        category: { en: "Epic Viewpoint", pt: "Mirante Épico" },
        emoji: "🕷️",
        nickname: { en: "Spider Hill", pt: "Morro das Aranhas" },
        description: {
            en: "Panoramic views of three beaches plus 5,000-year-old indigenous petroglyphs at the trailhead. History meets horizon.",
            pt: "Vistas panorâmicas de três praias mais petroglifos indígenas de 5.000 anos no início da trilha. História encontra o horizonte."
        },
        theSecret: {
            en: "The petroglyphs are easy to miss—look for the interpretive sign at the trail start near Costão do Santinho. Take the left fork for Moçambique views.",
            pt: "Os petroglifos são fáceis de passar batido—procure a placa interpretativa no início da trilha perto do Costão do Santinho. Pegue o caminho da esquerda pra vista do Moçambique."
        },
        effort: { en: "Moderate", pt: "Moderado" },
        effortDetail: { en: "40-50 minute trail, mostly shaded", pt: "Trilha de 40-50 minutos, maior parte sombreada" },
        bestTime: { en: "Sunrise", pt: "Nascer do sol" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Left trail is muddier but has best views", pt: "A trilha da esquerda é mais enlameada mas tem as melhores vistas" },
        tags: ["petroglyphs", "history", "sunrise"]
    },
    {
        name: "Mirante Morro das Pedras",
        category: { en: "Epic Viewpoint", pt: "Mirante Épico" },
        emoji: "🐋",
        nickname: { en: "Whale Watching Point", pt: "Ponto de Observação de Baleias" },
        description: {
            en: "The only viewpoint with reliable whale sightings (July-November). Located at Casa de Retiros Vila Fátima, a spiritual retreat with public access.",
            pt: "O único mirante com avistamento confiável de baleias (julho-novembro). Localizado na Casa de Retiros Vila Fátima, um retiro espiritual com acesso público."
        },
        theSecret: {
            en: "Come between July-October for southern right whales nursing their calves. They often approach within 30 meters of the coastline below.",
            pt: "Venha entre julho-outubro pra ver as baleias-francas amamentando seus filhotes. Elas frequentemente se aproximam a menos de 30 metros da costa."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Drive-up access", pt: "Acesso de carro" },
        bestTime: { en: "Morning, calm days", pt: "Manhã, dias calmos" },
        season: { en: "Jul-Nov for whales", pt: "Jul-Nov pras baleias" },
        seasonBadge: { en: "WHALE SEASON", pt: "TEMPORADA DE BALEIAS" },
        warning: { en: "Respect the retreat atmosphere—cameras monitored", pt: "Respeite o ambiente do retiro—câmeras monitoradas" },
        tags: ["whale-watching", "unique", "spiritual"]
    },
    {
        name: "Santo Antônio Sunset",
        category: { en: "Epic Viewpoint", pt: "Mirante Épico" },
        emoji: "🌇",
        nickname: { en: "The Golden Hour Village", pt: "A Vila da Hora Dourada" },
        description: {
            en: "The most famous sunset spot on the island. Historic Azorean buildings frame fishing boats as the sun drops over the continent.",
            pt: "O ponto de pôr do sol mais famoso da ilha. Construções históricas açorianas emolduram barcos de pesca enquanto o sol se põe sobre o continente."
        },
        theSecret: {
            en: "Combine with dinner at Marisqueira Sintra—sit under the century-old fig tree. The bacalhau here is better than most places in Portugal.",
            pt: "Combine com jantar na Marisqueira Sintra—sente sob a figueira centenária. O bacalhau aqui é melhor que na maioria dos lugares em Portugal."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Drive, 15km from center", pt: "De carro, 15km do centro" },
        bestTime: { en: "Sunset", pt: "Pôr do sol" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Weekends get crowded—arrive by 5pm", pt: "Fins de semana ficam lotados—chegue até às 17h" },
        tags: ["sunset", "romantic", "dining"]
    },
    {
        name: "Mirante Ponto de Vista",
        category: { en: "Epic Viewpoint", pt: "Mirante Épico" },
        emoji: "🍺",
        nickname: { en: "View With a Beer", pt: "Vista com Cerveja" },
        description: {
            en: "Drive-up viewpoint with craft beer kiosk, artisan shops, and restaurant. The opposite angle from Morro da Lagoa—see Costa da Lagoa and the historic church.",
            pt: "Mirante com acesso de carro, quiosque de cerveja artesanal, lojas de artesanato e restaurante. O ângulo oposto do Morro da Lagoa—veja a Costa da Lagoa e a igreja histórica."
        },
        theSecret: {
            en: "Order the local craft beer and the pão de queijo. Best viewpoint for lazy sunset watchers who want their car nearby.",
            pt: "Peça a cerveja artesanal local e o pão de queijo. Melhor mirante pra quem quer curtir o pôr do sol de boa com o carro pertinho."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Drive-up on SC-406", pt: "Acesso de carro pela SC-406" },
        bestTime: { en: "Late afternoon", pt: "Fim de tarde" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "None—this one's easy", pt: "Nenhum—esse é tranquilo" },
        tags: ["accessible", "craft-beer", "casual"]
    },

    // ===== HIDDEN EATS (7) =====
    {
        name: "Zé do Cacupé",
        category: { en: "Hidden Eat", pt: "Restaurante Secreto" },
        emoji: "🐟",
        nickname: { en: "The Whole Fish Secret", pt: "O Segredo do Peixe Inteiro" },
        description: {
            en: "Since 1987, serving whole fried fish (rare in Floripa) with a procession of seafood dishes. Grandma Zair's crab recipe is legendary.",
            pt: "Desde 1987, servindo peixe frito inteiro (raro em Floripa) com uma sequência de frutos do mar. A receita de siri da Vó Zair é lendária."
        },
        theSecret: {
            en: "Order the 'Especial Estrela do Mar' for the full procession. Ask for 'Siri da Vó Zair'—it's the casquinha de siri from the original family recipe.",
            pt: "Peça o 'Especial Estrela do Mar' pra sequência completa. Peça o 'Siri da Vó Zair'—é a casquinha de siri da receita original da família."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "15-minute drive, Cacupé", pt: "15 minutos de carro, Cacupé" },
        bestTime: { en: "Sunset", pt: "Pôr do sol" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Weekends generate lines—arrive early", pt: "Fins de semana têm fila—chegue cedo" },
        tags: ["family-run", "traditional", "sunset-view"]
    },
    {
        name: "Bistrô Isadora Duncan",
        category: { en: "Hidden Eat", pt: "Restaurante Secreto" },
        emoji: "🕯️",
        nickname: { en: "The Proposal Spot", pt: "O Lugar do Pedido" },
        description: {
            en: "Only 5-10 tables in a mystical candlelit space. The most romantic restaurant on the island, with shrimp dishes named 'Blessed' and 'Enchanted'.",
            pt: "Apenas 5-10 mesas num espaço místico à luz de velas. O restaurante mais romântico da ilha, com pratos de camarão chamados 'Abençoado' e 'Encantado'."
        },
        theSecret: {
            en: "Say 'Guia Floripa' for complimentary chocolate mousse flambéed with Cointreau. Book the corner table for maximum privacy.",
            pt: "Diga 'Guia Floripa' pra ganhar mousse de chocolate flambado com Cointreau de cortesia. Reserve a mesa do canto pra máxima privacidade."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Barra da Lagoa", pt: "Barra da Lagoa" },
        bestTime: { en: "Dinner", pt: "Jantar" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Reservations essential—only 5 tables", pt: "Reserva essencial—apenas 5 mesas" },
        tags: ["romantic", "fine-dining", "secret-password"]
    },
    {
        name: "Sambaqui Sunday Sessions",
        category: { en: "Hidden Eat", pt: "Restaurante Secreto" },
        emoji: "🦪",
        nickname: { en: "The Quiet Oyster Village", pt: "A Vila Tranquila das Ostras" },
        description: {
            en: "Skip touristy Santo Antônio for this quieter fishing village with equally stunning sunsets and fresher oysters straight from the bay.",
            pt: "Pule o turístico Santo Antônio por essa vila de pescadores mais tranquila com pôr do sol igualmente incrível e ostras mais frescas direto da baía."
        },
        theSecret: {
            en: "Sunday afternoons locals gather for oysters and cold beer. The vibe is more authentic—fishermen, families, zero pretension.",
            pt: "Domingos à tarde os locais se reúnem pra ostras e cerveja gelada. O clima é mais autêntico—pescadores, famílias, zero frescura."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "18km from center", pt: "18km do centro" },
        bestTime: { en: "Sunday afternoon", pt: "Domingo à tarde" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Limited restaurant options—come for the vibe", pt: "Poucas opções de restaurante—venha pelo clima" },
        tags: ["authentic", "oysters", "sunday-ritual"]
    },
    {
        name: "Box 32",
        category: { en: "Hidden Eat", pt: "Restaurante Secreto" },
        emoji: "🥟",
        nickname: { en: "The Democratic Counter", pt: "O Balcão Democrático" },
        description: {
            en: "The most democratic counter in Brazil—presidents, celebrities, and fishermen stand together ordering pastel de camarão and coxinha de rã (frog leg croquette).",
            pt: "O balcão mais democrático do Brasil—presidentes, celebridades e pescadores ficam juntos pedindo pastel de camarão e coxinha de rã."
        },
        theSecret: {
            en: "Order the pastel de berbigão (clam pastry) with caldo de cana (sugarcane juice). Come Saturday afternoon for live samba with feijoada.",
            pt: "Peça o pastel de berbigão com caldo de cana. Venha sábado à tarde pro samba ao vivo com feijoada."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Mercado Público, Centro", pt: "Mercado Público, Centro" },
        bestTime: { en: "Saturday afternoon", pt: "Sábado à tarde" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Cash preferred, expect crowds", pt: "Preferência por dinheiro, espere movimento" },
        tags: ["iconic", "street-food", "samba"]
    },
    {
        name: "Costa da Lagoa by Boat",
        category: { en: "Hidden Eat", pt: "Restaurante Secreto" },
        emoji: "⛵",
        nickname: { en: "Adventure Dining", pt: "Jantar Aventura" },
        description: {
            en: "Six family-run restaurants accessible only by boat. The 40-minute journey through the lagoon is half the experience.",
            pt: "Seis restaurantes familiares acessíveis apenas de barco. A viagem de 40 minutos pela lagoa é metade da experiência."
        },
        theSecret: {
            en: "Order 'Carapeva'—a fish found only in this region. After lunch, take the 15-minute trail to the hidden waterfall at Ponto 16.",
            pt: "Peça a 'Carapeva'—um peixe encontrado apenas nessa região. Depois do almoço, faça a trilha de 15 minutos até a cachoeira escondida no Ponto 16."
        },
        effort: { en: "Moderate", pt: "Moderado" },
        effortDetail: { en: "Boat from Lagoa, 40-50 min", pt: "Barco da Lagoa, 40-50 min" },
        bestTime: { en: "Lunch", pt: "Almoço" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Cash only—no cell signal. Check boat return times.", pt: "Só dinheiro—sem sinal de celular. Confira os horários de retorno do barco." },
        tags: ["boat-access", "adventure", "waterfall"]
    },
    {
        name: "Cantinho Marinho",
        category: { en: "Hidden Eat", pt: "Restaurante Secreto" },
        emoji: "🍤",
        nickname: { en: "Best Sequência in Floripa", pt: "Melhor Sequência de Floripa" },
        description: {
            en: "Locals vote this Barra da Lagoa spot as the island's best sequência de camarão. The fish sauce sets it apart from all competitors.",
            pt: "Os locais elegem esse lugar na Barra da Lagoa como a melhor sequência de camarão da ilha. O molho de peixe diferencia de todos os concorrentes."
        },
        theSecret: {
            en: "The sequência serves 2-4 people—don't over-order. Their pirão (fish broth with manioc flour) is the benchmark.",
            pt: "A sequência serve 2-4 pessoas—não exagere no pedido. O pirão deles é referência."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Barra da Lagoa", pt: "Barra da Lagoa" },
        bestTime: { en: "Lunch or dinner", pt: "Almoço ou jantar" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Expect to wait on weekends", pt: "Espere fila nos fins de semana" },
        tags: ["sequência", "local-favorite", "seafood"]
    },
    {
        name: "Sergio Lanches",
        category: { en: "Hidden Eat", pt: "Restaurante Secreto" },
        emoji: "🌙",
        nickname: { en: "The 3AM Lifesaver", pt: "O Salvador das 3 da Manhã" },
        description: {
            en: "Giant sandwiches served until the early hours. When everything else is closed, Sergio is still slinging legendary late-night food.",
            pt: "Sanduíches gigantes servidos até de madrugada. Quando tudo mais está fechado, o Sergio ainda está mandando comida lendária de madrugada."
        },
        theSecret: {
            en: "One sandwich feeds two people. This is the only place open at 'madrugada'—the Brazilian word for those lost hours between 2am and dawn.",
            pt: "Um sanduíche alimenta duas pessoas. É o único lugar aberto na madrugada—aquelas horas perdidas entre 2h e o amanhecer."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Lagoa da Conceição", pt: "Lagoa da Conceição" },
        bestTime: { en: "After midnight", pt: "Depois da meia-noite" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Portions are massive—share!", pt: "As porções são enormes—divida!" },
        tags: ["late-night", "budget", "legendary"]
    },

    // ===== RARE EXPERIENCES (5) =====
    {
        name: "Whale Watching from Shore",
        category: { en: "Rare Experience", pt: "Experiência Rara" },
        emoji: "🐋",
        nickname: { en: "Whales at Arm's Length", pt: "Baleias Pertinho de Você" },
        description: {
            en: "Southern right whales migrate from Antarctica to birth and nurse calves. They regularly approach within 30 meters of beaches.",
            pt: "Baleias-francas migram da Antártida pra dar à luz e amamentar seus filhotes. Elas se aproximam regularmente a menos de 30 metros das praias."
        },
        theSecret: {
            en: "Best spot: SC-405 roadside viewpoint above Praia da Armação. Early morning, flat calm days. Binoculars help but aren't essential—they're that close.",
            pt: "Melhor lugar: mirante na beira da SC-405 acima da Praia da Armação. Início da manhã, dias calmos. Binóculos ajudam mas não são essenciais—elas chegam perto assim."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Drive to Armação", pt: "De carro até Armação" },
        bestTime: { en: "Early morning, calm days", pt: "Início da manhã, dias calmos" },
        season: { en: "Jul-Nov", pt: "Jul-Nov" },
        seasonBadge: { en: "SEASONAL", pt: "SAZONAL" },
        warning: { en: "Peak: September-October. No guarantee.", pt: "Pico: setembro-outubro. Sem garantia." },
        tags: ["wildlife", "seasonal", "unforgettable"]
    },
    {
        name: "Bioluminescence Paddle",
        category: { en: "Rare Experience", pt: "Experiência Rara" },
        emoji: "✨",
        nickname: { en: "Swimming in Starlight", pt: "Nadando em Luz das Estrelas" },
        description: {
            en: "Paddle through blue neon light as bioluminescent plankton glow with every stroke. One of nature's most magical phenomena.",
            pt: "Reme através de luz neon azul enquanto plâncton bioluminescente brilha a cada remada. Um dos fenômenos mais mágicos da natureza."
        },
        theSecret: {
            en: "Join Kanoa Sambaqui kayak club for pre-dawn paddles (5-6am). New moon, winter months (June-August), calm seas. Cannot be guaranteed—but when it happens, unforgettable.",
            pt: "Participe do clube de caiaque Kanoa Sambaqui pras remadas antes do amanhecer (5-6h). Lua nova, meses de inverno (junho-agosto), mar calmo. Não dá pra garantir—mas quando acontece, é inesquecível."
        },
        effort: { en: "Moderate", pt: "Moderado" },
        effortDetail: { en: "Pre-dawn kayak session", pt: "Sessão de caiaque antes do amanhecer" },
        bestTime: { en: "5-6am, new moon", pt: "5-6h, lua nova" },
        season: { en: "Jun-Aug", pt: "Jun-Ago" },
        seasonBadge: { en: "RARE", pt: "RARO" },
        warning: { en: "Unpredictable—consider it a bonus if it happens", pt: "Imprevisível—considere um bônus se acontecer" },
        tags: ["bioluminescence", "kayak", "bucket-list"]
    },
    {
        name: "Oyster Farm Tour",
        category: { en: "Rare Experience", pt: "Experiência Rara" },
        emoji: "🦪",
        nickname: { en: "From Farm to Fork", pt: "Da Fazenda pro Prato" },
        description: {
            en: "Boat out to offshore oyster farms with the maricultors who raise them. Taste oysters 30 meters from where they grew.",
            pt: "Vá de barco até as fazendas de ostras com os maricultores que as criam. Prove ostras a 30 metros de onde cresceram."
        },
        theSecret: {
            en: "Freguesia Oyster Bar (Santo Antônio) runs 45-minute boat tours Mon-Thu 15h-18h, groups 2-4. Book in advance—they fill up fast.",
            pt: "Freguesia Oyster Bar (Santo Antônio) faz passeios de barco de 45 minutos de seg-qui das 15h-18h, grupos de 2-4. Reserve com antecedência—lota rápido."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Boat tour from Santo Antônio", pt: "Passeio de barco de Santo Antônio" },
        bestTime: { en: "Afternoon", pt: "Tarde" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Book ahead—limited spots", pt: "Reserve antes—vagas limitadas" },
        tags: ["culinary", "boat-tour", "hands-on"]
    },
    {
        name: "Beach Capoeira Roda",
        category: { en: "Rare Experience", pt: "Experiência Rara" },
        emoji: "🥁",
        nickname: { en: "The Circle on the Sand", pt: "A Roda na Areia" },
        description: {
            en: "Join or watch an authentic capoeira roda (circle) on the beach. Drums, movement, and Afro-Brazilian tradition under the open sky.",
            pt: "Participe ou assista a uma roda de capoeira autêntica na praia. Tambores, movimento e tradição afro-brasileira sob o céu aberto."
        },
        theSecret: {
            en: "Praia do Santinho hosts monthly sessions every third Sunday (Escola Maré Brasil). Mercado Público has first Saturday of each month at 10am.",
            pt: "Praia do Santinho recebe sessões mensais todo terceiro domingo (Escola Maré Brasil). Mercado Público tem no primeiro sábado de cada mês às 10h."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Show up and watch or join", pt: "Apareça e assista ou participe" },
        bestTime: { en: "Check monthly schedule", pt: "Confira o calendário mensal" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Participation welcome—no experience needed", pt: "Participação bem-vinda—não precisa de experiência" },
        tags: ["cultural", "capoeira", "free"]
    },
    {
        name: "FENAOSTRA Festival",
        category: { en: "Rare Experience", pt: "Experiência Rara" },
        emoji: "🎉",
        nickname: { en: "The Oyster Olympics", pt: "As Olimpíadas da Ostra" },
        description: {
            en: "Brazil's national oyster festival. 12+ restaurants, 40,000+ dozen oysters, live music, 60+ artisan exhibitors. Peak Floripa culture.",
            pt: "O festival nacional da ostra do Brasil. 12+ restaurantes, 40.000+ dúzias de ostras, música ao vivo, 60+ expositores artesanais. O auge da cultura de Floripa."
        },
        theSecret: {
            en: "Free admission weekday daytimes. Evenings and weekends: R$20 or 1kg food donation. 2025 dates: July 16-27 at CentroSul.",
            pt: "Entrada grátis em dias de semana durante o dia. Noites e fins de semana: R$20 ou 1kg de alimento. Datas 2025: 16-27 de julho no CentroSul."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "CentroSul convention center", pt: "Centro de convenções CentroSul" },
        bestTime: { en: "Weekday daytime for free entry", pt: "Dia de semana de dia pra entrada grátis" },
        season: { en: "July", pt: "Julho" },
        seasonBadge: { en: "JULY ONLY", pt: "SÓ EM JULHO" },
        warning: { en: "2025: July 16-27. Book accommodation early.", pt: "2025: 16-27 de julho. Reserve hospedagem cedo." },
        tags: ["festival", "oysters", "music"]
    },

    // ===== INSIDER SECRETS (4) =====
    {
        name: "The Guia Floripa Password",
        category: { en: "Insider Secret", pt: "Segredo de Insider" },
        emoji: "🔑",
        nickname: { en: "The Magic Words", pt: "As Palavras Mágicas" },
        description: {
            en: "At Bistrô Isadora Duncan, mention 'Guia Floripa' and receive complimentary chocolate mousse flambéed with Cointreau at your table.",
            pt: "No Bistrô Isadora Duncan, mencione 'Guia Floripa' e receba mousse de chocolate flambado com Cointreau de cortesia na sua mesa."
        },
        theSecret: {
            en: "Say it to your server after ordering. Works consistently—it's a local guidebook partnership they honor for those 'in the know.'",
            pt: "Diga pro garçom depois de pedir. Funciona sempre—é uma parceria com guia local que eles honram pra quem 'está por dentro'."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Just say the words", pt: "Só diga as palavras" },
        bestTime: { en: "During dinner", pt: "Durante o jantar" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Only works at Isadora Duncan", pt: "Só funciona no Isadora Duncan" },
        tags: ["password", "free-dessert", "insider"]
    },
    {
        name: "Intisica Pour",
        category: { en: "Insider Secret", pt: "Segredo de Insider" },
        emoji: "🥃",
        nickname: { en: "The Artisanal Cachaça", pt: "A Cachaça Artesanal" },
        description: {
            en: "Ostradamus restaurant serves Intisica—a small-batch artisanal cachaça from a local producer that never appears on menus.",
            pt: "O restaurante Ostradamus serve Intisica—uma cachaça artesanal de pequenos lotes de um produtor local que nunca aparece nos cardápios."
        },
        theSecret: {
            en: "Ask specifically for 'Intisica' by name. Pair it with oysters—the combination is legendary among those who know.",
            pt: "Peça especificamente 'Intisica' pelo nome. Combine com ostras—a combinação é lendária entre quem conhece."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Request at Ostradamus", pt: "Peça no Ostradamus" },
        bestTime: { en: "With oysters", pt: "Com ostras" },
        season: { en: "Year-round", pt: "O ano todo" },
        warning: { en: "Only at Ostradamus, ask by name", pt: "Só no Ostradamus, peça pelo nome" },
        tags: ["cachaça", "pairing", "off-menu"]
    },
    {
        name: "Tainha Season",
        category: { en: "Insider Secret", pt: "Segredo de Insider" },
        emoji: "🐟",
        nickname: { en: "The Mullet Migration", pt: "A Migração da Tainha" },
        description: {
            en: "May through July, mullet schools migrate past the island. Traditional Azorean 'tainha escalada' (split, salted, grilled) appears on menus.",
            pt: "De maio a julho, cardumes de tainha migram pela ilha. A tradicional 'tainha escalada' açoriana (aberta, salgada, grelhada) aparece nos cardápios."
        },
        theSecret: {
            en: "Bar do Arante in Pântano do Sul: tainha escalada na brasa (R$185/two). The restaurant walls are covered with 40+ years of customer notes—add yours.",
            pt: "Bar do Arante no Pântano do Sul: tainha escalada na brasa (R$185/dois). As paredes do restaurante são cobertas com 40+ anos de bilhetes de clientes—adicione o seu."
        },
        effort: { en: "Easy", pt: "Fácil" },
        effortDetail: { en: "Seasonal menus island-wide", pt: "Cardápios sazonais em toda a ilha" },
        bestTime: { en: "May-July", pt: "Maio-Julho" },
        season: { en: "May-Jul", pt: "Mai-Jul" },
        seasonBadge: { en: "SEASONAL", pt: "SAZONAL" },
        warning: { en: "Only available during migration season", pt: "Só disponível durante a temporada de migração" },
        tags: ["seasonal", "traditional", "azorean"]
    },
    {
        name: "Dourado Dawn Run",
        category: { en: "Insider Secret", pt: "Segredo de Insider" },
        emoji: "🎣",
        nickname: { en: "The Golden Fish Hunt", pt: "A Caça ao Peixe Dourado" },
        description: {
            en: "October through March, Dourado (mahi-mahi) run the waters offshore. Local fishing charters leave at 5am for the hunt.",
            pt: "De outubro a março, o Dourado corre pelas águas da costa. Barcos de pesca locais saem às 5h pra caçada."
        },
        theSecret: {
            en: "Book with Cultura Radical (Barra da Lagoa). Departure 5am, return 3pm. Deposit required. The early wake is worth the golden prize.",
            pt: "Reserve com a Cultura Radical (Barra da Lagoa). Saída 5h, retorno 15h. Depósito necessário. Acordar cedo vale o prêmio dourado."
        },
        effort: { en: "Hard", pt: "Difícil" },
        effortDetail: { en: "Full-day fishing charter, 5am start", pt: "Pescaria de dia inteiro, saída às 5h" },
        bestTime: { en: "October-March", pt: "Outubro-Março" },
        season: { en: "Oct-Mar", pt: "Out-Mar" },
        seasonBadge: { en: "SEASONAL", pt: "SAZONAL" },
        warning: { en: "R$300+ balance, early departure", pt: "Saldo de R$300+, saída cedo" },
        tags: ["fishing", "adventure", "seasonal"]
    }
];

// Get a random gem
function getRandomGem() {
    return gems[Math.floor(Math.random() * gems.length)];
}

// Get gems by category
function getGemsByCategory(category) {
    return gems.filter(g => g.category === category || g.category.en === category || g.category.pt === category);
}

// Get all unique categories
function getCategories() {
    return [...new Set(gems.map(g => typeof g.category === 'object' ? g.category.en : g.category))];
}

// Category colors for styling (keys are now bilingual objects)
const categoryColors = {
    "Secret Beach": {
        bg: "rgba(127, 181, 168, 0.2)",
        border: "#7FB5A8",
        icon: "🏖️",
        label: { en: "Secret Beach", pt: "Praia Secreta" }
    },
    "Epic Viewpoint": {
        bg: "rgba(232, 93, 76, 0.2)",
        border: "#E85D4C",
        icon: "📸",
        label: { en: "Epic Viewpoint", pt: "Mirante Épico" }
    },
    "Hidden Eat": {
        bg: "rgba(201, 162, 39, 0.2)",
        border: "#C9A227",
        icon: "🍽️",
        label: { en: "Hidden Eat", pt: "Restaurante Secreto" }
    },
    "Rare Experience": {
        bg: "rgba(45, 90, 107, 0.2)",
        border: "#2D5A6B",
        icon: "✨",
        label: { en: "Rare Experience", pt: "Experiência Rara" }
    },
    "Insider Secret": {
        bg: "rgba(139, 90, 43, 0.2)",
        border: "#8B5A2B",
        icon: "🔑",
        label: { en: "Insider Secret", pt: "Segredo de Insider" }
    }
};
