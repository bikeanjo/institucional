import { Box, Typography, Link } from "@mui/material";
import { Container, Text } from "@components";
import { Colors } from "@colors";

const UnavailablePage: React.FC = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "630px" },
          gap: "32px",
          mx: "auto",
          my: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "16px", md: "24px" },
            margin: "auto",
          }}
        >
          <Typography
            color={Colors["Pink_50"]}
            fontWeight="700"
            fontSize={{ xs: "32px", lg: "64px" }}
            whiteSpace="nowrap"
          >
            Enchendo o Pneu...
          </Typography>
          <Box sx={{ width: "79px", heigth: "72px" }}>
            <img src={"/assets/icons/Biker.webp"} alt="ícone de bicicleta" />
          </Box>
        </Box>
        <Text>
          A página que você procurou está fora do ar no momento.
          <br />
          Estamos calibrando tudo para que você tenha a melhor experiência
          possível.
        </Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Text>Enquanto isso, que tal voltar para a {""}</Text>
          <Text>
            <Link
              href="/"
              color={Colors["Green_70"]}
              fontWeight="700"
              underline="none"
              display={{ xs: "block", md: "inline" }}
              marginInline="10px"
            >
              página inicial?
            </Link>
          </Text>
        </Box>
      </Box>
    </Container>
  );
};
export default UnavailablePage;
