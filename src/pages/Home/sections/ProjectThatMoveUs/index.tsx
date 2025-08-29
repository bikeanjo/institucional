import { useRef, type JSX } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import { Box, Button, Typography } from "@mui/material";
import EBA from "../../../../assets/images/EBA.png";
import bikeAnjas from "../../../../assets/images/bike-anjas.png";
import bikeAnje from "../../../../assets/images/bike-anje.png";
import bikeNaEscola from "../../../../assets/images/bike-na-escola.png";
import bikeNaPeriferia from "../../../../assets/images/bike-na-periferia.png";
import deBikeAoTrabalho from "../../../../assets/images/de-bike-ao-trabalho.png";
import ProjectBox from "../../components/ProjectBox";
import ProjectInfo from "../../components/ProjectInfo";
import "material-icons/iconfont/material-icons.css";
import { Carrousel, Controls } from "./style";
import { Link } from "react-router-dom";
import { Colors } from "../../../../styles/tokens/colors";

function ProjectThatMoveUs(): JSX.Element {
  const carrousel = useRef<HTMLDivElement | null>(null);
  const cardsInfo: {
    imageUrl: string;
    title: string;
    subtitle: string;
    link: string;
  }[] = [
    {
      imageUrl: EBA,
      title: "Escola Bike Anjo",
      subtitle: "Aulas e oficinas para iniciantes",
      link: "/escola-bike-anjo",
    },
    {
      imageUrl: bikeAnjas,
      title: "Bike Anjas",
      subtitle: "Apoio entre mulheres ciclistas",
      link: "/bike-anjas",
    },
    {
      imageUrl: bikeAnje,
      title: "Bike Anje",
      subtitle: "Espaço seguro para pessoas LGBTQIAPN+",
      link: "",
    },
    {
      imageUrl: bikeNaEscola,
      title: "Bike na Escola",
      subtitle: "Educação sobre bike nas escolas",
      link: "",
    },
    {
      imageUrl: bikeNaPeriferia,
      title: "Bike na Periferia",
      subtitle: "Ações em territórios periféricos",
      link: "",
    },
    {
      imageUrl: deBikeAoTrabalho,
      title: "De Bike ao Trabalho",
      subtitle: "Mobilidade no trajeto casa ao trabalho",
      link: "",
    },
  ];

  const gap = 40;
  const cardWidth = 285.267;
  const itensPerView = 3;

  const turnLeft = () => {
    if (carrousel.current) {
      carrousel.current.scrollLeft -= (cardWidth + gap) * itensPerView;
    }
  };

  const turnRight = () => {
    if (carrousel.current) {
      carrousel.current.scrollLeft += (cardWidth + gap) * itensPerView;
    }
  };

  return (
    <Container gap="32px">
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "343px", lg: "1036px" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title variant="h2" color={Colors["Pink-50"]}>
          Iniciativas que nos movem
        </Title>
        <SubTitle>
          Cada projeto é uma forma de transformar cidades, conheça nosso
          trabalho. Além de ensinar a pedalar, atuamos em diversas frentes.
        </SubTitle>
      </Box>
      <Carrousel
        ref={carrousel}
        sx={{
          gap: { xs: 2, lg: 5 },
          marginTop: "8px",
          width: { xs: "360px", md: "800px", lg: "1032px" },
          paddingInline: { xs: "32px" },
        }}
      >
        {cardsInfo.map((card) => (
          <ProjectBox key={card.title}>
            <img src={card.imageUrl} alt={"Logo " + card.title} />
            <ProjectInfo>
              <Typography
                fontWeight={700}
                fontSize={18.6}
                color="var(--mui-palette-neutral-800)"
              >
                {card.title}
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={18.6}
                color="var(--mui-palette-neutral-800)"
                align="center"
              >
                {card.subtitle}
              </Typography>
              <Button
                component={Link}
                to={card.link}
                sx={{
                  backgroundColor: "transparent",
                  color: "var(--mui-palette-title-main)",
                }}
              >
                <Typography fontWeight={700} fontSize={18.6}>
                  Conheça
                </Typography>
              </Button>
            </ProjectInfo>
          </ProjectBox>
        ))}
      </Carrousel>
      <Controls>
        <span className="material-icons left" onClick={turnLeft}>
          arrow_back_ios_new
        </span>
        <span className="material-icons right" onClick={turnRight}>
          arrow_forward_ios
        </span>
      </Controls>

      <Button
        component={Link}
        to="/iniciativas"
        sx={{
          backgroundColor: Colors["Green-70"],
          color: "var(--mui-palette-neutral-100)",
          padding: "16px 24px",
          height: { xs: 40 },
          width: { xs: "215px" },
          borderRadius: { xs: "10px", lg: "8px" },
          textTransform: "none",
          "&:hover": {
            backgroundColor: "var(--mui-palette-neutral-100)",
            color: "var(--mui-palette-neutral-900)",
          },
        }}
      >
        <Typography fontWeight={600}>Veja Nossas Iniciativas</Typography>
      </Button>
    </Container>
  );
}

export default ProjectThatMoveUs;
