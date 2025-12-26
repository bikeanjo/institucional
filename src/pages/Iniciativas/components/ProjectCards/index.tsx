import { Container, ContainerCard, Controls, Dot, Dots } from "./styles";
import { useEffect, useRef, useState } from "react";
import { Card } from "../Card/Index";
import { Colors } from "@colors";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

export function ProjectCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
      scrollContainerRef.current.scrollLeft -= scrollAmount;
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = scrollLeft / maxScroll;
      const index = Math.round(progress * (cards.length - 1));
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      id: "Card1",
      title: "Escola Bike Anjo",
      image: "assets/images/Iniciativas/eba.webp",
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
      image: "assets/images/Iniciativas/bike-anjas.webp",
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
      image: "assets/images/Iniciativas/de-bike-ao-trabalho.webp",
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
      image: "assets/images/Iniciativas/pedala-ou-repassa.webp",
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
      image: "assets/images/Iniciativas/bike-na-escola.webp",
      textDesktop:
        "Escolas também pedalam com a gente! Levamos a cultura da bicicleta pra sala de aula, envolvendo estudantes, educadores e famílias num futuro mais sustentável. Aprender vai além da lousa!",
      textMobile: "Resumo até 110 caracteres",
      button: "Entre em contato",
      link: "",
      color: Colors["Green_70"],
    },
    {
      id: "Card6",
      title: "Bike na Periferia",
      image: "assets/images/Iniciativas/bike-na-periferia.webp",
      textDesktop:
        "Nas quebradas, a bike já é resistência! O projeto valoriza o que já existe e fortalece com oficinas, pedais e autonomia. É sobre empoderar e pedalar onde a cidade insiste em esquecer.",
      textMobile: "Resumo até 110 caracteres",
      button: "Entre em contato",
      link: "",
      color: Colors["Blue_60"],
    },
    {
      id: "Card7",
      title: "Bike Anjes",
      image: "assets/images/Iniciativas/bike-anje.webp",
      textDesktop:
        "Mais do que um nome neutro, um chamado à diversidade. As Bike Anjes garantem um espaço seguro e acolhedor para quem pedala sendo quem é. Porque toda pessoa tem o direito de ocupar a cidade.",
      textMobile: "Resumo até 110 caracteres",
      button: "Entre em contato",
      link: "",
      color: Colors["Orange_50"],
    },
    {
      id: "Card8",
      title: "ODKV",
      image: "assets/images/Iniciativas/odkv.webp",
      textDesktop:
        "Pedalar com deficiência visual é possível! ODKV usa bikes adaptadas pra garantir inclusão, autonomia e alegria sobre duas rodas. Todo mundo tem o direito de sentir o vento no rosto.",
      textMobile: "Resumo até 110 caracteres",
      button: "Entre em contato",
      link: "",
      color: Colors["Pink_50"],
    },
  ];

  return (
    <>
      <Container>
        <Controls onClick={handlePrev}>
          <ArrowBackIosNewRounded />
        </Controls>
        <ContainerCard ref={scrollContainerRef}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </ContainerCard>
        <Controls onClick={handleNext}>
          <ArrowForwardIosRounded />
        </Controls>
      </Container>

      <Dots>
        {cards.map((_, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </Dots>
    </>
  );
}
