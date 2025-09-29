import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { StepCard } from "../../DicasParaPedalar/components/Card";
import {
  ButtonContainer,
  ButtonText,
  StepItem,
  StepsContainer,
} from "./styles";
import Section from "@components/Section";
import { Colors } from "../../../styles/tokens/colors";
import Button from "@components/Button";

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
      backgroundColor={Colors["Green-20"]}
      borderColor={Colors["Green-70"]}
    >
      <Title color={Colors["Green-70"]}>{title}</Title>
      <SubTitle color={Colors["G-Grey-100"]}>{sub}</SubTitle>

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
        <ButtonText>Comece agora:</ButtonText>
        <Button center>Crie uma conta</Button>
      </ButtonContainer>
    </Section>
  );
}
