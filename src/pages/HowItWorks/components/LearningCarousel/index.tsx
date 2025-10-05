import {
  ButtonContainer,
  ButtonText,
  Cards,
  CarouselContainer,
} from "./styles";
import { StepCard } from "../../../DicasParaPedalar/components/Card";
import { Title, Section, Button } from "@components";

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
        <ButtonText>Comece agora:</ButtonText>
        <Button center>Crie uma conta</Button>
      </ButtonContainer>
    </Section>
  );
}
