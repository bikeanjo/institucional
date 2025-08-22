import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
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
