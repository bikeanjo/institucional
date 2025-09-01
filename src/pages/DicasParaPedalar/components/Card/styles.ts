import styled from "styled-components";
import { Colors } from "../../../../styles/tokens/colors";

export const Card = styled.div`
  min-width: 250px;
  max-width: 330px;
  background: #f8f8f8;
  border-radius: 16px;
  scroll-snap-align: start;
  flex-shrink: 0;
  border: 2px solid ${Colors["G-Grey-30"]};

  @media screen and (max-width: 1200px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const TopSection = styled.div<{ $variant: "default" | "attention" }>`
  width: 100%;
  background: ${({ $variant }) =>
    $variant === "attention" ? "#e5e5e5" : "#f8f8f8"};
  padding: 24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Number = styled.div`
  color: ${Colors["Pink-50"]};
  font-size: 54px;
  font-weight: 900;
  line-height: 100%;
`;

export const Title = styled.h3`
  color: ${Colors["Pink-50"]};
  min-height: 76px;
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  margin: 16px 0;
`;

export const Subtitle = styled.h2`
  color: #000;
  min-height: 84px;
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  margin: 0;
`;

export const Description = styled.div`
  color: #000;
  padding: 24px;
  font-size: 16px;
  font-weight: 400;
  background: #f8f8f8;
  white-space: pre-line;
  margin: 0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 16px;
  }
`;
