import type { JSX } from "react";
import Header from "@components/Header";
import CarouselAttentionCards from "./components/CarouselAttentionCards";
import SupportLinksSection from "./components/Links";
import CarouselTipCards from "./components/CarouselTipCards";
import SocialContent from "./components/SocialContent";
import Container from "@components/Container";

const tipSteps = [
  {
    number: 1,
    title: "Escolha o local",
    description:
      "Procure um espaço plano, amplo e sem trânsito — praça calma, estacionamento vazio ou calçada larga. Se tiver um pouco de grama, melhor!",
  },
  {
    number: 2,
    title: "Alongamento rápido",
    description:
      "Em pé, pés na largura dos ombros. 10 círculos de punhos/ombros à frente e atrás. Mãos nos quadris: gire o tronco 5x para cada lado.",
  },
  {
    number: 3,
    title: "Ajuste da bike",
    description:
      "Baixe o selim até conseguir apoiar os dois pés no chão.Alinhe o guidão para manter coluna ereta e ombros relaxados",
  },
  {
    number: 4,
    title: "Teste dos freios",
    description:
      "Segure firme no guidão e acione cada manete (alavanca do freio) com calma. Sinta a resposta sem travar bruscamente.",
  },
  {
    number: 5,
    title: "Treine as remadas",
    description:
      "Dupla: com os dois pés juntos, dê impulso simultâneo e mantenha-se com ambos fora do chão enquanto o movimento durar. Alternada: um pé de cada vez, sentindo o equilíbrio do quadril e mantendo os pés fora do chão no impulso.",
  },
  {
    number: 6,
    title: "Arrancada controlada",
    description:
      "Posicione um pedal a 45° à frente. Empurre com todo o corpo no outro pé para ganhar velocidade (não precisa ser máxima) e, ao mesmo tempo, encaixe o primeiro no pedal",
  },
  {
    number: 7,
    title: "Pausas e prática",
    description:
      "A velocidade ajuda no equilíbrio, então não tenha medo de ganhar um pouco de ritmo. Se cansar, pare, respire, hidrate-se e repita os passos anteriores em blocos de 5 minutos até se sentir confiante.",
  },
];

const attentionSteps = [
  {
    number: 1,
    title: "Prepare-se",
    subtitle: "Antes de sair de casa, deixe sua bike no ponto",
    description:
      "Verifique: Corrente, Banco, Freios e Pneus\n\nMonte rotas alternativas às grandes avenidas e pratique as fins de semana",
  },
  {
    number: 2,
    title: "Preste atenção",
    subtitle: "A bicicleta é um veículo, assim como motos e carros.",
    description:
      "Pedale na mão certa da via\n\nDê preferência ao pedestre\n\nRespeite a sinalização\n\nOcupe a Faixa",
  },
  {
    number: 3,
    title: "Comunique-se no trânsito",
    subtitle: "Sinalize quem também está dirigindo",
    description:
      "Dê sinais com os braços caso troque de faixa ou faça alguma conversão\n\nSó ultrapasse se precisar\n\nTome cuidado com obstacúlos como portas de carros abrindo",
  },
];

function CyclingTips(): JSX.Element {
  return (
    <>
      <Header secondary>
        <h2>Dicas para Pedalar</h2>
      </Header>
      <Container>
        <CarouselTipCards
          title="Dicas para começar por conta própria"
          sub="Muita gente chega até a gente querendo aprender a pedalar — e isso nos deixa felizes demais! Pra dar aquela força desde o começo, preparamos um passo a passo simples e direto pra te ajudar a dar os primeiros giros por conta própria. Confia: você consegue sim!"
          steps={tipSteps}
        />
        <CarouselAttentionCards
          title="Pontos de atenção no pedal"
          sub="Antes de sair por aí, é importante prestar atenção em alguns pontos que vão deixar seu pedal mais seguro e tranquilo. Se liga nessas dicas, coloque em prática e bora pedalar com confiança!"
          steps={attentionSteps}
        />
        <SupportLinksSection />
        <SocialContent />
      </Container>
    </>
  );
}

export default CyclingTips;
