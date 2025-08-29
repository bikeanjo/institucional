import styled from "styled-components";

export const Container = styled.div<{ cardColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: #f4f4f4;
  border-radius: 16px;
  border: 2px solid ${(props) => props.cardColor};
  box-sizing: border-box;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);

  .titleBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 104.62px;
      height: 64px;
    }
  }

  hr {
    width: 100%;
    border-top: 2px solid #c6c6c6;
    border-radius: 5px;
  }

  .content {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: end;
  }

  @media (max-width: 900px) {
    border-radius: 8px;
    min-width: 343px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const Title = styled.h3<{ cardColor: string }>`
  padding-inline: 24px;
  font-weigth: 700;
  font-size: 32px;
  color: ${(props) => props.cardColor};
  margin: 0;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #161616;
  margin: 0;
`;
