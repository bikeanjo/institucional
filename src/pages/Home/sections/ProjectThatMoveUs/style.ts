import { Box } from "@mui/material";
import styled from "styled-components";

export const Carrousel = styled(Box)`
  display: flex;
  position: relative;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const Controls = styled("div")`
  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    cursor: pointer;
    color: white;
    background-color: #4D7A18;
    border-radius: 100%;
    padding: 12px;

    &.left {
      left: 20px;
    }

    &.right {
      right: 20px;
    }
`;
