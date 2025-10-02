import { Container, MapImage } from "./styles";
import FindLocalArticulation from "../../../SocialMedia/components/FollowLocalArticulations/FindLocalArticulation";

export default function Events() {
  return (
    <Container>
      <MapImage
        src={"/assets/images/articulation-map.webp"}
        alt="Local Articulations"
      />
      <FindLocalArticulation />
    </Container>
  );
}
