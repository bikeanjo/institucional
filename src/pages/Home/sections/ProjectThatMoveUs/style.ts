import { Box } from "@mui/material";
import styled from "styled-components";

export const Carrousel = styled(Box)`
  display: flex;
  justify-content: center;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding-bottom: 16px;
  gap: 16px;

  .Carroussel::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    gap: 8px;
  }
`;

export const Controls = styled("div")`
  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    cursor: pointer;
    color: white;
    background-color: #393939;
    border-radius: 100%;
    padding: 12px;

    &.left {
      left: 80px;
    }

    &.right {
      right: 90px;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileControls = styled(Box)`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 202px;
    gap: 16px;

    .material-icons {
      cursor: pointer;
      color: #737373;
    }
  }
`;

export const PaginationDot = styled("div")<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#4D7A18" : "#A8A8A8")};
  transition: background-color 0.3s ease;
`;
