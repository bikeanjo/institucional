import { Box } from "@mui/material";
import Header from "@components/Header";
import Title from "@components/Title";
import SubTitle from "@components/SubTitle";
import Text from "@components/Text";
import Partners from "@components/Partners";
import Button from "@components/Button";
import { Link } from "react-router-dom";
import Container from "@components/Container";
import { Colors } from "../../styles/tokens/colors";
import Hero from "../../assets/header/ajude-como-instituicao.webp";

const AjudeComoInstituicao = () => {
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Ajude como Instituição</h2>
      </Header>

      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          backgroundColor: "#EEEEEE",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          gap: "64px",
          margin: 0,
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        <Box>Imprensa</Box>
        <Box>Patrocinadores</Box>
      </Box>

      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", lg: "1032px" },
              justifyContent: "flex-start",
              gap: { xs: "16px", lg: "24px" },
            }}
          >
            <Title color={Colors["Pink-50"]}>Empresas Parceiras</Title>
            <SubTitle>
              Patrocinar a Bike Anjo é investir em mobilidade, cidadania e
              impacto positivo.
            </SubTitle>
            <Text>
              Essas são as empresas que acreditam na bicicleta como ferramenta
              de transformação e apoiam nossas ações em diversas cidades:
            </Text>
            <Partners />
            <SubTitle desktopOnly display={{ xs: "none", lg: "flex" }}>
              Faça parte deste quadro!
            </SubTitle>
            <Text>
              Ao apoiar a Bike Anjo, sua empresa fortalece seu compromisso com a
              mobilidade sustentável, o impacto social e a construção de cidades
              mais justas. O patrocínio torna possível ensinar pessoas a
              pedalar, realizar eventos gratuitos e expandir nossas ações em
              todo o país.
            </Text>
            <Link to="/contato">
              <Button>Entre em contato</Button>
            </Link>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "16px", lg: "24px" },
                paddingTop: { xs: "40px", lg: "80px" },
              }}
            >
              <Title>Imprensa Parceira</Title>
              <SubTitle>
                Dar visibilidade à Bike Anjo é ampliar o acesso à mobilidade
              </SubTitle>
              <Text>
                A Bike Anjo transforma realidades com a força da bicicleta.
                Quando a imprensa conta essa história, mais pessoas descobrem
                que podem aprender a pedalar, se locomover com autonomia e
                participar da cidade. Se você é de um veículo de comunicação,
                sua matéria pode ajudar a levar esse impacto ainda mais longe.
              </Text>

              <Box
                sx={{
                  display: "flex",
                  padding: { xs: "40px 0px", lg: "80px 0px" },
                  gap: { xs: "32px", lg: "200px" },
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
                  }}
                >
                  <SubTitle mobileCenter>Faça da Bike Anjo sua pauta!</SubTitle>
                  <Link to="/contato">
                    <Button>Entre em contato</Button>
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <SubTitle mobileCenter>
                    Matérias que mostram o impacto da nossa rede
                  </SubTitle>
                  <Link to="/materias">
                    <Button>Acessar matérias</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AjudeComoInstituicao;
