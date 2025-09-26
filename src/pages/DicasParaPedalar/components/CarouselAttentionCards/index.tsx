import { useRef } from "react";
import { StepCard } from "../Card";
import { Cards } from "./styles";
import Text from "@components/Text";
import Title from "@components/Title";
import Section from "@components/Section";

interface Step {
  number: number;
  title: string;
  subtitle?: string;
  description: string;
}

interface CarouselStepsProps {
  title: string;
  sub: string;
  steps: Step[];
}

export default function CarouselAttentionCards({
  title,
  sub,
  steps,
}: CarouselStepsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Section>
      <Title>{title}</Title>
      <Text>{sub}</Text>

      <Cards ref={scrollRef}>
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            subtitle={step.subtitle}
            description={step.description}
            variant="attention"
          />
        ))}
      </Cards>
    </Section>
  );
}
