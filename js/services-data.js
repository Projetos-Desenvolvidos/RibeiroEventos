/**
 * Catálogo de serviços — Ribeiro Eventos
 * Usado na página de portfólio (paginas/servico.html)
 */
const SERVICES_DATA = {
  circos: {
    slug: "circos",
    name: "Circos",
    heroImage: "assets/circo1.png",
    shortDesc: "Estruturas circulares moduladas para eventos de diversos tamanhos e formatos.",
    description:
      "Nossos circos modulados oferecem cobertura ampla e visual impactante para feiras, exposições, eventos corporativos e festividades de grande porte. Disponíveis em diversos diâmetros, com montagem profissional e estruturas certificadas.",
    highlights: [
      "Múltiplos tamanhos e configurações",
      "Montagem e desmontagem pela nossa equipe",
      "Ideal para áreas centrais de eventos",
      "Estruturas testadas e seguras",
    ],
    portfolio: [
      { title: "Circo 1", image: "assets/circo1.png" },
      { title: "Circo 2", image: "assets/circo2.png" },
      { title: "Circo 3", image: "assets/circo3.png" },
      { title: "Circo 4", image: "assets/circo4.png" },
      { title: "Circo 5", image: "assets/circo5.png" },
      { title: "Circo 6", image: "assets/circo6.png" },
      { title: "Circo 7", image: "assets/circo7.png" },
      { title: "Circo 8", image: "assets/circo8.png" },
      { title: "Circo 9", image: "assets/circo9.png" },
    ],
  },
  piramides: {
    slug: "piramides",
    name: "Pirâmides",
    heroImage: "assets/piramide1.png",
    shortDesc: "Coberturas piramidais robustas para áreas de alimentação, exposição e recepção.",
    description:
      "As pirâmides são versáteis e elegantes, ideais para áreas gastronômicas, entregas de premiação, pontos de hidratação e recepção. Montagem rápida e acabamento profissional para eventos de qualquer escala.",
    highlights: [
      "Diversos tamanhos disponíveis",
      "Perfeitas para food courts e recepções",
      "Combinação modular entre unidades",
      "Resistência e acabamento premium",
    ],
    portfolio: [
      { title: "Pirâmide 1", image: "assets/piramide1.png" },
      { title: "Pirâmide 2", image: "assets/piramide2.png" },
      { title: "Pirâmide 3", image: "assets/piramide3.png" },
      { title: "Pirâmide 4", image: "assets/piramide4.png" },
      { title: "Pirâmide 5", image: "assets/piramide5.png" },
      { title: "Pirâmide 6", image: "assets/piramide6.png" },
      { title: "Pirâmide 7", image: "assets/piramide7.png" },
      { title: "Pirâmide 8", image: "assets/piramide8.png" },
      { title: "Pirâmide 9", image: "assets/piramide9.png" },
      { title: "Pirâmide 10", image: "assets/piramide10.png" },
      { title: "Pirâmide 11", image: "assets/piramide11.png" },
      { title: "Pirâmide 12", image: "assets/piramide12.png" },
    ],
  },
  "vini-galpao": {
    slug: "vini-galpao",
    name: "Vini-Galpão",
    heroImage: "assets/galpao1.png",
    shortDesc: "Galpões tensionados de grande vão para feiras, exposições e eventos ao ar livre.",
    description:
      "O Vini-Galpão é a solução para quem precisa de grande área coberta sem colunas no centro. Indicado para feirões, exposições agropecuárias, eventos automotivos e feiras de grande porte.",
    highlights: [
      "Grande vão livre",
      "Alta capacidade de público",
      "Personalização de dimensões",
      "Logística completa de montagem",
    ],
    portfolio: [
      { title: "Galpão 1", image: "assets/galpao1.png" },
      { title: "Galpão 2", image: "assets/galpao2.png" },
      { title: "Galpão 3", image: "assets/galpao3.png" },
      { title: "Galpão 4", image: "assets/galpao4.png" },
      { title: "Galpão 5", image: "assets/galpao5.png" },
      { title: "Galpão 6", image: "assets/galpao6.png" },
    ],
  },
  grades: {
    slug: "grades",
    name: "Grades",
    heroImage: "assets/curral3.png",
    shortDesc: "Controle de fluxo e segurança perimetral com grades profissionais.",
    description:
      "Sistemas de grades para organização de filas, delimitação de áreas VIP, isolamento de palco e segurança perimetral. Solução essencial para eventos com alto fluxo de público.",
    highlights: [
      "Controle de multidões",
      "Montagem modular e rápida",
      "Resistentes e reutilizáveis",
      "Combinam com outros equipamentos",
    ],
    portfolio: [
      { title: "Grade 1", image: "assets/curral1.png" },
      { title: "Grade 2", image: "assets/curral2.png" },
      { title: "Grade 3", image: "assets/curral5.png" },
      { title: "Grade 4", image: "assets/arquibancada2.png" },
    ],
  },
  palcos: {
    slug: "palcos",
    name: "Palcos",
    heroImage: "assets/palco1.png",
    shortDesc: "Palcos modulares para apresentações, shows, leilões e eventos corporativos.",
    description:
      "Palcos modulares dimensionados para cada necessidade — apresentações artísticas, julgamento de animais, palestras corporativas e cerimônias. Estruturas estáveis com acabamento profissional.",
    highlights: [
      "Módulos de diversos tamanhos",
      "Reforço para cargas específicas",
      "Opções com cobertura integrada",
      "Montagem técnica especializada",
    ],
    portfolio: [
      { title: "Palco 1", image: "assets/palco1.png" },
      { title: "Palco 2", image: "assets/palco2.png" },
      { title: "Palco 3", image: "assets/palco3.png" },
      { title: "Palco 4", image: "assets/palco4.png" },
      { title: "Palco 5", image: "assets/palco5.png" },
      { title: "Palco 6", image: "assets/palco6.png" },
    ],
  },
  fechamentos: {
    slug: "fechamentos",
    name: "Fechamentos",
    heroImage: "assets/stand4.png",
    shortDesc: "Divisórias e fechamentos para delimitar áreas e garantir privacidade.",
    description:
      "Fechamentos e divisórias para segmentar ambientes em feiras, eventos corporativos e áreas administrativas temporárias. Solução prática com visual limpo e profissional.",
    highlights: [
      "Privacidade para setores",
      "Instalação ágil",
      "Compatível com stands",
      "Diversos acabamentos",
    ],
    portfolio: [
      { title: "Fechamento 1", image: "assets/stand1.png" },
      { title: "Fechamento 2", image: "assets/stand2.png" },
      { title: "Fechamento 3", image: "assets/stand3.png" },
      { title: "Fechamento 4", image: "assets/galpao5.png" },
    ],
  },
  "stands-octanorm": {
    slug: "stands-octanorm",
    name: "Stands de Octanorm",
    heroImage: "assets/stand6.png",
    shortDesc: "Montagem de stands personalizados com sistema Octanorm para feiras e exposições.",
    description:
      "Projetamos e montamos stands com sistema Octanorm para feiras, exposições e showrooms temporários. Layout personalizado alinhado à identidade da sua marca ou instituição.",
    highlights: [
      "Projeto sob medida",
      "Sistema Octanorm certificado",
      "Montagem completa pela equipe",
      "Ideal para feiras e exposições",
    ],
    portfolio: [
      { title: "Stand 1", image: "assets/stand1.png" },
      { title: "Stand 2", image: "assets/stand2.png" },
      { title: "Stand 3", image: "assets/stand3.png" },
      { title: "Stand 4", image: "assets/stand4.png" },
      { title: "Stand 5", image: "assets/stand5.png" },
      { title: "Stand 6", image: "assets/stand6.png" },
    ],
  },
  "currais-baias": {
    slug: "currais-baias",
    name: "Currais e Baias",
    heroImage: "assets/curral4.png",
    shortDesc: "Estruturas para manejo de gado em rodeios, leilões e eventos rurais.",
    description:
      "Currais e baias projetados para segurança no manejo de animais em leilões, rodeios e exposições agropecuárias. Estruturas resistentes com fluxo otimizado para operação.",
    highlights: [
      "Segurança no maneio animal",
      "Layouts para leilão e rodeio",
      "Montagem em campo",
      "Experiência em eventos rurais",
    ],
    portfolio: [
      { title: "Curral 1", image: "assets/curral1.png" },
      { title: "Curral 2", image: "assets/curral2.png" },
      { title: "Curral 3", image: "assets/curral3.png" },
      { title: "Curral 4", image: "assets/curral4.png" },
      { title: "Curral 5", image: "assets/curral5.png" },
    ],
  },
  arquibancadas: {
    slug: "arquibancadas",
    name: "Arquibancadas",
    heroImage: "assets/arquibancada1.png",
    shortDesc: "Assentos elevados seguros para públicos de pequeno a grande porte.",
    description:
      "Arquibancadas modulares para acomodar público com segurança em rodeios, leilões, eventos esportivos e apresentações. Projetos dimensionados conforme capacidade exigida.",
    highlights: [
      "Capacidade escalável",
      "Estruturas certificadas",
      "Acesso e circulação planejados",
      "Montagem profissional",
    ],
    portfolio: [
      { title: "Arquibancada 1", image: "assets/arquibancada1.png" },
      { title: "Arquibancada 2", image: "assets/arquibancada2.png" },
      { title: "Arquibancada 3", image: "assets/arquibancada3.png" },
      { title: "Arquibancada 4", image: "assets/arquibancada4.png" },
      { title: "Arquibancada 5", image: "assets/arquibancada5.png" },
      { title: "Arquibancada 6", image: "assets/arquibancada6.png" },
      { title: "Arquibancada 7", image: "assets/arquibancada7.png" },
    ],
  },
  climatizacao: {
    slug: "climatizacao",
    name: "Climatização",
    heroImage: "assets/climatizacao3.png",
    shortDesc: "Soluções de conforto térmico para tendas, galpões e ambientes fechados.",
    description:
      "Sistemas de climatização para garantir conforto em tendas, galpões e estruturas fechadas temporárias. Essencial para eventos corporativos, feiras e recepções em períodos quentes.",
    highlights: [
      "Conforto térmico garantido",
      "Dimensionamento por área",
      "Operação durante todo o evento",
      "Integração com coberturas",
    ],
    portfolio: [
      { title: "Climatização 1", image: "assets/climatizacao1.png" },
      { title: "Climatização 2", image: "assets/climatizacao2.png" },
      { title: "Climatização 3", image: "assets/climatizacao3.png" },
      { title: "Climatização 4", image: "assets/climatizacao4.png" },
    ],
  },
};
