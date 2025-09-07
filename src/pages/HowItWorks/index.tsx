import type { JSX } from "react";
import Header from "@components/Header";
import LearningCarousel from "./components/LearningCarousel";
import SubTitle from "@components/SubTitle";
import Container from "@components/Container";

const learnSteps = [
  {
    number: 1,
    title: "Faça seu pedido",
    description:
      "Comece o cadastro, clique em Quero Aprender e escolha entre aprender a pedalar, dica de rota ou acompanhamento no trânsito.",
  },
  {
    number: 2,
    title: "Aguarde a conexão",
    description:
      "A plataforma conecta você com um Bike Anjo da sua cidade. O contato será feito por e-mail ou direto pelo site.",
  },
  {
    number: 3,
    title: "Combine o encontro",
    description:
      "Converse com o Bike Anjo e definam local, data e horário do encontro. O atendimento é gratuito e acolhedor.",
  },
];

const bikeAnjoSteps = [
  {
    number: 1,
    title: "Cadastre-se no site",
    description:
      "Clique em Já pedalo e quero ajudar, preencha seus dados e indique onde pode atender pedidos.",
  },
  {
    number: 2,
    title: "Prepare-se pra ajudar",
    description:
      "Curso online ao vivo que prepara você para ser uma pessoa voluntária da rede, com tudo que precisa saber sobre mobilidade, acolhimento e atuação na Bike Anjo.",
  },
  {
    number: 3,
    title: "Ensine com carinho",
    description:
      "Pegue pedidos dentro do nosso sistema, combine com a pessoa solicitante e compartilhe seu conhecimento. Você ajuda a transformar vidas e cidades!",
  },
];

function HowItWorks(): JSX.Element {
  const Hero = {
    url: "/assets/header/como-funciona.jpg",
    backgroundPositionDesktop: "50% 40%",
    backgroundPositionMobile: "50% 40%",
  };
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Como Funciona</h2>
      </Header>
      <Container>
        <SubTitle>
          Através do nosso site conectamos quem quer aprender a pedalar com quem
          já pedala e quer ajudar. É simples, facil e o mais importante:
          gratuito. Escolha abaixo se você quer ensinar ou aprender e bora
          transformar a cidade juntos!
        </SubTitle>
        <LearningCarousel title="Aprenda com a gente" steps={learnSteps} />
        <LearningCarousel title="Seja um Bike Anjo" steps={bikeAnjoSteps} />
      </Container>
    </>
  );
}

export default HowItWorks;
