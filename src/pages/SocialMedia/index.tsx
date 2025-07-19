import type { ReactNode } from "react";
import Hero from "../Home/components/Hero";
import FollowSocialMedia from "./components/FollowSocialMedia";
import Share from "./components/Share";
import LocalArticulations from "./components/FollowLocalArticulations";

function SocialMedia(): ReactNode {
  return (
    <>
      <Hero secondary>
        <h2>Redes Sociais</h2>
      </Hero>
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
    </>
  );
}

export default SocialMedia;
