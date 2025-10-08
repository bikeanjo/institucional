import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StepsContainer = styled.div`
  margin: 0 auto 40px;
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
