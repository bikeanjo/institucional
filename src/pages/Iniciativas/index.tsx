import Header from "@components/Header";
import Text from "@components/Text";
import { ProjectCards } from "./components/ProjectCards";
import { CampaignCards } from "./components/CampaignCards";
import Events from "./components/Events";
import Container from "@components/Container";
import BreadCrumb from "@components/BreadCrumb";
import ScrollSpyMenu from "@components/ScrollSpyMenu";
import Section from "@components/Section";
import Title from "@components/Title";

const Iniciativas: React.FC = () => {
  const Hero = {
    url: "/assets/header/iniciativas.jpg",
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
