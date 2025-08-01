import { useRef } from "react";
import { StepCard } from "../Card";
import ArrowBack from "../../../../assets/images/arrow-back.png";
import ArrowForward from "../../../../assets/images/arrow-forward.png";
import { Arrow, Cards, CarouselContainer, Sub, Title, Wrapper } from "./styles";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface CarouselStepsProps {
  title: string;
  sub: string;
  steps: Step[];
}

export default function CarouselTeachingCards({
  title,
  sub,
  steps,
}: CarouselStepsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 280;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Sub>{sub}</Sub>

      <CarouselContainer>
        <Arrow direction="left" onClick={() => scroll("left")}>
          <img src={ArrowBack} alt="Seta para a esquerda" />
        </Arrow>

        <Cards ref={scrollRef}>
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </Cards>

        <Arrow direction="right" onClick={() => scroll("right")}>
          <img src={ArrowForward} alt="Seta para a direita" />
        </Arrow>
      </CarouselContainer>
    </Wrapper>
  );
}
