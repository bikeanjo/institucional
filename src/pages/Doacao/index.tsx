import {
  Box,
  Divider,
  InputAdornment,
  Button as MuiButton,
} from "@mui/material";
import Header from "@components/Header";
import { type JSX } from "react";
import Title from "@components/Title";
import Text from "@components/Text";
import Button from "@components/Button";
import CopyInput from "./components/copyInput";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Link } from "react-router-dom";
import Container from "@components/Container";
import { Colors } from "../../styles/tokens/colors";
import BreadCrumb from "@components/BreadCrumb";
import ScrollSpyMenu from "@components/ScrollSpyMenu";

const Doacao = (): JSX.Element => {
  const Hero = {
    url: "/assets/header/doe.jpg",
    backgroundPositionDesktop: "50% 40%",
    backgroundPositionMobile: "50% 40%",
  };

  const handleCopyCNPJ = async () => {
    await navigator.clipboard.writeText("19.515.100/0001-89");
    alert("19.515.100/0001-89 copiado!");
  };
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("19.515.100/0001-89");
    alert("doe@bikeanjo.org copiado!");
  };
  return (
    <>
      <Header secondary Hero={Hero}>
        <h2>Doação</h2>
      </Header>

      <ScrollSpyMenu />
      <BreadCrumb />

      <Container>
        <Title>
          A gente adoraria viver só de pedaladas mas existem custos que Bike
          Anjo que precisa de uma ajudinha.
        </Title>
        <Text>
          Coisas como a manutenção deste site, o trabalho de articulação da rede
          e as atividades que promovemos pelo país dependem da sua ajuda.
        </Text>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", lg: "1032px" },
            margin: "auto",
            marginTop: { xs: "40px", lg: "80px" },
          }}
        >
          <Title center color="black">
            Apoie a Bike Anjo como preferir:
          </Title>
          <Text center>
            Qualquer valor já ajuda a manter a Bike Anjo na rua, na rede e na
            vida de muita gente.
          </Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            width: { xs: "100%", lg: "1032px" },
            margin: "auto",
            marginTop: { xs: "40px", lg: "80px" },
            gap: "24px",
            padding: { xs: "0 16px", lg: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              backgroundColor: Colors["G-Grey-10"],
              border: `3px solid ${Colors["G-Grey-30"]}`,
              borderRadius: "16px",
              padding: "32px",
              gap: "16px",
            }}
          >
            <Title center color="black">
              Doe via Pix
            </Title>
            <Text center>Escaneie o QR Code</Text>
            <Box
              component="img"
              src={"/assets/images/Doacao/QRCode.png"}
              alt="qrcode"
              sx={{
                height: "215px",
                width: "242px",
              }}
            />
            <Divider
              sx={{
                width: "100%",
                color: "#606060",
                fontSize: "24px",
                "&::after, &::before": {
                  borderWidth: "2px",
                  borderColor: "#606060",
                },
              }}
            >
              ou
            </Divider>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                gap: "8px",
                flexDirection: "column",
              }}
            >
              <Text center>Copie as nossas chaves</Text>
              <CopyInput
                placeholder="CNPJ: 19.515.100/0001-89"
                fullWidth
                disabled
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ transform: "scaleY(-1)" }}
                      >
                        <ContentCopyIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                onClick={() => void handleCopyCNPJ()}
              ></CopyInput>
              <CopyInput
                placeholder="doe@bikeanjo.org"
                fullWidth
                disabled
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ transform: "scaleY(-1)" }}
                      >
                        <ContentCopyIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                onClick={() => void handleCopyEmail()}
              ></CopyInput>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              backgroundColor: Colors["G-Grey-10"],
              border: `3px solid ${Colors["G-Grey-30"]}`,
              borderRadius: "16px",
              padding: "32px",
              gap: "16px",
              height: "fit-content",
            }}
          >
            <Title center color="black">
              Doe via Apoia-se
            </Title>
            <Box
              component="img"
              src={"/assets/images/Doacao/apoia-se.png"}
              alt="apoiase"
              sx={{
                height: "56px",
                width: "216px",
                marginTop: "16px",
                marginBottom: { xs: "16px", lg: "40px" },
              }}
            />
            <Text center size="16px">
              Nesse link você contribui com a ONG todo mês e nos ajuda a seguir
              transformando cidades com a bicicleta!
            </Text>
            <MuiButton
              fullWidth
              sx={{
                borderRadius: "8.4px",
                backgroundColor: Colors["Orange-50"],
                padding: "18px",
                color: Colors["G-White"],
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "none",
                width: "221px",
              }}
            >
              Clique para continuar
            </MuiButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", lg: "1032px" },
            margin: "auto",
            marginTop: { xs: "40px", lg: "80px" },
          }}
        >
          <Title center>Compartilhar também é apoiar</Title>
          <Text center>
            Quando você divulga a Bike Anjo, ajuda a levar nossa missão ainda
            mais longe. Sua rede pode ser o elo que conecta uma pessoa à sua
            primeira pedalada. E isso vale muito!
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "100%", lg: "1032px" },
              margin: { xs: "32px auto 40px auto", lg: "32px auto 80px auto" },
            }}
          >
            <Link to="/social-media">
              <Button>Veja nossas redes</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Doacao;
