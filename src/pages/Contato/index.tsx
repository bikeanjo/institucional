import type { JSX } from "react";
import Header from "@components/Header";
import { Form } from "./components/Form";
import Container from "@components/Container";
import Text from "@components/Text";
import Section from "@components/Section";

function Contact(): JSX.Element {
  const Hero = {
    url: "/assets/header/contato.webp",
    backgroundPositionDesktop: "50% 90%",
    backgroundPositionMobile: "50% 90%",
  };
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Contato</h2>
      </Header>
      <Container>
        <Section>
          <Text>
            Este é o canal direto com a equipe da associação Bike Anjo. Aqui
            você pode tirar dúvidas, enviar sugestões, propor parcerias ou pedir
            apoio, seja você uma pessoa voluntária, aprendiz, integrante de
            coletivo, empresa ou instituição pública.
            <br />
            <br />
            Se tem dúvidas sobre nossos projetos, funcionamento da rede, uso da
            plataforma ou mesmo sobre questões financeiras e possibilidades de
            colaboração, estamos aqui para te atender.
            <br />
            <br />
            Nosso time responderá com todo cuidado assim que possível!
          </Text>
          <Text>
            É uma dúvida? Pode ser que consultando no
            <a
              href="/faq"
              style={{
                marginInline: "10px",
                textDecoration: "underline",
                color: "#000",
                fontWeight: "600",
              }}
            >
              FAQ (Dúvidas Frequentes)
            </a>
            você a resolva :)
          </Text>
        </Section>
        <Section>
          <Form />
        </Section>
      </Container>
    </>
  );
}

export default Contact;
