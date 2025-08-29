import { Button, Paragraph, TextWrapper } from "./styles";
import YoutubeImage2 from "../../../../assets/images/VideoYoutube2.png";
import Title from "../../../Components/Title";

export default function SocialContent() {
  return (
    <>
      <img src={YoutubeImage2} alt="Canal do Youtube" />

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
    </>
  );
}
