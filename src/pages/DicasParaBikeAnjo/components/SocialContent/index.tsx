import {
  GridWrapper,
  TextBlock,
  Image,
  ButtonWrapper,
  Paragraph,
} from "./styles";
import Title from "@components/Title";
import Button from "@components/Button";

export default function SocialContent() {
  return (
    <GridWrapper>
      <Image
        src={"/assets/images/riding-girl.png"}
        alt="Mulher sorrindo andando de bicicleta"
      />

      <TextBlock>
        <Title sx={{ lineHeight: "120%", alignItems: "self-start" }}>
          E nosso conteúdo continua!
        </Title>
        <Paragraph>
          Temos um canal no Youtube recheado com dicas, depoimentos e conteúdo,
          tanto para quem pedala quanto para quem quer começar a pedalar.
        </Paragraph>
      </TextBlock>

      <ButtonWrapper>
        <Button
          href="https://www.youtube.com/@bikeanjo"
          rel="noopener noreferrer"
        >
          Acessar Youtube
        </Button>
      </ButtonWrapper>
    </GridWrapper>
  );
}
