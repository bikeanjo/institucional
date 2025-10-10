import { MapInteractive, SubTitle, Title, Section } from "@components";
import FindLocalArticulation from "./FindLocalArticulation";
import { useState, useEffect } from "react";
import { Colors } from "@colors";
import { loadTextContent } from "@/textContent";
import type { LocalOrganization } from "@components/Articulations";

interface LocalArticulationsProps {
  title?: string;
  titleAlign?: "left" | "center" | "right";
  sub?: string;
}

export default function FollowLocalArticulations({
  title,
  titleAlign = "left",
  sub,
}: LocalArticulationsProps) {
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
    <Section>
      <Title align={titleAlign}>{title ?? ""}</Title>
      <SubTitle color={Colors["G_Grey_100"]}>{sub}</SubTitle>

      <MapInteractive
        localOrg={localOrg}
        selectedCoords={selectedCoords}
        setSelectedCoords={setSelectedCoords}
      />
      <FindLocalArticulation
        localOrg={localOrg}
        setSelectedCoords={setSelectedCoords}
      />
    </Section>
  );
}
