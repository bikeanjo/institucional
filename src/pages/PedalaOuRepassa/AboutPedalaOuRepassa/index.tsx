import { Button, Description, Container, Paragraph, Title } from "./styles";
import { Link } from "react-router-dom";

export default function AboutPedalaOuRepassa() {
  return (
    <>
      <Description>
        Bicicleta foi feita para estar em movimento. Se você tem uma bicicleta
        <br />
        que está parada, coloque ela para se mexer: ou pedala ou repassa!
      </Description>
      <Container>
        <img
          src={"/assets/images/img-carousel.png"}
          alt="imagem ou carrossel"
        />
        <Title>O que é o Pedala ou Repassa?</Title>
        <Paragraph>
          “Pedala ou repassa” é uma iniciativa de doação de bicicletas para
          pessoas que não têm dinheiro para comprar, mas que gostariam de usar a
          bicicleta no dia a dia, para trabalho, lazer, esporte, ...
          <br />
          <br />
          A Bike Anjo recebe doações de bicicletas que são frequentemente não
          utilizadas, portanto, precisa de pequenos reparos para uso diário.
          Estamos em busca de doações de peças e serviços de reparo para deixar
          a bicicleta pronta para uso por mais ciclistas da cidade!
          <br />
          <br />
          Prometemos cuidar muito bem e fazer muita gente feliz com ela!
          <br />
          <br />
          Tem uma bicicleta para doar?
          <br />
          Preencha os dados no formulário abaixo e entraremos em contato com
          você!
        </Paragraph>
        <Link to="">
          <Button>Formulário</Button>
        </Link>
      </Container>
    </>
  );
}
