import styled from "styled-components";

interface TitleProps {
  align?: "left" | "center" | "right";
}

export const Wrapper = styled.div`
  margin: 40px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2<TitleProps>`
  color: #000;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  text-align: ${({ align }) => align || "left"};
`;

export const MapImage = styled.img`
  width: 100%;
`;
