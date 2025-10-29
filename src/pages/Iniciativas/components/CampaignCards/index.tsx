import {
  Container,
  ContainerCard,
  Controls,
  Dot,
  Dots,
} from "../ProjectCards/styles";
import { useEffect, useRef, useState } from "react";
import { Card } from "../Card/Index";
import { Colors } from "@colors";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

export function CampaignCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: "Card1",
      title: "Dia Mundial Sem Carro",
      image: "assets/images/Iniciativas/dia-mundial-sem-carro.webp",
      textDesktop:
        "No Dia Mundial Sem Carro, a cidade respira diferente. A gente convida todo mundo a experimentar a cidade de outro jeito: com menos ruído, mais pedal e mais conexão. Um só dia que pode inspirar muitos!",
      textMobile: "Resumo até 110 caracteres",
      button: "Conheça",
      link: "/dia-mundial-sem-carro",
      color: Colors["Blue_60"],
    },
    {
      id: "Card2",
      title: "Bicicleta nos Planos",
      image: "assets/images/Iniciativas/bicicleta-nos-planos.webp",
      textDesktop:
        "Mais bikes, menos blá-blá-blá! Lutamos por políticas públicas que priorizem a mobilidade ativa. Com dados, escuta e articulação, queremos a bicicleta nos planos das cidades.",
      textMobile: "Resumo até 110 caracteres",
      button: "Conheça",
      link: "",
      color: Colors["Orange_50"],
    },
    {
      id: "Card3",
      title: "Ação para não ciclistas",
      image: "assets/images/Iniciativas/acao-para-nao-ciclistas.webp",
      textDesktop:
        "Tem espaço pra todo mundo na transformação das cidades. Aqui na Bike Anjo, ensinamos outras formas de ajudar a iniciativa da bicicleta mesmo que não pedalando",
      textMobile: "Resumo até 110 caracteres",
      button: "Entre em contato",
      link: "",
      color: Colors["Green_70"],
    },
  ];

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
      const index = Math.round(progress * (cards.length - 1));
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Container>
        <Controls onClick={handlePrev}>
          <ArrowBackIosNewRounded />
        </Controls>
        <ContainerCard ref={scrollContainerRef}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </ContainerCard>
        <Controls onClick={handleNext}>
          <ArrowForwardIosRounded />
        </Controls>
      </Container>

      <Dots>
        {cards.map((_, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </Dots>
    </>
  );
}
