import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 1248px;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #486284;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const Sub = styled.p`
  white-space: pre-line;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin: 16px 0 40px;
  text-align: center;
`;

export const StepsContainer = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const StepItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .step-card {
    max-width: 400px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 40px auto;
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
