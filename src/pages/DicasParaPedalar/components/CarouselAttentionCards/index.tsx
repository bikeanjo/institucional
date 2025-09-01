import { useRef } from "react";
import { StepCard } from "../Card";
import { Arrow, Cards, CarouselContainer } from "./styles";
import SubTitle from "@components/SubTitle";
import Title from "@components/Title";

interface Step {
  number: number;
  title: string;
  subtitle?: string;
  description: string;
}

interface CarouselStepsProps {
  title: string;
  sub: string;
  steps: Step[];
}

export default function CarouselAttentionCards({
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
    <>
      <Title>{title}</Title>
      <SubTitle>{sub}</SubTitle>

      <CarouselContainer>
        <Arrow direction="left" onClick={() => scroll("left")}>
          <img
            src={"/assets/images/arrow-back.png"}
            alt="Seta para a esquerda"
          />
        </Arrow>

        <Cards ref={scrollRef}>
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              subtitle={step.subtitle}
              description={step.description}
              variant="attention"
            />
          ))}
        </Cards>

        <Arrow direction="right" onClick={() => scroll("right")}>
          <img
            src={"/assets/images/arrow-forward.png"}
            alt="Seta para a direita"
          />
        </Arrow>
      </CarouselContainer>
    </>
  );
}
