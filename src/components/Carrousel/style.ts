import { Box, BoxProps } from "@mui/material";
import styled from "styled-components";
import { Colors } from "@colors";

interface ControlsProps extends BoxProps {
  backgroundColor?: string;
  color?: string;
}

export const Container = styled(Box)`
  display: flex;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  .Carroussel::-webkit-scrollbar {
    display: none;
  }
`;

export const Controls = styled(Box)<ControlsProps>(
  ({ theme, backgroundColor, color }) => ({
    "& span": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "24px",
      cursor: "pointer",
      color: color ? color : Colors["G_White"],
      backgroundColor: backgroundColor ? backgroundColor : Colors["G_Grey_80"],
      borderRadius: "100%",
      padding: "12px",
      height: "48px",
      width: "48px",
      display: "none",
    },

    "& span.left": {
      left: "80px",
    },

    "& span.right": {
      right: "90px",
    },

    [theme.breakpoints.up("md")]: {
      "& span": {
        display: "flex",
      },
    },
  }),
);
