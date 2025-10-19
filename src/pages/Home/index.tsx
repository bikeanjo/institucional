import type { JSX } from "react";
import OurNumbers from "./sections/OurNumbers";
import Testimonials from "./sections/Testimonials";
import { Partners, ScrollSpyMenu, Container } from "@components";
import Carousel from "./sections/Carousel";
import WhereAreWe from "./sections/WhereAreWe";
import ProjectThatMoveUs from "./sections/ProjectThatMoveUs";
import FAQ from "./sections/FAQ";
import { Helmet } from "react-helmet";

function Home(): JSX.Element {
  return (
    <>
    <Helmet>
        <title>Bike Anjo | Conectando pessoas por meio da bicicleta 🚴‍♀️</title>
        <meta
          name="description"
          content="Na plataforma você encontra ajuda para aprender e praticar suas pedaladas, recomendações de rotas, acompanhamento no trânsito, dicas e muito mais."
        />
        <meta
          name="keywords"
          content="bike anjo, bicicleta, voluntariado, ciclismo, mobilidade urbana, aprender a pedalar, pedaladas, pedalada, acompanhamento no trânsito, dicas de ciclismo, rotas de bicicleta, comunidade ciclista, sustentabilidade, transporte sustentável, saúde e bem-estar, eventos de ciclismo, educação ciclística"
        />
        <meta property="og:title" content="Bike Anjo | Transforme sua cidade pedalando" />
        <meta
          property="og:description"
          content="Conectamos ciclistas voluntários com pessoas que querem aprender a pedalar. Uma pedalada por vez, transformamos cidades!"
        />
        <meta property="og:image" content="/bikeanjo.svg" />
        <meta property="og:url" content="https://bikeanjo.org/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bike Anjo" />
        <link rel="canonical" href="https://bikeanjo.org/" />
      </Helmet>
      <Carousel />
      <ScrollSpyMenu />
      <Container>
        <FAQ />
        <WhereAreWe />
        <ProjectThatMoveUs />
        <OurNumbers />
        <Testimonials />
        <Partners />
      </Container>
    </>
  );
}

export default Home;
