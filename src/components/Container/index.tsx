import { Box } from "@mui/material";
import styled from "styled-components";

interface ContainerProps {
  inline?: boolean;
}

const Container = styled(Box)<ContainerProps>(({ theme, inline }) => ({
  display: "flex",
  flexDirection: inline ? "column" : "row",
  width: "100%",
  margin: "40px auto",
  position: "relative",
  marginTop: "40px",
  gap: "32px",
  padding: "20px",

  [theme.breakpoints.up("lg")]: {
    flexDirection: inline ? "row" : "column",
    width: "100%",
    padding: "0px 96px",
    marginTop: "80px",
    gap: "20px",
  },
}));

export default Container;
