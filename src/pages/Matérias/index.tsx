import type { ReactNode } from "react";
import Header from "../Components/Header";
import { Box } from "@mui/material";
import Timeline from "./components/Timeline";
import Text from "../Components/Text";

function Matérias(): ReactNode {
  return (
    <>
      <Header secondary>
        <h2>Matérias</h2>
      </Header>

      <Box
        display={"flex"}
        flexDirection={"column"}
        paddingX={{ xs: "16px", md: "96px" }}
        paddingTop={"40px"}
        paddingBottom={{ xs: "40px", md: "80px" }}
        gap={"32px"}
      >
        <Text>
          Nossa história já foi contada por diversos veículos de comunicação ao
          longo dos anos. Veja na linha do tempo como a Bike Anjo ganhou
          destaque na mídia e foi pedalando cada vez mais longe.
        </Text>
        <Timeline />
      </Box>
    </>
  );
}
export default Matérias;
