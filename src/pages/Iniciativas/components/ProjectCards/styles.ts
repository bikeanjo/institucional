import { Box, IconButton } from "@mui/material";
import styled from "styled-components";

export const ContainerCards = styled.section`
  display: flex;
  gap: 24px;
  margin: 0 auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  z-index: 8;

  & > * {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    gap: 8px;
    justify-content: flex-start;
  }
`;

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  position: relative;
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
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    scroll-behavior: smooth;
  }

  > * {
    flex: 0 0 35%;
    scroll-snap-align: center;
  }
`;

export const Controls = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: white;
  background-color: var(--mui-palette-Pink_50);
  border-radius: 50%;
  box-shadow: none;

  &:hover {
    background-color: var(--mui-palette-Pink_50);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "var(--mui-palette-Green_70)" : "#bdbdbd"};
  transition: background-color 0.3s;
`;
