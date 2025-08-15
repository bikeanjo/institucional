import { ContainerCards } from "../ProjectCards/styles";
import { useRef } from "react";
import { Card } from "../Card/Index";

export function CampaignCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "Card1",
      title: "Dia Mundial Sem Carro",
      textDesktop:
        " O tradicional Dia Mundial Sem Carro ocorre sempre no dia 22 de setembro e mobiliza pessoas do mundo todo para desestimular o uso do carro e optar por se deslocar de forma mais sustentável. A Bike Anjo não poderia ficar de fora dessa e tem mobilizado sua rede para fazer ações em comum",
      textMobile: "Resumo até 110 caracteres",
      button: "Conhecer",
    },
    {
      id: "Card2",
      title: "Bicicleta nos Planos",
      textDesktop:
        "O tradicional Dia Mundial Sem Carro ocorre sempre no dia 22 de setembro e mobiliza pessoas do mundo todo para desestimular o uso do carro e optar por se deslocar de forma mais sustentável. A Bike Anjo não poderia ficar de fora dessa e tem mobilizado sua rede para fazer ações em comum",
      textMobile: "Resumo até 110 caracteres",
      button: "Conhecer",
    },
    {
      id: "Card3",
      title: "Ação para não ciclistas",
      textDesktop:
        "A Bike Anjo iniciou em 2015 um processo para pensarmos em conteúdos e ações direcionadas a “não ciclistas” pensando em mobilizar um público que não necessariamente usa a bicicleta cotidianamente, mas tem uma influência enorme sobre o conforto e motivação dos ciclistas nas ruas. São estes: motoristas comuns ou profissionais (de táxi, ônibus, vans e caminhões) e motociclistas. Neste início de campanha, compilamos uma série de materiais sobre como você pode engajar e sensibilizar este público. Confira AQUI.",
      textMobile: "Resumo até 110 caracteres",
      button: "Conhecer",
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
          />
        ))}
      </ContainerCards>
    </>
  );
}
