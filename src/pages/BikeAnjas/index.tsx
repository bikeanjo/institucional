import type { ReactNode } from "react";
import Header from "../Components/Header";
import BackButton from "../DiaMundialSemCarro/components/BackButton";
import { Paragraph } from "../DiaMundialSemCarro/components/Paragraph/Paragraph";
import { HeroCardSection } from "../DiaMundialSemCarro/components/HeroCardSection/index";
import { Cards } from "./Components/Cards";
import { Title } from "../DiaMundialSemCarro/components/Title/Title";
import Fac from "./Components/FAC";

function BikeAnjas(): ReactNode {
  return (
    <>
      <Header secondary>
        <h2> Bike Anjas </h2>
      </Header>

      <BackButton />

      <Paragraph>
        As Anjas são uma rede de mulheres de diferentes cidades do Brasil que se
        uniram dentro da rede Bike Anjo para pensar e agir quanto a sermos
        minoria nos grupos de pedais locais e nacionais.
      </Paragraph>

      <HeroCardSection title="Porque Bike Anjas Existe?" button="Formulário">
        <p>
          Porque ainda é preciso.
          <br />
          <br />
          As Bike Anjas nasceram da vontade de ver mais mulheres pedalando,
          ocupando as ruas e fazendo parte da transformação das cidades. A gente
          sabe que, pra muitas de nós, sair por aí de bicicleta não é só uma
          questão de equilíbrio: é enfrentar medos, julgamentos e barreiras que
          vêm de longe.
          <br />
          <br />
          Enquanto os homens sempre estiveram livres pra ocupar os espaços
          públicos (e de poder), muitas vezes nossa presença ainda é
          questionada. Na rua, no trânsito, nos eventos. Até quando vamos
          ajustar o selim da bike, aparece alguém querendo opinar – sem ser
          chamado – como se soubesse mais.
          <br />
          <br />
          E sobre mecânica? Sempre disseram que “mulher não entende”. Mas será
          que é porque não sabemos... ou porque nunca deixaram a gente aprender?
          Desde pequenas, ganhamos bonecas, fomos ensinadas a não nos sujar e a
          cuidar dos outros. Enquanto isso, eles ganhavam carrinhos,
          ferramentas, e o direito de fuçar e testar.
          <br />
          <br />
          A verdade é: não faltou capacidade, faltou oportunidade.
          <br />
          E é por isso que existimos. Pra apoiar, ensinar, trocar e fortalecer.
          Pra que cada mulher possa ocupar seu espaço – no trânsito, na bike, na
          vida – com segurança, liberdade e confiança.
          <br />
          <br />
          Somos muitas. E juntas, vamos mais longe. 💪💜
        </p>
      </HeroCardSection>
      <Cards />
      <Title>Dicas Anjas</Title>
      <Paragraph>
        Assim como ensinamos a pedalar porque temos experiência com a bicicleta,
        acreditamos que as mulheres têm, sim, muita experiência no que é “ser
        mulher”. E por isso, quem melhor do que nós mesmas para falar sobre o
        que sentimos e vivemos? Criamos uma FAQ (Perguntas Frequentes) pra
        ajudar a explicar, com carinho e firmeza, por que certas situações nos
        incomodam tanto – e como os homens podem refletir e colaborar pra tornar
        as ruas (e o mundo) mais seguras e acolhedoras pra todes.
      </Paragraph>
      <Fac />
    </>
  );
}
export default BikeAnjas;
