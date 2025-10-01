import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { ButtonsContainer } from "./styles";
import Section from "@components/Section";
import { Colors } from "../../../../styles/tokens/colors";
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
      <SubTitle color={Colors["G-Grey-100"]}>{sub}</SubTitle>
      <ButtonsContainer>
        <Button>Veja aqui o Mini Manual</Button>
        <Button component={Link} to="/contato">
          Contate a mobilização
        </Button>
      </ButtonsContainer>
    </Section>
  );
}
