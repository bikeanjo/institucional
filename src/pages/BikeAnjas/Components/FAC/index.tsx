import { QuestionAccordion } from "../../../DicasParaBikeAnjo/components/Accordion";
import { Accordion } from "./styles";

const accordionItems = [
  {
    title: "O QUE SÃO AS BIKE ANJAS?",
    content:
      "Grupo de mulheres dentro da Rede do Bike Anjo que oferece suporte interno às demais voluntárias mulheres e, além disso,  exerce o papel de empoderamento de outras mulheres que querem pedalar.",
  },
  {
    title: "DEIXA ELA FALAR!",
    content:
      "Já notou que, quando uma mulher está falando, muitas vezes ela é interrompida? E que em grande parte dessas vezes quem faz isso é um homem? Temos um termo para isso: “manterrupting”, que faz uma piada com uma interrupção causada por um homem (man). Isso não é por acaso e é SIM uma forma de machismo! Atente-se para não ser esse cara, cara!\n\nConheça outros termos semelhantes e seus significados e observe os comportamentos de homens (e o seu!) em relação às mulheres:\n\n Manterrupting (A palavra é uma junção de man (homem) e interrupting (e interrupção) Em tradução livre, manterrupting significa “homens que interrompem”) – a prática sexista de interromper uma mulher quando ela está falando. Fonte com exemplos: Nexo\n\n Bropriating (O termo é uma junção de bro (curto para brother, irmão, mano) e appropriating(apropriação)) – o termo refere-se a quando um homem se apropria da ideia de uma mulher e leva o crédito por ela em reuniões. Pode parecer surreal, mas isso acontece com muito mais frequência do que imaginam!\n\n Mansplaining (O termo é uma junção de man (homem) e explaining (explicar). É quando um homem dedica seu tempo para explicar a uma mulher como o mundo é redondo, o céu é azul e 2+2=4)  – Diariamente, somos pegas por essa situação: um homem, depois de nos interromper e se apropriar do que estávamos querendo dizer, tenta nos EXPLICAR algo que nós já sabemos! Sim! Nós sabemos muita coisa, sabiam?\n\n Gaslighting (a origem do termo é ligada a peça teatral Gas Light (1938) e às suas adaptações para o cinema (1940 e 1944), em função da manipulação psicológica sistemática utilizada pelo personagem principal contra uma vítima. Hoje é utilizado também na literatura clínica) É uma das mais comuns violências (não físicas) que sofremos! É uma emocional por meio de manipulação psicológica, que leva a mulher e todos ao seu redor acharem que ela enlouqueceu ou que é incapaz. Parece exagero, né? Mas é assim que vocês se colocam quando algo não sai como o esperado por vocês. Marque um ponto para cada vez que as frases a seguir já foram ditas por você (em qualquer situação: em casa, no trabalho, entre amigos…):\n\n “Você está exagerando”\n “Nossa, você é sensível demais”\n “Para de surtar”\n “Você está delirando”\n “Cadê seu senso de humor?”\n “Não aceita nem uma brincadeira?” / “Tá bravinha, hein?”\n E o mais clássico: “você está louca”.\n Está de TPM?\n\n Deixa eu adivinhar!\n Você totalizou 8 pontos?!\n\n Em suma, esse tópico tem UM apelo: deixe que a mulher fale! Permita que ela conclua o que começou a falar, deixe que ela apresente suas ideias e projetos, deixe que ela compartilhe suas experiências, desejos, dores. OUÇA o que ela está falando, e, muitas vezes, ensinando! Não explique coisas que elas já sabem e, por fim, não duvide e diminua uma mulher a adjetivos que te isentam de qualquer situação.",
  },
  {
    title: "POR QUE É MACHISMO?",
    content:
      "Como mencionamos acima, o machismo atinge muito mais níveis do que os olhos masculinos conseguem ver. E isso não é um superpoder nosso, mas sim um privilégio dos homens. Está na dúvida sobre uma situação ter sido machista? Faça o seguinte exercício: substitua a mulher da situação por um homem. Você teria a mesma reação/atitude? Tente novamente!",
  },
  {
    title: "HOMEM NÃO PODE FALAR SOBRE GÊNERO?",
    content:
      "Pode.\n\n Não queremos negar o espaço de discussão entre homens e mulheres e sim priorizar que mulheres da rede Bike Anjo tenham a possibilidade de ocupar espaços que não são direcionados para mulheres, ou seja, que a rede Bike Anjo também pode ser um agente de mudança cultural voltada para confrontar o machismo nos espaços de discussão. ",
  },
  {
    title: "COMO POSSO SER UMA PESSOA MENOS MACHISTA?",
    content:
      "Estamos dispostas a ajudá-los com essa desconstrução/reconstrução diária. Se tem dúvidas sobre sua atitude, pense, questione, observe e se a dúvida ainda permanecer, pergunte para alguma Anja o que ela entende da situação.",
  },
  {
    title: "O QUE GÊNERO E MOBILIDADE TEM DE IMPORTÂNCIA?",
    content:
      "As mulheres têm um padrão de deslocamento diferente dos homens e utilizam mais o transporte coletivo e a caminhada como forma de deslocamento. Leia mais a respeito aqui.\n\n Em São Paulo o total de ciclistas mulheres nas ruas é irrisório comparado com os homens. Segundo dados do GT de Gênero da Ciclocidade de 2015, nas contagens realizadas apenas 6% do total de ciclistas eram mulheres. A pesquisa também mostra que a um dos maiores problemas enfrentados pelas mulheres é o medo de compartilhar a via. Esse dado evidencia a importância do grupo de apoio e das dicas que as Bike Anjas compartilham.",
  },
  {
    title: "O QUE É ESPAÇO DE FALA?",
    content:
      "Como falamos anteriormente, as mulheres têm muita experiência no quesito “ser mulher” e, em situações em que seja necessário falar SOBRE mulheres, se houver uma mulher que possa comparecer e falar sobre o assunto, é muito melhor, não é? É o espaço de fala DELA. Da mesma forma ao se referir a outros grupos específicos como LGBT, étnicos, etc. Só se fala em nome desses grupos caso não estejam presentes (e deve-se sempre procurar garantir suas presenças), caso contrário esse espaço de fala é del@s.",
  },
];

export default function FAC() {
  return (
    <>
      <Accordion>
        {accordionItems.map((item) => (
          <QuestionAccordion
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </Accordion>
    </>
  );
}
