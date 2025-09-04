import type { ReactNode } from "react";
import {
  ModalStyle,
  Container,
  Title,
  Subtitle,
  Text,
  ButtonBox,
  CloseButtonBox,
  CloseButton,
} from "./styles";
import { Box } from "@mui/material";
import Button from "@components/Button";
import CloseIcon from "@mui/icons-material/Close";

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

function FinancialReports({ open, onClose }: PopupProps): ReactNode {
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
                  <Title variant="h2">Relatórios Financeiros</Title>
                  <CloseButtonBox>
                    <CloseButton onClick={onClose}>
                      <CloseIcon />
                    </CloseButton>
                  </CloseButtonBox>
                </Box>
                <Subtitle variant="h3">
                  Todo nosso controle financeiro em tempo real para a comunidade
                </Subtitle>
              </Box>
              <Text>
                Acreditamos que a transparência e a colaboração são fundamentais
                para o fortalecimento institucional. Por isso, disponibilizamos
                publicamente nosso controle financeiro em tempo real, permitindo
                o acompanhamento integral da aplicação dos recursos.
              </Text>
            </Box>
            <Button left>Fluxo de caixa em tempo real</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Title variant="h2">Balanços anuais</Title>
            <Text>
              Também tornamos acessíveis nossos balanços anuais, consolidando
              nosso compromisso com a prestação de contas e a gestão
              responsável.
            </Text>
            <ButtonBox>
              <Button fullWidthMobile fullWidthDesktop>
                Balanço anual 2014
              </Button>
              <Button fullWidthMobile fullWidthDesktop>
                Balanço anual 2015
              </Button>
              <Button fullWidthMobile fullWidthDesktop>
                Balanço anual 2016
              </Button>
              <Button fullWidthMobile fullWidthDesktop>
                Balanço anual 2017
              </Button>
            </ButtonBox>
          </Box>
        </Container>
      </ModalStyle>
    </>
  );
}
export default FinancialReports;
