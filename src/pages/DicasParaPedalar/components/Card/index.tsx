import {
  Card,
  Description,
  Divider,
  Number,
  Subtitle,
  Title,
  TopSection,
} from "./styles";

interface StepCardProps {
  number: number;
  title: string;
  subtitle?: string;
  description: string;
  variant?: "default" | "attention";
  className?: string;
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
      <Divider />
      <Description>
        {description.split("\n\n").map((item) => (
          <p key={item}>{item}</p>
        ))}
      </Description>
    </Card>
  );
}
