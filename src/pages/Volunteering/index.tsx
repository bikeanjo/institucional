import type { ReactNode } from "react";
import Header from "@components/Header";
import { Box } from "@mui/material";
import Title from "@components/Title";
import Text from "@components/Text";
import HowToJoinCards from "./components/HowToJoinCards";
import { GridContainer } from "./components/HowToJoinCards/styles";
import Button from "@components/Button";
import ProjectThatMoveUs from "../Home/sections/ProjectThatMoveUs";
import BikeAnjoKid from "../../assets/images/bike-anjo-kid.jpg";
import Container from "@components/Container";
import Hero from "../../assets/header/voluntariado.webp";

function Volunteering(): ReactNode {
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Voluntariado</h2>
      </Header>

      <Container>
        <Box display="flex" justifyContent="center">
          <Title variant="h2" pink>
            Veja como participar
          </Title>
        </Box>
        <Text>
          Com pequenas ações, você ajuda a transformar trajetos em experiências
          seguras, acessíveis e inspiradoras.
        </Text>

        <GridContainer>
          <HowToJoinCards />
        </GridContainer>
        <Button center>Cadastre-se</Button>
        <Box
          width="100%"
          paddingTop={{ xs: "40px", md: "56px" }}
          display="grid"
          gap={{ xs: "24px", md: "40px" }}
          alignItems="center"
          textAlign={{ xs: "center", md: "left" }}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gridTemplateAreas={{
            xs: `
          "title"
          "image"
          "text"
        `,
            md: `
          "image title"
          "image text"
        `,
          }}
          gridTemplateRows={{ md: "auto 1fr" }}
        >
          <Title variant="h2" pink>
            Quer trabalhar dentro da Bike Anjo?
          </Title>
          <Box
            sx={{
              gridArea: "image",
              width: "100%",
              height: { xs: "343px", md: "459px" },
              borderRadius: { xs: "8px", md: "10.8" },
              overflow: "hidden",
              backgroundColor: "#4D7A18",
            }}
          >
            <img
              src={BikeAnjoKid}
              alt="Criança sorrindo enquanto pedala"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          <Box
            sx={{
              gridArea: "text",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              textAlign: "left",
              alignItems: { xs: "center", md: "flex-start" },
              alignSelf: { md: "start" },
            }}
          >
            <Text>
              Não temos vagas fixas de trabalho remunerado ou voluntário na Bike
              Anjo, mas estamos sempre abertos a conhecer novas pessoas. Então
              você tem interesse em ajudar, seja na comunicação, na gestão ou
              colocando a mão na massa, mande uma mensagem e nos conte como
              gostaria de contribuir.
            </Text>
            <Button>Entre em Contato</Button>
          </Box>
        </Box>
        <ProjectThatMoveUs />
      </Container>
    </>
  );
}

export default Volunteering;
