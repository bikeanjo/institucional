export interface AccordionItem {
  id: string;
  text: string;
}

export interface AccordionData {
  id: string;
  title: string;
  items: AccordionItem[];
}

export interface AccordionSection {
  id: string;
  accordions: AccordionData[];
}

export const AccordionInfos: AccordionSection[] = [
  {
    id: "CourseModules",
    accordions: [
      {
        id: "accordion1",
        title: "Encontro 1",
        items: [
          {
            id: "item1",
            text: "Introdução ao Programa e ao Voluntariado\n\nCarta de Valores, Regimento, LGPD e Estrutura Organizacional",
          },
        ],
      },
      {
        id: "accordion2",
        title: "Encontro 2",
        items: [
          {
            id: "item1",
            text: "Projetos Bike Anjo e ODS\n\nComo funciona a rede, comunicação e captação",
          },
        ],
      },
      {
        id: "accordion3",
        title: "Encontro 3",
        items: [
          {
            id: "item6",
            text: "Escola Bike Anjo - EBA\n\nDiversidade, Equidade e Inclusão",
          },
        ],
      },
      {
        id: "accordion4",
        title: "Encontro 4",
        items: [
          {
            id: "item4",
            text: "Oficina de Mecânica\n\nCertificação e troca de experiências na Formatura",
          },
        ],
      },
    ],
  },
  {
    id: "FAC",
    accordions: [
      {
        id: "accordion1",
        title: "Quem pode participar?",
        items: [
          {
            id: "item1",
            text: "Qualquer pessoa que se identifique com os valores da Bike Anjo, queira aprender e contribuir para uma mobilidade mais humana e sustentável.\nNão é necessário ser ciclista experiente.",
          },
        ],
      },
      {
        id: "accordion2",
        title: "Qual a duração?",
        items: [
          {
            id: "item1",
            text: "O programa de formação geralmente consiste em 4 encontros online aos sábados, complementados por atividades e materiais de apoio. A carga horária total será detalhada na chamada de cada edição.",
          },
        ],
      },
      {
        id: "accordion3",
        title: "Preciso assistir ao vivo?",
        items: [
          {
            id: "item1",
            text: "A participação ao vivo é altamente recomendada para melhor aproveitamento das discussões e interações. No entanto, os encontros são gravados e disponibilizados para quem não puder comparecer.",
          },
        ],
      },
      {
        id: "accordion4",
        title: "O curso é gratuito?",
        items: [
          {
            id: "item1",
            text: "Sim, o Programa de Formação de Pessoas voluntarias Bike Anjo é totalmente gratuito. Nosso objetivo é capacitar o maior número de pessoas interessadas em fazer a diferença.",
          },
        ],
      },
      {
        id: "accordion5",
        title: "Posso começar a atuar na rede antes de concluir?",
        items: [
          {
            id: "item1",
            text: "Sim! Você pode se conectar com a rede local e participar de algumas atividades enquanto faz o curso. A formação te dará mais ferramentas e confiança para atuar plenamente.",
          },
        ],
      },
      {
        id: "accordion6",
        title: "Haverá outras edições?",
        items: [
          {
            id: "item1",
            text: "Sim, o Bike Anjo realiza programas de formação periodicamente. Fique de olho em nossas redes sociais e site para não perder as próximas chamadas.",
          },
        ],
      },
      {
        id: "accordion7",
        title: "Como recebo meu certificado?",
        items: [
          {
            id: "item1",
            text: "O certificado oficial é emitido digitalmente após a conclusão satisfatória do curso, incluindo participação nos encontros e atividades propostas. A entrega ocorre na formatura simbólica.",
          },
        ],
      },
    ],
  },
];
