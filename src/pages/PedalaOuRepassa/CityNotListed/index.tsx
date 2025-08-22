import { Box } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", lg: "1032px" },
        margin: "40px auto",
        position: "relative",
        marginTop: { xs: "40px", lg: "80px" },
        gap: { xs: "32px", lg: "20px" },
      }}
    >
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
    </Box>
  );
}
