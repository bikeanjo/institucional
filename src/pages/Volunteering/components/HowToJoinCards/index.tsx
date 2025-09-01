import type { ReactNode } from "react";
import { Container, Title, Text } from "./styles";

function HowToJoinCards(): ReactNode {
  const cards: {
    id: string;
    imgUrl: string;
    cardColor: string;
    title: string;
    text: string;
  }[] = [
    {
      id: "card1",
      imgUrl: "/assets/images/HowToJoinCards/pink-icon-bike-anjo.png",
      cardColor: "#E1216D",
      title: "Ensinar a Pedalar",
      text: "Compartilhar o que você sabe pode transformar vidas. Como voluntário ou voluntária da Bike Anjo, você ajuda pessoas a superarem medos e conquistarem autonomia ao aprender a pedalar. É mais do que ensinar: é construir confiança e promover liberdade sobre duas rodas.",
    },
    {
      id: "card2",
      imgUrl: "/assets/images/HowToJoinCards/blue-icon-bike-anjo.png",
      cardColor: "#1C97C5",
      title: "Indicação de Rotas",
      text: "Você conhece caminhos seguros e tranquilos para pedalar na sua cidade? Então já pode ajudar muita gente! Indicar rotas é uma forma simples e poderosa de incentivar o uso da bicicleta e tornar o pedal mais acessível para quem está começando.",
    },
    {
      id: "card3",
      imgUrl: "/assets/images/HowToJoinCards/orange-icon-bike-anjo.png",
      cardColor: "#ED601C",
      title: "Companhia no Trânsito",
      text: "Ser Bike Anjo é pedalar junto. Acompanhar alguém no trânsito é oferecer apoio e segurança para quem quer adotar a bike como meio de transporte. Seu olhar atento e experiência tornam o trajeto mais leve e confiante para quem está começando.",
    },
    {
      id: "card4",
      imgUrl: "/assets/images/HowToJoinCards/green-icon-bike-anjo.png",
      cardColor: "#4D7A18",
      title: "Praticar Pedaladas",
      text: "Organizar ou participar de pedaladas em grupo fortalece laços, estimula a mobilidade ativa e espalha alegria pelas ruas. Seja nas EBAs, nas ciclofaixas ou por aí, pedalar em coletivo mostra que a cidade é melhor quando é de todas as pessoas.",
    },
  ];
  return (
    <>
      {cards.map((card) => (
        <Container key={card.id} cardColor={card.cardColor}>
          <div className="titleBox">
            <img src={card.imgUrl} />
            <Title cardColor={card.cardColor}>{card.title}</Title>
          </div>
          <hr />
          <div className="content">
            <Text>{card.text}</Text>
          </div>
        </Container>
      ))}
    </>
  );
}

export default HowToJoinCards;
