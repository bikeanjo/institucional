import { Title, Text, Section, Button } from "@components";
import { ButtonsContainer } from "./styles";
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
