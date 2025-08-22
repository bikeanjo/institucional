import { EBABrMap } from "./styles";
import EBAMap from "../../../assets/images/eba-map.png";
import { Box } from "@mui/material";
import Title from "../../Components/Title";

export default function Map() {
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
      <Title>EBA's pelo Brasil</Title>
      <EBABrMap src={EBAMap} alt="Mapa com as EBA's" />
    </Box>
  );
}
