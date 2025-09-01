import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { QuestionAccordion } from "../Accordion";
import { AccordionWrapper } from "./styles";

const accordionItems = [
  {
    title: "Problemas com ônibus?",
    content:
      "Ligue 156 (24h) e denuncie. É necessário linha, código do ônibus, horário e local.",
  },
  {
    title: "Problemas com táxis?",
    content:
      "Ligue para o DTP 2692-3302, 2692-4094, 2291-5416, 2796-3299 (seg-sex 8h-17h) e denuncie. É necessário placa, horário e local.",
  },
  {
    title: "Problemas com uma viatura da CET?",
    content:
      "Ligue 1188 (24h) e denuncie. É necessário placa, código do carro, horário e local.",
  },
  {
    title: "Problemas com carros de empresa?",
    content:
      "Procure o “como estou dirigindo” ou, se não houver, anote o nome da empresa e a placa. Depois procure no Google e reclame. Isso faz uma diferença enorme no nosso trânsito",
  },
  {
    title: "Problemas com carros particulares?",
    content:
      "Nem sempre é fácil, mas às vezes uma boa conversa pode ajudar bastante. Se for possível e seguro, aproveite um momento em que o carro pare no trânsito e tente uma abordagem gentil. Explicar com calma o que aconteceu e por que aquilo foi perigoso pode abrir espaço para reflexão. Um simples “todos queremos uma cidade melhor” já pode ser uma semente de mudança no caminho.",
  },
  {
    title: "Se envolveu em algum acidente com carro?",
    content:
      "Deve-se lembrar que o Código de Trânsito Brasileiro deixa explícito que a preferência é sempre do ciclista, e portanto o motorista sempre deve zelar pela sua segurança. E assim deve ser norteada a discussão do acidente caso tenha dado algum dano para um dos veículos. A primeira coisa a fazer em caso de acidente é ANOTAR A PLACA DO CARRO. Em seguida, não saia do local do acidente, ligue para a Polícia Militar (190) e para a emergência do SAMU (192) ou Bombeiros (193). Assim você garante que a ocorrência seja registrada na hora, o motorista será direcionado à delegacia e você ao hospital (mesmo que seja uma unha quebrada!).",
  },
  {
    title: "Viu irregularidades na rua?",
    content:
      "Buracos na calçada, sinalização ruim ou semáforos apagados, por exemplo Ligue 1188 (24h) e avise.",
  },
  {
    title: "No prédio do seu trabalho não tem bicicletário nem chuveiro?",
    content:
      "Se o prédio onde você trabalha ainda não tem bicicletário ou chuveiro, vale conversar com a administração. Uma mensagem respeitosa, com argumentos práticos, pode fazer toda a diferença. Você também pode convidar colegas ciclistas pra reforçar esse pedido de forma coletiva. Mostrar que mais gente usa a bike ajuda a criar soluções melhores pra todo mundo.",
  },
];

export default function RideWithVoice() {
  return (
    <>
      <Title>Pedale com voz!</Title>
      <SubTitle>
        Pedalar é incrível, mas também é um ato de cidadania. Veja o que fazer
        em situações comuns no trânsito e como cobrar melhorias para uma cidade
        mais segura e justa pra todo mundo.
      </SubTitle>
      <AccordionWrapper>
        {accordionItems.map((item) => (
          <QuestionAccordion
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </AccordionWrapper>
    </>
  );
}
