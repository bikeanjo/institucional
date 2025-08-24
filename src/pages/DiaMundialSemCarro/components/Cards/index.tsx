import { useRef, useState } from "react";
import { Title } from "../Title/Title";
import {
  ContainerCards,
  PaginationContainer,
  Dot,
  ArrowButton,
} from "./styles";
import { MiniCard } from "../MiniCard";
import { useTheme, useMediaQuery } from "@mui/material";
import ArrowLeft from "../../../../assets/images/diaMundialSemCarro/left.png";
import ArrowRight from "../../../../assets/images/diaMundialSemCarro/right.png";

export function Cards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cards = [
    {
      id: "card1",
      title: "KIT Para deixar o carro em casa",
      text: "Informações sobre o kit.",
      secondary: false,
    },
    {
      id: "card2",
      title: "Dicas para engajar",
      text: "Informações sobre as dicas.",
      secondary: false,
    },
    {
      id: "card3",
      title: "Verifique a Agenda",
      text: "Informações sobre a agenda.",
      secondary: false,
    },
    {
      id: "card4",
      title: "Modelos de pedidos de apoio",
      text: (
        <>
          <p>Use e abuse destes modelos:</p>
          <ul>
            <li>
              <a href="#">Modelo para empresa</a>
            </li>
            <li>
              <a href="#">Modelo para prefeitura</a>
            </li>
            <li>
              <a href="#">Release do Bike Anjo no Dia Mundial Sem Carro</a>
            </li>
          </ul>
        </>
      ),
      secondary: true,
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
    <>
      <Title>Materiais para apoiar no Dia Mundial Sem Carro</Title>

      <div style={{ position: "relative" }}>
        <ArrowButton
          left
          onClick={() => scrollToPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <img src={ArrowLeft} alt="Anterior" />
        </ArrowButton>

        <ContainerCards ref={scrollRef} onScroll={handleScroll}>
          {cards.map((card) => (
            <MiniCard
              key={card.id}
              title={card.title}
              textButton={!card.secondary ? "Acessar" : undefined}
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
          <img src={ArrowRight} alt="Próximo" />
        </ArrowButton>
      </div>

      {isMobile && (
        <PaginationContainer>
          {cards.map((card, index) => (
            <Dot key={card.id} isActive={index === currentPage} />
          ))}
        </PaginationContainer>
      )}
    </>
  );
}
