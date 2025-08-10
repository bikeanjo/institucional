export const menuItems: MenuItem[] = [
  {
    title: "Ofereça Ajuda",
    children: [
      {
        title: "Como Pessoa",
        children: [
          { title: "Doe", url: "" },
          { title: "Seja Voluntário", url: "" },
          { title: "Faça nossa preparação", url: "" },
          { title: "Dicas para Bike Anjo", url: "/dicas-bike-anjo" },
        ],
      },
      { title: "Ajude como instituição", url: "/ajude-como-instituicao" },
    ],
  },
  {
    title: "Receba Ajuda",
    children: [
      { title: "Como Nós Ajudamos", url: "" },
      { title: "Dicas para Pedalar", url: "/dicas-para-pedalar" },
    ],
  },
  {
    title: "Iniciativas",
    children: [
      {
        title: "Projetos",
        children: [
          { title: "Escola Bike Anjo", url: "/escola-bike-anjo" },
          { title: "Bike Anjas", url: "" },
          { title: "Pedala ou Repassa", url: "/pedala-ou-repassa" },
          { title: "De Bike para o Trabalho", url: "" },
        ],
      },
      {
        title: "Campanhas",
        children: [
          { title: "Dia Mundial Sem Carro", url: "" },
          { title: "Bicicleta nos Planos", url: "" },
        ],
      },
      { title: "Anjos na Sua Cidade", url: "" },
      { title: "Veja todas as iniciativas", url: "" },
    ],
  },
  {
    title: "Sobre Nós",
    children: [
      { title: "Como funciona", url: "" },
      { title: "Quem somos", url: "" },
      { title: "Redes Sociais", url: "/social-media" },
      { title: "Bike Anjo na Mídia", url: "" },
      { title: "Blog", url: "" },
    ],
  },
  { title: "Contato", url: "/contato" },
];

export type MenuItem = {
  title: string;
  url?: string;
  children?: MenuItem[];
};
