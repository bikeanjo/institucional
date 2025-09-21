import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import Title from "@components/Title";
import SubTitle from "@components/SubTitle";
import ImgHowWeOrganize from "../../../../../public/assets/images/WhoWeAre/how-we-organize.png";
import Section from "@components/Section";

export function HowWeOrganize(): ReactNode {
  return (
    <Section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: { xs: "24px", md: "32px" },
          gap: "16px",
        }}
      >
        <Title variant="h2" pink>
          Como nos organizamos
        </Title>
        <SubTitle variant="h3" mobileCenter>
          Nós somos como uma bicicleta, com diferentes peças que se encaixam
          para trabalharem juntas.
        </SubTitle>
      </Box>
      <Box
        width="100%"
        paddingTop={{ xs: "24px", md: "0px" }}
        display="grid"
        gap={{ xs: "24px", md: "32px" }}
        alignItems="center"
        textAlign={{ xs: "center", md: "left" }}
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gridTemplateAreas={{
          xs: `
          "image"
          "text"
        `,
          md: `
          "image text"
        `,
        }}
        gridTemplateRows={{ md: "auto 1fr" }}
      >
        <Box
          sx={{
            gridArea: "image",
            width: "100%",
            height: { xs: "343px", md: "420.5px" },
            borderRadius: { xs: "8px", md: "10.8" },
            overflow: "hidden",
            backgroundColor: "var(--mui-palette-Green-70)",
          }}
        >
          <img
            src={ImgHowWeOrganize}
            alt="Voluntários do Bike Anjo reunidos em uma mesa para um momento de planejamento e integração da equipe."
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
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              fontSize: { xs: "16px", md: "24px" },
              color: "var(--mui-palette-G-Grey-100)",
            }}
          >
            A Bike Anjo se organiza por articulações locais que promovem
            oficinas e encontros presenciais, e por meio do nosso site, que
            conecta voluntários e aprendizes diretamente. Assim, quem quer
            aprender encontra suporte fácil e prático onde estiver. <br />
            <br />
            Nossa coordenação nacional oferece materiais, diretrizes e apoio
            para manter a qualidade e o impacto do nosso trabalho. Além disso,
            estamos nas redes sociais—Facebook, Instagram, LinkedIn e
            YouTube—onde compartilhamos dicas, histórias de sucesso, eventos e
            novidades para manter nossa comunidade sempre conectada e engajada.
          </Typography>
        </Box>
      </Box>
    </Section>
  );
}
