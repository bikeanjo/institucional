import type { ReactNode } from "react";
import { useEffect } from "react";
import Header from "@components/Header";
import Title from "@components/Title";
import SubTitle from "@components/SubTitle";
import Text from "@components/Text";
import List from "./components/List";
import { Box } from "@mui/material";
import TimelineCourse from "./components/TimelineCourse";
import Accordion from "./components/Accordion";
import Button from "@components/Button";
import { Link } from "react-router-dom";
import BreadCrumb from "@components/BreadCrumb";
import ScrollSpyMenu from "@components/ScrollSpyMenu";
import Section from "@components/Section";
import { Colors } from "../../styles/tokens/colors";
import Container from "@components/Container";

function TakeOurCourse(): ReactNode {
  const Hero = {
    url: "/assets/header/faca-nosso-curso.webp",
    backgroundPositionDesktop: "50% 10%",
    backgroundPositionMobile: "10% 10%",
  };

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => {
      if (previous) {
        window.history.scrollRestoration = previous;
      } else {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Faça nosso Curso Bike Anjo</h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Section>
          <Title variant="h2" pink>
            Sobre o Cuba
          </Title>
          <SubTitle variant="h3" color="Pink-50" fontWeight={700}>
            O Programa de Formação Bike Anjo é um convite para quem quer
            transformar a cidade com a bicicleta.
          </SubTitle>
          <Text variant="body1" size="18px">
            Com encontros ao vivo, conteúdos exclusivos e certificação gratuita,
            essa jornada prepara novas pessoas voluntárias para atuarem com
            segurança, acolhimento e propósito em suas comunidades.
          </Text>
        </Section>

        <Section
          center
          backgroundColor={Colors["Green-20"]}
          borderColor={Colors["Green-70"]}
        >
          <Title variant="h2" green textAlign={"center"}>
            Formação de Pessoas Voluntárias Bike Anjo
          </Title>
          <List />
          <Box py={"16px"}>
            <Text variant="body1" size="16px">
              Nosso programa é feito com atenção e compromisso para garantir a
              sua preparação para atuar na rede com propósito.
            </Text>
          </Box>
        </Section>

        <Section center>
          <Title>Etapas do Programa</Title>
          <TimelineCourse />
        </Section>

        <Section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingInline: { xs: "16px", md: "92px" },
              paddingTop: "40px",
              gap: "30px",
            }}
          >
            <Title>Módulos do Curso</Title>
            <Accordion id="CourseModules" />
          </Box>
        </Section>

        <Section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingInline: { xs: "16px", md: "92px" },
              paddingTop: "40px",
              gap: "32px",
            }}
          >
            <Title>FAQ — Perguntas Frequentes</Title>
            <Accordion id="FAC" />
          </Box>
        </Section>

        <Section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingX: { xs: "16px", md: "92px" },
              paddingY: "40px",
              gap: "16px",
            }}
          >
            <SubTitle variant="h2" color="Pink-50" fontWeight={700}>
              Resultados Esperados
            </SubTitle>
            <Text variant="body1" size="16px" textAlign={"center"}>
              Ao final do programa, você estará preparado para atuar como uma
              pessoa voluntária na rede Bike Anjo, contribuindo para a
              transformação das cidades através da mobilidade sustentável e
              ganha um certificado de horas complementares.
            </Text>
          </Box>
        </Section>

        <Section
          backgroundColor={Colors["Green-20"]}
          borderColor={Colors["Green-70"]}
          center
        >
          <Title center color={Colors["Green-70"]}>
            Inscreva-se Agora!
          </Title>
          <Text variant="body1" size="16px" textAlign={"center"}>
            Bora construir cidades mais humanas e pedaláveis nos unindo?
            Inscreva-se no Programa de Formação Bike Anjo e venha transformar o
            mundo com a gente.
          </Text>
          <Text variant="body1" size="16px" textAlign={"center"}>
            Veja as inscrições para a próxima turma!
            <br />
            Vagas limitadas.
          </Text>
          <Button component={Link} to="/voluntariado" center>
            {" "}
            Voluntarie-se
          </Button>
        </Section>
      </Container>
    </>
  );
}
export default TakeOurCourse;
