import { EBABrMap, Title, Wrapper } from "./styles";
import EBAMap from "../../../assets/images/eba-map.png";

export default function Map() {
  return (
    <Wrapper>
      <Title>EBA's pelo Brasil</Title>
      <EBABrMap src={EBAMap} alt="Mapa com as EBA's" />
    </Wrapper>
  );
}
