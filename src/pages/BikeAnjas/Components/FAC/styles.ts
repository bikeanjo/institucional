import styled from "styled-components";

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    gap: 8px;
  }
`;
