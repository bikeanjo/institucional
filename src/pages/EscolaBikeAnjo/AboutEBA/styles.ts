import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.p`
  white-space: pre-line;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin: 8px 0 36px;
  text-align: center;
`;

export const EBAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 82px;
  border: 4px solid #d9d9d9;
  margin: 0 202px;
  border-radius: 16px;
`;

export const Title = styled.h2`
  color: #486284;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  width: 100%;
`;
