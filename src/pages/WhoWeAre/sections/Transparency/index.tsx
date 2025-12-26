import { useState, type ReactNode } from "react";
import { Title, Text, Button, Section } from "@components";
import { Box } from "@mui/material";
import OurBylaws from "../../components/PopUps/OurBylaws";
import FinancialReports from "../../components/PopUps/FinancialReports";
import ActivityReports from "../../components/PopUps/ActivityReport";

function Transparency(): ReactNode {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleClose = () => setOpenModal(null);

  return (
    <Section>
      <Title variant="h2" pink>
        Transparência
      </Title>
      <Text variant="body1">
        Veja como operamos, resultados alcançados, uso recursos e geração
        impacto por meio de nossos relatórios e documentos oficiais.
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "8px",
          marginBottom: "80px",
        }}
      >
        <Button
          fullWidthMobile
          fullWidthDesktop
          onClick={() => setOpenModal("bylaws")}
        >
          Estatuto e CNPJ
        </Button>
        <OurBylaws open={openModal === "bylaws"} onClose={handleClose} />

        <Button
          fullWidthMobile
          fullWidthDesktop
          onClick={() => setOpenModal("financial")}
        >
          Relatórios Financeiros
        </Button>
        <FinancialReports
          open={openModal === "financial"}
          onClose={handleClose}
        />

        <Button
          fullWidthMobile
          fullWidthDesktop
          onClick={() => setOpenModal("activity")}
        >
          Relatório de Atividade
        </Button>
        <ActivityReports
          open={openModal === "activity"}
          onClose={handleClose}
        />
      </Box>
    </Section>
  );
}
export default Transparency;
