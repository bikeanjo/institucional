import styled from "styled-components";
import { Box, IconButton } from "@mui/material";

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
  border: 2px solid var(--mui-palette-Pink_50);
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

export const Controls = styled(IconButton)`
  display: flex;
  align-items: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: white;
  background-color: var(--mui-palette-Pink_50);
  border-radius: 50px;
  padding: 15px 12px;
  box-shadow: none;

  span {
    &.left {
      left: 90px;
    }

    &.right {
      right: 90px;
    }
  }

  &.MuiButtonBase-root {
    &:hover {
      background-color: var(--mui-palette-Pink_50);
    }
  }

  &.Mui-focusVisible {
    outline: none;
  }

  &:disabled {
    background-color: var(--mui-palette-Pink_50);
    color: white;
    cursor: default;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Dot = styled(Box)<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive
      ? "var(--mui-palette-Pink_50)"
      : "var(--mui-palette-G_Grey_40)"};
  transition: background-color 0.3s ease;
`;
