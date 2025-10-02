import { Box, Typography } from "@mui/material";
import type { JSX } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { Colors } from "../../../../styles/tokens/colors";
import Carrousel from "@components/Carrousel";
import Button from "@components/Button";

function Carousel(): JSX.Element {
  const imageOne = "/assets/images/Home/placeholder/hero.webp";
  const imageTwo = "/assets/images/Home/placeholder/sobre.webp";
  return (
    <Carrousel config={{ fullWidth: true }}>
      <Container carrousel url={imageOne}>
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            height: { xs: "133px", lg: "254px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
              Conectamos pessoas dispostas a ajudar com quem precisa de apoio
              para pedalar, oferecendo orientação, rotas seguras e
              acompanhamento no percurso.
            </SubTitle>
          </Box>
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
            margin: "auto",
          }}
        >
          <Button
            component={Link}
            to="/dicas-para-pedalar"
            fullWidthMobile
            sx={{
              "&:hover": {
                color: "var(--mui-palette-neutral-900)",
              },
            }}
          >
            Aprender a pedalar
          </Button>
          <Button component={Link} to="/dicas-bike-anjo" fullWidthMobile>
            Ensinar a pedalar
          </Button>
        </Box>
      </Container>
      <Container carrousel url={imageTwo}>
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            height: { xs: "133px", lg: "254px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "24px", lg: "32px" },
              width: { lg: "1036px" },
            }}
          >
            <Title variant="h2" carrousel color={Colors["Green-10"]}>
              Sobre a Bike Anjo
            </Title>
            <SubTitle fontWeight={400} carrousel color={Colors["Green-10"]}>
              A Bike Anjo é uma rede de pessoas voluntárias que ensina pessoas a
              pedalar, indica rotas seguras e acompanha seus primeiros trajetos.
              Acreditamos na bicicleta como ferramenta de transformação para
              pessoas e cidades mais humanas.
            </SubTitle>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: { xs: "200px", lg: "100px" },
            marginBottom: { xs: "24px", lg: "54px" },
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "16px", lg: "255px" },
            width: { xs: "100%", lg: "auto" },
            height: { xs: "96px", lg: "56px" },
            margin: "auto",
          }}
        >
          <Button
            component={Link}
            to="/como-funciona"
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
            <Typography>Como Funciona</Typography>
          </Button>
          <Button
            component={Link}
            to="/quem-somos"
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
            <Typography>Quem Somos</Typography>
          </Button>
        </Box>
      </Container>
    </Carrousel>
  );
}

export default Carousel;
