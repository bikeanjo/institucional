import { useState, useEffect, type JSX } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Colors } from "@colors";
import { Section, MapInteractive, Button } from "@components";
import { loadTextContent } from "@/textContent";
import type { LocalOrganization } from "@components/Articulations";

function WhereAreWe(): JSX.Element {
  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(
    null,
  );
  const [localOrg, setLocalOrg] = useState<LocalOrganization[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    void loadTextContent("localOrg").then((data) =>
      setLocalOrg(data as LocalOrganization[]),
    );
  }, []);

  return (
    <Section
      center
      backgroundColor={Colors["Green_20"]}
      borderColor={Colors["Green_70"]}
    >
      <Box
        sx={{
          textAlign: "center",
          width: { xs: "343px", lg: "1036px" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title variant="h2" color={Colors["Green_70"]}>
          Onde estamos
        </Title>
        <SubTitle color={Colors["G_Grey_100"]} fontSize={24} fontWeight={400}>
          Saiba onde encontrar iniciativas para participar
        </SubTitle>
      </Box>
      <MapInteractive
        localOrg={localOrg}
        selectedCoords={selectedCoords}
        setSelectedCoords={setSelectedCoords}
      />
      <Button component={Link} to="/onde-estamos">
        Veja Onde Estamos
      </Button>
    </Section>
  );
}

export default WhereAreWe;
