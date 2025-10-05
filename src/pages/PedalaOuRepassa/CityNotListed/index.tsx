import { SubTitle, Title, Section } from "@components";
import { StepCard } from "../../DicasParaPedalar/components/Card";
import { StepItem, StepsContainer } from "./styles";
import { Colors } from "@colors";

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
    <Section
      backgroundColor={Colors["Green_20"]}
      borderColor={Colors["Green_70"]}
    >
      <Title color={Colors["Green_70"]}>{title}</Title>
      <SubTitle color={Colors["G_Grey_100"]}>{sub}</SubTitle>

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
    </Section>
  );
}
