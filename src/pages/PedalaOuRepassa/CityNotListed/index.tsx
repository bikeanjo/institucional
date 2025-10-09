import { Text, Title, Section } from "@components";
import { StepCard } from "../../DicasParaPedalar/components/Card";
import { StepItem, StepsContainer } from "./styles";
import { Colors } from "@colors";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface CarouselStepsProps {
  steps: Step[];
}

export default function CityNotListed({ steps }: CarouselStepsProps) {
  return (
    <Section
      backgroundColor={Colors["Green_20"]}
      borderColor={Colors["Green_70"]}
    >
      <Title
        center
        color={Colors["Green_70"]}
        sizeDesktop="48px"
        sizeMobile="32px"
      >
        Como funciona?
      </Title>
      <Text
        sx={{
          color: Colors["G_Grey_100"],
          alignSelf: { xs: "flex-start", lg: "center" },
          textAlign: { xs: "left", lg: "center" },
        }}
      >
        Queremos dar nova vida a bicicletas esquecidas e levá-las até quem mais
        precisa! O processo é simples, colaborativo e transparente:
      </Text>

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
