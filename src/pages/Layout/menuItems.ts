export const menuItems: MenuItem[] = [
  {
    title: "Ofereça Ajuda",
    children: [
      {
        title: "Como Pessoa",
        children: [
          { title: "Doe", url: "/doacao" },
          { title: "Seja Voluntário", url: "/voluntariado" },
          { title: "Faça nossa preparação", url: "/404" },
          { title: "Dicas para Bike Anjo", url: "/dicas-bike-anjo" },
        ],
      },
      { title: "Ajude como instituição", url: "/ajude-como-instituicao" },
    ],
  },
  {
    title: "Receba Ajuda",
    children: [
      { title: "Como Nós Ajudamos", url: "/como-nos-ajudamos" },
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
          { title: "Bike Anjas", url: "/bike-anjas" },
          { title: "Pedala ou Repassa", url: "/pedala-ou-repassa" },
          { title: "De Bike para o Trabalho", url: "/404" },
        ],
      },
      {
        title: "Campanhas",
        children: [
          { title: "Dia Mundial Sem Carro", url: "/dia-mundial-sem-carro" },
          { title: "Bicicleta nos Planos", url: "/404" },
        ],
      },
      { title: "Anjos na Sua Cidade", url: "/404" },
      { title: "Veja todas as iniciativas", url: "/iniciativas" },
    ],
  },
  {
    title: "Sobre Nós",
    children: [
      { title: "Como funciona", url: "/como-funciona" },
      { title: "Quem somos", url: "/quem-somos" },
      { title: "Redes Sociais", url: "/social-media" },
      { title: "Bike Anjo na Mídia", url: "/404" },
      { title: "Blog", url: "/404" },
    ],
  },
  { title: "Contato", url: "/contato" },
];

export type MenuItem = {
  title: string;
  url?: string;
  children?: MenuItem[];
};
