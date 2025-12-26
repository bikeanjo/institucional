import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const ContainerCard = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  padding: 0px;
  overflow-x: auto;
  scroll-behavior: smooth;

  gap: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 900px) {
    flex-direction: column;
    overflow-x: visible;
    scroll-behavior: auto;
  }
`;

export const Card = styled(Box)`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: space-between;
  width: 238px;
  padding: 16px;
  background-color: var(--mui-palette-G_Grey_10);
  border: 2px solid var(--mui-palette-Green_70);
  border-radius: 8px;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  gap: 24px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 16px;

  @media (max-width: 900px) {
    & > * {
      justify-content: left;
      padding: 0px;
    }
  }
`;
