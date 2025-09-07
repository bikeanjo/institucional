import type { JSX } from "react";
import Header from "@components/Header";
import FollowLocalArticulations from "../SocialMedia/components/FollowLocalArticulations";
import { Box } from "@mui/material";
import Text from "@components/Text";
import SubTitle from "@components/SubTitle";
import Button from "@components/Button";
import { PrimaryButton } from "./styles";
import { Link } from "react-router-dom";
import Container from "@components/Container";
import { GridContainer } from "../Volunteering/components/HowToJoinCards/styles";
import HowToJoinCards from "../Volunteering/components/HowToJoinCards";
import Title from "@components/Title";

function HowWeHelp(): JSX.Element {
  const Hero = {
    url: "/assets/header/como-nos-ajudamos.jpg",
    backgroundPositionDesktop: "50% 70%",
    backgroundPositionMobile: "50% 50%",
  };
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Como nós ajudamos</h2>
      </Header>
      <Container>
        <Title center>Veja os nossos apoios</Title>
        <Text>
          Veja o que a Bike Anjo oferece quem está começando a pedalar. Com
          pequenas ações, você ajuda a transformar trajetos em experiências
          seguras, acessíveis e inspiradoras.
        </Text>

        <GridContainer>
          <HowToJoinCards />
        </GridContainer>

        <PrimaryButton>Cadastre-se</PrimaryButton>

        <FollowLocalArticulations
          title="Conecte-se com uma articulação local"
          titleAlign="center"
          sub="Encontre a articulação Bike Anjo mais próxima de você! Cada cidade tem pessoas voluntárias prontas para ajudar com dicas, eventos e orientações. Veja nosso mapa e use a busca abaixo, siga o perfil local e descubra como receber apoio pra pedalar com mais segurança e autonomia."
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", lg: "1032px" },
            margin: "auto",
            marginTop: { xs: "40px", lg: "80px" },
          }}
        >
          <SubTitle center style={{ marginBottom: "16px" }}>
            Veja nossa playlist de dicas!
          </SubTitle>
          <Text center>
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
              margin: { xs: "32px auto 40px auto", lg: "32px auto 80px auto" },
            }}
          >
            <Link to="">
              <Button center>Acesse a Playlist</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HowWeHelp;
