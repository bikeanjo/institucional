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

    ...(pink && { color: "var(--mui-palette-Pink-50)" }),
    ...(green && !pink && { color: "var(--mui-palette-Green-70)" }),

    [theme.breakpoints.up("xs")]: {
      fontSize: "32px",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "0px 16px",
    },

    [theme.breakpoints.up("lg")]: {
      padding: "0px",
      fontSize: "48px",
      alignItems: "flex-start",
      margin: center ? "0px auto" : "unset",
      width: "fit-content",
    },
  }),
);

export default Title;
