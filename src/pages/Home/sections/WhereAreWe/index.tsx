import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import map from "../../../../assets/images/map.png";
import { Box, Button, Typography } from "@mui/material";

function WhereAreWe(): ReactNode {
  return (
    <Container secondary gap="32px">
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "343px", lg: "1036px" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title variant="h2">Onde estamos</Title>
        <SubTitle fontSize={24}>
          Saiba onde encontrar iniciativas para participar
        </SubTitle>
      </Box>
      <Box
        component="img"
        src={map}
        alt="Mapa com as iniciativas da Bike Anjo"
        sx={{
          marginTop: { xs: "0px", lg: "8px" },
          width: { xs: 343, lg: 1000, xl: 1242 },
          height: 520,
          objectFit: "cover",
          borderRadius: "16px",
          border: { xs: "2px solid black", lg: "6px solid black" },
        }}
      />
      <Button
        sx={{
          backgroundColor: "var(--mui-palette-neutral-700)",
          color: "var(--mui-palette-neutral-100)",
          padding: "16px 24px",
          height: { xs: 56 },
          width: { xs: "188px" },
          borderRadius: { xs: "10px", lg: "8px" },
          textTransform: "none",
          "&:hover": {
            backgroundColor: "var(--mui-palette-neutral-100)",
            color: "var(--mui-palette-neutral-900)",
          },
        }}
      >
        <Typography fontWeight={600}>Veja Onde Estamos</Typography>
      </Button>
    </Container>
  );
}

export default WhereAreWe;
