import styled, { css } from "styled-components";
import { Typography, TypographyProps, Box } from "@mui/material";

interface SubtitleProps extends TypographyProps {
  component?: "h3" | "h4";
}

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 40px 96px;
  gap: 24px;

  @media (max-width: 900px) {
    padding-inline: 16px;
    gap: 16px;
  }
`;

export const Subtitle = styled(Typography)<SubtitleProps>`
  font-size: 40px;
  font-weight: 700;
  color: var(--mui-palette-Pink-50);
  margin: 0;

  ${(props) =>
    props.component === "h4" &&
    css`
      font-size: 24px;
      font-weight: 700;
      color: var(--mui-palette-G-Grey-100);
    `}

  @media (max-width: 900px) {
    font-size: 24px;
    text-align: center;

    ${(props) =>
      props.component === "h4" &&
      css`
        font-size: 18px;
        text-align: left;
      `}
  }
`;

export const SummaryBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
  border: 2px solid var(--mui-palette-G-Grey-30);
  border-radius: 8px;
  background-color: var(--mui-palette-G-Grey-20);
`;

export const SummaryText = styled(Typography)`
  font-size: 18px;
  color: var(--mui-palette-G-Grey-60);
`;
