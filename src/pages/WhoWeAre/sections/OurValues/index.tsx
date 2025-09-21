import { useEffect } from "react";
import type { ReactNode } from "react";
import Title from "@components/Title";
import { Subtitle, SummaryBox, SummaryText } from "./styles";
import Text from "@components/Text";
import ValueChart from "../../../../../public/assets/images/WhoWeAre/value-chart.png";
import Accordion from "../../components/Accordions";
import { Box } from "@mui/material";
import Section from "@components/Section";

function OurValues(): ReactNode {
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
    <Section>
      <Box>
        <Title variant="h2" pink>
          Nossos Valores
        </Title>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: { xs: "12px", md: "16px" },
            gap: { xs: "16px", md: "24px" },
          }}
        >
          <Subtitle variant="h3"> Carta de Valores</Subtitle>
          <Text variant="body1">
            Esta carta de valores construída colaborativamente pela Articulação
            Nacional e Articulação Pedivela do Bike Anjo, utilizando discussões
            de valores debatidas no 1º Encontro Nacional do Bike Anjo e a carta
            de valores do Bike Anjo DF e apresenta orientações de práticas
            fundamentais para a boa convivência entre os membros do Bike Anjo,
            seja no âmbito local ou no âmbito nacional. <br />
            <br />O mais importante é que ele seja significativo para você. Que
            ao lê-lo você se sinta abraçada/o pelo grupo e inspirada/o a
            colaborar com o bem coletivo da melhor forma possível! ; )
          </Text>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1038px",
          margin: "0 auto",
          paddingTop: { xs: "40px", md: "64px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={ValueChart}
          alt="Carta de valores: Leveza, Respeito à Diversidade, Horizontalidade, Consenso com bom senso, Apartidarismo e leveza política, Comprometimento, Humildade."
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Box sx={{ paddingTop: { xs: "32px", md: "40px" } }}>
        <Subtitle variant="h3">Nossas Atitudes </Subtitle>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={{ xs: "8px", md: "16px" }}
        >
          <Subtitle component="h4">Como a Bike Anjo: </Subtitle>
          <SummaryBox>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <SummaryText>Quer ser:</SummaryText>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#8BC540",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <SummaryText>Quer melhorar:</SummaryText>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#FFDE18",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <SummaryText>Quer receber críticas e sugestões:</SummaryText>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#FF6F01",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <SummaryText>Pode ser excluído:</SummaryText>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#AD0003",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </SummaryBox>
          <Accordion id="OurAtitudes" />
        </Box>
      </Box>

      <Box sx={{ paddingTop: { xs: "32px", md: "40px" } }}>
        <Subtitle variant="h3"> Conheça para Interagir Melhor</Subtitle>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={{ xs: "8px", md: "16px" }}
        >
          <Subtitle component="h4">Como a Bike anjo:</Subtitle>
          <SummaryBox>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <SummaryText>Quer ser:</SummaryText>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#8BC540",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <SummaryText>Quer melhorar:</SummaryText>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#FFDE18",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <SummaryText>Quer receber críticas e sugestões:</SummaryText>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#FF6F01",
                  borderRadius: "50%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <SummaryText>Pode ser excluído:</SummaryText>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#AD0003",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </SummaryBox>
          <Accordion id="InteractionGuide" />
        </Box>
      </Box>
    </Section>
  );
}
export default OurValues;
