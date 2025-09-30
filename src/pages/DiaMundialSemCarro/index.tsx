import type { JSX } from "react";
import Header from "@components/Header";
import Container from "@components/Container";
import Text from "@components/Text";
import Title from "@components/Title";
import { Box } from "@mui/material";
import BreadCrumb from "@components/BreadCrumb";
import ScrollSpyMenu from "@components/ScrollSpyMenu";
import Section from "@components/Section";

function DiaMundialSemCarro(): JSX.Element {
  const Hero = {
    url: "/assets/header/dia-mundial-sem-carro.webp",
    backgroundPositionDesktop: "50% 10%",
    backgroundPositionMobile: "50% 10%",
  };
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2> Dia Mundial Sem Carro </h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Section>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "16px",
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                flex: 1,
              }}
            >
              <Title>
                O que você pode fazer pelo Dia Mundial Sem Carro 2025?
              </Title>
              <Text>
                Milhares de pessoas ao redor do mundo tomaram as ruas no dia 22
                de setembro, celebrando o Dia Mundial Sem Carro com atividades
                como exposições, debates, oficinas de ciclismo, passeios de
                bicicleta e maior uso do transporte coletivo.
              </Text>
              <Text>
                No Brasil, o Bike Anjo movimenta as pessoas nas cidades,
                reunindo atividades e incentivando a discussão dos benefícios
                econômicos, sociais e ambientais que os transportes por
                propulsão humana e coletivos oferecem. O objetivo é mostrar
                maneiras positivas de conviver em grandes cidades, reduzindo
                barulho, poluição e trânsito causados pelos automóveis
                particulares.
              </Text>
              <Text>
                Para participar dessa festa, o Bike Anjo criou duas cartilhas
                com dicas para deixar o carro em casa no dia 22, participar de
                eventos durante setembro, mobilizar colegas de trabalho e usar a
                bicicleta no Dia Mundial Sem Carro.
              </Text>
            </Box>
            <Box
              sx={{
                width: "100%",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#4D7A18",
                flex: 1,
              }}
            >
              <img
                src={"/assets/images/bike-anjo-kid.jpg"}
                alt="Criança sorrindo enquanto pedala"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Section>
      </Container>
    </>
  );
}

export default DiaMundialSemCarro;
