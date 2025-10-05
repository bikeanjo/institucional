import { useRef } from "react";
import { StepCard } from "../Card";
import { Arrow, Cards, CarouselContainer } from "./styles";
import { Text, Title, Section } from "@components";

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

export default function CarouselTipCards({
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
    <Section>
      <Title>{title}</Title>
      <Text>{sub}</Text>

      <CarouselContainer>
        <Arrow direction="left" onClick={() => scroll("left")}>
          <img
            src={"/assets/icons/arrow-back.webp"}
            alt="Seta para a esquerda"
          />
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
          <img
            src={"/assets/icons/arrow-forward.webp"}
            alt="Seta para a direita"
          />
        </Arrow>
      </CarouselContainer>
    </Section>
  );
}
