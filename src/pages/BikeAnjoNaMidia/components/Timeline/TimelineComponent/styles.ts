import { Box, IconButton } from "@mui/material";
import styled from "styled-components";

export const TimelineContainer = styled(Box)`
  display: flex;
  padding: 16px 32px;
  position: relative;
  background-color: #f4f4f4;
  border-radius: 8px 8px 0 0;

  @media (max-width: 900px) {
    padding: 16px 24px;
  }
`;

export const ScrollableContainer = styled(Box)`
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HorizontalTimelineContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  min-width: 100%;
`;

export const ItemContainer = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  flexgrow: 1;
  min-width: 80px;
`;

export const YearAndDotContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 6px;
  flex-shrink: 0;
`;

export const Years = styled.div<{ $isActive: boolean }>`
  font-size: 24px;
  text-align: center;
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  color: #161616;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const Dot = styled(Box)<{ $isActive: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? "#ED601C " : "#fff")};
  outline: 2px solid #ed601c;
  outline-offset: 4px;
  cursor: pointer;
  z-index: 1;
`;

export const Line = styled(Box)`
  position: absolute;
  height: 2px;
  background-color: #cccccc;
  top: 65px;
  left: 0;
  right: 0;
  z-index: 0;
`;

export const NavButton = styled(IconButton)`
  color: #686666ff;
  padding: 42.5px 0px 0px 0px;
`;
