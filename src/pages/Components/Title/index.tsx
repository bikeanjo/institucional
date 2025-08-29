import { Typography, TypographyProps } from "@mui/material";
import styled from "styled-components";

interface TitleProps extends TypographyProps {
  pink?: boolean;
  green?: boolean;
}

const Title = styled(Typography)<TitleProps>(({ theme, pink, green, color }) => ({
  color: color,
  fontWeight: 600,
  display: "flex",

  ...(pink && { color: "#E1216D" }),
  ...(green && !pink && { color: "#4D7A18" }),

  [theme.breakpoints.up("xs")]: {
    fontSize: "32px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "48px",
    alignItems: "flex-start",
    width: "fit-content",
  },
}));

export default Title;
