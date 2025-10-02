import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
