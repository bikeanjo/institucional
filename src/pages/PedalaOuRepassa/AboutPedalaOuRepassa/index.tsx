import { Title, Text, Section } from "@components";
import { Box } from "@mui/material";
import { Content, Grid, Image, TextContainer } from "./styles";

export default function AboutPedalaOuRepassa() {
  return (
    <Section center>
      <Grid>
        <TextContainer gridArea={"text"}>
          <Content gridArea={"textBox1"}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Title sizeDesktop="48px" sizeMobile="32px">
                Bicicleta foi feita para estar em movimento!
              </Title>
            </Box>

            <Text>
              “Pedala ou repassa” é uma iniciativa de doação de bicicletas para
              pessoas que não têm dinheiro para comprar, mas que gostariam de
              usar a bicicleta no dia a dia, para trabalho, lazer, esporte, ...
            </Text>
          </Content>
          <Content gridArea={"textBox2"}>
            <Text>
              A Bike Anjo recebe doações de bicicletas que são frequentemente
              não utilizadas, portanto, precisa de pequenos reparos para uso
              diário. Estamos em busca de doações de peças e serviços de reparo
              para deixar a bicicleta pronta para uso por mais ciclistas da
              cidade!
            </Text>
          </Content>
        </TextContainer>
        <Image gridArea={"image"}>
          <img
            src={"/assets/images/PedalaOuRepassa/pedala-ou-repassa2.webp"}
            alt="Oficina comunitária com várias bikes para revisar."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Image>
      </Grid>
    </Section>
  );
}
