import styled from "styled-components";
import { Colors } from "../../../../styles/tokens/colors";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;

  .step-card {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonText = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin: 0 100px 8px;
`;

export const Button = styled.button`
  background-color: ${Colors["Green-70"]};
  color: ${Colors["G-White"]};
  border: none;
  padding: 16px 32px;
  border-radius: 90px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;
