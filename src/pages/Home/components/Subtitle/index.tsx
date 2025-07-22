import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface SubtitleProps {
  fontWeight?: string | number;
  carrousel?: boolean;
}

const SubTitle = styled(Typography)<SubtitleProps>(
  ({ theme, fontWeight, carrousel }) => ({
    color: "var(--mui-palette-neutral-800)",
    fontSize: carrousel ? "12px" : "24px",
    fontWeight: fontWeight || 600,
    marginTop: "8px",
    textAlign: "center",

    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    },
  }),
);

export default SubTitle;
