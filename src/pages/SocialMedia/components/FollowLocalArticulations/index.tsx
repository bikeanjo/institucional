import { MapInteractive, SubTitle, Title, Section } from "@components";
import FindLocalArticulation from "./FindLocalArticulation";
import { useState } from "react";
import { Colors } from "@colors";
import { articulations } from "@components/Articulations";

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

  return (
    <Section>
      <Title align={titleAlign}>{title ?? ""}</Title>
      <SubTitle color={Colors["G_Grey_100"]}>{sub}</SubTitle>

      <MapInteractive
        articulations={articulations}
        selectedCoords={selectedCoords}
        setSelectedCoords={setSelectedCoords}
      />
      <FindLocalArticulation
        articulations={articulations}
        setSelectedCoords={setSelectedCoords}
      />
    </Section>
  );
}
