import { Button, ButtonsContainer, Sub, Title, Wrapper } from "./styles";

interface EngageProps {
  title: string;
  sub: string;
}

export default function EngageVolunteers({ title, sub }: EngageProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Sub>{sub}</Sub>
      <ButtonsContainer>
        <Button href="#" target="_blank" rel="noopener noreferrer">
          Veja aqui o Mini Manual
        </Button>
        <Button href="#" target="_blank" rel="noopener noreferrer">
          Fale a nossa mobilização
        </Button>
      </ButtonsContainer>
    </Wrapper>
  );
}
