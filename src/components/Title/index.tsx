import { Typography, TypographyProps } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../styles/tokens/colors";

interface TitleProps extends TypographyProps {
  pink?: boolean;
  green?: boolean;
  color?: string;
  center?: boolean;
}

const Title = styled(Typography)<TitleProps>(
  ({ theme, pink, green, color, center }) => ({
    color: color ? color : Colors["Pink-50"],
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
      margin: center ? "auto" : "unset",
      width: "fit-content",
    },
  }),
);

export default Title;
