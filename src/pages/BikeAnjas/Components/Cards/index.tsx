import { useRef, useState } from "react";
import {
  ContainerCards,
  PaginationContainer,
  Dot,
  ArrowButton,
} from "./styles";
import { MiniCard } from "../MiniCard/index";
import Title from "@components/Title";
import { Colors } from "../../../../styles/tokens/colors";
import { Box } from "@mui/material";

export function Cards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    {
      id: "card1",
      title: "Mulheres Ciclistas",
      text: "Confira dicas e desafios do uso da bicicleta em espaços urbanos.",
      textButton: "Matéria",
      secondary: false,
    },
    {
      id: "card2",
      title: "E-Book Mulheres, liberdade, movimento.",
      text: "Confira dicas e desafios do uso da bicicleta em espaços urbanos.",
      textButton: "Ebook",
      secondary: false,
    },

    {
      id: "card3",
      title: "Oficinas Virtuais",
      text: "Assista as Oficinas Virtuais da Bike Anjas Multiplicadoras.",
      textButton: "Acessar",
      secondary: false,
    },

    {
      id: "card4",
      title: "Manifesto Bike Anjas",
      text: "Texto sobre manifesto.",
      textButton: "Acessar",
      secondary: false,
    },
    {
      id: "card5",
      title: "Bike Anjas São Paulo",
      text: "Texto sobre o blog da Bike Anjas.",
      textButton: "Acessar",
      secondary: false,
    },
    {
      id: "card6",
      title: "Carta de Valores",
      text: "Texto sobre a Carta de Valores",
      textButton: "Acessar",
      secondary: false,
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 1;
    const newPage = Math.round(scrollLeft / cardWidth);
    setCurrentPage(newPage);
  };

  const scrollToPage = (page: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 1;
    scrollRef.current.scrollTo({
      left: cardWidth * page,
      behavior: "smooth",
    });
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        margin: "40px 0px",
        padding: "40px 0px",
        backgroundColor: Colors["Green-20"],
        border: `2px solid ${Colors["Green-70"]}`,
        borderInline: 0,
      }}
    >
      <Title color={Colors["Green-70"]} center>
        Conheça mais sobre Bike Anjas
      </Title>

      <div style={{ position: "relative" }}>
        <ArrowButton
          left
          onClick={() => scrollToPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <img
            src={"/assets/images/diaMundialSemCarro/left.png"}
            alt="Anterior"
          />
        </ArrowButton>

        <ContainerCards ref={scrollRef} onScroll={handleScroll}>
          {cards.map((card) => (
            <MiniCard
              key={card.id}
              title={card.title}
              textButton={card.textButton}
              secondary={card.secondary}
            >
              <>{card.text}</>
            </MiniCard>
          ))}
        </ContainerCards>

        <ArrowButton
          onClick={() => scrollToPage(currentPage + 1)}
          disabled={currentPage === cards.length - 1}
        >
          <img
            src={"/assets/images/diaMundialSemCarro/right.png"}
            alt="Próximo"
          />
        </ArrowButton>
      </div>

      <PaginationContainer>
        {cards.map((card, index) => (
          <Dot key={card.id} isActive={index === currentPage} />
        ))}
      </PaginationContainer>
    </Box>
  );
}
