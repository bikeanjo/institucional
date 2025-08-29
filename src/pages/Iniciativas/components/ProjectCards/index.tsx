import { ContainerCards } from "./styles";
import { useRef } from "react";
import { Card } from "../Card/Index";

export function ProjectCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "Card1",
      title: "Escola Bike Anjo",
      textDesktop:
        "A Escola Bike Anjo é uma oficina de aprendizado para o mundo da bicicleta. Ela acontece com uma frequência pelo menos mensal já em mais de 20 cidades, com aula para aprender a pedalar e algumas outras atividades complementares, como conserto de bicicletas, dicas para quem quer pedalar no trânsito e até mesmo treinamento de novos bike anjos.Confira a agenda completa da EBA em todas as cidades",
      textMobile:
        "A Escola Bike Anjo é uma oficina de aprendizado para o mundo da bicicleta.",
      button: "Conhecer",
      link: "/escola-bike-anjo",
    },
    {
      id: "Card2",
      title: "Bike Anjas",
      textDesktop:
        "Todo ano, no mês de maio, realizamos a campanha De Bike ao Trabalho inspirado no Bike To Work Day, evento anual realizado em vários cantos do mundo para promover a bicicleta como uma opção de transporte para o trabalho. No Brasil o evento é realizado pela Bike Anjo com a ajuda de muitos parceiros, sendo realizado sempre na segunda sexta-feira de Maio. Saiba mais sobre o De Bike ao Trabalho  e como se engajar aqui.",
      textMobile: "Resumo até 110 caracteres",
      button: "Conhecer",
      link: "/bike-anjas",
    },
    {
      id: "Card3",
      title: "De Bike ao Trabalho",
      textDesktop:
        "Todo ano, no mês de maio, realizamos a campanha De Bike ao Trabalho inspirado no Bike To Work Day, evento anual realizado em vários cantos do mundo para promover a bicicleta como uma opção de transporte para o trabalho. No Brasil o evento é realizado pela Bike Anjo com a ajuda de muitos parceiros, sendo realizado sempre na segunda sexta-feira de Maio. Saiba mais sobre o De Bike ao Trabalho  e como se engajar aqui.",
      textMobile: "Resumo até 110 caracteres",
      button: "Conhecer",
      link: "",
    },
    {
      id: "Card4",
      title: "Pedala ou Repassa",
      textDesktop:
        "Pedala ou Repassa é um projeto contínuo que incentiva a doação de bicicletas que estão paradas para quem mais precisa. A ideia é simples: se você tem uma bike encostada, pode repassá-la para alguém que vai usá-la no dia a dia — seja para trabalhar, estudar ou se divertir. A rede de pessoas voluntárias da Bike Anjo realiza a triagem, pequenos reparos e encaminha a bicicleta para a nova pessoa. Saiba mais sobre o Pedala ou Repassa e como doar ou receber uma bicicleta aqui.",
      textMobile: "Resumo até 110 caracteres",
      button: "Conhecer",
      link: "/pedala-ou-repassa",
    },
    {
      id: "Card5",
      title: "Bike na Escola",
      textDesktop:
        "Através da plataforma Bike na Escola, a rede Bike Anjo promove a cultura da bicicleta no ambiente escolar. Agimos para garantir que através da bicicleta, possamos melhorar a qualidade de vida de alunos, pais e professores. Com o apoio de voluntários espalhados por todo o Brasil, somos capazes de intervir dentro do ambiente escolar para difundir conhecimento sobre as bikes e também utilizar essa máquina maravilhosa como ferramenta de transformação da comunidade ao redor.",
      textMobile: "Resumo até 110 caracteres",
    },
    {
      id: "Card6",
      title: "Bike na Periferia",
      textDesktop:
        "A Bike Anjo vem sempre buscando novas formas de mobilizar mais pessoas por meio da bicicleta e com isso surgiu a questão: e a periferia? São áreas que já tem (muitas vezes) um grande número de ciclistas, mas em muitos casos podem ser desfavorecidos por estarem em regiões tão afastadas e inacessíveis da cidade. Então a Bike Anjo iniciou uma ação em 2015 compilando experiências e manuais para responder a seguinte pergunta: Como Promover a bicicleta na Periferia? Confira estes materiais AQUI..",
      textMobile: "Resumo até 110 caracteres",
    },
    {
      id: "Card7",
      title: "Bike Anjes",
      textDesktop:
        "Todo ano, no mês de maio, realizamos a campanha De Bike ao Trabalho inspirado no Bike To Work Day, evento anual realizado em vários cantos do mundo para promover a bicicleta como uma opção de transporte para o trabalho. No Brasil o evento é realizado pela Bike Anjo com a ajuda de muitos parceiros, sendo realizado sempre na segunda sexta-feira de Maio. Saiba mais sobre o De Bike ao Trabalho e como se engajar aqui.",
      textMobile: "Resumo até 110 caracteres",
    },
    {
      id: "Card8",
      title: "ODKV",
      textDesktop:
        "Todo ano, no mês de maio, realizamos a campanha De Bike ao Trabalho inspirado no Bike To Work Day, evento anual realizado em vários cantos do mundo para promover a bicicleta como uma opção de transporte para o trabalho. No Brasil o evento é realizado pela Bike Anjo com a ajuda de muitos parceiros, sendo realizado sempre na segunda sexta-feira de Maio. Saiba mais sobre o De Bike ao Trabalho  e como se engajar aqui.",
      textMobile: "Resumo até 110 caracteres",
    },
  ];

  return (
    <>
      <ContainerCards ref={scrollRef}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            textDesktop={card.textDesktop}
            textMobile={card.textMobile}
            button={card.button}
            link={card.link}
          />
        ))}
      </ContainerCards>
    </>
  );
}
