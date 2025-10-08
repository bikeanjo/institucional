import type { JSX } from "react";
import Title from "../../components/Title";
import { Box, Grid, Typography } from "@mui/material";
import GridItem from "./components/GridItem";
import { Colors } from "@colors";
import { Section } from "@components";
import "./styles.css";
import PublicIcon from "../../../../../public/assets/icons/Home/OurNumbers/public.svg?react";
import BikerIcon from "../../../../../public/assets/icons/Home/OurNumbers/biker.svg?react";

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
        <Grid size={12}>
          <GridItem
            gap="20px"
            padding="16px"
            sx={{
              justifyContent: "center",
              alignItems: { xs: "center", lg: "baseline" },
            }}
          >
            <Box
              component="img"
              src="/assets/icons/Home/OurNumbers/biker-anjo.svg"
              alt="Ícone de bike anjo na cor rosa"
              sx={{
                width: { xs: 80, md: 120 },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "baseline",
                gap: { xs: "4px", lg: "20px" },
              }}
            >
              <Typography
                color="tertiary"
                sx={{ fontSize: { xs: 56, md: 106 } }}
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
            </Box>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }} order={{ xs: -1, lg: 0 }}>
          <GridItem
            padding="16px"
            height="100%"
            color={{ xs: Colors["Blue_60"], lg: Colors["Orange_50"] }}
            backgroundColor={{ xs: Colors["Blue_10"], lg: Colors["Orange_10"] }}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: { xs: "center", lg: "center" },
              justifyContent: { xs: "center", lg: "start" },
              gap: "16px",
            }}
          >
            <BikerIcon className="biker-icon" />
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
                  fontSize: { xs: 50, md: 106, lg: 136 },
                  color: { xs: Colors["Blue_60"], lg: Colors["Orange_50"] },
                }}
                lineHeight={{ xs: 0.9, md: 1 }}
                fontWeight={500}
              >
                40.013
              </Typography>
              <Typography sx={{ fontSize: { xs: 16, md: 32 } }}>
                pessoas atendidas
              </Typography>
            </Box>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 6, lg: 4 }}>
          <GridItem
            padding="16px"
            height="100%"
            color={Colors["Green_70"]}
            backgroundColor={Colors["Green_10"]}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", lg: "baseline" },
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box
                component="img"
                src="/assets/icons/Home/OurNumbers/recycling.svg"
                alt="Ícone de reciclagem"
                sx={{
                  width: { xs: 40, md: 60, lg: 72 },
                  height: { xs: 40, md: 60, lg: 72 },
                }}
              />

              <Typography
                color={Colors["Green_70"]}
                sx={{ fontSize: { xs: 42, md: 72 } }}
                lineHeight={1}
                fontWeight={500}
                height="100%"
              >
                40KG
              </Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: 16, md: 24 } }}>
              a menos de CO&#8322; na atmosfera
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 6, lg: 5.5 }}>
          <GridItem
            gap="8px"
            padding="16px"
            color={{ xs: Colors["Orange_50"], lg: Colors["Green_70"] }}
            backgroundColor={{
              xs: Colors["Orange_10"],
              lg: Colors["Green_10"],
            }}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: { xs: "center", lg: "baseline" },
              justifyContent: { xs: "center", lg: "start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: { xs: "center", lg: "baseline" },
              }}
            >
              <PublicIcon className="globe-icon" />
              <Typography
                sx={{
                  fontSize: { xs: 42, md: 64 },
                  color: { xs: Colors["Orange_50"], lg: Colors["Green_70"] },
                }}
                lineHeight={1}
                fontWeight={500}
              >
                40
              </Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: 14, md: 16 } }} fontWeight={500}>
              países pedalando com a gente
            </Typography>
          </GridItem>
        </Grid>
        <Grid size={{ xs: 12, lg: 6.5 }}>
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
              justifyContent: { xs: "center", lg: "start" },
            }}
          >
            <Box
              component="img"
              src="/assets/icons/Home/OurNumbers/apartment.svg"
              alt="Ícone de um prédio"
              sx={{
                width: { xs: 54, lg: 64 },
              }}
            />
            <Typography
              color={Colors["Blue_60"]}
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
