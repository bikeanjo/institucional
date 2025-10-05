import styled from "styled-components";
import { Colors } from "@colors";

export const ContainerCard = styled.div<{ color?: string }>`
  min-width: 343px;
  max-width: 343px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  gap: 20px;
  border: 2px solid
    ${(props) => (props.color ? props.color : Colors["Pink_50"])};
  border-radius: 16px;
  border-sizing: border-box;

  .content {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  @media (max-width: 900px) {
    min-width: 168px;
    padding: 24px 8px;
    gap: 8px;
    border: 2px solid var(--mui-palette-secondary-main);
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin: 0;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 580px;
  height: 200px;
  border-radius: 16px;
  background-color: var(--mui-palette-secondary-main);
  background-size: cover;
  background-position: center;

  @media (max-width: 900px) {
    max-width: 152px;
    height: 100px;
    border-radius: 8px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #000000;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 12px;
    padding: 0px;
    white-space: pre-line;
  }
`;
