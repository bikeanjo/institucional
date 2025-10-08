import styled from "styled-components";
import { Box } from "@mui/material";

export const Grid = styled(Box)`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "text image";
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "textBox1"
      "image"
      "textBox2";
    gap: 24px;
  }
`;

export const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    display: contents;
    gap: 24px;
  }
`;

export const Content = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    gap: 24px;
  }
`;

export const Image = styled(Box)`
  max-width: 604px;
  border-radius: 8px;
`;
