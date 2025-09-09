import type { ReactNode } from "react";
import { useEffect } from "react";
import Header from "@components/Header";
import Title from "@components/Title";
import SubTitle from "@components/SubTitle";
import Text from "@components/Text";
import Container from "../Home/components/Container";
import { ContentContainer, Content } from "./styles";
import List from "./components/List";
import { Box, Typography } from "@mui/material";
import TimelineCourse from "./components/TimelineCourse";
import Accordion from "./components/Accordion";
import Button from "@components/Button";
import { Link } from "react-router-dom";

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
      <ContentContainer>
        <Content>
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
        </Content>
      </ContentContainer>
      <Container secondary gap="24px">
        <Title variant="h2" green textAlign={"center"}>
          Formação de Pessoas Voluntárias Bike Anjo
        </Title>
        <List />
        <Box py={"16px"}>
          <Text variant="body1" size="16px">
            Nosso programa é feito com atenção e compromisso para garantir a sua
            preparação para atuar na rede com propósito.
          </Text>
        </Box>
      </Container>
      <Container gap="40px">
        <Typography
          variant="h2"
          sx={{
            fontSize: "40px",
            fontWeight: "700",
            color: "var(--mui-palette-G-Grey-100)",
          }}
        >
          Etapas do Programa
        </Typography>

        <TimelineCourse />
      </Container>
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
        <SubTitle variant="h2" color="Pink-50" fontWeight={700}>
          Módulos do Curso
        </SubTitle>
        <Accordion id="CourseModules" />
      </Box>
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
        <SubTitle variant="h2" color="Pink-50" fontWeight={700}>
          FAQ — Perguntas Frequentes
        </SubTitle>
        <Accordion id="FAC" />
      </Box>
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
          Ao final do programa, você estará preparado para atuar como uma pessoa
          voluntária na rede Bike Anjo, contribuindo para a transformação das
          cidades através da mobilidade sustentável e ganha um certificado de
          horas complementares.
        </Text>
      </Box>
      <Container secondary>
        <SubTitle variant="h3" fontWeight="700" color="Green-70">
          Inscreva-se Agora!
        </SubTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "16px",
            paddingBottom: "24px",
            gap: "16px",
          }}
        >
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
        </Box>
        <Button component={Link} to="/voluntariado" center>
          {" "}
          Voluntarie-se
        </Button>
      </Container>
    </>
  );
}
export default TakeOurCourse;
