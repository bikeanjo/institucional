import { EBABrMap } from "./styles";
import EBAMap from "../../../assets/images/eba-map.png";
import Title from "@components/Title";

export default function Map() {
  return (
    <>
      <Title>EBA's pelo Brasil</Title>
      <EBABrMap src={EBAMap} alt="Mapa com as EBA's" />
    </>
  );
}
