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
          content="Na plataforma Bike Anjo você encontra ajuda para aprender e praticar suas pedaladas, recomendações de rotas, acompanhamento no trânsito, dicas e muito mais."
        />
        <meta
          name="keywords"
          content="bike anjo, bicicleta, voluntariado, ciclismo, mobilidade urbana, aprender a pedalar, pedaladas, pedalada, acompanhamento no trânsito, dicas de ciclismo, rotas de bicicleta, comunidade ciclista, sustentabilidade, transporte sustentável, saúde e bem-estar, eventos de ciclismo, educação ciclística"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bike Anjo" />
        <link rel="canonical" href="https://2025.bikeanjo.org" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Bike Anjo" />
        <meta property="og:title" content="Bike Anjo | Transforme sua cidade pedalando" />
        <meta
          property="og:description"
          content="Conectamos ciclistas voluntários com pessoas que querem aprender a pedalar. Uma pedalada por vez, transformamos cidades!"
        />
        <meta property="og:url" content="https://2025.bikeanjo.org" />
        <meta property="og:image" content="https://2025.bikeanjo.org/bikeanjo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bikeanjo" />
        <meta name="twitter:title" content="Bike Anjo | Conectando pessoas por meio da bicicleta 🚴‍♀️" />
        <meta
          name="twitter:description"
          content="Conectamos ciclistas voluntários com pessoas que querem aprender a pedalar. Uma pedalada por vez, transformamos cidades!"
        />
        <meta name="twitter:image" content="https://2025.bikeanjo.org/bikeanjo.svg" />
        <meta name="twitter:url" content="https://2025.bikeanjo.org" />

        <link rel="icon" type="image/svg+xml" href="https://2025.bikeanjo.org/bikeanjo.svg" />

        <meta name="contact" content="contato@bikeanjo.com" />
        <meta name="organization" content="Bike Anjo" />

        <link rel="me" href="https://www.instagram.com/bikeanjo" />
        <link rel="me" href="https://x.com/bikeanjo" />
        <link rel="me" href="https://www.linkedin.com/company/bikeanjo" />
        <link rel="me" href="https://www.facebook.com/bikeanjo" />
        <link rel="me" href="https://t.me/bikeanjo" />
        <link rel="me" href="https://www.youtube.com/@bikeanjo" />
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
