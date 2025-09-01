import Header from "@components/Header";
import Subtitle from "@components/SubTitle";
import Text from "@components/Text";
import { Box } from "@mui/material";
import { ProjectCards } from "./components/ProjectCards";
import { CampaignCards } from "./components/CampaignCards";
import Events from "./components/Events";
import Button from "@components/Button";
import { Link } from "react-router-dom";
import Container from "@components/Container";

const Iniciativas: React.FC = () => {
  return (
    <>
      <Header secondary>
        <h2>Iniciativas</h2>
      </Header>
      <Container
        marginX={{ xs: "16px", md: "96px" }}
        marginY={{ xs: "16px", md: "40px" }}
        gap={{ xs: "8px", md: "40px" }}
      >
        <Box>
          <Subtitle>
            <h2>Projetos</h2>
          </Subtitle>
          <ProjectCards />
        </Box>
        <Box paddingY={{ xs: "16px", md: "40px" }}>
          <Subtitle>
            <h2>Campanhas</h2>
          </Subtitle>
          <CampaignCards />
        </Box>
        <Box paddingY={{ xs: "16px", md: "40px" }}>
          <Subtitle>
            <h2>Eventos</h2>
          </Subtitle>
          <Text>
            <p>
              As atividades da Bike Anjo são organizadas pelas articulações
              locais e divulgadas pelo Instagram. Quer descobrir o que está
              rolando perto de você? Busque abaixo a articulação mais próxima e
              acompanhe tudo que acontece na sua região.
            </p>
          </Text>
          <Events />
        </Box>
        <Box paddingY={{ xs: "16px", md: "40px" }}>
          <Subtitle>
            <h2>Veja nossa playlist de dicas!</h2>
          </Subtitle>
          <Text>
            <p>
              Seja você iniciante ou já com alguma experiência, nossa playlist
              de vídeos tem dicas práticas pra tornar sua pedalada mais segura,
              leve e divertida. Aqui a gente compartilha o que aprendeu na rua,
              com carinho e sem complicação, do jeitinho Bike Anjo.
            </p>
          </Text>
          <Box
            display={"flex"}
            alignItems={{ xs: "center", md: "left" }}
            justifyContent={{ xs: "center", md: "left" }}
          >
            <Link to="">
              <Button>Acessar a Playlist</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Iniciativas;
