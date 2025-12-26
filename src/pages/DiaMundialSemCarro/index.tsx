import type { JSX } from "react";
import {
  Header,
  Container,
  Text,
  Title,
  BreadCrumb,
  ScrollSpyMenu,
  Section,
} from "@components";
import { Box } from "@mui/material";
import { Cards } from "./components/Cards";
import { Grid, TextContainer, Content, Image } from "./styles";

function DiaMundialSemCarro(): JSX.Element {
  const Hero = {
    url: "/assets/header/dia-mundial-sem-carro.webp",
    backgroundPositionDesktop: "50% 10%",
    backgroundPositionMobile: "50% 10%",
  };
  return (
    <>
      <Header $secondary $Hero={Hero}>
        <h2> Dia Mundial Sem Carro </h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Section center>
          <Grid>
            <TextContainer gridArea={"text"}>
              <Content gridArea={"textBox1"}>
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Title sizeDesktop="48px" sizeMobile="32px">
                    O que você pode fazer pelo Dia Mundial Sem Carro?
                  </Title>
                </Box>
                <Text size="18px">
                  Milhares de pessoas ao redor do mundo tomaram as ruas no dia
                  22 de setembro, celebrando o Dia Mundial Sem Carro com
                  atividades como exposições, debates, oficinas de ciclismo,
                  passeios de bicicleta e maior uso do transporte coletivo.
                  <br />
                  <br />
                  No Brasil, o Bike Anjo movimenta as pessoas nas cidades,
                  reunindo atividades e incentivando a discussão dos benefícios
                  econômicos, sociais e ambientais que os transportes por
                  propulsão humana e coletivos oferecem. O objetivo é mostrar
                  maneiras positivas de conviver em grandes cidades, reduzindo
                  barulho, poluição e trânsito causados pelos automóveis
                  particulares.
                </Text>
              </Content>
              <Content gridArea={"textBox2"}>
                <Text size="18px">
                  Para participar dessa festa, o Bike Anjo criou duas cartilhas
                  com dicas para deixar o carro em casa no dia 22, participar de
                  eventos durante setembro, mobilizar colegas de trabalho e usar
                  a bicicleta no Dia Mundial Sem Carro.
                </Text>
              </Content>
            </TextContainer>
            <Image gridArea={"image"}>
              <img
                src={
                  "/assets/images//DiaMundialSemCarro/dia-mundial-sem-carro.webp"
                }
                alt="Mulher sorrindo enquanto pedala de braços abertos"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Image>
          </Grid>
        </Section>

        <Cards />
      </Container>
    </>
  );
}

export default DiaMundialSemCarro;
