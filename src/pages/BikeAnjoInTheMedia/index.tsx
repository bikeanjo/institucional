import type { ReactNode } from "react";
import { Header, Text, BreadCrumb, ScrollSpyMenu } from "@components";
import Timeline from "./components/Timeline";
import { Container } from "./styles";
import SEO from "@components/Seo/seo";

function BikeAnjoInTheMedia(): ReactNode {
  const Hero = {
    url: "/assets/header/bike-anjo-na-midia.webp",
    backgroundPositionDesktop: "50% 60%",
    backgroundPositionMobile: "30% 70%",
  };
  return (
    <>
      <SEO />

      <Header secondary Hero={Hero}>
        <h2>Bike Anjo na Mídia</h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Text variant="body1">
          Nossa história já foi contada por diversos veículos de comunicação ao
          longo dos anos. Veja na linha do tempo como a Bike Anjo ganhou
          destaque na mídia e foi pedalando cada vez mais longe.
        </Text>
        <Timeline />
      </Container>
    </>
  );
}
export default BikeAnjoInTheMedia;
