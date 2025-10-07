import type { ReactNode } from "react";
import { Container, Title, Text } from "./styles";
import { Colors } from "@colors";
import { DoubleBikersIcon } from "@components/Icons/DoubleBikersIcon";

function HowToJoinCards(): ReactNode {
  const cards = [
    {
      id: "card1",
      cardColor: Colors["Pink_50"],
      title: "Ensinar a Pedalar",
      text: "Compartilhar o que você sabe pode transformar vidas. Como voluntário ou voluntária da Bike Anjo, você ajuda pessoas a superarem medos e conquistarem autonomia ao aprender a pedalar. É mais do que ensinar: é construir confiança e promover liberdade sobre duas rodas.",
    },
    {
      id: "card2",
      cardColor: Colors["Blue_60"],
      title: "Indicação de Rotas",
      text: "Você conhece caminhos seguros e tranquilos para pedalar na sua cidade? Então já pode ajudar muita gente! Indicar rotas é uma forma simples e poderosa de incentivar o uso da bicicleta e tornar o pedal mais acessível para quem está começando.",
    },
    {
      id: "card3",
      cardColor: Colors["Orange_50"],
      title: "Companhia no Trânsito",
      text: "Ser Bike Anjo é pedalar junto. Acompanhar alguém no trânsito é oferecer apoio e segurança para quem quer adotar a bike como meio de transporte. Seu olhar atento e experiência tornam o trajeto mais leve e confiante para quem está começando.",
    },
    {
      id: "card4",
      cardColor: Colors["Green_70"],
      title: "Praticar Pedaladas",
      text: "Organizar ou participar de pedaladas em grupo fortalece laços, estimula a mobilidade ativa e espalha alegria pelas ruas. Seja nas EBAs, nas ciclofaixas ou por aí, pedalar em coletivo mostra que a cidade é melhor quando é de todas as pessoas.",
    },
  ];
  return (
    <>
      {cards.map((card) => (
        <Container key={card.id} cardColor={card.cardColor}>
          <div className="titleBox">
            <DoubleBikersIcon color={card.cardColor} width={105} height={64} />
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
