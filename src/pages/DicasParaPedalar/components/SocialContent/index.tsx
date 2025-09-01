import { Button, Paragraph, TextWrapper } from "./styles";
import YoutubeImage from "@assets/images/VideoYoutube.png";
import Title from "@components/Title";

export default function SocialContent() {
  return (
    <>
      <img src={YoutubeImage} alt="Canal do Youtube" />

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
