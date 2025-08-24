import SubTitle from "../../../Components/SubTitle";
import Title from "../../../Components/Title";
import { Button, ButtonsContainer } from "./styles";

interface EngageProps {
  title: string;
  sub: string;
}

export default function EngageVolunteers({ title, sub }: EngageProps) {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{sub}</SubTitle>
      <ButtonsContainer>
        <Button href="#" target="_blank" rel="noopener noreferrer">
          Veja aqui o Mini Manual
        </Button>
        <Button href="#" target="_blank" rel="noopener noreferrer">
          Fale a nossa mobilização
        </Button>
      </ButtonsContainer>
    </>
  );
}
