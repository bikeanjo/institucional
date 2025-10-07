import type { JSX } from "react";
import {
  Header,
  Text,
  Button,
  Container,
  Title,
  BreadCrumb,
  ScrollSpyMenu,
  Section,
} from "@components";
import FollowLocalArticulations from "../SocialMedia/components/FollowLocalArticulations";
import { Box } from "@mui/material";
import { GridContainer } from "../Volunteering/components/HowToJoinCards/styles";
import HowToJoinCards from "../Volunteering/components/HowToJoinCards";

function HowWeHelp(): JSX.Element {
  const Hero = {
    url: "/assets/header/como-nos-ajudamos.webp",
    backgroundPositionDesktop: "50% 70%",
    backgroundPositionMobile: "50% 50%",
  };

  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Como nós ajudamos</h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Section>
          <Title>Veja os nossos apoios</Title>
          <Text>
            Veja o que a Bike Anjo oferece quem está começando a pedalar. Com
            pequenas ações, você ajuda a transformar trajetos em experiências
            seguras, acessíveis e inspiradoras.
          </Text>
          <GridContainer>
            <HowToJoinCards />
          </GridContainer>
          <Button center>Cadastre-se</Button>
        </Section>

        <FollowLocalArticulations
          title="Conecte-se com uma articulação local"
          titleAlign="center"
          sub="Encontre a articulação Bike Anjo mais próxima de você! Cada cidade tem pessoas voluntárias prontas para ajudar com dicas, eventos e orientações. Veja nosso mapa e use a busca abaixo, siga o perfil local e descubra como receber apoio pra pedalar com mais segurança e autonomia."
        />

        <Section>
          <Title style={{ marginBottom: "16px" }}>
            Veja nossa playlist de dicas!
          </Title>
          <Text>
            Seja você iniciante ou já com alguma experiência, nossa playlist de
            vídeos tem dicas práticas pra tornar sua pedalada mais segura, leve
            e divertida.
            <br />
            Aqui a gente compartilha o que aprendeu na rua, com carinho e sem
            complicação, do jeitinho Bike Anjo.
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", lg: "1032px" },
              marginBottom: "80px",
            }}
          >
            <Button>Acesse a Playlist</Button>
          </Box>
        </Section>
      </Container>
    </>
  );
}

export default HowWeHelp;
