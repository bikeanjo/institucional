import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  gap: 24px;
  margin: 32px auto 80px;
  height: auto;

  img {
    width: 50%;
    object-fit: contain;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;

    img {
      width: 100%;
      height: auto;
      order: 2;
    }
  }
`;

export const TextWrapper = styled.div`
  border-radius: 16px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: auto;
    order: 1;
  }
`;

export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  margin-top: 16px;
  color: #000;
`;
