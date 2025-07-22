import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TitleProps {
  carrousel?: boolean;
}

const Title = styled(Typography)<TitleProps>(({ theme, carrousel }) => ({
  color: "var(--mui-palette-title-main)",
  fontWeight: 600,

  [theme.breakpoints.up("xs")]: {
    fontSize: carrousel ? "24px" : "32px",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "64px",
  },
}));

export default Title;
