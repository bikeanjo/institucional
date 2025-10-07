import { useRef } from "react";
import { Container, ContainerCard, Card, TextBox, Controls } from "./styles";
import { Title, Text, Section, Button } from "@components";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { Colors } from "@colors";

export function Cards() {
  const cards = [
    {
      id: "card1",
      title: "Mulheres Ciclistas",
      text: "Confira dicas e desafios do uso da bicicleta em espaços urbanos.",
    },
    {
      id: "card2",
      title: "Mulheres, liberdade, movimento.",
      text: "Baixe o E-book para conhecer mais sobre as mulheres em movimento.",
    },

    {
      id: "card3",
      title: "Oficinas Virtuais",
      text: "Assista as Oficinas Virtuais da Bike Anjas Multiplicadoras.",
    },

    {
      id: "card4",
      title: "Manifesto Bike Anjas",
      text: "Texto sobre manifesto.",
    },
    {
      id: "card5",
      title: "Bike Anjas São Paulo",
      text: "Texto sobre o blog da Bike Anjas.",
    },
    {
      id: "card6",
      title: "Carta de Valores",
      text: "Texto sobre a Carta de Valores",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollLeft -= scrollAmount;
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Section
      backgroundColor={Colors["Pink_20"]}
      borderColor={Colors["Pink_70"]}
      center
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          py: { xs: "12px", md: "62px" },
          gap: { xs: "24px", md: "40px" },
        }}
      >
        <Title sizeDesktop="48px" sizeMobile="32px" textAlign={"center"}>
          Conheça mais sobre Bike Anjas
        </Title>
        <Container>
          <Controls onClick={handlePrev}>
            <ArrowBackIosNewRounded />
          </Controls>
          <ContainerCard ref={scrollContainerRef}>
            {cards.map((card) => (
              <Card key={card.id}>
                <TextBox>
                  <Title sizeDesktop="32px" textAlign={"left"}>
                    {card.title}
                  </Title>
                  <Text size="16px" textAlign={"left"}>
                    {card.text}
                  </Text>
                </TextBox>
                <Button variantcolor="gray" fullWidthDesktop fullWidthMobile>
                  Acesse
                </Button>
              </Card>
            ))}
          </ContainerCard>
          <Controls onClick={handleNext}>
            <ArrowForwardIosRounded />
          </Controls>
        </Container>
      </Box>
    </Section>
  );
}
