import { Paragraph, TextWrapper, Wrapper } from "./styles";
import Title from "@components/Title";
import Button from "@components/Button";

export default function SocialContent() {
  return (
    <Wrapper>
      <img
        src={"/assets/images/riding-girl.png"}
        alt="Mulher sorrindo andando de bicicleta"
      />

      <TextWrapper>
        <div>
          <Title sx={{ lineHeight: "120%", alignItems: "self-start" }}>
            E nosso conteúdo continua!
          </Title>
          <Paragraph>
            Temos um canal no Youtube recheado com dicas, depoimentos e
            conteúdo, tanto para quem pedala quanto para quem quer começar a
            pedalar.
          </Paragraph>
        </div>

        <Button
          href="https://www.youtube.com/@bikeanjo"
          rel="noopener noreferrer"
        >
          Acessar Youtube
        </Button>
      </TextWrapper>
    </Wrapper>
  );
}
