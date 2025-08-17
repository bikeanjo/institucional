import styled from "styled-components";

export const Container = styled.div`
  max-width: 1240px;
  position: relative;
`;

export const MapImage = styled.img`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    max-width: 100%;
    min-height: 280px;
    object-fit: cover;
    border-radius: 16px;
    border: 2px solid black;
    overflow: hidden;
  }
`;
