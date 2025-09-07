import type { JSX } from "react";
import Header from "@components/Header";
import { Paragraph } from "./Components/Paragraph/Paragraph";
import { Cards } from "./Components/Cards";
import Fac from "./Components/FAC";
import Container from "@components/Container";
import { Box } from "@mui/material";
import Title from "@components/Title";
import Text from "@components/Text";

function BikeAnjas(): JSX.Element {
  const Hero = {
    url: "/assets/header/bike-anjas.webp",
    backgroundPositionDesktop: "50% 10%",
    backgroundPositionMobile: "50% 10%",
  };
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2> Bike Anjas </h2>
      </Header>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "24px",
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
            <Title center>
              O que você pode fazer pelo Dia Mundial Sem Carro 2025?
            </Title>
            <Text>
              Milhares de pessoas ao redor do mundo tomaram as ruas no dia 22 de
              setembro, celebrando o Dia Mundial Sem Carro com atividades como
              exposições, debates, oficinas de ciclismo, passeios de bicicleta e
              maior uso do transporte coletivo.
            </Text>
            <Text>
              No Brasil, o Bike Anjo movimenta as pessoas nas cidades, reunindo
              atividades e incentivando a discussão dos benefícios econômicos,
              sociais e ambientais que os transportes por propulsão humana e
              coletivos oferecem. O objetivo é mostrar maneiras positivas de
              conviver em grandes cidades, reduzindo barulho, poluição e
              trânsito causados pelos automóveis particulares.
            </Text>
            <Text>
              Para participar dessa festa, o Bike Anjo criou duas cartilhas com
              dicas para deixar o carro em casa no dia 22, participar de eventos
              durante setembro, mobilizar colegas de trabalho e usar a bicicleta
              no Dia Mundial Sem Carro.
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
              src={"/assets/images/BikeAnjas/bike-anjas-main.png"}
              alt="Criança sorrindo enquanto pedala"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
        <Cards />
        <Title>Dicas Anjas</Title>
        <Paragraph>
          Assim como ensinamos a pedalar porque temos experiência com a
          bicicleta, acreditamos que as mulheres têm, sim, muita experiência no
          que é “ser mulher”. E por isso, quem melhor do que nós mesmas para
          falar sobre o que sentimos e vivemos? Criamos uma FAQ (Perguntas
          Frequentes) pra ajudar a explicar, com carinho e firmeza, por que
          certas situações nos incomodam tanto – e como os homens podem refletir
          e colaborar pra tornar as ruas (e o mundo) mais seguras e acolhedoras
          pra todes.
        </Paragraph>
        <Fac />
      </Container>
    </>
  );
}
export default BikeAnjas;
