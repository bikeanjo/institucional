import { useRef, useState, useEffect, type JSX } from "react";
import { Box, Typography } from "@mui/material";
import ProjectBox from "../../../Home/components/ProjectBox";
import ProjectInfo from "../../../Home/components/ProjectInfo";
import "material-icons/iconfont/material-icons.css";
import { Carrousel, Controls, MobileControls, PaginationDot } from "./styles";
import { Button } from "@components";
import { loadTextContent } from "@/textContent";

type TeamMember = {
  id: number;
  colorCard: string;
  imageUrl: string;
  name: string;
  position: string;
  from: string;
};

function OurTeam(): JSX.Element {
  const carrousel = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsInfo, setCardsInfo] = useState<TeamMember[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    void loadTextContent("team").then((data) =>
      setCardsInfo(data as TeamMember[]),
    );
  }, []);

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
          width: { xs: "360px", md: "800px", lg: "1032px", margin: "auto" },
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
                color="var(--mui-palette-G_Grey_90)"
              >
                {card.position}
              </Typography>

              <Typography
                paddingTop={{ xs: "0px", md: "16px" }}
                paddingBottom={"24px"}
                fontSize={{ xs: 14, md: 16 }}
                color="var(--mui-palette-G_Grey_70)"
              >
                {card.from}
              </Typography>

              <Button fullWidthDesktop variantcolor="gray">
                Sobre
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
