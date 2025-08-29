import type { JSX } from "react";
import Header from "../Components/Header";
import SupportLinksSection from "./components/Links";
import CarouselTeachingCards from "./components/CarouselTeachingCards";
import SocialContent from "./components/SocialContent";
import EngageVolunteers from "./components/EngageVolunteers";
import RideWithVoice from "./components/RideWithVoice";
import Container from "../Components/Container";

const teachingSteps = [
  {
    number: 1,
    title: "Recepção e confiança",
    description:
      "Cumprimente com sorriso e tom acolhedor. Pergunte como a pessoa se sente em relação à bike e reforce que o aprendizado é no ritmo dela.",
  },
  {
    number: 2,
    title: "Demonstração do alongamento",
    description:
      "Mostre rapidamente exercícios de punhos, ombros e coluna. Explique como isso evita tensão e prepara para pedalar.",
  },
  {
    number: 3,
    title: "Ajuste da bicicleta",
    description:
      "Oriente o aprendiz a ajustar o selim baixo, com os dois pés firmes no chão. Confirme juntos a altura e o alinhamento do guidão.",
  },
  {
    number: 4,
    title: "Explicação do freio e pose",
    description:
      "Ensine a usar o freio esquerdo (traseiro) e direito (dianteiro) sem apertar forte. Demonstre a postura neutra: ombros relaxados, coluna ereta.",
  },
  {
    number: 5,
    title: "Suporte progressivo",
    description:
      "Segure gentilmente o selim ou bagageiro enquanto o aprendiz faz as primeiras “remadas” (empurrar a bike). Vá soltando aos poucos conforme ganha equilíbrio.",
  },
  {
    number: 6,
    title: "Feedback construtivo",
    description:
      "Observe postura, impulso e ritmo. Aponte um ajuste por vez (“tente olhar um ponto à frente” ou “mantém o corpo solto”). Elogie cada pequeno progresso.",
  },
  {
    number: 7,
    title: "Pausa e planejamento",
    description:
      "Após cada rodada de prática, faça uma pausa breve: hidrate, respire e repasse o próximo desafio (remada alternada, arranque). Combine quantas repetições forem necessárias.",
  },
];

function CyclingTips(): JSX.Element {
  return (
    <>
      <Header secondary>
        <h2>Dicas para Bike Anjo</h2>
      </Header>

      <Container padding="20px">
        <CarouselTeachingCards
          title="Como ensinar alguém a pedalar"
          sub="Abaixo seguem algumas dicas praticas para você lembrar do que fazer durante as oficinas, mas é importante que o Bike Anjo passe pela CUBA para se capacitar como pessoa voluntária"
          steps={teachingSteps}
        />
        <EngageVolunteers
          title="Como chamar e engajar voluntários?"
          sub="Manter o voluntário ativo é um desafio grande, mas aqui compilamos algumas atividades que podem trazer mais engajamento nas atividades presenciais e não presenciais. Entendemos que cada cidade tem seu modo particular de engajar os voluntários e o que propomos aqui são apenas ideias, ferramentas e materiais que são adaptáveis para as realidades locais"
        />
        <RideWithVoice />
        <SupportLinksSection />
        <SocialContent />
      </Container>
    </>
  );
}

export default CyclingTips;
