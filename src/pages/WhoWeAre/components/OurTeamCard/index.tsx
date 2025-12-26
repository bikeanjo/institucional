import { useRef, useState, useEffect, type JSX } from "react";
import { Box, Modal, Typography } from "@mui/material";
import ProjectBox from "../../../Home/components/ProjectBox";
import ProjectInfo from "../../../Home/components/ProjectInfo";
import "material-icons/iconfont/material-icons.css";
import {
  Container,
  ContainerCard,
  Controls,
  DesktopModalButton,
  Dot,
  Dots,
  MobileModalButton,
} from "./styles";
import { Button } from "@components";
import { loadTextContent } from "@/textContent";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { Colors } from "@colors";

type TeamMember = {
  id: number;
  colorCard: string;
  imageUrl: string;
  name: string;
  position: string;
  from: string;
  description?: string;
};

function OurTeam(): JSX.Element {
  const [cardsInfo, setCardsInfo] = useState<TeamMember[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleOpen = (member: TeamMember) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    void loadTextContent("team").then((data) =>
      setCardsInfo(data as TeamMember[]),
    );
  }, []);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
      scrollContainerRef.current.scrollLeft -= scrollAmount;
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = scrollLeft / maxScroll;
      const index = Math.round(progress * (cardsInfo.length - 1));
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [cardsInfo.length]);

  return (
    <>
      <Container>
        <Controls onClick={handlePrev}>
          <ArrowBackIosNewRounded />
        </Controls>

        <ContainerCard ref={scrollContainerRef}>
          {cardsInfo.map((card) => (
            <ProjectBox key={card.id} $colorCard={card.colorCard}>
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

                <Button
                  fullWidthDesktop
                  fullWidthMobile
                  variantcolor="gray"
                  onClick={() => handleOpen(card)}
                >
                  Sobre
                </Button>
              </ProjectInfo>
            </ProjectBox>
          ))}
        </ContainerCard>

        <Controls onClick={handleNext}>
          <ArrowForwardIosRounded />
        </Controls>
      </Container>

      <Dots>
        {cardsInfo.map((_, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </Dots>

      {selectedMember && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="team-member-modal-title"
          aria-describedby="team-member-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "343px", md: "660px" },
              bgcolor: "var(--mui-palette-G_Grey_10)",
              border: `2px solid ${selectedMember.colorCard}`,
              borderRadius: "12px",
              boxShadow: 24,
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              maxHeight: { xs: "90vh", md: "auto" },
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: { xs: "100%", md: "612px" },
                gap: { xs: 2, md: 2 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: { xs: "96px", md: "248px" },
                  flexShrink: 0,
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  component="img"
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  sx={{
                    width: { xs: "96px", md: "248px" },
                    height: { xs: "96px", md: "248px" },
                    borderRadius: "50%",
                    objectFit: "cover",
                    padding: { xs: "3px", md: "6px" },
                    border: {
                      xs: `3px solid ${selectedMember.colorCard}`,
                      md: `6px solid ${selectedMember.colorCard}`,
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: { xs: "calc(100% - 96px - 16px)", md: "100%" },
                  display: "flex",
                  flexDirection: "column",
                  textAlign: { xs: "left", md: "left" },
                  alignItems: "flex-start",
                  justifyContent: { xs: "flex-start", md: "space-between" },
                  minHeight: { md: "248px" },
                }}
              >
                <Typography
                  id="team-member-modal-title"
                  fontSize={{ xs: "24px", md: "32px" }}
                  fontWeight={700}
                  color={selectedMember.colorCard}
                >
                  {selectedMember.name}
                </Typography>
                <Typography
                  fontSize={{ xs: "18px", md: "24px" }}
                  fontWeight={700}
                >
                  {selectedMember.position}
                </Typography>
                <Typography
                  fontSize={{ xs: "14px", md: "18px" }}
                  color={Colors["G_Grey_100"]}
                >
                  {selectedMember.from}
                </Typography>
                <DesktopModalButton onClick={handleClose}>
                  Ocultar
                </DesktopModalButton>
              </Box>
            </Box>

            <MobileModalButton onClick={handleClose}>Ocultar</MobileModalButton>

            {selectedMember.description && (
              <Typography
                fontSize={{ xs: "14px", md: "16px" }}
                color={Colors["G_Grey_100"]}
              >
                {selectedMember.description}
              </Typography>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
}
export default OurTeam;
