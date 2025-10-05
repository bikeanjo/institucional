import { GridWrapper, TextBlock, Image, ButtonWrapper } from "./styles";
import { Title, Text, Button } from "@components";

export default function SocialContent() {
  return (
    <GridWrapper>
      <Image
        src={"/assets/images/riding-girl.webp"}
        alt="Mulher sorrindo andando de bicicleta"
      />

      <TextBlock>
        <Title
          sx={{
            lineHeight: "120%",
            alignItems: "self-start",
            marginBottom: "20px",
          }}
        >
          E nosso conteúdo continua!
        </Title>
        <Text>
          Temos um canal no Youtube recheado com dicas, depoimentos e conteúdo,
          tanto para quem pedala quanto para quem quer começar a pedalar.
        </Text>
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
