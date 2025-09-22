import { Box, BoxProps } from "@mui/material";
import styled from "styled-components";

interface ContainerProps extends BoxProps {
  inline?: boolean;
}

const Container = styled(Box)<ContainerProps>(({ theme, inline }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "0px auto",
  position: "relative",
  gap: "20px",
  padding: "20px",
  paddingBottom: "0px",

  [theme.breakpoints.up("lg")]: {
    flexDirection: inline ? "row" : "column",
    width: "100%",
    paddingInline: "96px",
    gap: "16px",
  },
}));

export default Container;
