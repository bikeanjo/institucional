import type { JSX } from "react";
import Title from "../../components/Title";
import { Grid, Typography } from "@mui/material";
import GridItem from "./components/GridItem";
import Container from "../../components/Container";
import { Colors } from "../../../../styles/tokens/colors";

function OurNumbers(): JSX.Element {
  return (
    <Container gap="40px">
      <Title variant="h2" color={Colors["Pink-50"]}>
        Nossos números
      </Title>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        sx={{ width: { xs: 343, md: 800, lg: 1032 } }}
      >
        <Grid size={12}>
          <GridItem gap="20px" center padding="16px">
            <Typography
              color="tertiary"
              sx={{ fontSize: { xs: 53, md: 104 } }}
              lineHeight={1}
              fontWeight={500}
            >
              9450
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 16, md: 32 } }}
              width={{ xs: 150, sm: "100%" }}
            >
              pessoas voluntárias cadastradas
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={8}>
          <GridItem
            column={true}
            padding="16px"
            height="100%"
            color={Colors["Orange-50"]}
          >
            <Typography
              color={Colors["Orange-50"]}
              sx={{ fontSize: { xs: 58, md: 136 } }}
              lineHeight={{ xs: 0.9, md: 1 }}
              fontWeight={500}
            >
              40.013
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 32 } }}>
              pessoas atendidas
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={4}>
          <GridItem
            column
            center
            padding="9px"
            height="100%"
            color={Colors["Green-70"]}
          >
            <Typography
              color={Colors["Green-70"]}
              sx={{ fontSize: { xs: 42, md: 80 } }}
              lineHeight={1}
              fontWeight={500}
              height="100%"
            >
              40KG
            </Typography>
            <Typography sx={{ fontSize: { xs: 14, md: 32 } }}>
              a menos de CO&#8322; na atmosfera
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 6, md: 5 }}>
          <GridItem
            gap="8px"
            center
            padding="16px 6px"
            color={Colors["Green-70"]}
          >
            <Typography
              color={Colors["Green-70"]}
              sx={{ fontSize: { xs: 40, md: 64 } }}
              lineHeight={1}
              fontWeight={500}
            >
              40
            </Typography>
            <Typography sx={{ fontSize: { xs: 14, md: 16 } }} fontWeight={500}>
              países pedalando com a gente
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 6, md: 7 }}>
          <GridItem
            gap="8px"
            center
            padding="16px 6px"
            height="100%"
            color={Colors["Blue-60"]}
          >
            <Typography
              color={Colors["Blue-60"]}
              sx={{ fontSize: { xs: 42, md: 64 } }}
              lineHeight={1}
              fontWeight={500}
            >
              899
            </Typography>
            <Typography sx={{ fontSize: { xs: 13, md: 16 } }} fontWeight={500}>
              cidades impactadas
            </Typography>
          </GridItem>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurNumbers;
