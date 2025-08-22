import { MapImage } from "./styles";
import articulationMap from "../../../../assets/images/articulation-map.png";
import FindLocalArticulation from "./FindLocalArticulation";
import SubTitle from "../../../Components/SubTitle";
import Title from "../../../Components/Title";
import { Box } from "@mui/material";

interface LocalArticulationsProps {
  title: string;
  titleAlign?: "left" | "center" | "right";
  sub: string;
}

export default function FollowLocalArticulations({
  title,
  titleAlign = "left",
  sub,
}: LocalArticulationsProps) {
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
      <Title align={titleAlign}>{title}</Title>
      <SubTitle>{sub}</SubTitle>
      <MapImage src={articulationMap} alt="Local Articulations" />

      <FindLocalArticulation />
    </Box>
  );
}
