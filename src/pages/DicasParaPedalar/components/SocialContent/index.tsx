import { Button, Paragraph, TextWrapper } from "./styles";
import Title from "@components/Title";

export default function SocialContent() {
  return (
    <>
      <img src={"/assets/images/VideoYoutube.png"} alt="Canal do Youtube" />

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
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar Youtube
        </Button>
      </TextWrapper>
    </>
  );
}
