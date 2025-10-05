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
import { Button } from "@components";
import CloseIcon from "@mui/icons-material/Close";

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

function ActivityReports({ open, onClose }: PopupProps): ReactNode {
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
                  <Title variant="h2">Relatório de atividades</Title>
                  <CloseButtonBox>
                    <CloseButton onClick={onClose}>
                      <CloseIcon />
                    </CloseButton>
                  </CloseButtonBox>
                </Box>
                <Subtitle variant="h3">
                  Transparência pra mostrar o que fizemos e nosso impacto.
                </Subtitle>
              </Box>
              <Text>
                Nesta seção você encontra os relatórios dos projetos e ações
                realizadas pela rede Bike Anjo ao longo dos anos. Cada documento
                apresenta de forma clara os objetivos, atividades desenvolvidas,
                resultados alcançados, número de participantes e aprendizados
                importantes daquele período.
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Subtitle variant="h3" align={"center"}>
              Acesse por ano:
            </Subtitle>
            <Text>
              Também tornamos acessíveis nossos balanços anuais, consolidando
              nosso compromisso com a prestação de contas e a gestão
              responsável.
            </Text>
            <ButtonBox>
              <Button fullWidthMobile fullWidthDesktop>
                Projeto de Mobilização da Rede Bike Anjo 2014-2015
              </Button>
              <Button fullWidthMobile fullWidthDesktop>
                Projeto de Mobilização da Rede Bike Anjo 2015-2016
              </Button>
              <Button fullWidthMobile fullWidthDesktop>
                Projeto de Mobilização da Rede Bike Anjo 2016-2017
              </Button>
              <Button fullWidthMobile fullWidthDesktop>
                Projeto de Mobilização da Rede Bike Anjo 2017-2018
              </Button>
            </ButtonBox>
          </Box>
        </Container>
      </ModalStyle>
    </>
  );
}
export default ActivityReports;
