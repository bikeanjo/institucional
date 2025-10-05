import styled from "styled-components";
import { Box, Link, Typography } from "@mui/material";

export const Container = styled(Box)`
  max-width: 1248px;
  border: 1px solid var(--mui-palette-G_Grey_30);
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  boxs-sizing: border-box;
`;

export const ContainerItems = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  border-top: 1px solid var(--mui-palette-G_Grey_30);
  border-radius: 0 0 8px 8px;
  background-color: var(--mui-palette-G_White);
  gap: 16px;
`;

export const Items = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Month = styled(Box)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 8px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const BoxMonth = styled(Box)`
  width: 120px;
  height: auto;
  padding: 15px 42px;
  border: 2px solid #525252;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const MonthName = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: #525252;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const Line = styled(Box)`
  width: 2px;
  background-color: #525252;
  border-radius: 2px;
  flex-grow: 1;
  margin: 0 auto;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Media = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (max-width: 900px) {
    gap: 8px;
  }
`;

export const BoxMedia = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 16px;
  border: 2px solid var(--mui-palette-Blue_60);
  border-radius: 8px;
  gap: 12px;
`;

export const Infos = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;

  @media (max-width: 900px) {
    gap: 8px;
  }
`;

export const BoxInfos = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const LinkButton = styled(Link)`
  text-transform: none;
  color: var(--mui-palette-Blue_60);
  text-decoration: underline;
  padding: 0px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  text-decoration: underline;
`;

export const MediaTitle = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  color: #525252;
`;

export const InfoName = styled(Typography)`
  font-size: 14px;
  color: #525252;
  padding-top: 3px;
`;
