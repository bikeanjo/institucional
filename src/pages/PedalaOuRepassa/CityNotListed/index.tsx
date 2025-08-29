import Container from "../../Components/Container";
import SubTitle from "../../Components/SubTitle";
import Title from "../../Components/Title";
import { StepCard } from "../../DicasParaPedalar/components/Card";
import { StepItem, StepsContainer } from "./styles";

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
    </Container>
  );
}
