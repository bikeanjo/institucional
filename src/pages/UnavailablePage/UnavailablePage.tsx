import { Box, Typography, Link } from "@mui/material";
import Bike from "../../assets/images/UnavailablePage/pedal_bike.svg";
import Container from "../Components/Container";
import Text from "../Components/Text";

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
            color="black"
            fontWeight="700"
            fontSize={{ xs: "32px", lg: "64px" }}
          >
            Enchendo o Pneu...
          </Typography>
          <Box sx={{ width: "46px", heigth: "46px" }}>
            <img src={Bike} alt="ícone de bicicleta" width="46px" />
          </Box>
        </Box>
        <Text>
          A página que você procurou está fora do ar no momento.
          <br />
          Estamos calibrando tudo para que você tenha a melhor experiência
          possível.
        </Text>
        <Text>
          Enquanto isso, que tal voltar para a {""}
          <Link
            href="/"
            color="title.main"
            fontWeight="700"
            underline="none"
            display={{ xs: "block", md: "inline" }}
            marginInline="10px"
          >
            página inicial?
          </Link>
        </Text>
      </Box>
    </Container>
  );
};
export default UnavailablePage;
