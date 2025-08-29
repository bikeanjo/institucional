import {
  Button,
  ButtonContainer,
  ButtonText,
  Cards,
  CarouselContainer,
  Title,
} from "./styles";
import { StepCard } from "../../../DicasParaPedalar/components/Card";
import { Link } from "react-router-dom";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface CarouselStepsProps {
  title: string;
  steps: Step[];
}

export default function LearningCarousel({ title, steps }: CarouselStepsProps) {
  return (
    <>
      <Title>{title}</Title>
      <CarouselContainer>
        <Cards>
          {steps.map((step) => (
            <StepCard
              className="step-card"
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </Cards>
      </CarouselContainer>

      <ButtonContainer>
        <ButtonText>Comece agora</ButtonText>
        <Link to="">
          <Button>Crie uma conta</Button>
        </Link>
      </ButtonContainer>
    </>
  );
}
