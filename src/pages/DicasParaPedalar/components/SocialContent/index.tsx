import Section from "@components/Section";
import { Paragraph, TextWrapper } from "./styles";
import Title from "@components/Title";
import Button from "@components/Button";

export default function SocialContent() {
  return (
    <Section>
      <img
        src={"/assets/images/VideoYoutube.webp"}
        alt="Mulher sorridente andando de bicicleta em rua urbana, representando pessoas que pedalam."
      />

      <TextWrapper>
        <div>
          <Title>E nosso conteúdo continua!</Title>
          <Paragraph>
            Temos um canal no Youtube recheado com dicas, depoimentos e tanto
            para quem pedala quanto para quem quer começar a pedalar.
          </Paragraph>
        </div>
        <Button
          href="https://www.youtube.com/@bikeanjo"
          rel="noopener noreferrer"
        >
          Acessar Youtube
        </Button>
      </TextWrapper>
    </Section>
  );
}
