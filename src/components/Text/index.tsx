import { Typography } from "@mui/material";
import styled from "styled-components";

interface TextProps {
  center?: boolean;
  size?: string;
}

const Text = styled(Typography)<TextProps>(
  ({ theme, center = false, size }) => ({
    fontWeight: 400,
    display: "flex",
    wordBreak: "break-word",
    color: "var(--mui-palette-G-Grey-100)",

    [theme.breakpoints.up("xs")]: {
      fontSize: "16px",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "0px 16px",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: size ? size : "24px",
      alignItems: "flex-start",
      width: center ? "100%" : "fit-content",
      padding: "0px",
    },
  }),
);

export default Text;
