import { Box, IconButton } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  position: relative;
  overflow: hidden;
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
  overflow-y: hidden;

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
  background-color: var(--mui-palette-Green_70);
  border-radius: 50%;
  box-shadow: none;
  &:hover {
    background-color: var(--mui-palette-Green_70);
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

export const DesktopModalButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 24px;
  background-color: "var(--mui-palette-G_White)";
  border: 2px solid var(--mui-palette-G_Grey_100);
  color: var(--mui-palette-G_Grey_100);
  border-radius: 4px;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 900px) {
    display: none;
    width: 100%;
    max-width: 311px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 8px 0;
  }
`;

export const MobileModalButton = styled.button`
  display: none;
  width: 100%;
  margin-top: 24px;
  background-color: "var(--mui-palette-G_White)";
  border: 2px solid var(--mui-palette-G_Grey_100);
  color: var(--mui-palette-G_Grey_100);
  border-radius: 4px;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
    width: 100%;
    max-width: 311px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 8px 0;
    font-size: 14px;
  }
`;
