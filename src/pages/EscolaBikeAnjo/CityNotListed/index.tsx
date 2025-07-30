import ArrowBack from "../../../assets/images/arrow-back.png";
import ArrowForward from "../../../assets/images/arrow-forward.png";
import { StepCard } from "../../DicasParaPedalar/components/Card";
import { Cards } from "../../DicasParaPedalar/components/CarouselTipCards/styles";
import {
  Arrow,
  Button,
  ButtonContainer,
  ButtonText,
  CarouselContainer,
  Sub,
  Title,
  Wrapper,
} from "./styles";
import { useEffect, useRef, useState } from "react";

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

export default function CityNotListed({
  title,
  sub,
  steps,
}: CarouselStepsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const container = scrollRef.current;
      if (container) {
        const isOverflowing = container.scrollWidth > container.clientWidth;
        setShowArrows(isOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

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
        {showArrows && (
          <Arrow direction="left" onClick={() => scroll("left")}>
            <img src={ArrowBack} alt="Seta para a esquerda" />
          </Arrow>
        )}

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

        {showArrows && (
          <Arrow direction="right" onClick={() => scroll("right")}>
            <img src={ArrowForward} alt="Seta para a direita" />
          </Arrow>
        )}
      </CarouselContainer>
      <ButtonContainer>
        <ButtonText>Comece agora</ButtonText>
        <Button>Crie uma conta</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
