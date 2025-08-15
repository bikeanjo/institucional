import React from "react";
import Header from "../Components/Header";
import Subtitle from "../Components/SubTitle";
import Text from "../Components/Text";
import { Box } from "@mui/material";
import { ProjectCards } from "./components/ProjectCards";
import { CampaignCards } from "./components/CampaignCards";
import Events from "./components/Events";

const Iniciativas: React.FC = () => {
  return (
    <>
      <Header secondary>
        <h2>Iniciativas</h2>
      </Header>
      <Box
        marginX={{ xs: "16px", md: "96px" }}
        marginY={{ xs: "16px", md: "40px" }}
        gap={{ xs: "8px", md: "40px" }}
      >
        <Box>
          <Subtitle>
            <h2>Projetos</h2>
          </Subtitle>
          <ProjectCards />
        </Box>
        <Box paddingY={{ xs: "16px", md: "40px" }}>
          <Subtitle>
            <h2>Campanhas</h2>
          </Subtitle>
          <CampaignCards />
        </Box>
        <Box paddingY={{ xs: "16px", md: "40px" }}>
          <Subtitle>
            <h2>Eventos</h2>
          </Subtitle>
          <Text>
            <p>
              As atividades da Bike Anjo são organizadas pelas articulações
              locais e divulgadas pelo Instagram. Quer descobrir o que está
              rolando perto de você? Busque abaixo a articulação mais próxima e
              acompanhe tudo que acontece na sua região.
            </p>
          </Text>
          <Events />
        </Box>
      </Box>
    </>
  );
};
export default Iniciativas;
