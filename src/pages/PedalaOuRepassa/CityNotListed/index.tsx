import { StepCard } from "../../DicasParaPedalar/components/Card";
import { Sub, Title, Wrapper } from "./styles";
import Grid from "@mui/material/Grid";

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
    <Wrapper>
      <Title>{title}</Title>
      <Sub>{sub}</Sub>

      <Grid container spacing={3}>
        {steps.map((step) => (
          <Grid
            item
            key={step.number}
            sx={{
              display: "flex",
              justifyContent: "center",
              "& .step-card": {
                width: "100%",
                maxWidth: "400px",
              },
            }}
          >
            <StepCard
              className="step-card"
              number={step.number}
              title={step.title}
              description={step.description}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}
