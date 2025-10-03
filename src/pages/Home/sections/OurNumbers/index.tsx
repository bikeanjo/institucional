import type { JSX } from "react";
import Title from "../../components/Title";
import { Box, Grid, Typography } from "@mui/material";
import GridItem from "./components/GridItem";
import { Colors } from "../../../../styles/tokens/colors";
import Section from "@components/Section";

function OurNumbers(): JSX.Element {
  return (
    <Section center>
      <Title variant="h2" color={Colors["Pink-50"]}>
        Nossos números
      </Title>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        sx={{ width: { md: 800, lg: 1032 } }}
      >
        <Grid size={12}>
          <GridItem gap="20px" center padding="16px">
            <Box
              component="img"
              src="/assets/images/Home/OurNumbers/bike-rosa.webp"
              alt="Ícone de bike anjo na cor rosa"
              sx={{
                width: { xs: 80, lg: 120 },
              }}
            />
            <Typography
              color="tertiary"
              sx={{ fontSize: { xs: 56, md: 104 } }}
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
            padding="16px"
            height="100%"
            color={Colors["Orange-50"]}
            backgroundColor={Colors["Orange-10"]}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              gap: "16px",
            }}
          >
            <Box
              component="img"
              src="/assets/images/Home/OurNumbers/bike-laranja.webp"
              alt="Ícone de bike na cor laranja"
              sx={{
                width: { xs: 80, lg: 120 },
              }}
            />
            <div>
              <Typography
                color={Colors["Orange-50"]}
                sx={{ fontSize: { xs: 50, md: 136 } }}
                lineHeight={{ xs: 0.9, md: 1 }}
                fontWeight={500}
              >
                40.013
              </Typography>
              <Typography sx={{ fontSize: { xs: 16, md: 32 } }}>
                pessoas atendidas
              </Typography>
            </div>
          </GridItem>
        </Grid>
        <Grid size={4}>
          <GridItem
            column
            center
            padding="16px"
            height="100%"
            color={Colors["Green-70"]}
            backgroundColor={Colors["Green-10"]}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <Box
                component="img"
                src="/assets/images/Home/OurNumbers/recycling.webp"
                alt="Ícone de reciclagem"
                sx={{
                  width: { xs: 40, md: 60, lg: 72 },
                }}
              />
              <Typography
                color={Colors["Green-70"]}
                sx={{ fontSize: { xs: 42, md: 72 } }}
                lineHeight={1}
                fontWeight={500}
                height="100%"
              >
                40KG
              </Typography>
            </div>
            <Typography sx={{ fontSize: { xs: 16, md: 24 } }}>
              a menos de CO&#8322; na atmosfera
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 6, md: 5.5 }}>
          <GridItem
            gap="8px"
            center
            padding="16px"
            color={Colors["Green-70"]}
            backgroundColor={Colors["Green-10"]}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              justifyContent: "start",
            }}
          >
            <Box
              component="img"
              src="/assets/images/Home/OurNumbers/public.webp"
              alt="Ícone de um globo terrestre"
              sx={{
                width: { xs: 54, lg: 64 },
              }}
            />
            <Typography
              color={Colors["Green-70"]}
              sx={{ fontSize: { xs: 42, md: 64 } }}
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
        <Grid size={{ xs: 6, md: 6.5 }}>
          <GridItem
            gap="8px"
            center
            padding="16px"
            height="100%"
            color={Colors["Blue-60"]}
            backgroundColor={Colors["Blue-10"]}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              justifyContent: "start",
            }}
          >
            <Box
              component="img"
              src="/assets/images/Home/OurNumbers/apartment.webp"
              alt="Ícone de um prédio"
              sx={{
                width: { xs: 54, lg: 64 },
              }}
            />
            <Typography
              color={Colors["Blue-60"]}
              sx={{ fontSize: { xs: 42, md: 64 } }}
              lineHeight={1}
              fontWeight={500}
            >
              899
            </Typography>
            <Typography sx={{ fontSize: { xs: 14, md: 16 } }} fontWeight={500}>
              cidades impactadas
            </Typography>
          </GridItem>
        </Grid>
      </Grid>
    </Section>
  );
}

export default OurNumbers;
