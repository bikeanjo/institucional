import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import styled from "styled-components";
import { LinkProps } from "react-router-dom";

interface ButtonProps extends MuiButtonProps {
  center?: boolean;
  left?: boolean;
  fullWidthMobile?: boolean;
  fullWidthDesktop?: boolean;
  to?: LinkProps["to"];
}

const Button = styled(MuiButton)<ButtonProps>(
  ({ theme, center, left, fullWidthMobile, fullWidthDesktop }) => ({
    backgroundColor: "#4D7A18",
    color: "white",
    fontWeight: 700,
    fontSize: "16px",
    borderRadius: "4px",
    textTransform: "none",
    padding: "15px 32px 15px 32px",
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.15)",

    "&:hover": {
      backgroundColor: "#43700E",
    },

    [theme.breakpoints.up("xs")]: {
      width: fullWidthMobile ? "100%" : "fit-content",
      margin: left ? "0" : "0 auto",
    },

    [theme.breakpoints.up("lg")]: {
      width: fullWidthDesktop ? "100%" : "fit-content",
      margin: center ? "0 auto" : "0",
    },
  }),
);

export default Button;
