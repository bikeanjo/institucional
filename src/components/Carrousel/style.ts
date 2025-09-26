import { Box } from "@mui/material";
import styled from "styled-components";

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
