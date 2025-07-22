import { MapImage, Sub, Title, Wrapper } from "./styles";
import articulationMap from "../../../../assets/images/articulation-map.png";
import FindLocalArticulation from "./FindLocalArticulation";

interface LocalArticulationsProps {
  title: string;
  sub: string;
}

export default function FollowLocalArticulations({
  title,
  sub,
}: LocalArticulationsProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Sub>{sub}</Sub>
      <MapImage src={articulationMap} alt="Local Articulations" />

      <FindLocalArticulation />
    </Wrapper>
  );
}
