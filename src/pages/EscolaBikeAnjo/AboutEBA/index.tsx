import { Title, Text, Section } from "@components";
import { Box } from "@mui/material";
import { Content, Grid, Image, TextContainer } from "./styles";

export default function AboutEBA() {
  return (
    <Section center>
      <Grid>
        <TextContainer gridArea={"text"}>
          <Content gridArea={"textBox1"}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Title sizeDesktop="48px" sizeMobile="32px">
                O que é uma EBA?
              </Title>
            </Box>
            <Text>
              As Escolas Bike Anjo são oficinas gratuitas organizadas por grupos
              de anjos de uma determinada cidade para ensinar as pessoas a
              pedalar.
              <br />
              <br />
              Elas têm data, hora e local para acontecer e aqui, listamos todas
              nossas EBAs espalhadas pelo Brasil.
            </Text>
          </Content>
          <Content gridArea={"textBox2"}>
            <Text>
              Você pode consultar o mapa e conferir se na sua cidade existe
              alguma EBA, além de consultar o dia e local que ela acontece.
              <br />
              <br />
              Se preferir, consulte a listagem logo após o mapa.
            </Text>
          </Content>
        </TextContainer>
        <Image gridArea={"image"}>
          <img
            src={"/assets/images/EBA/eba.webp"}
            alt="Mulher mostrando um mural de fotos de pessoas aprendendo a pedalar."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Image>
      </Grid>
    </Section>
  );
}
