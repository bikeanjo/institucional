import { Box, IconButton, Typography } from "@mui/material";
import styled from "styled-components";

export const TimelineContainer = styled(Box)`
  display: flex;
  padding: 16px 32px;
  position: relative;
  background-color: var(--mui-palette-G-Grey-10);
  border-radius: 8px 8px 0 0;
  margin: 0 auto;
`;

export const NavigationContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  gap: 16px;
`;

export const Button = styled(IconButton)`
  color: var(--mui-palette-G-Grey-50);
  padding: 5px 0px;
`;

export const ScrollContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollContent = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  flexgrow: 1;
  min-width: 80px;
`;

export const YearsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 10px 0px 4px 0px;
  flex-shrink: 0;

  &::before {
    width: 100%;
    height: 2px;
    background: var(--mui-palette-G-Grey-50);
    content: "";
    position: absolute;
    top: 80%;
    left: 0;
  }
`;
/*  */

export const Years = styled(Typography)<{ $isActive: boolean }>`
  font-size: 24px;
  text-align: center;
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  color: var(--mui-palette-G-Grey-100);
  cursor: pointer;
`;

export const Dot = styled(Box)`
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--mui-palette-Orange-50);
  background-color: var(--mui-palette-G-White);
  cursor: pointer;
  z-index: 1;
`;

export const Ball = styled(Box)<{ $isActive: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--mui-palette-Orange-50)" : "var(--mui-palette-G-White)"};
`;
