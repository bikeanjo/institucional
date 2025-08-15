import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 202px;

  @media (max-width: 900px) {
    margin: 16px 10px;
  }
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    gap: 8px;
  }
`;
