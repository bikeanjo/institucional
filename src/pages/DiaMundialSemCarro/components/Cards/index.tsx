import { Container, ContainerCard, Card, TextBox } from "./styles";
import { Title, Text, Section, Button } from "@components";
import { Box } from "@mui/material";
import { Colors } from "@colors";
import LinksList from "../Links";

export function Cards() {
  const cards = [
    {
      id: "card1",
      title: "KIT Para deixar o carro em casa",
      text: "Informações sobre o kit.",
    },
    {
      id: "card2",
      title: "Dicas para engajar",
      text: "Informações sobre as dicas.",
    },

    {
      id: "card3",
      title: "Verifique a Agenda",
      text: "Informações sobre a agenda.",
    },

    {
      id: "card4",
      title: "Modelos de pedidos de apoio",
      text: "Use e abuse destes modelos:",
    },
  ];

  return (
    <Section
      backgroundColor={Colors["Green_20"]}
      borderColor={Colors["Green_70"]}
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
        <Title
          sizeDesktop="48px"
          sizeMobile="32px"
          textAlign={"center"}
          color={Colors["Green_70"]}
        >
          Materiais para apoiar o Dia Mundial Sem Carro
        </Title>
        <Container>
          <ContainerCard>
            {cards.map((card) => (
              <Card key={card.id}>
                <TextBox>
                  <Title
                    sizeDesktop="32px"
                    textAlign={"left"}
                    color={Colors["Green_70"]}
                  >
                    {card.title}
                  </Title>
                  <Text size="16px" textAlign={"left"}>
                    {card.text}
                  </Text>
                </TextBox>
                {card.id !== "card4" && (
                  <Button variantcolor="green" fullWidthDesktop fullWidthMobile>
                    Acesse
                  </Button>
                )}

                {card.id === "card4" && <LinksList />}
              </Card>
            ))}
          </ContainerCard>
        </Container>
      </Box>
    </Section>
  );
}
