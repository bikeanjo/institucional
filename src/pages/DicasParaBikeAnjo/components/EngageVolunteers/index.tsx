import Title from "@components/Title";
import Text from "@components/Text";
import { ButtonsContainer } from "./styles";
import Section from "@components/Section";
import Button from "@components/Button";
import { Link } from "react-router-dom";

interface EngageProps {
  title: string;
  sub: string;
}

export default function EngageVolunteers({ title, sub }: EngageProps) {
  return (
    <Section>
      <Title>{title}</Title>
      <Text>{sub}</Text>
      <ButtonsContainer>
        <Button>Veja o Mini Manual</Button>
        <Button component={Link} to="/contato">
          Contate a mobilização
        </Button>
      </ButtonsContainer>
    </Section>
  );
}
