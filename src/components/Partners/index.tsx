import type { JSX } from "react";
import { Box, Grid } from "@mui/material";
import { Section } from "@components";

function Partners(): JSX.Element {
  return (
    <Section>
      <Grid
        container
        spacing={2}
        columns={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "60px",
        }}
      >
        <Grid
          height={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={6}
        >
          <Box
            component="a"
            href="https://www.itau.com.br"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={"/assets/images/Home/Partners/itau.webp"}
              alt="Itaú"
              height={{ xs: 44, lg: 88 }}
              width={{ xs: 44, lg: 88 }}
            />
          </Box>
          <Box
            component="a"
            href="https://www.carfreealliance.org/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={"/assets/images/Home/Partners/cca.webp"}
              alt="Carfree Cities Alliance"
              height={{ xs: 73, lg: 106 }}
              width={{ xs: 79.5, lg: 159 }}
            />
          </Box>
          <Box
            component="a"
            href="https://www.tembici.com.br/pt/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={"/assets/images/Home/Partners/tembici.webp"}
              alt="Tembici"
              height={{ xs: 50.5, lg: 100 }}
              width={{ xs: 60.88, lg: 122 }}
            />
          </Box>
        </Grid>
        <Grid
          height={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={6}
        >
          <Box
            component="a"
            href="https://www.cyclingcities.info/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={"/assets/images/Home/Partners/cc.webp"}
              alt="Cycling Cities"
              height={{ xs: 23.5, lg: 47 }}
              width={{ xs: 152, lg: 304 }}
            />
          </Box>
          <Box
            component="a"
            href="https://uniaodeciclistas.org.br/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={"/assets/images/Home/Partners/ucb.webp"}
              alt="União de Ciclistas do Brasil"
              height={{ xs: 44.5, lg: 89 }}
              width={{ xs: 61, lg: 122 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Partners;
