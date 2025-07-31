import type { HTMLAttributes } from "react";
import {
  Card,
  Description,
  Number,
  Subtitle,
  Title,
  TopSection,
} from "./styles";

interface StepCardProps extends HTMLAttributes<HTMLDivElement> {
  number: number;
  title: string;
  subtitle?: string;
  description: string;
  variant?: "default" | "attention";
}

export function StepCard({
  number,
  title,
  subtitle,
  description,
  variant = "default",
  className,
}: StepCardProps) {
  return (
    <Card className={className}>
      <TopSection $variant={variant}>
        <Number>{number}</Number>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TopSection>
      <Description>
        {description.split("\n\n").map((item) => (
          <p key={item}>{item}</p>
        ))}
      </Description>
    </Card>
  );
}
