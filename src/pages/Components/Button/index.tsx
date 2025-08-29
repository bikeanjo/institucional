import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

interface ButtonProps {
  center?: boolean;
}

const Button = styled(MuiButton)<ButtonProps>(({ theme, center }) => ({
  backgroundColor: "#4D7A18",
  width: "fit-content",
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
    margin: "0 auto",
  },

  [theme.breakpoints.up("lg")]: {
    margin: center ? "0 auto" : "0",
  },
}));

export default Button;
