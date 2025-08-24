import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "40px auto",
  position: "relative",
  marginTop: "40px",
  gap: "32px",
  padding: "20px",

  [theme.breakpoints.up("lg")]: {
    padding: "0x",
    width: "1032px",
    marginTop: "80px",
    gap: "20px",
  },
}));

export default Container;
