import type { JSX } from "react";
import Title from "../../components/Title";
import { Box, Grid, Typography } from "@mui/material";
import GridItem from "./components/GridItem";
import { Colors } from "@colors";
import { Section } from "@components";
import "./styles.css";

function OurNumbers(): JSX.Element {
  return (
    <Section center>
      <Title variant="h2" color={Colors["Pink_50"]}>
        Nossos números
      </Title>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        sx={{ width: { md: 800, lg: 1032 } }}
      >
        <Grid size={12} sx={{ order: 1 }}>
          <GridItem
            gap="20px"
            padding="16px"
            color={Colors["Blue_60"]}
            backgroundColor={Colors["Blue_10"]}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: { xs: "center", lg: "center" },
              justifyContent: { xs: "start", lg: "start" },
              gap: "16px",
            }}
          >
            <Box
              component="img"
              src="/assets/icons/Home/OurNumbers/biker.svg"
              alt="Ícone de bike anjo na cor azul"
              sx={{
                width: { xs: 80, md: 120, lg: 120 },
                height: { xs: 76, md: 109, lg: 109 },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "column" },
                alignItems: "baseline",
                gap: { xs: "4px" },
              }}
            >
              <Typography
                color={Colors["Blue_60"]}
                sx={{ fontSize: { xs: 56, md: 128, lg: 128 } }}
                lineHeight={1}
                fontWeight={700}
              >
                40.013
              </Typography>
              <Typography sx={{ fontSize: { xs: 18, md: 32, lg: 32 } }}>
                pessoas atendidas
              </Typography>
            </Box>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }} sx={{ order: 2 }}>
          <GridItem
            padding="16px"
            height="100%"
            color={Colors["Pink_50"]}
            backgroundColor={Colors["Pink_10"]}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: { xs: "center", lg: "center" },
              justifyContent: { xs: "start", lg: "start" },
              gap: "16px",
            }}
          >
            <Box
              component="img"
              src="/assets/icons/Home/OurNumbers/biker-anjo.svg"
              alt="Ícone de ciclista"
              className="biker-icon"
              sx={{
                width: { xs: 80, md: 96, lg: 96 },
                height: { xs: 78, md: 94, lg: 94 },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column" },
                alignItems: "baseline",
                gap: { xs: "4px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 56, md: 106, lg: 106 },
                }}
                color={Colors["Pink_50"]}
                lineHeight={{ xs: 0.9, md: 1 }}
                fontWeight={700}
              >
                9450
              </Typography>
              <Typography sx={{ fontSize: { xs: 16, md: 32, lg: 32 } }}>
                pessoas voluntárias cadastradas
              </Typography>
            </Box>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }} sx={{ order: { xs: 5, md: 3, lg: 3 } }}>
          <GridItem
            gap="8px"
            padding="16px"
            height="100%"
            color={Colors["Green_70"]}
            backgroundColor={Colors["Green_10"]}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", lg: "column" },
              alignItems: { xs: "center", lg: "baseline" },
              justifyContent: { xs: "start", lg: "center" },
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box
                component="img"
                src="/assets/icons/Home/OurNumbers/recycling.svg"
                alt="Ícone de reciclagem"
                sx={{
                  width: { xs: 40, md: 82, lg: 57 },
                }}
              />
              <Typography
                color={Colors["Green_70"]}
                sx={{ fontSize: { xs: 48, md: 106, lg: 72 } }}
                lineHeight={1}
                fontWeight={700}
                height="100%"
              >
                40KG
              </Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: 16, md: 24, lg: 24 } }}>
              a menos de CO&#8322; na atmosfera
            </Typography>
          </GridItem>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6, lg: 5.5 }}
          sx={{ order: { xs: 3, md: 4, lg: 4 } }}
        >
          <GridItem
            gap="8px"
            padding="16px"
            color={Colors["Orange_50"]}
            backgroundColor={Colors["Orange_10"]}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: { xs: "row", lg: "row" },
              alignItems: { xs: "center", lg: "baseline" },
              justifyContent: { xs: "start", lg: "start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: { xs: "center", lg: "baseline" },
              }}
            >
              <Box
                component="img"
                src="/assets/icons/Home/OurNumbers/public.svg"
                alt="Ícone de público"
                className="globe-icon"
                sx={{
                  width: { xs: 40, md: 56, lg: 64 },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 48, md: 64, lg: 64 },
                }}
                color={Colors["Orange_50"]}
                lineHeight={1}
                fontWeight={700}
              >
                40
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 16 }}>
              países pedalando com a gente
            </Typography>
          </GridItem>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6, lg: 6.5 }}
          sx={{ order: { xs: 4, md: 5, lg: 5 } }}
        >
          <GridItem
            gap="8px"
            padding="16px"
            height="100%"
            color={Colors["Blue_60"]}
            backgroundColor={Colors["Blue_10"]}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: { xs: "center", lg: "baseline" },
              justifyContent: { xs: "start", lg: "start" },
            }}
          >
            <Box
              component="img"
              src="/assets/icons/Home/OurNumbers/apartment.svg"
              alt="Ícone de um prédio"
              sx={{
                width: { xs: 48, md: 56, lg: 64 },
              }}
            />
            <Typography
              color={Colors["Blue_60"]}
              sx={{ fontSize: { xs: 48, md: 64, lg: 64 } }}
              lineHeight={1}
              fontWeight={700}
            >
              899
            </Typography>
            <Typography sx={{ fontSize: 16 }}>cidades impactadas</Typography>
          </GridItem>
        </Grid>
      </Grid>
    </Section>
  );
}

export default OurNumbers;
