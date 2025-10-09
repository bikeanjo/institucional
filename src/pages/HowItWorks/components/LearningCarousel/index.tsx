import {
  ButtonContainer,
  ButtonText,
  Container,
  CardsContainer,
  Card,
  Content,
  Step,
  Divider,
} from "./styles";
import { Title, Button, Text } from "@components";
import { Link } from "react-router-dom";

interface Step {
  number: string;
  title: string;
  description: string;
  button?: boolean;
}

interface CarouselStepsProps {
  title: string;
  steps: Step[];
}

export default function LearningCarousel({ title, steps }: CarouselStepsProps) {
  return (
    <Container>
      <Title sizeMobile="32px">{title}</Title>

      <CardsContainer>
        {steps.map((step) => (
          <Card key={step.number}>
            <Content>
              <Step>
                <Title sizeDesktop="56px" sizeMobile="40px">
                  {step.number}
                </Title>
                <Title sizeDesktop="32px">{step.title}</Title>
              </Step>
              <Divider />
              <Text size="16px">{step.description}</Text>
            </Content>
            {step.button && (
              <Button
                component={Link}
                to={"/faca-nosso-curso"}
                variantcolor="gray"
                fullWidthMobile
                fullWidthDesktop
              >
                Saiba mais
              </Button>
            )}
          </Card>
        ))}
      </CardsContainer>

      <ButtonContainer>
        <ButtonText>Comece agora:</ButtonText>
        <Button fullWidthMobile>Cadastre-se</Button>
      </ButtonContainer>
    </Container>
  );
}
