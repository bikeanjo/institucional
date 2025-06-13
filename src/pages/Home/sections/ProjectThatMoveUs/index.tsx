import type { ReactNode } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import Container from "../../components/Container";
import { Box, Button, Typography } from "@mui/material";
import EBA from "../../../../assets/images/EBA.png";
import bikeAnjas from "../../../../assets/images/bike-anjas.png";
import bikeAnje from "../../../../assets/images/bike-anje.png";
import bikeNaEscola from "../../../../assets/images/bike-na-escola.png";
import bikeNaPeriferia from "../../../../assets/images/bike-na-periferia.png";
import deBikeAoTrabalho from "../../../../assets/images/de-bike-ao-trabalho.png";
import ProjectBox from "../../components/ProjectBox";
import ProjectInfo from "../../components/ProjectInfo";

function ProjectThatMoveUs(): ReactNode {
  return (
    <Container gap="32px">
      <Box
        sx={{
          textAlign: "center",
          width: "1036px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title variant="h2">Projetos que nos movem</Title>
        <SubTitle>
          Cada projeto é uma forma de transformar cidades, conheça nosso
          trabalho. Além de ensinar a pedalar, atuamos em diversas frentes.
        </SubTitle>
      </Box>
      <Box
        display="flex"
        width="1032px"
        overflow="hidden"
        sx={{ gap: 5, marginTop: "8px" }}
      >
        <ProjectBox>
          <img src={EBA} alt="Logo Escola Bike Anjo" />
          <ProjectInfo>
            <Typography
              fontWeight={700}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
            >
              Escola Bike Anjo
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
              align="center"
            >
              Aulas e oficinas para iniciantes
            </Typography>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "var(--mui-palette-title-main)",
              }}
            >
              <Typography fontWeight={700} fontSize={18.6}>
                Conheça
              </Typography>
            </Button>
          </ProjectInfo>
        </ProjectBox>
        <ProjectBox>
          <img src={bikeAnjas} alt="Logo Bike Anjas" />
          <ProjectInfo>
            <Typography
              fontWeight={700}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
            >
              Bike Anjas
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
              align="center"
            >
              Apoio entre mulheres ciclistas
            </Typography>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "var(--mui-palette-title-main)",
              }}
            >
              <Typography fontWeight={700} fontSize={18.6}>
                Conheça
              </Typography>
            </Button>
          </ProjectInfo>
        </ProjectBox>
        <ProjectBox>
          <img src={bikeAnje} alt="Logo Bike Anje" />
          <ProjectInfo>
            <Typography
              fontWeight={700}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
            >
              Bike Anje
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
              align="center"
            >
              Espaço seguro para pessoas LGBTQIAPN+
            </Typography>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "var(--mui-palette-title-main)",
              }}
            >
              <Typography fontWeight={700} fontSize={18.6}>
                Conheça
              </Typography>
            </Button>
          </ProjectInfo>
        </ProjectBox>
        <ProjectBox>
          <img src={bikeNaEscola} alt="Logo Bike na Escola" />
          <ProjectInfo>
            <Typography
              fontWeight={700}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
            >
              Bike na Escola
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
              align="center"
            >
              Educação sobre bike nas escolas
            </Typography>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "var(--mui-palette-title-main)",
              }}
            >
              <Typography fontWeight={700} fontSize={18.6}>
                Conheça
              </Typography>
            </Button>
          </ProjectInfo>
        </ProjectBox>
        <ProjectBox>
          <img src={bikeNaPeriferia} alt="Logo Bike na Periferia" />
          <ProjectInfo>
            <Typography
              fontWeight={700}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
            >
              Bike na Periferia
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
              align="center"
            >
              Ações em territórios periféricos
            </Typography>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "var(--mui-palette-title-main)",
              }}
            >
              <Typography fontWeight={700} fontSize={18.6}>
                Conheça
              </Typography>
            </Button>
          </ProjectInfo>
        </ProjectBox>
        <ProjectBox>
          <img src={deBikeAoTrabalho} alt="Logo De Bike ao Trabalho" />
          <ProjectInfo>
            <Typography
              fontWeight={700}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
            >
              De Bike ao Trabalho
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={18.6}
              color="var(--mui-palette-neutral-800)"
              align="center"
            >
              Mobilidade no trajeto casa ao trabalho
            </Typography>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "var(--mui-palette-title-main)",
              }}
            >
              <Typography fontWeight={700} fontSize={18.6}>
                Conheça
              </Typography>
            </Button>
          </ProjectInfo>
        </ProjectBox>
      </Box>
    </Container>
  );
}

export default ProjectThatMoveUs;
