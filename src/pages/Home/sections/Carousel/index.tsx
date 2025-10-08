import { Box, Typography } from "@mui/material";
import type { JSX } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { Colors } from "@colors";
import { Carrousel, Button } from "@components";

function Carousel(): JSX.Element {
  const HeroOne = {
    url: "/assets/images/Home/placeholder/hero.webp",
    backgroundPositionDesktop: "50% 60%",
    backgroundPositionMobile: "50% 10%",
  };
  const HeroTwo = {
    url: "/assets/images/Home/placeholder/sobre.webp",
    backgroundPositionDesktop: "50% 60%",
    backgroundPositionMobile: "50% 30%",
  };
  return (
    <Carrousel
      config={{ fullWidth: true }}
      controls={{
        color: Colors["Green_70"],
        backgroundColor: Colors["Green_10"],
      }}
    >
      <Container Hero={HeroOne}>
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "24px", lg: "32px" },
              paddingInline: "40px",
              height: "fit-content",
              marginTop: { xs: "20px", lg: "80px" },
            }}
          >
            <Title variant="h2" carrousel color={Colors["Green_10"]}>
              Uma comunidade que pedala por um futuro melhor
            </Title>
            <SubTitle fontWeight={400} carrousel color={Colors["Green_10"]}>
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
            paddingInline: "40px",
          }}
        >
          <Button component={Link} to="/dicas-para-pedalar" fullWidthMobile>
            Aprender a pedalar
          </Button>
          <Button component={Link} to="/dicas-bike-anjo" fullWidthMobile>
            Ensinar a pedalar
          </Button>
        </Box>
      </Container>
      <Container Hero={HeroTwo}>
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "24px", lg: "32px" },
              width: { lg: "1036px" },
              paddingInline: "40px",
              height: "fit-content",
              marginTop: { xs: "20px", lg: "80px" },
            }}
          >
            <Title variant="h2" carrousel color={Colors["Green_10"]}>
              Sobre a Bike Anjo
            </Title>
            <SubTitle fontWeight={400} carrousel color={Colors["Green_10"]}>
              A Bike Anjo é uma rede de pessoas voluntárias que ensina pessoas a
              pedalar, indica rotas seguras e acompanha seus primeiros trajetos.
              Acreditamos na bicicleta como ferramenta de transformação para
              pessoas e cidades mais humanas.
            </SubTitle>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: { xs: "100px", lg: "100px" },
            marginBottom: { xs: "24px", lg: "54px" },
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "16px", lg: "255px" },
            width: { xs: "100%", lg: "auto" },
            height: { xs: "100%", lg: "56px" },
            margin: "auto",
            paddingInline: "40px",
          }}
        >
          <Button component={Link} to="/como-funciona" fullWidthMobile>
            <Typography>Como Funciona</Typography>
          </Button>
          <Button component={Link} to="/quem-somos" fullWidthMobile>
            <Typography>Quem Somos</Typography>
          </Button>
        </Box>
      </Container>
    </Carrousel>
  );
}

export default Carousel;
