import { MapImage } from "./styles";
import FindLocalArticulation from "./FindLocalArticulation";
import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
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
        gap: "16px",
      }}
    >
      <Title align={titleAlign}>{title}</Title>
      <SubTitle>{sub}</SubTitle>
      <MapImage
        src={"/assets/images/articulation-map.png"}
        alt="Local Articulations"
      />

      <FindLocalArticulation />
    </Box>
  );
}
