import styled from "styled-components";

export const ContainerCards = styled.section`
  display: flex;
  gap: 24px;
  margin: 0 auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  z-index: 8;

  & > * {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    gap: 8px;
    justify-content: flex-start;
  }
`;
