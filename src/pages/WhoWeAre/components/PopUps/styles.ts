import styled from "styled-components";
import { Modal, Box, Typography, IconButton } from "@mui/material";

export const ModalStyle = styled(Modal)`
  padding: 96px;
  overflow-y: auto;

  .MuiBackdrop-root {
    background-color: rgba(22, 22, 22, 0.3);
    backdrop-filter: blur(10px);
  }

  @media (max-width: 900px) {
    padding: 40px 16px;
  }
`;

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 866px;
  height: auto;
  padding: 24px;
  margin: 0 auto;
  gap: 40px;
  background-color: var(--mui-palette-G-White);
  border: 2px solid var(--mui-palette-G-Grey-20);
  border-radius: 16px;
  box-shadow: 0px 6px 8px (0, 0, 0, 0.15);

  @media (max-width: 900px) {
    padding: 48px 16px 16px 16px;
    gap: 24px;
  }
`;

export const Title = styled(Typography)`
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  color: var(--mui-palette-Pink-50);

  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  color: var(--mui-palette-Pink-50);
`;

export const Text = styled(Typography)`
  font-size: 16px;
  text-align: left;
  color: var(--mui-palette-G-Grey-100);
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 16px;
  gap: 10px;
  border: 2px solid var(--mui-palette-Green-70);
  border-radius: 8px;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  -webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    height: 248px;
    padding: 8px;
  }
`;

export const CloseButtonBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CloseButton = styled(IconButton)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--mui-palette-G-Grey-30);
`;

export const Label = styled(Typography)`
  font-size: 16px;
  color: var(--mui-palette-G-Grey-70);
`;

export const Value = styled(Typography)`
  width: fit-content;
  background-color: var(--mui-palette-G-Grey-10);
  padding: 4px 16px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  color: black;
`;
