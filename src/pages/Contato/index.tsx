import type { ReactNode } from "react";
import Header from "../Components/Header";
import { Typography, Box } from "@mui/material";
import { Form } from "./components/Form";

function Contact(): ReactNode {
  return (
    <>
      <Header secondary>
        <h2>Contato</h2>
      </Header>
      <Box sx={{ margin: "80px 204px", gap: "40px" }}>
        <Typography sx={{ fontSize: { xs: 13, md: 16 } }} fontWeight={400}>
          Este é o canal direto com a equipe da associação Bike Anjo. Aqui você
          pode tirar dúvidas, enviar sugestões, propor parcerias ou pedir apoio,
          seja você uma pessoa voluntária, aprendiz, integrante de coletivo,
          empresa ou instituição pública.
          <br />
          <br />
          Se tem dúvidas sobre nossos projetos, funcionamento da rede, uso da
          plataforma ou mesmo sobre questões financeiras e possibilidades de
          colaboração, estamos aqui para te atender.
          <br />
          <br />
          Nosso time responderá com todo cuidado assim que possível!
        </Typography>
        <Form />
        <Typography align="center">
          É uma dúvida? Pode ser que consultando no{" "}
          <a
            href="/faq"
            style={{
              textDecoration: "underline",
              color: "#000",
              fontWeight: "600",
            }}
          >
            FAQ (Dúvidas Frequentes)
          </a>{" "}
          você a resolva :)
        </Typography>
      </Box>
    </>
  );
}

export default Contact;
