import type { ReactNode } from "react";
import Header from "../Components/Header";
import FindLocalArticulation from "../SocialMedia/components/FollowLocalArticulations/FindLocalArticulation";
import BackButton from "./ButtonBack";
import AboutEBA from "./AboutEBA";
import CityNotListed from "./CityNotListed";
import Map from "./Map";

const findCitySteps = [
  {
    number: 1,
    title: "Faça seu pedido",
    description:
      "Comece o cadastro, clique em Quero Aprender e escolha entre aprender a pedalar, dica de rota ou acompanhamento no trânsito.",
  },
  {
    number: 2,
    title: "Aguarde a conexão",
    description:
      "A plataforma conecta você com um Bike Anjo da sua cidade. O contato será feito por e-mail ou direto pelo site.",
  },
  {
    number: 3,
    title: "Combine o encontro",
    description:
      "Converse com o Bike Anjo e definam local, data e horário do encontro. O atendimento é gratuito e acolhedor.",
  },
];

function EscolaBikeAnjo(): ReactNode {
  return (
    <>
      <Header secondary>
        <h2>Escola Bike Anjo (EBA)</h2>
      </Header>
      <div>
        <BackButton />
        <AboutEBA />
        <Map />
        <div style={{ margin: "16px 202px" }}>
          <FindLocalArticulation />
        </div>
        <CityNotListed
          title="Não encontrou sua cidade no mapa?"
          sub={`Caso sua cidade não esteja no mapa, você pode tentar o segundo caminho:\nCadastrar-se em nossa plataforma online e solicitar um Bike Anjo por lá.`}
          steps={findCitySteps}
        />
      </div>
    </>
  );
}

export default EscolaBikeAnjo;
