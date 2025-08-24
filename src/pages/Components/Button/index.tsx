import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

interface ButtonProps {
  center?: boolean;
}

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  backgroundColor: "black",
  width: "fit-content",
  color: "white",
  fontWeight: 700,
  fontSize: "16px",
  borderRadius: "8px",
  textTransform: "none",

  [theme.breakpoints.up("xs")]: {
    padding: "8px 24px 8px 24px",
    margin: "auto",
  },

  [theme.breakpoints.up("lg")]: {
    padding: "16px 40px 16px 40px",
  },
}));

export default Button;
