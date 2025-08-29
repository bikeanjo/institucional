import type { JSX } from "react";
import Title from "../../Home/components/Title";
import Container from "../../Home/components/Container";
import { Box, Grid } from "@mui/material";
import itauImage from "@assets/images/Home/Partners/itau.png";
import ccaImage from "@assets/images/Home/Partners/cca.png";
import tembiciImage from "@assets/images/Home/Partners/tembici.png";
import ccImage from "@assets/images/Home/Partners/cc.png";
import ucbImage from "@assets/images/Home/Partners/ucb.png";
import { Colors } from "../../../styles/tokens/colors";

function Partners({ home }: { home?: boolean }): JSX.Element {
  return (
    <Container gap="48px">
      <Title
        variant="h2"
        display={home ? "flex" : "none"}
        color={Colors["Pink-50"]}
      >
        Parceiros
      </Title>
      <Grid
        container
        spacing={2}
        columns={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
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
            component="img"
            src={itauImage}
            alt="itauImage"
            height={{ xs: 44, lg: 88 }}
            width={{ xs: 44, lg: 88 }}
          />
          <Box
            component="img"
            src={ccaImage}
            alt="ccaImage"
            height={{ xs: 73, lg: 106 }}
            width={{ xs: 79.5, lg: 159 }}
          />
          <Box
            component="img"
            src={tembiciImage}
            alt="tembiciImage"
            height={{ xs: 50.5, lg: 100 }}
            width={{ xs: 60.88, lg: 122 }}
          />
        </Grid>
        <Grid
          height={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={6}
        >
          <Box
            component="img"
            src={ccImage}
            alt="ccImage"
            height={{ xs: 23.5, lg: 47 }}
            width={{ xs: 152, lg: 304 }}
          />
          <Box
            component="img"
            src={ucbImage}
            alt="ucbImage"
            height={{ xs: 44.5, lg: 89 }}
            width={{ xs: 61, lg: 122 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Partners;
