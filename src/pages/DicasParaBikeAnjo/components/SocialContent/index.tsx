import { Button, Paragraph, TextWrapper } from "./styles";
import YoutubeImage2 from "../../../../assets/images/VideoYoutube2.png";
import { Box } from "@mui/material";
import Title from "../../../Components/Title";

export default function SocialContent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", lg: "1032px" },
        margin: "40px auto",
        position: "relative",
        marginTop: { xs: "40px", lg: "80px" },
        gap: { xs: "32px", lg: "20px" },
      }}
    >
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
    </Box>
  );
}
