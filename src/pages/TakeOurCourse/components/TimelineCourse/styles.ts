import styled from "styled-components";
import { Box, Typography } from "@mui/material";

interface BoxContentProps {
  left?: boolean;
  side?: "left" | "right";
  padding?: "left" | "right";
}

export const Timeline = styled(Box)`
  width: 800px;
  padding: 40px 20px;
  position: relative;

  &::after {
    width: 2px;
    height: 100%;
    background: var(--mui-palette-G-Grey-50);
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
  }

  @media (max-width: 900px) {
    width: 343px;
    padding: 32px 0px;

    &::after {
      height: 88%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const BoxContent = styled(Box)<BoxContentProps>`
  width: 50%;
  position: relative;
  left: ${({ left }) => (left ? "0" : "50%")};

  ${({ padding }) =>
    padding === "right"
      ? `padding-right: 38px; padding-left: 0;`
      : `padding-left: 38px; padding-right: 0;`}

  @media (max-width: 900px) {
    width: 100%;
    left: 0;
    padding-right: 8px;
    padding-left: 46px;
    padding-bottom: 16px;
  }
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 342px;
  height: fit-content;
  position: relative;
  padding-top: 25px;
  padding-inline: 27px;
  padding-bottom: 27px;
  background-color: var(--mui-palette-Orange-10);
  border: 2px solid var(--mui-palette-Orange-50);
  border-radius: 15px;
  gap: 6px;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    padding: 24px 16px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  color: var(--mui-palette-G-Grey-100);

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const Text = styled(Typography)`
  font-size: 16px;
  color: var(--mui-palette-G-Grey-100);
`;

export const ContainerDot = styled(Box)<BoxContentProps>`
  width: fit-content;
  position: absolute;
  top: 65px;
  z-index: 10;

  ${({ side }) =>
    side === "right"
      ? `right: -15px; left: auto;`
      : `left: -13px; right: auto;`}

  @media (max-width: 900px) {
    top: 55px;
    left: -13px;
    rigth: 0;
  }
`;

export const Dot = styled(Box)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--mui-palette-G-White);
  border: 2px solid var(--mui-palette-Orange-50);
`;

export const Ball = styled(Box)`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
  background-color: var(--mui-palette-Orange-50);
`;
