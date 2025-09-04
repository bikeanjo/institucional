import type { ReactNode } from "react";
import Header from "@components/Header";
import { WhatIsBikeAnjo } from "./sections/WhatIsBikeAnjo";
import { HowWeOrganize } from "./sections/HowWeOrganize";
import Container from "../Home/components/Container";
import Title from "@components/Title";
import SubTitle from "@components/SubTitle";
import OurTeam from "./components/OurTeamCard";
import { Box } from "@mui/material";
import OurValues from "./sections/OurValues";
import OurStory from "./sections/OurStory";
import Transparency from "./sections/Transparency";

function WhoWeAre(): ReactNode {
  const Hero = "/assets/header/quem-somos.webp";
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Quem Somos</h2>
      </Header>
      <WhatIsBikeAnjo />
      <HowWeOrganize />
      <Container secondary gap="32px">
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={"16px"}
          alignItems={"center"}
        >
          <Title variant="h2" green>
            Nossa equipe
          </Title>
          <SubTitle variant="h3">
            Nossa equipe institucional e diretoria
          </SubTitle>
        </Box>
        <OurTeam />
      </Container>
      <OurValues />
      <OurStory />
      <Transparency />
    </>
  );
}
export default WhoWeAre;
