import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.section`
  margin: 40px 192px;
  max-width: 1440px;
  position: relative;
  justify-content: center;

  @media (max-width: 900px) {
    margin: 16px;
  }
`;

export const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 24px;
  border: 4px solid var(--mui-palette-secondary-main);
  border-radius: 16px;
  border-sizing: border-box;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: var(--mui-palette-title-main);
    margin: 0;
  }

  p {
    padding: 0px 25px;
    font-size: 16px;
    color: #000000;
    margin: 0;
  }

  @media (max-width: 900px) {
    padding: 16px;

    h2 {
      font-size: 16px;
      text-align: center;
    }
    p {
      padding: 0px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 872px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
`;

export const CardButton = styled(Button)`
  width: auto;
  min-width: unset;
  padding: 6px 12px;
  text-transform: none;
  border-radius: 4px;
  background-color: #00aeef;

  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
`;
