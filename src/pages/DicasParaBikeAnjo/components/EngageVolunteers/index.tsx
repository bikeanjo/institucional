import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { Button, ButtonsContainer } from "./styles";
import Section from "@components/Section";
import { Colors } from "../../../../styles/tokens/colors";

interface EngageProps {
  title: string;
  sub: string;
}

export default function EngageVolunteers({ title, sub }: EngageProps) {
  return (
    <Section>
      <Title>{title}</Title>
      <SubTitle color={Colors["G-Grey-100"]}>{sub}</SubTitle>
      <ButtonsContainer>
        <Button href="#" target="_blank" rel="noopener noreferrer">
          Veja aqui o Mini Manual
        </Button>
        <Button href="#" target="_blank" rel="noopener noreferrer">
          Fale a nossa mobilização
        </Button>
      </ButtonsContainer>
    </Section>
  );
}
