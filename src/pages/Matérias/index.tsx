import type { ReactNode } from "react";
import Header from "@components/Header";
import Timeline from "./components/Timeline";
import Text from "@components/Text";
import Container from "@components/Container";

function Matérias(): ReactNode {
  return (
    <>
      <Header secondary>
        <h2>Matérias</h2>
      </Header>

      <Container>
        <Text>
          Nossa história já foi contada por diversos veículos de comunicação ao
          longo dos anos. Veja na linha do tempo como a Bike Anjo ganhou
          destaque na mídia e foi pedalando cada vez mais longe.
        </Text>
        <Timeline />
      </Container>
    </>
  );
}
export default Matérias;
