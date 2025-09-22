import Section from "@components/Section";
import { Button, Paragraph, TextWrapper } from "./styles";
import Title from "@components/Title";

export default function SocialContent() {
  return (
    <Section>
      <img
        src={"/assets/images/VideoYoutube2.png"}
        alt="Homem sorridente usando óculos e mochila, representando pessoas que pedalam em ambiente urbano."
      />

      <TextWrapper>
        <div>
          <Title>E nosso conteúdo continua!</Title>
          <Paragraph>
            Temos um canal no Youtube recheado com dicas, depoimentos e
            conteúdo, tanto para quem pedala quanto para quem quer começar a
            pedalar.
          </Paragraph>
        </div>
        <Button
          href="https://www.youtube.com/@bikeanjo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar Youtube
        </Button>
      </TextWrapper>
    </Section>
  );
}
