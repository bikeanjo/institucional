import { Box } from "@mui/material";
import {
  Header,
  Title,
  SubTitle,
  Text,
  Partners,
  Button,
  Container,
  BreadCrumb,
  ScrollSpyMenu,
  Section,
} from "@components";
import { Link } from "react-router-dom";
import { Colors } from "@colors";

const AjudeComoInstituicao = () => {
  const Hero = {
    url: "/assets/header/ajude-como-instituicao.webp",
    backgroundPositionDesktop: "50% 60%",
    backgroundPositionMobile: "50% 10%",
  };
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Ajude como Instituição</h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              gap: { xs: "16px", lg: "24px" },
            }}
          >
            <Title color={Colors["Pink_50"]}>Empresas Parceiras</Title>
            <SubTitle fontWeight={700}>
              Patrocinar a Bike Anjo é investir em mobilidade, cidadania e
              impacto positivo.
            </SubTitle>
            <Text>
              Essas são as empresas que acreditam na bicicleta como ferramenta
              de transformação e apoiam nossas ações em diversas cidades:
            </Text>
            <Partners />
          </Box>
        </Section>

        <Section>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              gap: { xs: "16px", lg: "24px" },
            }}
          >
            <Title display={{ xs: "none", lg: "flex" }}>
              Faça parte deste quadro!
            </Title>
            <Text>
              Ao apoiar a Bike Anjo, sua empresa fortalece seu compromisso com a
              mobilidade sustentável, o impacto social e a construção de cidades
              mais justas. O patrocínio torna possível ensinar pessoas a
              pedalar, realizar eventos gratuitos e expandir nossas ações em
              todo o país.
            </Text>
            <Button component={Link} to="/contato">
              Entre em contato
            </Button>
          </Box>
        </Section>

        <Section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "16px", lg: "24px" },
              paddingTop: { xs: "40px", lg: "80px" },
            }}
          >
            <Title>Imprensa Parceira</Title>
            <SubTitle fontWeight={700}>
              Dar visibilidade à Bike Anjo é ampliar o acesso à mobilidade
            </SubTitle>
            <Text>
              A Bike Anjo transforma realidades com a força da bicicleta. Quando
              a imprensa conta essa história, mais pessoas descobrem que podem
              aprender a pedalar, se locomover com autonomia e participar da
              cidade. Se você é de um veículo de comunicação, sua matéria pode
              ajudar a levar esse impacto ainda mais longe.
            </Text>

            <Box
              sx={{
                display: "flex",
                padding: { xs: "40px 0px", lg: "80px 0px" },
                gap: "16px",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                  backgroundColor: Colors["Green_20"],
                  border: `1px solid ${Colors["Green_70"]}`,
                  borderRadius: "8px",
                  padding: { xs: "16px", lg: "24px" },
                }}
              >
                <SubTitle color={Colors["Green_70"]} fontWeight={700} center>
                  Faça da Bike Anjo sua pauta!
                </SubTitle>
                <Text marginBottom="16px">
                  Mostre uma pauta que inspira e transforma. Cada história que
                  contamos é uma chance de tocar o público com coragem, cuidado
                  e mudança real. A próxima pode ser sua.
                </Text>
                <Button
                  fullWidthMobile
                  fullWidthDesktop
                  component={Link}
                  to="/contato"
                >
                  Entre em contato
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                  backgroundColor: Colors["Green_20"],
                  border: `1px solid ${Colors["Green_70"]}`,
                  borderRadius: "8px",
                  padding: { xs: "16px", lg: "24px" },
                }}
              >
                <SubTitle color={Colors["Green_70"]} fontWeight={700} center>
                  Matérias que mostram o impacto da nossa rede
                </SubTitle>
                <Text marginBottom="16px">
                  A imprensa já pedalou com a gente e mostrou como a bicicleta
                  muda vidas. Veja exemplos de matérias que ampliaram vozes e
                  conectaram públicos a causas reais.
                </Text>
                <Button
                  fullWidthMobile
                  fullWidthDesktop
                  component={Link}
                  to="/bike-anjo-na-midia"
                >
                  Acessar matérias
                </Button>
              </Box>
            </Box>
          </Box>
        </Section>
      </Container>
    </>
  );
};

export default AjudeComoInstituicao;
