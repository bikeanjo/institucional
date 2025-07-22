import type { ReactNode } from "react";
import Title from "../../components/Title";
import { Grid, Typography } from "@mui/material";
import GridItem from "./components/GridItem";
import Container from "../../components/Container";

function OurNumbers(): ReactNode {
  return (
    <Container gap="40px">
      <Title variant="h2">Nossos números</Title>
      <Grid
        container
        spacing={{ xs: 1, xl: 2 }}
        sx={{ width: { xs: 343, xl: 1032 } }}
      >
        <Grid size={12}>
          <GridItem gap="20px" center padding="16px">
            <Typography
              color="tertiary"
              sx={{ fontSize: { xs: 53, xl: 104 } }}
              lineHeight={1}
              fontWeight={500}
            >
              9450
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 16, xl: 32 } }}
              fontWeight={500}
              width={{ xs: 150, sm: "100%" }}
            >
              pessoas voluntárias cadastradas
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={8}>
          <GridItem column={true} padding="16px">
            <Typography
              color="tertiary"
              sx={{ fontSize: { xs: 58, xl: 136 } }}
              lineHeight={{ xs: 0.9, xl: 1 }}
              fontWeight={500}
            >
              40.013
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, xl: 32 } }} fontWeight={500}>
              pessoas atendidas
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={4}>
          <GridItem column center padding="9px" height="100%">
            <Typography
              color="tertiary"
              sx={{ fontSize: { xs: 42, xl: 80 } }}
              lineHeight={1}
              fontWeight={500}
              height="100%"
            >
              40KG
            </Typography>
            <Typography sx={{ fontSize: { xs: 14, xl: 32 } }} fontWeight={500}>
              a menos de CO&#8322; na atmosfera
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 6, xl: 5 }}>
          <GridItem gap="8px" center padding="16px 6px">
            <Typography
              color="tertiary"
              sx={{ fontSize: { xs: 40, xl: 64 } }}
              lineHeight={1}
              fontWeight={500}
            >
              40
            </Typography>
            <Typography sx={{ fontSize: { xs: 14, xl: 16 } }} fontWeight={500}>
              países pedalando com a gente
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 6, xl: 7 }}>
          <GridItem gap="8px" center padding="16px 6px" height="100%">
            <Typography
              color="tertiary"
              sx={{ fontSize: { xs: 42, xl: 64 } }}
              lineHeight={1}
              fontWeight={500}
            >
              899
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, xl: 16 } }} fontWeight={500}>
              cidades impactadas
            </Typography>
          </GridItem>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurNumbers;
