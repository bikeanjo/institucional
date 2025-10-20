import type { JSX } from "react";
import {
  Header,
  Container,
  Title,
  Text,
  BreadCrumb,
  ScrollSpyMenu,
  Section,
  Button,
} from "@components";
import { Grid, TextContainer, Content, Image, MobileSection } from "./styles";
import { Box } from "@mui/material";
import { Cards } from "./Components/Cards";
import Fac from "./Components/FAC";
import { Link } from "react-router-dom";
import SEO from "@components/Seo/seo";

function BikeAnjas(): JSX.Element {
  const Hero = {
    url: "/assets/header/bike-anjas.webp",
    backgroundPositionDesktop: "50% 10%",
    backgroundPositionMobile: "50% 10%",
  };
  return (
    <>
      <SEO />
      <Header secondary Hero={Hero}>
        <h2> Bike Anjas </h2>
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
                    Porque a Bike Anjas existe?
                  </Title>
                </Box>

                <Text size="18px">
                  Porque ainda é preciso.
                  <br />
                  <br />
                  As Bike Anjas nasceram da vontade de ver mais mulheres
                  pedalando, ocupando as ruas e fazendo parte da transformação
                  das cidades. A gente sabe que, pra muitas de nós, sair por aí
                  de bicicleta não é só uma questão de equilíbrio: é enfrentar
                  medos, julgamentos e barreiras que vêm de longe.
                  <br />
                  <br />
                  Enquanto os homens sempre estiveram livres pra ocupar os
                  espaços públicos (e de poder), muitas vezes nossa presença
                  ainda é questionada. Na rua, no trânsito, nos eventos. Até
                  quando vamos ajustar o selim da bike, aparece alguém querendo
                  opinar – sem ser chamado – como se soubesse mais.
                </Text>
              </Content>
              <Content gridArea={"textBox2"}>
                <Text size="18px">
                  E sobre mecânica? Sempre disseram que “mulher não entende”.
                  Mas será que é porque não sabemos... ou porque nunca deixaram
                  a gente aprender? Desde pequenas, ganhamos bonecas, fomos
                  ensinadas a não nos sujar e a cuidar dos outros. Enquanto
                  isso, eles ganhavam carrinhos, ferramentas, e o direito de
                  fuçar e testar.
                  <br />
                  <br />A verdade é: não faltou capacidade, faltou oportunidade.
                  E é por isso que existimos. Pra apoiar, ensinar, trocar e
                  fortalecer. Pra que cada mulher possa ocupar seu espaço – no
                  trânsito, na bike, na vida – com segurança, liberdade e
                  confiança.
                </Text>
              </Content>
            </TextContainer>
            <Image gridArea={"image"}>
              <img
                src={"/assets/images/BikeAnjas/bike-anjas-main.webp"}
                alt="Bike com cartaz pendurado escrito Mulher, Autonomia, Bicicleta."
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Image>
          </Grid>
        </Section>

        <Cards />

        <Section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "20px",
              gap: "16px",
            }}
          >
            <Title sizeDesktop="48px" sizeMobile="32px">
              Dicas Anjas
            </Title>
            <Text size="18px">
              Assim como ensinamos a pedalar porque temos experiência com a
              bicicleta, acreditamos que as mulheres têm, sim, muita experiência
              no que é “ser mulher”. E por isso, quem melhor do que nós mesmas
              para falar sobre o que sentimos e vivemos? Criamos uma FAQ
              (Perguntas Frequentes) pra ajudar a explicar, com carinho e
              firmeza, por que certas situações nos incomodam tanto – e como os
              homens podem refletir e colaborar pra tornar as ruas (e o mundo)
              mais seguras e acolhedoras pra todes.
            </Text>
          </Box>
          <Box sx={{ paddingBottom: { xs: "0px", md: "60px" } }}>
            <Fac />
          </Box>
        </Section>

        <MobileSection>
          <Title sizeMobile="32px" textAlign={"center"}>
            Contribua para que a roda siga girando.
          </Title>
          <Text>
            A rede Bike Anjo atua desde 2010. Temos, em nossa plataforma, mais
            de 7400 voluntários de mais de 760 cidades, em 35 países. Essa rede
            é organicamente formada por pessoas que doam seu tempo para espalhar
            e promover o uso da bicicleta pelas cidades. No Brasil, realizamos
            diversas atividades para incentivar e promover o uso da bicicleta
            como meio de transporte diário.
            <br />
            <br />
            Em 2018, mais de 10 mil pessoas aprenderam a pedalar com a ajuda de
            nossos anjos e anjas. Foram mais de 580 atividades realizadas pelas
            5 regiões brasileiras, dentre elas: oficinas para aprender a
            pedalar, oficinas de mecânica, workshops, palestras, ações com
            motoristas, pedais e bondes…
            <br />
            <br />
            Se você acredita que cidades podem ser transformadas utilizando a
            bicicleta como ferramenta, contribua financeiramente para que nossas
            ações continuem acontecendo Brasil a fora.
          </Text>
          <Button component={Link} to="/doacao">
            Apoie
          </Button>
        </MobileSection>
      </Container>
    </>
  );
}
export default BikeAnjas;
