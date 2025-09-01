import type { JSX } from "react";
import Header from "@components/Header";
import { Paragraph } from "./components/Paragraph/Paragraph";
import BackButton from "./components/BackButton";
import { HeroCardSection } from "./components/HeroCardSection";
import { Cards } from "./components/Cards";
import Container from "@components/Container";

function DiaMundialSemCarro(): JSX.Element {
  return (
    <>
      <Header secondary>
        <h2> Dia Mundial Sem Carro </h2>
      </Header>

      <BackButton />

      <Container>
        <Paragraph>
          <p>
            O dia Mundial Sem Carro de 2024 foi um sucesso!! (Adicionar alguns
            dados). Agora é a sua vez de fazer parte dessa história participando
            neste ano!!
          </p>
        </Paragraph>

        <HeroCardSection title="O que você pode fazer pelo Dia Mundial Sem Carro 2025?">
          <p>
            Milhares de pessoas ao redor do mundo tomarão as ruas no dia 22 de
            setembro, celebrando o Dia Mundial Sem Carro: uma enorme festa que
            engloba, entre outros, atividades comemorativas como exposições,
            debates, oficinas que ensinam a pedalar, passeios de bicicletas e o
            maior uso do transporte coletivo em detrimento ao transporte
            individual.
            <br />
            No Brasil, diversas organizações movimentam as pessoas em suas
            cidades, e o Bike Anjo está nessa para tentar reunir essas
            atividades e incentivar a discussão dos benefícios econômicos,
            sociais e ambientais que os meios de transporte por propulsão humana
            ou os meios coletivos oferecem a todos. Também mostra maneiras
            positivas de conviver em grandes cidades atualmente, reduzindo o
            barulho, a poluição e o transito das ruas causados pelos automóveis
            particulares. E essa reflexão é justamente o principal objetivo do
            Dia Mundial Sem Carro. E para entrar nessa de cabeça, o Bike Anjo
            criou duas cartilhas que ajudam você a participar dessa festa da
            melhor maneira possível. Veja como deixar seu carro em casa dia 22,
            participar de festas e eventos durante todo o mês de setembro, como
            mobilizar seus colegas de trabalho e até mesmo seu chefe, além,
            claro, de dicas incríveis para usar sua bicicleta no Dia Mundial Se
            Carro.
          </p>
        </HeroCardSection>
        <Cards />
      </Container>
    </>
  );
}

export default DiaMundialSemCarro;
