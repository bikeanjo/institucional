import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

interface ButtonProps {
  center?: boolean;
}

const Button = styled(MuiButton)<ButtonProps>(({ theme, center }) => ({
  backgroundColor: "black",
  width: "fit-content",
  color: "white",
  fontWeight: 700,
  fontSize: "16px",
  borderRadius: "4px",
  textTransform: "none",
  padding: "15px 32px 15px 32px",

  [theme.breakpoints.up("xs")]: {
    margin: "0 auto",
  },

  [theme.breakpoints.up("lg")]: {
    margin: center ? "0 auto" : "0",
  },
}));

export default Button;
