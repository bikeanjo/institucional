import { Box, Button, Typography } from "@mui/material";
import type { JSX } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { Colors } from "../../../../styles/tokens/colors";

function Carousel(): JSX.Element {
  return (
    <Container carrousel>
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "343px", lg: "1036px" },
          position: "relative",
          height: { xs: "133px", lg: "254px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={"/assets/images/arrow-left.png"}
          alt="Seta para a esquerda"
          sx={{
            display: { xs: "none", lg: "flex" },
            position: "absolute",
            left: "-100px",
            width: "36px",
            height: "36px",
            top: "calc(50% - 18px)",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "24px", lg: "32px" },
          }}
        >
          <Title variant="h2" carrousel color={Colors["Green-10"]}>
            Uma comunidade que pedala por um futuro melhor
          </Title>
          <SubTitle fontWeight={400} carrousel color={Colors["Green-10"]}>
            Conectamos pessoas dispostas a ajudar com quem precisa de apoio para
            pedalar, oferecendo orientação, rotas seguras e acompanhamento no
            percurso.
          </SubTitle>
        </Box>
        <Box
          component="img"
          src={"/assets/images/arrow-right.png"}
          alt="Seta para a direita"
          sx={{
            display: { xs: "none", lg: "flex" },
            position: "absolute",
            right: "-100px",
            width: "36px",
            height: "36px",
            top: "calc(50% - 18px)",
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: { xs: "24px", lg: "54px" },
          marginBottom: { xs: "24px", lg: "54px" },
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "16px", lg: "255px" },
          width: { xs: "100%", lg: "auto" },
          height: { xs: "96px", lg: "56px" },
          padding: "0px 16px",
        }}
      >
        <Button
          component={Link}
          to="/dicas-para-pedalar"
          sx={{
            backgroundColor: Colors["Green-70"],
            color: Colors["G-White"],
            padding: "16px 24px",
            height: { xs: 40, lg: 56 },
            width: { xs: "100%", sm: 185, lg: 185 },
            borderRadius: { xs: "4px", lg: "8px" },
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--mui-palette-G-White)",
              color: "var(--mui-palette-neutral-900)",
            },
          }}
        >
          <Typography>Aprender a pedalar</Typography>
        </Button>
        <Button
          component={Link}
          to="/dicas-bike-anjo"
          sx={{
            backgroundColor: Colors["Green-70"],
            color: Colors["G-White"],
            padding: "16px 24px",
            height: { xs: 40, lg: 56 },
            width: { xs: "100%", sm: 185, lg: 185 },
            borderRadius: { xs: "4px", lg: "8px" },
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--mui-palette-neutral-700)",
              color: "var(--mui-palette-G-White)",
            },
          }}
        >
          <Typography>Ensinar a pedalar</Typography>
        </Button>
      </Box>
      <Box
        component="img"
        src={"/assets/images/steps-carousel.png"}
        alt="Passos do Carrossel"
      />
    </Container>
  );
}

export default Carousel;
