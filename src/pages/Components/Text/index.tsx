import { Typography } from "@mui/material";
import styled from "styled-components";

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  display: "flex",
  wordBreak: "break-word",
  color: "black",

  [theme.breakpoints.up("xs")]: {
    fontSize: "16px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "0px 16px",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "24px",
    alignItems: "flex-start",
    width: "fit-content",
    padding: "0px",
  },
}));

export default Text;
