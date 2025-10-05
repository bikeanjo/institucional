import { Title, Text, Section } from "@components";
import { Box } from "@mui/material";

export default function AboutPedalaOuRepassa() {
  return (
    <Section>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: 1,
          }}
        >
          <Title>Bicicleta foi feita para estar em movimento!</Title>
          <Text>
            “Pedala ou repassa” é uma iniciativa de doação de bicicletas para
            pessoas que não têm dinheiro para comprar, mas que gostariam de usar
            a bicicleta no dia a dia, para trabalho, lazer, esporte, ...
          </Text>
          <Text>
            A Bike Anjo recebe doações de bicicletas que são frequentemente não
            utilizadas, portanto, precisa de pequenos reparos para uso diário.
            Estamos em busca de doações de peças e serviços de reparo para
            deixar a bicicleta pronta para uso por mais ciclistas da cidade!
          </Text>
        </Box>
        <Box
          sx={{
            width: "100%",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#4D7A18",
            flex: 1,
          }}
        >
          <img
            src={"/assets/images/PedalaOuRepassa/pedala-ou-repassa.webp"}
            alt="Oficina comunitária com várias bikes para revisar."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Section>
  );
}
