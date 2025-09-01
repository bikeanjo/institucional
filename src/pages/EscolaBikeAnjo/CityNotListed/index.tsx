import Container from "@components/Container";
import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { StepCard } from "../../DicasParaPedalar/components/Card";
import {
  Button,
  ButtonContainer,
  ButtonText,
  StepItem,
  StepsContainer,
} from "./styles";

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
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{sub}</SubTitle>

      <StepsContainer>
        {steps.map((step) => (
          <StepItem key={step.number}>
            <StepCard
              className="step-card"
              number={step.number}
              title={step.title}
              description={step.description}
            />
          </StepItem>
        ))}
      </StepsContainer>

      <ButtonContainer>
        <ButtonText>Comece agora</ButtonText>
        <Button>Crie uma conta</Button>
      </ButtonContainer>
    </Container>
  );
}
