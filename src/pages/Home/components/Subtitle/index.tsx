import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../styles/tokens/colors";

interface SubtitleProps {
  fontWeight?: string | number;
  carrousel?: boolean;
  color?: string;
}

const SubTitle = styled(Typography)<SubtitleProps>(
  ({ theme, fontWeight, carrousel, color }) => ({
    color: color ? color : Colors["G_Grey_60"],
    fontSize: carrousel ? "12px" : "24px",
    fontWeight: fontWeight || 400,
    marginTop: "8px",
    textAlign: "center",

    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    },
  }),
);

export default SubTitle;
