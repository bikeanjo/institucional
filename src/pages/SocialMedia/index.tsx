import type { JSX } from "react";
import Header from "@components/Header";
import FollowSocialMedia from "./components/FollowSocialMedia";
import Share from "./components/Share";
import LocalArticulations from "./components/FollowLocalArticulations";
import Container from "@components/Container";
import Hero from "../../assets/header/redes-sociais.webp";

function SocialMedia(): JSX.Element {
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Redes Sociais</h2>
      </Header>
      <Container>
        <FollowSocialMedia
          title="Siga nossas redes sociais:"
          sub="Nos acompanhe de perto! Clique nos cards abaixo e fique por dentro das novidades, eventos, conteúdos e histórias que a gente compartilha por aí."
        />
        <Share
          title="Compartilhe:"
          sub="Ajude a espalhar a Bike Anjo! Compartilhe nosso site com sua rede e leve mais gente a descobrir, aprender e se envolver com a transformação que a bicicleta promove."
        />
        <LocalArticulations
          title="Siga as Articulações Locais"
          sub="Este mapa mostra onde estão todas as articulações Bike Anjo. Para ver redes, dias e mais detalhes, use o buscador abaixo e digite sua cidade."
        />
      </Container>
    </>
  );
}

export default SocialMedia;
