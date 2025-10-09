import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StepsContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const StepItem = styled.div`
  display: flex;
  justify-content: center;

  .step-card {
    width: 100%;
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
