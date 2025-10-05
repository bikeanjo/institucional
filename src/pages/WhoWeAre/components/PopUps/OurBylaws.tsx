import type { ReactNode } from "react";
import {
  ModalStyle,
  Container,
  Title,
  Subtitle,
  Text,
  CloseButtonBox,
  CloseButton,
  Label,
  Value,
} from "./styles";
import { Box } from "@mui/material";
import { Button } from "@components";
import CloseIcon from "@mui/icons-material/Close";

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

function OurBylaws({ open, onClose }: PopupProps): ReactNode {
  return (
    <>
      <ModalStyle open={open} onClose={onClose}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Title variant="h2">Nosso Estatuto</Title>
                  <CloseButtonBox>
                    <CloseButton onClick={onClose}>
                      <CloseIcon />
                    </CloseButton>
                  </CloseButtonBox>
                </Box>
                <Subtitle variant="h3">
                  Entenda nosso modelo de rede CNPJ
                </Subtitle>
              </Box>
              <Text>
                O Bike Anjo não é uma ONG, mas sim uma rede com CNPJ.
                Entretanto, acreditamos que, como qualquer associação, devemos
                ser transparentes sobre a forma como registramos esse coletivo
                que está alcançando o Brasil todo.
              </Text>
            </Box>
            <Button left>Baixe o Estatuto</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Title variant="h2">Nossos dados de CNPJ:</Title>
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                gap: { xs: "8px", md: "16px" },
                gridTemplateAreas: {
                  xs: `
                  "Label1"
                  "Value1"
                  "Label2"
                  "Value2"
                  "Label3"
                  "Value3"
                  "Label4"
                  "Value4"
                  "Label5"
                  "Value5"
                  "Label6"
                  "Value6"`,
                  lg: `
                  "Label1 Value1"
                  "Label2 Value2"
                  "Label3 Value3"
                  "Label4 Value4"
                  "Label5 Value5"
                  "Label6 Value6"`,
                },
              }}
            >
              <Label gridArea="Label1">Razão soial:</Label>
              <Value gridArea="Value1">Associação Bike Anjo</Value>

              <Label gridArea="Label2">CNPJ:</Label>
              <Value gridArea="Value2">19.515.100/0001-89</Value>

              <Label gridArea="Label3">Inscrição municipal:</Label>
              <Value gridArea="Value3">4897457-9</Value>

              <Label gridArea="Label4">Inscrição estadual:</Label>
              <Value gridArea="Value4">Inseto</Value>

              <Label gridArea="Label5">Endereço jurídico:</Label>
              <Value gridArea="Value5">
                Rua Lina Cavalieri, 103, Vila Silvia - São Paulo/SP CEP
                03820-060
              </Value>

              <Label gridArea="Label6">Endereço comercial:</Label>
              <Value gridArea="Value6">
                Rua Professor Rubião Meira, 59 Pinheiros - São Paulo/SP CEP:
                05409-020
              </Value>
            </Box>
          </Box>
        </Container>
      </ModalStyle>
    </>
  );
}
export default OurBylaws;
