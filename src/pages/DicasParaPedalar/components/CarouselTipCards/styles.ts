import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 160px 202px 40px;
  max-width: 1248px;
  position: relative;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 48px;
  font-weight: 600;
  margin: 0;
`;

export const Sub = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  margin: 32px 0;
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
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
