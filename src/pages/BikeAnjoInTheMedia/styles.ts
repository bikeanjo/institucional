import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 40px 96px 80px 96px;
  margin: 0 auto;
  gap: 32px;

  @media (max-width: 900px) {
    padding: 26px 16px 40px 16px;
  }
`;
