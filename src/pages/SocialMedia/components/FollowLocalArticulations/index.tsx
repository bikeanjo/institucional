import { MapImage, Sub, Title, Wrapper } from "./styles";
import articulationMap from "../../../../assets/images/articulation-map.png";
import FindLocalArticulation from "./FindLocalArticulation";

interface LocalArticulationsProps {
  title: string;
  titleAlign?: "left" | "center" | "right";
  sub: string;
}

export default function FollowLocalArticulations({
  title,
  titleAlign = "left",
  sub,
}: LocalArticulationsProps) {
  return (
    <Wrapper>
      <Title align={titleAlign}>{title}</Title>
      <Sub>{sub}</Sub>
      <MapImage src={articulationMap} alt="Local Articulations" />

      <FindLocalArticulation />
    </Wrapper>
  );
}
