import type { JSX } from "react";
import { Box, Grid } from "@mui/material";
import { Colors } from "@colors";
import { Title, Section } from "@components";

function Partners(): JSX.Element {
  return (
    <Section>
      <Title variant="h2" color={Colors["Pink_50"]} center>
        Parceiros
      </Title>

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
            component="img"
            src={"/assets/images/Home/Partners/itau.webp"}
            alt="itauImage"
            height={{ xs: 44, lg: 88 }}
            width={{ xs: 44, lg: 88 }}
          />
          <Box
            component="img"
            src={"/assets/images/Home/Partners/cca.webp"}
            alt="ccaImage"
            height={{ xs: 73, lg: 106 }}
            width={{ xs: 79.5, lg: 159 }}
          />
          <Box
            component="img"
            src={"/assets/images/Home/Partners/tembici.webp"}
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
            src={"/assets/images/Home/Partners/cc.webp"}
            alt="ccImage"
            height={{ xs: 23.5, lg: 47 }}
            width={{ xs: 152, lg: 304 }}
          />
          <Box
            component="img"
            src={"/assets/images/Home/Partners/ucb.webp"}
            alt="ucbImage"
            height={{ xs: 44.5, lg: 89 }}
            width={{ xs: 61, lg: 122 }}
          />
        </Grid>
      </Grid>
    </Section>
  );
}

export default Partners;
