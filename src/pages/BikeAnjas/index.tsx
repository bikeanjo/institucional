import type { JSX } from "react";
import {
  Header,
  Container,
  Title,
  Text,
  BreadCrumb,
  ScrollSpyMenu,
  Section,
} from "@components";
import { Cards } from "./Components/Cards";
import Fac from "./Components/FAC";
import { Box } from "@mui/material";

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

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Section>
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
              <Title>Porque a Bike Anjas existe?</Title>
              <Text>Porque ainda é preciso.</Text>
              <Text>
                As Bike Anjas nasceram da vontade de ver mais mulheres
                pedalando, ocupando as ruas e fazendo parte da transformação das
                cidades. A gente sabe que, pra muitas de nós, sair por aí de
                bicicleta não é só uma questão de equilíbrio: é enfrentar medos,
                julgamentos e barreiras que vêm de longe.
              </Text>
              <Text>
                Enquanto os homens sempre estiveram livres pra ocupar os espaços
                públicos (e de poder), muitas vezes nossa presença ainda é
                questionada. Na rua, no trânsito, nos eventos. Até quando vamos
                ajustar o selim da bike, aparece alguém querendo opinar – sem
                ser chamado – como se soubesse mais.
              </Text>
              <Text>
                E sobre mecânica? Sempre disseram que “mulher não entende”. Mas
                será que é porque não sabemos... ou porque nunca deixaram a
                gente aprender? Desde pequenas, ganhamos bonecas, fomos
                ensinadas a não nos sujar e a cuidar dos outros. Enquanto isso,
                eles ganhavam carrinhos, ferramentas, e o direito de fuçar e
                testar.
              </Text>
              <Text>
                A verdade é: não faltou capacidade, faltou oportunidade. E é por
                isso que existimos. Pra apoiar, ensinar, trocar e fortalecer.
                Pra que cada mulher possa ocupar seu espaço – no trânsito, na
                bike, na vida – com segurança, liberdade e confiança.
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
                src={"/assets/images/BikeAnjas/bike-anjas-main.webp"}
                alt="Bike com cartaz pendurado escrito Mulher, Autonomia, Bicicleta."
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Section>

        <Cards />

        <Section>
          <Title>Dicas Anjas</Title>
          <Text>
            Assim como ensinamos a pedalar porque temos experiência com a
            bicicleta, acreditamos que as mulheres têm, sim, muita experiência
            no que é “ser mulher”. E por isso, quem melhor do que nós mesmas
            para falar sobre o que sentimos e vivemos? Criamos uma FAQ
            (Perguntas Frequentes) pra ajudar a explicar, com carinho e firmeza,
            por que certas situações nos incomodam tanto – e como os homens
            podem refletir e colaborar pra tornar as ruas (e o mundo) mais
            seguras e acolhedoras pra todes.
          </Text>
          <Fac />
        </Section>
      </Container>
    </>
  );
}
export default BikeAnjas;
