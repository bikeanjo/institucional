import styled from "styled-components";
import { Button, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export const Container = styled(Box)`
  padding: 0px 72px;

  @media (max-width: 900px) {
    padding: 16px;
  }
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  background-color: transparent;
  padding-top: 16px;

  &:hover {
    background-color: transparent;
  }
  &:active {
    background-color: transparent;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

export const StyledIcon = styled(ArrowBack)`
  font-size: 16px;

  @media (max-width: 900px) {
    font-size: 10.67px;
  }
`;
