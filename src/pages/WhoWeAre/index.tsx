import type { ReactNode } from "react";
import {
  Header,
  Title,
  SubTitle,
  BreadCrumb,
  ScrollSpyMenu,
  Section,
  Container,
} from "@components";
import { WhatIsBikeAnjo } from "./sections/WhatIsBikeAnjo";
import { HowWeOrganize } from "./sections/HowWeOrganize";
import OurTeam from "./components/OurTeamCard";
import { Box } from "@mui/material";
import OurValues from "./sections/OurValues";
import OurStory from "./sections/OurStory";
import Transparency from "./sections/Transparency";
import { Colors } from "@colors";

function WhoWeAre(): ReactNode {
  const Hero = {
    url: "/assets/header/quem-somos.webp",
    backgroundPositionDesktop: "50% 10%",
    backgroundPositionMobile: "50% 10%",
  };
  return (
    <>
      <Header $secondary $Hero={Hero}>
        <h2>Quem Somos</h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <WhatIsBikeAnjo />
        <HowWeOrganize />
        <Section
          borderColor={Colors["Green_70"]}
          backgroundColor={Colors["Green_20"]}
        >
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
        </Section>
        <OurValues />
        <OurStory />
        <Transparency />
      </Container>
    </>
  );
}
export default WhoWeAre;
