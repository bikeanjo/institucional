import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 48px;
  font-weight: 600;
  margin: 0;
`;

export const Sub = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  margin: 80px 0 40px;
`;

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
    max-width: 364px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 40px auto 80px;
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
  background-color: #d9d9d9;
  color: #000;
  border: none;
  padding: 16px 32px;
  border-radius: 90px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;
