import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 32px;

  @media (max-width: 900px) {
    margin-top: 0px;
    gap: 24px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: none;
    gap: 8px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  background-color: var(--mui-palette-G_Grey_10);
  border: 2px solid var(--mui-palette-G_Grey_30);
  border-radius: 8px;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  gap: 40px;

  @media (max-width: 900px) {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    gap: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
export const Step = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & > * {
    justify-content: left;
    padding: 0px;
  }
`;
export const Divider = styled.hr`
  width: 100%;
  border-top: 2px solid var(--mui-palette-G_Grey_30);
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const ButtonText = styled.p`
  color: var(--mui-palette-G_Grey_70);
  font-size: 16px;
  margin: 0px;
`;
