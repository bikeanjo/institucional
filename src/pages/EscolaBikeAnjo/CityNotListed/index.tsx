import { Text, Title, Section, Button } from "@components";
import { StepCard } from "../../DicasParaPedalar/components/Card";
import {
  ButtonContainer,
  ButtonText,
  StepItem,
  StepsContainer,
} from "./styles";
import { Colors } from "@colors";
import { Box } from "@mui/material";

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
        Não encontrou sua cidade no mapa?
      </Title>
      <Box
        sx={{
          color: Colors["G_Grey_100"],
          alignSelf: { xs: "flex-start", lg: "center" },
          textAlign: { xs: "left", lg: "center" },
        }}
      >
        <Text>
          Caso sua cidade não esteja no mapa, você pode tentar o segundo
          caminho:
          <br />
          <br />
          Cadastrar-se em nossa plataforma online e solicitar um Bike Anjo por
          lá.
        </Text>
      </Box>

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
