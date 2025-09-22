import Section from "@components/Section";
import { EBABrMap } from "./styles";
import Title from "@components/Title";

export default function Map() {
  return (
    <Section>
      <Title>EBA's pelo Brasil</Title>
      <EBABrMap src={"/assets/images/eba-map.png"} alt="Mapa com as EBA's" />
    </Section>
  );
}
