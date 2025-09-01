import styled, { css } from "styled-components";
import { Button } from "@mui/material";
import { Colors } from "../../../../styles/tokens/colors";

interface CardProps {
  $secondary?: boolean;
}

export const Card = styled.section<CardProps>`
  max-width: 294px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${Colors["G-Grey-10"]};
  justify-content: space-between;
  border: 2px solid ${Colors["G-Grey-30"]};
  border-radius: 16px;
  border-sizing: border-box;

  .titleCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 32px;
      font-weight: 600;
      line-height: 30px;
      color: ${Colors["Green-70"]};
      margin: 0;
    }
  }
  p {
    width: 262px;
    font-size: 16px;
    color: #000000;
    margin: 0;
  }
  ${(props) =>
    props.$secondary &&
    css`
      p {
        text-align: center;
        padding-bottom: 20px;
      }

      ul {
        list-style: none;
        padding: 0px;
        margin: 0;
      }
      li {
        margin-bottom: 20px;
        text-align: center;
      }
      li a {
        color: var(--mui-palette-title-main);
      }

      @media (max-width: 900px) {
        p {
          padding-bottom: 10px;
        }

        li {
          margin-bottom: 10px;
          text-align: center;
        }
      }
    `}

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 900px) {
    max-width: 219px;
    gap: 8px;
    .titleCard {
      height: 40px;
      h2 {
        font-size: 14px;
        line-height: 20px;
      }
    }

    p {
      width: 187px;
      font-size: 12px;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  max-width: 262px;
  height: 200px;
  border-radius: 16px;
  background-color: var(--mui-palette-secondary-main);
  background-size: cover;
  background-position: center;

  @media (max-width: 900px) {
    max-width: 187px;
    height: 150px;
  }
`;

export const AcessButton = styled(Button)`
  width: 100%;
  min-width: unset;
  padding: 16px 40px;
  text-transform: none;
  border-radius: 4px;
  background-color: ${Colors["Green-70"]};

  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  @media (max-width: 900px) {
    padding: 4px 24px;
    font-size: 12px;
    border-radius: 8px;
  }
`;
