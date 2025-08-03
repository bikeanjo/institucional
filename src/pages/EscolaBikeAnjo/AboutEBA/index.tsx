import { Description, EBAContainer, Paragraph, Title } from "./styles";
import ImgCarousel from "../../../assets/images/img-carousel.png";

export default function AboutEBA() {
  return (
    <>
      <Description>
        Quer aprender a pedalar e ainda não sabe muito bem por onde começar?{" "}
        <br /> A gente vai te dar uma mãozinha!
      </Description>
      <EBAContainer>
        <img src={ImgCarousel} alt="imagem ou carrossel" />
        <Title>O que é uma EBA?</Title>
        <Paragraph>
          As Escolhas Bike Anjo são oficinas gratuitas organizadas por grupos de
          anjos de uma determinada cidade. Elas tem data, hora e local para
          acontecer. Aqui, listamos todas nossas EBAs espalhadas pelo Brasil.
          <br />
          <br />
          Você pode consultar o mapa e conferir se na sua cidade existe alguma
          EBA, além de consultar o dia e local que ela acontece.
          <br />
          <br />
          Se preferir, consulte a listagem logo após o mapa.
        </Paragraph>
      </EBAContainer>
    </>
  );
}
