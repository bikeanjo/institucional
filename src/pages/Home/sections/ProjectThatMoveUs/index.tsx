import { useRef, useState, type JSX } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import { Box, Button, Typography } from "@mui/material";
import ProjectBox from "../../components/ProjectBox";
import ProjectInfo from "../../components/ProjectInfo";
import "material-icons/iconfont/material-icons.css";
import { Carrousel, Controls, MobileControls, PaginationDot } from "./style";
import { Link } from "react-router-dom";
import { Colors } from "../../../../styles/tokens/colors";

function ProjectThatMoveUs(): JSX.Element {
  const carrousel = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsInfo: {
    id: number;
    colorCard: string;
    imageUrl: string;
    title: string;
    subtitle: string;
    link: string;
  }[] = [
    {
      id: 1,
      colorCard: "#1C97C5",
      imageUrl: "/assets/images/ProjectsCarousel/eba.png",
      title: "Escola Bike Anjo",
      subtitle: "Projetos",
      link: "/escola-bike-anjo",
    },
    {
      id: 2,
      colorCard: "#ED601C",
      imageUrl: "/assets/images/ProjectsCarousel/bike-anjas.png",
      title: "Bike Anjas",
      subtitle: "Projetos",
      link: "/bike-anjas",
    },
    {
      id: 3,
      colorCard: "#E1216D",
      imageUrl: "/assets/images/ProjectsCarousel/pedala-ou-repassa.png",
      title: "Pedala ou Repassa",
      subtitle: "Projetos",
      link: "/pedala-ou-repassa",
    },
    {
      id: 4,
      colorCard: "#1C97C5",
      imageUrl: "/assets/images/ProjectsCarousel/de-bike-ao-trabalho.png",
      title: "De Bike Ao Trabalho",
      subtitle: "Projetos",
      link: "",
    },
    {
      id: 5,
      colorCard: "#4D7A18",
      imageUrl: "/assets/images/ProjectsCarousel/dia-mundial-sem-carro.png",
      title: "Dia Mundial Sem Carro",
      subtitle: "Campanhas",
      link: "",
    },
    {
      id: 6,
      colorCard: "#ED601C",
      imageUrl: "/assets/images/ProjectsCarousel/bicicleta-nos-planos.png",
      title: "Bicicleta nos Planos",
      subtitle: "Campanhas",
      link: "",
    },
    {
      id: 7,
      colorCard: "#1C97C5",
      imageUrl: "/assets/images/ProjectsCarousel/anjos-na-sua-cidade.png",
      title: "Anjos na sua Cidade",
      subtitle: "Articulações Locais",
      link: "",
    },
  ];

  const gap = 40;
  const cardWidth = 328;
  const itensPerView = 2.8;

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

  const mobileCardWidth = 328;
  const mobileGap = 16;

  const mobileTurn = (direction: "prev" | "next") => {
    if (!carrousel.current) return;

    const itemWidth = mobileCardWidth + mobileGap;
    let targetIndex: number;

    if (direction === "next") {
      targetIndex = Math.min(currentIndex + 1, cardsInfo.length - 1);
    } else {
      targetIndex = Math.max(currentIndex - 1, 0);
    }

    carrousel.current.scrollTo({
      left: targetIndex * itemWidth,
      behavior: "smooth",
    });

    setCurrentIndex(targetIndex);
  };

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    setTimeout(() => {
      const target = event.currentTarget;
      const itemWidth = mobileCardWidth + mobileGap;

      const newIndex: number = Math.round(target.scrollLeft / itemWidth);

      if (Number.isFinite(newIndex) && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }, 150);
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
        onScroll={handleScroll}
        sx={{
          width: { xs: "360px", md: "800px", lg: "1032px" },
        }}
      >
        {cardsInfo.map((card) => (
          <ProjectBox key={card.id} colorCard={card.colorCard}>
            <img src={card.imageUrl} alt={"Logo " + card.title} />
            <ProjectInfo>
              <Typography
                fontWeight={500}
                fontSize={18}
                color="#6F6F6F"
                align="center"
              >
                {card.subtitle}
              </Typography>
              <Typography
                paddingBottom={"24px"}
                fontWeight={700}
                fontSize={24}
                color={card.colorCard}
              >
                {card.title}
              </Typography>

              <Button
                component={Link}
                to={card.link}
                sx={{
                  width: "100%",
                  borderRadius: "4px",
                  backgroundColor: " #393939",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                <Typography fontWeight={700} fontSize={16}>
                  Sobre
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

      <MobileControls>
        <span className="material-icons" onClick={() => mobileTurn("prev")}>
          arrow_back_ios_new
        </span>
        <Box display="flex" gap="16px">
          {cardsInfo.map((card, index) => (
            <PaginationDot key={card.id} isActive={index === currentIndex} />
          ))}
        </Box>
        <span className="material-icons" onClick={() => mobileTurn("next")}>
          arrow_forward_ios
        </span>
      </MobileControls>

      <Button
        component={Link}
        to="/iniciativas"
        sx={{
          backgroundColor: Colors["Green-70"],
          color: "var(--mui-palette-G-White)",
          padding: "16px 24px",
          height: { xs: 40 },
          width: { xs: "215px" },
          borderRadius: { xs: "10px", lg: "8px" },
          textTransform: "none",
          boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
          "&:hover": {
            backgroundColor: "#43700E",
          },
        }}
      >
        <Typography fontWeight={600}>Veja Nossas Iniciativas</Typography>
      </Button>
    </Container>
  );
}

export default ProjectThatMoveUs;
