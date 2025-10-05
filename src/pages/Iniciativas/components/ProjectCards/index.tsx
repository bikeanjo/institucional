import { ContainerCards } from "./styles";
import { useRef } from "react";
import { Card } from "../Card/Index";
import { Colors } from "@colors";

export function ProjectCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: "Card1",
      title: "Escola Bike Anjo",
      textDesktop:
        "Aprender a pedalar transforma vidas! A EBA ensina com carinho e segurança pessoas de todas as idades a dar suas primeiras pedaladas, cuidar da bike e encarar a cidade. É formação cidadã sobre duas rodas.",
      textMobile:
        "A Escola Bike Anjo é uma oficina de aprendizado para o mundo da bicicleta.",
      button: "Conheça",
      link: "/escola-bike-anjo",
      color: Colors["Green_70"],
    },
    {
      id: "Card2",
      title: "Bike Anjas",
      textDesktop:
        "Lugar de mulher é onde ela quiser, inclusive na bike! As Bike Anjas fortalecem o pedal feminino com oficinas, rodas de conversa e acolhimento. É sobre autonomia, conforto e segurança pra pedalar com confiança.",
      textMobile: "Resumo até 110 caracteres",
      button: "Conheça",
      link: "/bike-anjas",
      color: Colors["Blue_60"],
    },
    {
      id: "Card3",
      title: "De Bike ao Trabalho",
      textDesktop:
        "Toda 2ª sexta de maio e durante o ano todo, mostramos que a bike é uma opção viável pro trabalho. Empresas, governos e pessoas se unem por cidades mais humanas e menos engarrafadas!",
      textMobile: "Resumo até 110 caracteres",
      button: "Conheça",
      link: "",
      color: Colors["Orange_50"],
    },
    {
      id: "Card4",
      title: "Pedala ou Repassa",
      textDesktop:
        "Tem uma bike parada em casa? Repassa pra quem precisa! Coletamos, reparamos e doamos bicicletas pra que mais gente tenha acesso à mobilidade ativa. Uma bike a mais na rua é uma vida a mais transformada.",
      textMobile: "Resumo até 110 caracteres",
      button: "Conheça",
      link: "/pedala-ou-repassa",
      color: Colors["Pink_50"],
    },
    {
      id: "Card5",
      title: "Bike na Escola",
      textDesktop:
        "Escolas também pedalam com a gente! Levamos a cultura da bicicleta pra sala de aula, envolvendo estudantes, educadores e famílias num futuro mais sustentável. Aprender vai além da lousa!",
      textMobile: "Resumo até 110 caracteres",
      color: Colors["Green_70"],
    },
    {
      id: "Card6",
      title: "Bike na Periferia",
      textDesktop:
        "Nas quebradas, a bike já é resistência! O projeto valoriza o que já existe e fortalece com oficinas, pedais e autonomia. É sobre empoderar e pedalar onde a cidade insiste em esquecer.",
      textMobile: "Resumo até 110 caracteres",
      color: Colors["Blue_60"],
    },
    {
      id: "Card7",
      title: "Bike Anjes",
      textDesktop:
        "Mais do que um nome neutro, um chamado à diversidade. As Bike Anjes garantem um espaço seguro e acolhedor para quem pedala sendo quem é. Porque toda pessoa tem o direito de ocupar a cidade.",
      textMobile: "Resumo até 110 caracteres",
      color: Colors["Orange_50"],
    },
    {
      id: "Card8",
      title: "ODKV",
      textDesktop:
        "Pedalar com deficiência visual é possível! ODKV usa bikes adaptadas pra garantir inclusão, autonomia e alegria sobre duas rodas. Todo mundo tem o direito de sentir o vento no rosto.",
      textMobile: "Resumo até 110 caracteres",
      color: Colors["Pink_50"],
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
            color={card.color}
          />
        ))}
      </ContainerCards>
    </>
  );
}
