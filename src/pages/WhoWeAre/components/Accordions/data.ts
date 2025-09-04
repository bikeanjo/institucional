export interface AccordionItem {
  id: string;
  colorTag: string;
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
    id: "OurAtitudes",
    accordions: [
      {
        id: "accordion1",
        title: "Leveza",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "Praticamos uma comunicação não violenta. Muitas vezes expressamos nossas opiniões de forma muito incisiva e podemos invadir, mesmo sem querer, o espaço do outro de forma agressiva. Quando sua opinião divergir da opinião do próximo, exponha seus argumentos de forma leve e compreensiva. Uma boa dica: quando pensar em começar uma frase com “Mas…”, use “E…” para somar, em vez de divergir. ;-)",
          },
          {
            id: "item2",
            colorTag: "#FFDE18",
            text: "Procuramos respeitar sempre os limites individuais das pessoas. Cada indivíduo tem uma opinião e uma trajetória de vida única.",
          },
          {
            id: "item3",
            colorTag: "#FF6F01",
            text: "Tentamos solucionar conflitos pessoais diretamente com os envolvidos. Discussões abertas aos outros podem ser mais desgastantes do que uma boa conversa franca entre os interessados.",
          },
          {
            id: "item4",
            colorTag: "#FF6F01",
            text: "Quando recebemos um feedback negativo, ouvimos com empatia. Não reagimos buscando justificativas ou defesas. Confiamos no outro, dê espaço para si mesmo e tente refletir sobre o que pode lhe ser útil nessa situação.",
          },
          {
            id: "item5",
            colorTag: "#FF6F01",
            text: "Evitamos discussões desnecessárias. Sempre refletindo se o tema a ser debatido traz algum potencial de reflexão e crescimento para o grupo ou apenas causa desgastes, como as polêmicas discussões sobre o uso do capacete.",
          },
        ],
      },
      {
        id: "accordion2",
        title: "Respeito á Diversidade",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "Respeitamos o próximo. Somos gentis e educadas/os com as pessoas que atendemos com voluntárias/os e todas as outras pessoas que estiverem ao seu redor. Entendemos que cada um(a) possui diferentes limites, traumas e medos a serem superados. Somos pacientes e, caso precise, pedimos ajuda de outra/o voluntária/o. Rede/voluntários.",
          },
          {
            id: "item2",
            colorTag: "#FFDE18",
            text: "Abraçamos as diferenças. O Bike Anjo não faz distinção ou cria preferências entre as pessoas que recebe. Buscamos acolher a toda/os da mesma forma.",
          },
          {
            id: "item3",
            colorTag: "#FFDE18",
            text: "Praticamos a empatia. Coloquem-se no lugar da outra pessoa; tanto no lugar daquelas que você atende como na da/os outra/os voluntária/os do grupo.",
          },
          {
            id: "item4",
            colorTag: "#AD0003",
            text: "Assédios e abusos contra qualquer pessoa (voluntário ou público em geral) não são aceitos no Bike Anjo.",
          },
          {
            id: "item5",
            colorTag: "#AD0003",
            text: "Não aceitamos comportamentos homofóbicos, machistas, racistas ou que envolvam discriminação de qualquer tipo.",
          },
        ],
      },
      {
        id: "accordion3",
        title: "Horizontalidade",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "As relações interpessoais entre voluntária/os do Bike Anjo se pautam pela horizontalidade, de modo que todas as opiniões tem o mesmo valor",
          },
          {
            id: "item2",
            colorTag: "#8BC540",
            text: "Valorizamos as trocas e construções coletivas. Ser voluntário no Bike Anjo é fazer parte de uma experiência dinâmica na qual as decisões são baseadas no diálogo e na aprendizagem coletiva",
          },
          {
            id: "item3",
            colorTag: "#FFDE18",
            text: "Assuma seu lugar no grupo. Todas/os podem (e devem) ter a iniciativa de ajudar a melhorar nossas ações e a nossa organização. Somos toda/os responsáveis pelo que acontece no Bike Anjo.",
          },
          {
            id: "item4",
            colorTag: "#FFDE18",
            text: "Na horizontalidade, algumas decisões podem ser descentralizadas do grupo a fim de dar maior dinamismo às ações, mas não podemos fugir das diretrizes previamente tomadas.",
          },
          {
            id: "item5",
            colorTag: "#FF6F01",
            text: "Consultamos o grupo. A horizontalidade não exclui a necessidade de consultar o grupo sobre ações que envolvam o nome do Bike Anjo (como em eventos, debates públicos, feiras, palestras e parcerias).",
          },
          {
            id: "item6",
            colorTag: "#FF6F01",
            text: "Somos transparente. As proposições de parcerias e a construção de ações devem ser públicas e abertas à colaboração.",
          },
        ],
      },
      {
        id: "accordion4",
        title: "Consenso com Bom Senso",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "Abraçamos o consenso como o modelo de tomada de decisões do Bike Anjo. As decisões são tomadas coletivamente em reuniões, encontros ou por meio virtual, e todos os voluntários podem propor ao grupo suas ideias e apresentar suas dúvidas.",
          },
          {
            id: "item2",
            colorTag: "#8BC540",
            text: "O consenso muitas vezes é construído pelo consentimento da maioria, isso significa que poderá haver opiniões divergentes. Alguns membros do grupo podem consentir com uma proposta porque escolhem cooperar com o direcionamento geral do coletivo.",
          },
          {
            id: "item3",
            colorTag: "#8BC540",
            text: "Em caso de ações do Bike Anjo de cunho nacional (ex: uma campanha online ou midiática), consultamos a Articulação Pedivela (grupo de articulação nacional) para discussão e consenso do projeto.",
          },
          {
            id: "item4",
            colorTag: "#FF6F01",
            text: "Entendemos que, para haver um avanço coletivo, é preciso muitas vezes flexibilizar nossa posição, observando se a proposta é aceitável/tolerável para o grupo.",
          },
        ],
      },
      {
        id: "accordion5",
        title: "Apartidarismo e Leveza Política",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "Procuramos nos relacionar apenas com atividades ligadas à mobilidade, não nos envolvendo com atividades voltadas exclusivamente para a promoção de empresas ou entidades.",
          },
          {
            id: "item2",
            colorTag: "#FFDE18",
            text: "Procuramos transmitir mensagens positivas e leves para estimular o uso da bicicleta. Evitamos o embate político ou posicionamentos que gerem atritos imediatos.",
          },
          {
            id: "item3",
            colorTag: "#AD0003",
            text: "O Bike Anjo não se envolve com política de cunho partidário, nem com a promoção da imagem pessoal de agentes políticos.",
          },
        ],
      },
      {
        id: "accordion6",
        title: "Humildade",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "Reconhecemos e acatamos as decisões tomadas pelo grupo, mesmo que você não tenha participado delas e/ou não concorde com elas. O Bike Anjo é um grupo dinâmico; nem todas as pessoas podem participar o tempo todo de todas as atividades e por isso trabalhamos internamente para que todos reconheçam e vivenciem os valores coletivos e possam tomar decisões pautadas neles.",
          },
          {
            id: "item2",
            colorTag: "#FF6F01",
            text: "Ouvimos. Quando receber críticas, entenda que não são ataques pessoais.",
          },
          {
            id: "item3",
            colorTag: "#FF6F01",
            text: "Exercitamos a capacidade de mudar. O Bike Anjo é um espaço amigável onde você é acolhido para reconhecer erros, falhas e rever opiniões. Estamos aqui para ajudar pessoas e melhorar como indivíduos, sempre.",
          },
        ],
      },
      {
        id: "accordion7",
        title: "Compromentimento",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "A sua atuação no Bike Anjo é voluntária, mas isso não quer dizer que ela seja descompromissada. Ao assumir qualquer compromisso em nome do Bike Anjo, esforce-se para executá-lo da melhor maneira possível, prezando pela qualidade e pela pontualidade.",
          },
          {
            id: "item2",
            colorTag: "#FFDE18",
            text: "Procuramos participar ativamente das decisões do grupo. Caso considere que não tenha nada a acrescentar, diga pelo menos que está de acordo com o que foi construído.",
          },
          {
            id: "item3",
            colorTag: "#FF6F01",
            text: "Se por acaso você não puder mais levar adiante um compromisso assumido, comunique o grupo e busque uma pessoa para substituí-lo. Passe para ela todas as instruções necessárias para o sucesso da ação.",
          },
          {
            id: "item4",
            colorTag: "#AD0003",
            text: "O descumprimento de forma reiterada de compromissos assumidos com o grupo ou com com terceiros em nome do Bike Anjo deve ser considerado falta de comprometimento com as outras pessoas e com os princípios do Bike Anjo",
          },
        ],
      },
    ],
  },
  {
    id: "InteractionGuide",
    accordions: [
      {
        id: "accordion1",
        title: "Para Todas as Pessoas Voluntárias",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "Cuidamos dos equipamentos e bicicletas do Bike Anjo. Respeitando as regras de uso que foram criadas para melhor organizar o uso coletivo.",
          },
          {
            id: "item2",
            colorTag: "#8BC540",
            text: "Usamos os canais de comunicação de forma adequada e tenha sempre em mente: menos é mais. Seja objetivo nos debates; textos longos são cansativos e correm o risco de serem ignorados.",
          },
          {
            id: "item3",
            colorTag: "#FFDE18",
            text: "Cuidado com convites da imprensa ou para palestras. Tente entender se a pauta busca de alguma maneira desestimular o uso da bicicleta e estimular a cultura do medo e busque reverter a situação, influenciando a/o jornalista com bons argumentos. Na dúvida, não hesite em consultar o grupo.",
          },
          {
            id: "item4",
            colorTag: "#FE7D1A",
            text: "Cuidado com convites da imprensa ou para palestras. Tente entender se a pauta busca de alguma maneira desestimular o uso da bicicleta e estimular a cultura do medo e busque reverter a situação, influenciando a/o jornalista com bons argumentos. Na dúvida, não hesite em consultar o grupo.",
          },
        ],
      },
      {
        id: "accordion2",
        title: "Para as Novas Pessoas Voluntárias",
        items: [
          {
            id: "item1",
            colorTag: "#FFDE18",
            text: "Não se intimide. Sinta-se à vontade para participar e fazer perguntas",
          },
          {
            id: "item2",
            colorTag: "#FFDE18",
            text: "Para interagir melhor, busque conhecer como funcionam os canais de comunicação, quais pautas já foram ou estão sendo debatidas, quais ações foram propostas nos planos, etc.",
          },
        ],
      },
      {
        id: "accordion3",
        title: "Se Você Já é uma Pessoa Voluntária na Bike Anjo",
        items: [
          {
            id: "item1",
            colorTag: "#8BC540",
            text: "Procuramos acolher bem os novas/os voluntários, apresentando os valores do Bike Anjo, os nossos canais de comunicação e as atividades que realizamos.",
          },
          {
            id: "item2",
            colorTag: "#8BC540",
            text: "Colocamos em prática tudo o que sabemos sobre o funcionamento do grupo e lembramos que o discurso precisa acompanhar a prática.",
          },
        ],
      },
    ],
  },
];
