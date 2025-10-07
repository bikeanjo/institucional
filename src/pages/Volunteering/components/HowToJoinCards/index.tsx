import type { ReactNode } from "react";
import { Container, Title, Text } from "./styles";
import { Colors } from "@colors";
import { DoubleBikersIcon } from "@components/Icons/DoubleBikersIcon";

function HowToJoinCards(): ReactNode {
  const cards = [
    {
      id: "card1",
      imgUrl: "/assets/icons/pink-icon-bike-anjo.webp",
      cardColor: "#E1216D",
      title: "Aprenda a Pedalar",
      text: "A Bike Anjo conecta quem quer aprender a pedalar com pessoas voluntárias que ensinam, de forma gratuita. O atendimento é individual, respeita o ritmo de cada pessoa e acontece em locais públicos da cidade.",
    },
    {
      id: "card2",
      imgUrl: "/assets/icons/blue-icon-bike-anjo.webp",
      cardColor: "#1C97C5",
      title: "Conheça Rotas Seguras",
      text: "Se você já pedala e quer encontrar caminhos mais seguros, pode pedir ajuda na plataforma. Uma pessoa voluntária vai indicar rotas pensando em segurança, conforto e praticidade para o seu trajeto.\n\n",
    },
    {
      id: "card3",
      cardColor: Colors["Orange_50"],
      title: "Companhia no Trânsito",
      text: "Se você quer começar a usar a bicicleta como transporte, pode contar com o apoio de uma pessoa voluntária. Ela pedala junto, ajuda a entender o fluxo das ruas e dá dicas para circular com mais segurança no dia a dia.",
    },
    {
      id: "card4",
      imgUrl: "/assets/icons/green-icon-bike-anjo.webp",
      cardColor: "#4D7A18",
      title: "Pratique pedaladas",
      text: "Se você quer ganhar mais confiança na bike, pode encontrar uma pessoa voluntária para praticar. Esses encontros ajudam a melhorar o equilíbrio, o controle e a se sentir mais à vontade para pedalar na cidade.",
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
