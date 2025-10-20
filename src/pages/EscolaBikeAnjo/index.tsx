import { useState, useEffect, type JSX } from "react";
import {
  Header,
  Container,
  BreadCrumb,
  ScrollSpyMenu,
  MapInteractive,
  Section,
  Text,
  Title,
} from "@components";
import FindLocalArticulation from "../SocialMedia/components/FollowLocalArticulations/FindLocalArticulation";
import AboutEBA from "./AboutEBA";
import CityNotListed from "./CityNotListed";
import { loadTextContent } from "@/textContent";
import type { LocalOrganization } from "@components/Articulations";
import { Colors } from "@colors";
import SEO from "@components/Seo/seo";

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

function EscolaBikeAnjo(): JSX.Element {
  const Hero = {
    url: "/assets/header/escola-bike-anjo.webp",
    backgroundPositionDesktop: "50% 40%",
    backgroundPositionMobile: "50% 40%",
  };

  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(
    null,
  );
  const [localOrg, setLocalOrg] = useState<LocalOrganization[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    void loadTextContent("localOrg").then((data) =>
      setLocalOrg(data as LocalOrganization[]),
    );
  }, []);

  return (
    <>
      <SEO />

      <Header secondary Hero={Hero}>
        <h2>Escola Bike Anjo (EBA)</h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <AboutEBA />
        <Section>
          <Title color={Colors["Pink_50"]} sizeDesktop="48px" sizeMobile="32px">
            Conecte-se com uma articulação local
          </Title>
          <Text>
            Encontre a articulação Bike Anjo mais próxima de você! Cada cidade
            tem pessoas voluntárias prontas para ajudar com dicas, eventos e
            orientações. Veja nosso mapa e use a busca abaixo, siga o perfil
            local e descubra como receber apoio pra pedalar com mais segurança e
            autonomia.
          </Text>
          <MapInteractive
            localOrg={localOrg}
            selectedCoords={selectedCoords}
            setSelectedCoords={setSelectedCoords}
          />
          <FindLocalArticulation
            localOrg={localOrg}
            setSelectedCoords={setSelectedCoords}
          />
        </Section>
        <CityNotListed steps={findCitySteps} />
      </Container>
    </>
  );
}

export default EscolaBikeAnjo;
