import { useState } from "react";
import { Container } from "./styles";
import { MapInteractive } from "@components";
import FindLocalArticulation from "../../../SocialMedia/components/FollowLocalArticulations/FindLocalArticulation";
import { articulations } from "@components/Articulations";

export default function Events() {
  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(
    null,
  );

  return (
    <Container>
      <MapInteractive
        articulations={articulations}
        selectedCoords={selectedCoords}
        setSelectedCoords={setSelectedCoords}
      />
      <FindLocalArticulation
        articulations={articulations}
        setSelectedCoords={setSelectedCoords}
      />
    </Container>
  );
}
