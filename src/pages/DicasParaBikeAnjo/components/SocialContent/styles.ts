import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  gap: 24px;
  margin: 0 202px 160px;
  max-width: 1248px;
  height: 281px;

  img {
    width: 50%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 80px 24px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const TextWrapper = styled.div`
  background-color: #d9d9d9;
  border-radius: 16px;
  padding: 24px;
  height: 281px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: #000;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  margin-top: 16px;
  color: #000;
`;

export const Button = styled.a`
  align-self: flex-end;
  margin-top: auto;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 148px;
  text-decoration: none;
  cursor: pointer;
`;
