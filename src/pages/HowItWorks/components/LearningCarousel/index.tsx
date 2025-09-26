import {
  Button,
  ButtonContainer,
  ButtonText,
  Cards,
  CarouselContainer,
} from "./styles";
import { StepCard } from "../../../DicasParaPedalar/components/Card";
import { Link } from "react-router-dom";
import Title from "@components/Title";
import Section from "@components/Section";

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
    <Section>
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
    </Section>
  );
}
