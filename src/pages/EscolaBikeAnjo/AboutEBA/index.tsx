import Title from "@components/Title";
import Text from "@components/Text";
import { Box } from "@mui/material";

export default function AboutEBA() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: 1,
        }}
      >
        <Title center>O que é uma EBA?</Title>
        <Text>
          As Escolas Bike Anjo são oficinas gratuitas organizadas por grupos de
          anjos de uma determinada cidade para ensinar as pessoas a pedalar.
          Elas têm data, hora e local para acontecer e aqui, listamos todas
          nossas EBAs espalhadas pelo Brasil.
        </Text>
        <Text>
          Você pode consultar o mapa e conferir se na sua cidade existe alguma
          EBA, além de consultar o dia e local que ela acontece.
        </Text>
        <Text>Se preferir, consulte a listagem logo após o mapa.</Text>
      </Box>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#4D7A18",
          flex: 1,
        }}
      >
        <img
          src={"/assets/images/eba.jpg"}
          alt="Criança sorrindo enquanto pedala"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}
