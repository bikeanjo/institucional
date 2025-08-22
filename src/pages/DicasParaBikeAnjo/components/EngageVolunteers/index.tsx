import { Box } from "@mui/material";
import SubTitle from "../../../Components/SubTitle";
import Title from "../../../Components/Title";
import { Button, ButtonsContainer } from "./styles";

interface EngageProps {
  title: string;
  sub: string;
}

export default function EngageVolunteers({ title, sub }: EngageProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", lg: "1032px" },
        margin: "40px auto",
        position: "relative",
        marginTop: { xs: "40px", lg: "80px" },
        gap: { xs: "32px", lg: "20px" },
      }}
    >
      <Title>{title}</Title>
      <SubTitle>{sub}</SubTitle>
      <ButtonsContainer>
        <Button href="#" target="_blank" rel="noopener noreferrer">
          Veja aqui o Mini Manual
        </Button>
        <Button href="#" target="_blank" rel="noopener noreferrer">
          Fale a nossa mobilização
        </Button>
      </ButtonsContainer>
    </Box>
  );
}
