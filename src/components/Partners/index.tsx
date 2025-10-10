import { useState, useEffect, type JSX } from "react";
import { Box, Grid } from "@mui/material";
import { Section } from "@components";
import { loadTextContent } from "@/textContent";

type Partner = {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  height: { xs: number; lg: number };
  width: { xs: number; lg: number };
};

function Partners(): JSX.Element {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    void loadTextContent("partners").then((data) =>
      setPartners(data as Partner[]),
    );
  }, []);

  // Split partners into two rows (3 and 2)
  const firstRow = partners.slice(0, 3);
  const secondRow = partners.slice(3);

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
          {firstRow.map((partner) => (
            <Box
              key={partner.id}
              component="a"
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src={partner.imageUrl}
                alt={partner.name}
                height={partner.height}
                width={partner.width}
              />
            </Box>
          ))}
        </Grid>
        <Grid
          height={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={6}
        >
          {secondRow.map((partner) => (
            <Box
              key={partner.id}
              component="a"
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src={partner.imageUrl}
                alt={partner.name}
                height={partner.height}
                width={partner.width}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
}

export default Partners;
