import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TitleProps extends TypographyProps {
  carrousel?: boolean;
  pink?: boolean;
  green?: boolean;
}

const Title = styled(Typography)<TitleProps>(
  ({ theme, carrousel, pink, green, color }) => ({
    color: color ? color : "var(--mui-palette-title-main)",
    fontWeight: 600,
    textAlign: "center",

    ...(pink && { color: "#E1216D" }),
    ...(green && !pink && { color: "#4D7A18" }),

    [theme.breakpoints.up("xs")]: {
      fontSize: carrousel ? "24px" : "32px",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "64px",
    },
  }),
);

export default Title;
