import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px 96px;
  max-width: 1248px;
  position: relative;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #486284;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const Sub = styled.p`
  white-space: pre-line;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin: 16px 0 40px;
  text-align: center;
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: relative;
  margin: 0 auto;
  max-width: 100%;

  p {
    font-weight: 500;
  }
`;

export const Cards = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 24px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Arrow = styled.button<{ direction?: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  margin: 0 -80px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  ${({ direction }) => direction === "left" && `left: 0;`}
  ${({ direction }) => direction === "right" && `right: 0;`}
`;

export const ButtonContainer = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonText = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin: 0 100px 8px;
`;

export const Button = styled.button`
  background-color: #d9d9d9;
  color: #000;
  border: none;
  padding: 16px 32px;
  border-radius: 90px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;
