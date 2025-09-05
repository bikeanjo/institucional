import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import Title from "@components/Title";
import SubTitle from "@components/SubTitle";
import ImgWhatIsBikeAnjo from "../../../../../public/assets/images/WhoWeAre/what-is-bike-anjo.png";

export function WhatIsBikeAnjo(): ReactNode {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: { xs: "32px", md: "40px" },
          px: { xs: "16px", md: "92px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: { xs: "24px", md: "32px" },
            gap: "16px",
          }}
        >
          <Title variant="h2" pink>
            O que é Bike Anjo?
          </Title>
          <SubTitle variant="h3" mobileCenter>
            Conheça um pouco do nosso trabalho
          </SubTitle>
        </Box>
        <Box
          width="100%"
          paddingTop={{ xs: "24px", md: "0px" }}
          display="grid"
          gap={{ xs: "24px", md: "32px" }}
          alignItems="center"
          justifyContent="center"
          textAlign={{ xs: "center", md: "left" }}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gridTemplateAreas={{
            xs: `
          "image"
          "text"
        `,
            md: `
          "text image"
        `,
          }}
          gridTemplateRows={{ md: "auto 1fr" }}
        >
          <Box
            sx={{
              gridArea: "image",
              width: "100%",
              height: { xs: "343px", md: "344.25px" },
              borderRadius: { xs: "8px", md: "10.8" },
              overflow: "hidden",
              backgroundColor: "#4D7A18",
            }}
          >
            <img
              src={ImgWhatIsBikeAnjo}
              alt="Voluntário do Bike Anjo ensina uma criança a se equilibrar e dar as primeiras pedaladas com segurança."
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
              justifyContent: "center",
              alignItems: "center",
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
              Bike Anjo é uma ONG que ajuda pessoas a aprender a pedalar ou
              aprimorar suas habilidades por meio de oficinas presenciais,
              mentorias individuais e conteúdos online. Nossa rede colaborativa
              de voluntários promove mobilidade urbana sustentável, inclusão
              social e cidades mais acessíveis. Pedale com a gente e transforme
              seu entorno!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
