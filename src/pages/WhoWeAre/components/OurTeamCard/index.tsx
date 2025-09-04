import { useRef, useState, type JSX } from "react";
import { Box, Button, Typography } from "@mui/material";
import ProjectBox from "../../../Home/components/ProjectBox";
import ProjectInfo from "../../../Home/components/ProjectInfo";
import AndersonPaz from "../../../../../public/assets/images/WhoWeAre/anderson-paz.png";
import VivianGarelli from "../../../../../public/assets/images/WhoWeAre/vivian-garelli.png";
import IanThomaz from "../../../../../public/assets/images/WhoWeAre/ian-thomaz.png";
import MilvoRossarola from "../../../../../public/assets/images/WhoWeAre/milvo-rossarola.png";
import MartinaHorvath from "../../../../../public/assets/images/WhoWeAre/martina-horvath.png";
import VicenteseSJunior from "../../../../../public/assets/images/WhoWeAre/vicentese-s-junior.png";
import "material-icons/iconfont/material-icons.css";
import { Carrousel, Controls, MobileControls, PaginationDot } from "./styles";

function OurTeam(): JSX.Element {
  const carrousel = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsInfo: {
    id: number;
    colorCard: string;
    imageUrl: string;
    name: string;
    position: string;
    from: string;
  }[] = [
    {
      id: 1,
      colorCard: "var(--mui-palette-Green-70)",
      imageUrl: AndersonPaz,
      name: "Anderson Paz",
      position: "Diretor Presidente",
      from: "Brasilia - Distrito Federal",
    },
    {
      id: 2,
      colorCard: "var(--mui-palette-Orange-50)",
      imageUrl: IanThomaz,
      name: "Ian Thomaz",
      position: "Diretor Financeiro",
      from: "São Paulo - São Paulo",
    },
    {
      id: 3,
      colorCard: "var(--mui-palette-Blue-60)",
      imageUrl: MilvoRossarola,
      name: "Milvo Rossarola",
      position: "Diretor Administrativo",
      from: "Rio de Janeiro - RJ",
    },
    {
      id: 4,
      colorCard: "var(--mui-palette-Green-70)",
      imageUrl: VivianGarelli,
      name: "Vivian Garelli",
      position: "Conselheira Fiscal",
      from: "Niterói - RJ",
    },
    {
      id: 5,
      colorCard: "var(--mui-palette-Pink-50)",
      imageUrl: MartinaHorvath,
      name: "Martina Horvath",
      position: "Conselheira Fiscal",
      from: "Mairiporã - São Paulo",
    },
    {
      id: 6,
      colorCard: "var(--mui-palette-Green-70)",
      imageUrl: VicenteseSJunior,
      name: "Vicentese S Junior",
      position: "Conselheiro Fiscal",
      from: "Volta Redonda - RJ",
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

  const mobileCardWidth = 254;
  const mobileGap = 80;

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
    <>
      <Carrousel
        ref={carrousel}
        onScroll={handleScroll}
        sx={{
          width: { xs: "360px", md: "800px", lg: "1032px" },
        }}
      >
        {cardsInfo.map((card) => (
          <ProjectBox key={card.id} colorCard={card.colorCard}>
            <img src={card.imageUrl} />
            <ProjectInfo>
              <Typography
                paddingTop={{ xs: "12px", md: "24px" }}
                fontWeight={700}
                fontSize={{ xs: 24, md: 32 }}
                color={card.colorCard}
                align="center"
              >
                {card.name}
              </Typography>
              <Typography
                paddingTop={"12px"}
                paddingBottom={{ xs: "16px", md: "0px" }}
                fontWeight={500}
                fontSize={{ xs: 18, md: 24 }}
                color="var(--mui-palette-G-Grey-90)"
              >
                {card.position}
              </Typography>

              <Typography
                paddingTop={{ xs: "0px", md: "16px" }}
                paddingBottom={"24px"}
                fontSize={{ xs: 14, md: 16 }}
                color="var(--mui-palette-G-Grey-70)"
              >
                {card.from}
              </Typography>

              <Button
                sx={{
                  width: "100%",
                  borderRadius: "4px",
                  backgroundColor: "var(--mui-palette-G-Grey-80)",
                  color: "var(--mui-palette-G-White)",
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
    </>
  );
}
export default OurTeam;
