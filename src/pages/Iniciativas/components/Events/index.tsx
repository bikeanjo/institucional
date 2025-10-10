import { useState, useEffect } from "react";
import { Container } from "./styles";
import { MapInteractive } from "@components";
import FindLocalArticulation from "../../../SocialMedia/components/FollowLocalArticulations/FindLocalArticulation";
import { loadTextContent } from "@/textContent";
import type { LocalOrganization } from "@components/Articulations";

export default function Events() {
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
    <Container>
      <MapInteractive
        localOrg={localOrg}
        selectedCoords={selectedCoords}
        setSelectedCoords={setSelectedCoords}
      />
      <FindLocalArticulation
        localOrg={localOrg}
        setSelectedCoords={setSelectedCoords}
      />
    </Container>
  );
}
