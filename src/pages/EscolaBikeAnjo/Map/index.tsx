import { EBABrMap } from "./styles";
import Title from "@components/Title";

export default function Map() {
  return (
    <>
      <Title>EBA's pelo Brasil</Title>
      <EBABrMap src={"/assets/images/eba-map.png"} alt="Mapa com as EBA's" />
    </>
  );
}
