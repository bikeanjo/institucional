import styled from "styled-components";

export const GridWrapper = styled.section`
  display: grid;
  gap: 24px;
  margin: 32px auto 80px;
  width: 100%;

  grid-template-columns: 1fr 1fr;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TextBlock = styled.div`
  grid-row: 1;
  grid-column: 2;

  @media (max-width: 768px) {
    grid-row: 1;
    grid-column: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
  grid-row: 1 / span 2;
  grid-column: 1;

  @media (max-width: 768px) {
    grid-row: 2;
    grid-column: 1;
    width: 100%;
    height: auto;
  }
`;

export const ButtonWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  align-self: flex-end;

  @media (max-width: 768px) {
    grid-row: 3;
    grid-column: 1;
    display: flex;
    justify-content: center;
  }
`;
