import styled from "styled-components";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const ListContainer = styled(List)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (max-width: 900px) {
    padding: 24px 0px;
    gap: 16px;
  }
`;

export const Item = styled(ListItem)`
  width: 100%;
  margin: 0px;
  padding: 0px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Icon = styled(ListItemIcon)`
  min-width: auto;
  margin-right: 10px;
  color: var(--mui-palette-Green-70);

  @media (max-width: 900px) {
    color: var(--mui-palette-G-Grey-100);
  }
`;

export const Text = styled(ListItemText)`
  font-size: 18px;
  color: var(--mui-palette-G-Grey-100);

  @media (max-width: 900px) {
    text-align: center;
    white-space: pre-line;
  }
`;
