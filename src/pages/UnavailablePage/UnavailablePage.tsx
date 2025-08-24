import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import Bike from "../../assets/images/UnavailablePage/pedal_bike.svg";

const UnavailablePage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: "160px", sm: "240px" } }}>
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
          }}
        >
          <Typography
            color="black"
            fontWeight="700"
            fontSize={{ xs: "32px", sm: "64px" }}
          >
            Enchendo o Pneu...
          </Typography>
          <Box sx={{ width: "46px", heigth: "46px" }}>
            <img src={Bike} alt="ícone de bicicleta" width="46px" />
          </Box>
        </Box>
        <Typography
          fontSize={{ xs: "16px", sm: "24px" }}
          lineHeight={{ xs: "18px", md: "28px" }}
          letterSpacing="0px"
          color="black"
        >
          A página que você procurou está fora do ar no momento.
          <br />
          Estamos calibrando tudo para que você tenha a melhor experiência
          possível.
        </Typography>
        <Typography
          color="black"
          fontSize="16px"
          lineHeight="18px"
          textAlign={{ xs: "center", md: "left" }}
        >
          Enquanto isso, que tal voltar para a {""}
          <Link
            href="/"
            color="title.main"
            fontWeight="700"
            underline="none"
            display={{ xs: "block", md: "inline" }}
          >
            página inicial?
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};
export default UnavailablePage;
