export interface AccordionItem {
  id: string;
  month: string;
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export interface AccordionData {
  id: string;
  title: string;
  items: AccordionItem[];
}

export interface TimelineYear {
  year: number;
  description: string;
  accordions: AccordionData[];
}

export const timelineData: TimelineYear[] = [
  {
    year: 2010,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2011,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "mes",
            title: "titulo",
            link: {
              text: "nome do link",
              url: "#",
            },
          },
        ],
      },
      {
        id: "accordion2",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "mes",
            title: "titulo",
            link: {
              text: "nome do link",
              url: "#",
            },
          },
          {
            id: "item2",
            month: "mes",
            title: "titulo",
            link: {
              text: "nome do link",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2012,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2013,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2014,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2015,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2016,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2017,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2018,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2019,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2020,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2021,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2022,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2023,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
  {
    year: 2024,
    description:
      "A Bike Anjo surgiu no dia 24 novembro de 2010 na cidade de São Paulo, quando amigos cicloativistas começaram a acompanhar pessoas no trânsito para que elas participassem da bicicletada, pedal que acontece toda última sexta-feira do mês em muitas cidades do mundo. Numa brincadeira, começaram a oferecer para passar no trabalho de cada um, de bike, para irem juntos para a bicicletada. Assim surgiu o termo “bike anjo” e o início da nossa rede: com um blog muito simples e um formulário conectando as pessoas que precisavam da ajuda de um(a) anjo.",
    accordions: [
      {
        id: "accordion-1",
        title: "titulo do accordion",
        items: [
          {
            id: "item1",
            month: "Jan",
            title: "titulo",
            link: {
              text: "Dicas para pedalar no trânsito com confiança e segurança",
              url: "#",
            },
          },
        ],
      },
    ],
  },
];
