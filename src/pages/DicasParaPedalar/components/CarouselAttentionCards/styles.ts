import styled from "styled-components";

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
