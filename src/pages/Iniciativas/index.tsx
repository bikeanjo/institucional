import {
  Header,
  Text,
  Container,
  BreadCrumb,
  ScrollSpyMenu,
  Section,
  Title,
} from "@components";
import { ProjectCards } from "./components/ProjectCards";
import { CampaignCards } from "./components/CampaignCards";
import Events from "./components/Events";

const Iniciativas: React.FC = () => {
  const Hero = {
    url: "/assets/header/iniciativas.webp",
    backgroundPositionDesktop: "50% 60%",
    backgroundPositionMobile: "50% 70%",
  };
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Iniciativas</h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Section>
          <Title>Projetos</Title>
          <ProjectCards />
        </Section>
        <Section>
          <Title>Campanhas</Title>
          <CampaignCards />
        </Section>

        <Section>
          <Title>Eventos</Title>
          <Text>
            <p>
              As atividades da Bike Anjo são organizadas pelas articulações
              locais e divulgadas pelo Instagram. Quer descobrir o que está
              rolando perto de você? Busque abaixo a articulação mais próxima e
              acompanhe tudo que acontece na sua região.
            </p>
          </Text>
          <Events />
        </Section>
      </Container>
    </>
  );
};
export default Iniciativas;
