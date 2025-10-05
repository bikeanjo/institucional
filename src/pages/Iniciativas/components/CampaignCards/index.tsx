import { ContainerCards } from "../ProjectCards/styles";
import { useRef } from "react";
import { Card } from "../Card/Index";
import { Colors } from "@colors";

export function CampaignCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "Card1",
      title: "Dia Mundial Sem Carro",
      textDesktop:
        "No Dia Mundial Sem Carro, a cidade respira diferente. A gente convida todo mundo a experimentar a cidade de outro jeito: com menos ruído, mais pedal e mais conexão. Um só dia que pode inspirar muitos!",
      textMobile: "Resumo até 110 caracteres",
      button: "Conhecer",
      link: "/dia-mundial-sem-carro",
      color: Colors["Blue_60"],
    },
    {
      id: "Card2",
      title: "Bicicleta nos Planos",
      textDesktop:
        "Mais bikes, menos blá-blá-blá! Lutamos por políticas públicas que priorizem a mobilidade ativa. Com dados, escuta e articulação, queremos a bicicleta nos planos das cidades.",
      textMobile: "Resumo até 110 caracteres",
      color: Colors["Orange_50"],
    },
    {
      id: "Card3",
      title: "Ação para não ciclistas",
      textDesktop:
        "Tem espaço pra todo mundo na transformação das cidades. Aqui na Bike Anjo, ensinamos outras formas de ajudar a iniciativa da bicicleta mesmo que não pedalando",
      textMobile: "Resumo até 110 caracteres",
      color: Colors["Green_70"],
    },
  ];

  return (
    <>
      <ContainerCards ref={scrollRef}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            textDesktop={card.textDesktop}
            textMobile={card.textMobile}
            button={card.button}
            link={card.link}
            color={card.color}
          />
        ))}
      </ContainerCards>
    </>
  );
}
