import styled from "styled-components";

export const ContainerCards = styled.section`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  gap: 24px;
  margin: 0 auto;
  scroll-behavior: smooth;

  @media (max-width: 900px) {
    gap: 8px;
    justify-content: flex-start;
    padding: 16px calc(50% - 140px);
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    & > * {
      scroll-snap-align: center;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    padding: 16px 8px;
  }
`;

export const Dot = styled.span<{ isActive: boolean }>`
  @media (max-width: 900px) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => (props.isActive ? "#000" : "#D9D9D9")};
    margin: 0 8px;
    transition: background-color 0.6s;
  }
`;

export const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 14px" : "right: 14px")};
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
  z-index: 2;

  img {
    width: 20px;
    height: 20px;
    display: block;
    pointer-events: none;
  }
  @media (min-width: 901px) {
    display: none;
  }
`;
