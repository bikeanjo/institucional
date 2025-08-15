import { Container, MapImage } from "./styles";
import articulationMap from "../../../../assets/images/articulation-map.png";
import FindLocalArticulation from "../../../SocialMedia/components/FollowLocalArticulations/FindLocalArticulation";

export default function Events() {
  return (
    <Container>
      <MapImage src={articulationMap} alt="Local Articulations" />
      <FindLocalArticulation />
    </Container>
  );
}
