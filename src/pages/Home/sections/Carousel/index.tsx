import { Box, Button, Typography } from "@mui/material";
import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import RightArrow from "../../../../assets/images/arrow-right.png";
import LeftArrow from "../../../../assets/images/arrow-left.png";
import StepsCarousel from "../../../../assets/images/steps-carousel.png";
import { Link } from "react-router-dom";

function Carousel(): ReactNode {
  return (
    <Container secondary carrousel>
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
          src={LeftArrow}
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
          <Title variant="h2" carrousel>
            Uma comunidade que pedala por um futuro melhor
          </Title>
          <SubTitle fontWeight={400} carrousel>
            Conectamos pessoas dispostas a ajudar com quem precisa de apoio para
            pedalar, oferecendo orientação, rotas seguras e acompanhamento no
            percurso.
          </SubTitle>
        </Box>
        <Box
          component="img"
          src={RightArrow}
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
            backgroundColor: "var(--mui-palette-neutral-700)",
            color: "var(--mui-palette-neutral-100)",
            padding: "16px 24px",
            height: { xs: 40, lg: 56 },
            width: { xs: "100%", sm: 185, lg: 185 },
            borderRadius: { xs: "4px", lg: "8px" },
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--mui-palette-neutral-100)",
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
            backgroundColor: "var(--mui-palette-neutral-100)",
            color: "var(--mui-palette-neutral-900)",
            padding: "16px 24px",
            height: { xs: 40, lg: 56 },
            width: { xs: "100%", sm: 185, lg: 185 },
            borderRadius: { xs: "4px", lg: "8px" },
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--mui-palette-neutral-700)",
              color: "var(--mui-palette-neutral-100)",
            },
          }}
        >
          <Typography>Ensinar a pedalar</Typography>
        </Button>
      </Box>
      <Box
        component="img"
        src={StepsCarousel}
        alt="Passos do Carrossel"
        sx={{
          width: { xs: "48px", lg: "75px" },
          height: { xs: "8px", lg: "15px" },
        }}
      />
    </Container>
  );
}

export default Carousel;
