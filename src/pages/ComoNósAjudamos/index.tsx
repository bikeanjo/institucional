import type { ReactNode } from "react";
import Header from "../Components/Header";
import FollowLocalArticulations from "../SocialMedia/components/FollowLocalArticulations";
import { Box } from "@mui/material";
import Text from "../Components/Text";
import SubTitle from "../Components/SubTitle";
import Button from "../Components/Button";
import { BoxDescription, BoxTitle, PrimaryButton } from "./styles";

const supports = [
  {
    title: "Aprenda a Pedalar",
    description:
      "A Bike Anjo conecta quem quer aprender a pedalar com pessoas voluntárias que ensinam, de forma gratuita. O atendimento é individual, respeita o ritmo de cada pessoa e acontece em locais públicos da cidade.",
  },
  {
    title: "Conheça Rotas Seguras",
    description:
      "Se você já pedala e quer encontrar caminhos mais seguros, pode pedir ajuda na plataforma. Uma pessoa voluntária vai indicar rotas pensando em segurança, conforto e praticidade para o seu trajeto.",
  },
  {
    title: "Tenha acompanhamento no trânsito",
    description:
      "Se você quer começar a usar a bicicleta como transporte, pode contar com o apoio de uma pessoa voluntária. Ela pedala junto, ajuda a entender o fluxo das ruas e dá dicas para circular com mais segurança no dia a dia.",
  },
  {
    title: "Pratique pedaladas",
    description:
      "Se você quer ganhar mais confiança na bike, pode encontrar uma pessoa voluntária para praticar. Esses encontros ajudam a melhorar o equilíbrio, o controle e a se sentir mais à vontade para pedalar na cidade.",
  },
];

function HowWeHelp(): ReactNode {
  return (
    <>
      <Header secondary>
        <h2>Como nós ajudamos</h2>
      </Header>
      <Box
        sx={{
          maxWidth: "1032px",
          margin: "80px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <SubTitle center>Veja os nossos apoios</SubTitle>
        <Text>
          Veja o que a Bike Anjo oferece quem está começando a pedalar. Com
          pequenas ações, você ajuda a transformar trajetos em experiências
          seguras, acessíveis e inspiradoras.
        </Text>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "24px",
            width: "100%",
            height: "100%",
          }}
        >
          {supports.map((item) => (
            <Box
              key={item.title}
              sx={{
                backgroundColor: "#d9d9d9",
                padding: "32px",
                borderRadius: "16px",
                height: "325px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <BoxTitle>{item.title}</BoxTitle>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "20px 28px",
                  borderRadius: "8px",
                  marginTop: "auto",
                }}
              >
                <BoxDescription>{item.description}</BoxDescription>
              </Box>
            </Box>
          ))}
        </Box>

        <PrimaryButton>Cadastre-se e seja Bike Anjo</PrimaryButton>
      </Box>
      <FollowLocalArticulations
        title="Conecte-se com uma articulação local"
        titleAlign="center"
        sub="Encontre a articulação Bike Anjo mais próxima de você! Cada cidade tem pessoas voluntárias prontas para ajudar com dicas, eventos e orientações. Veja nosso mapa e use a busca abaixo, siga o perfil local e descubra como receber apoio pra pedalar com mais segurança e autonomia."
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", lg: "1032px" },
          margin: "auto",
          marginTop: { xs: "40px", lg: "80px" },
        }}
      >
        <SubTitle center style={{ marginBottom: "16px" }}>
          Veja nossa playlist de dicas!
        </SubTitle>
        <Text center>
          Seja você iniciante ou já com alguma experiência, nossa playlist de
          vídeos tem dicas práticas pra tornar sua pedalada mais segura, leve e
          divertida.
          <br />
          Aqui a gente compartilha o que aprendeu na rua, com carinho e sem
          complicação, do jeitinho Bike Anjo.
        </Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", lg: "1032px" },
            margin: { xs: "32px auto 40px auto", lg: "32px auto 80px auto" },
          }}
        >
          <Button center>Acesse a Playlist</Button>
        </Box>
      </Box>
    </>
  );
}

export default HowWeHelp;
