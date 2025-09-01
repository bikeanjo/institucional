import type { JSX } from "react";
import Header from "../Components/Header";
import BackButton from "./ButtonBack";
import AboutPedalaOuRepassa from "./AboutPedalaOuRepassa";
import CityNotListed from "./CityNotListed";
import Container from "../Components/Container";
import Hero from "../../assets/header/pedala-ou-repassa.webp";

function formatDescription(description: string) {
  return description
    .split("\n\n")
    .map((item, index) => (index === 0 ? item : `\t• ${item}`))
    .join("\n");
}

const findCitySteps = [
  {
    number: 1,
    title: "Captação das Bicicletas",
    description: formatDescription(
      "Recebemos doações de bikes abandonadas ou sem uso de pessoas físicas, condomínios, instituições e empresas. A coleta pode ser feita por meio de:\n \n\nRedes sociais e e-mail da rede Bike Anjo;\n\nParcerias com síndicos e administradores de condomínios;\n\nCampanhas locais ou nacionais.",
    ),
  },
  {
    number: 2,
    title: "Aprovação e Coleta Legal",
    description: formatDescription(
      "Nos casos de prédios ou condomínios:\n \n\nApresentamos a proposta ao síndico e moradores;\n\nAguardamos aprovação em assembleia;\n\nUm aviso é fixado no bicicletário para que moradores possam identificar suas bikes (prazo mínimo de 30 dias);\n\nApós o prazo, as bikes não reclamadas são recolhidas com termo de cooperação oficial, garantindo segurança jurídica para todos.",
    ),
  },
  {
    number: 3,
    title: "Reparo e Preparação",
    description:
      "As bicicletas recolhidas são revisadas por oficinas parceiras ou mecânicos voluntários. Lojas locais também podem doar peças ou colaborar com serviços técnicos. A ideia é deixar cada bike pronta para um novo começo!",
  },
  {
    number: 4,
    title: "Entrega a Quem Precisa",
    description:
      "As bicicletas são doadas para pessoas previamente mapeadas por projetos sociais, formulários locais ou indicações — priorizando quem realmente fará uso da bike para mobilidade, trabalho ou lazer.",
  },
  {
    number: 5,
    title: "Compartilhe esse momento!",
    description:
      "A entrega da bike é sempre uma festa! Queremos muito que você registre esse momento, marque @bikeanjo nas redes e, se possível, conte a história no nosso blog nacional para inspirar mais pessoas.",
  },
];

function PedalaOuRepassa(): JSX.Element {
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Pedala ou Repassa</h2>
      </Header>
      <BackButton />
      <Container>
        <AboutPedalaOuRepassa />
        <CityNotListed
          title="Como funciona??"
          sub="Queremos dar nova vida a bicicletas esquecidas e levá-las até quem mais precisa! O processo é simples, colaborativo e transparente:"
          steps={findCitySteps}
        />
      </Container>
    </>
  );
}

export default PedalaOuRepassa;
