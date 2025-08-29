import { MapImage } from "./styles";
import articulationMap from "../../../../assets/images/articulation-map.png";
import FindLocalArticulation from "./FindLocalArticulation";
import SubTitle from "../../../Components/SubTitle";
import Title from "../../../Components/Title";

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
    <>
      <Title align={titleAlign}>{title}</Title>
      <SubTitle>{sub}</SubTitle>
      <MapImage src={articulationMap} alt="Local Articulations" />

      <FindLocalArticulation />
    </>
  );
}
