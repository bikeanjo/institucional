import styled from "styled-components";
import { Box } from "@mui/material";

export const ContentContainer = styled(Box)`
  padding: 40px 92px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 24px 16px 32px 16px;
  }
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
