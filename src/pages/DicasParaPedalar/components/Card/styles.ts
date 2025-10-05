import styled from "styled-components";
import { Colors } from "../../../../styles/tokens/colors";

export const Card = styled.div`
  min-width: 250px;
  max-width: 330px;
  background-color: ${Colors["G_Grey_10"]};
  border: 2px solid ${Colors["G_Grey_30"]};
  border-radius: 16px;
  scroll-snap-align: start;
  flex-shrink: 0;
`;

export const TopSection = styled.div<{ $variant: "default" | "attention" }>`
  width: 100%;
  background: ${Colors["G_Grey_10"]};
  padding: 24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Number = styled.div`
  color: ${Colors["Green_70"]};
  font-size: 54px;
  font-weight: 900;
  line-height: 100%;
`;

export const Title = styled.h3`
  color: ${Colors["Green_70"]};
  min-height: 76px;
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  margin: 16px 0;
`;

export const Subtitle = styled.h2`
  color: ${Colors["Gray-100"]};
  min-height: 84px;
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
  margin: 0;
`;

export const Divider = styled.div`
  height: 2px;
  background-color: ${Colors["G_Grey_30"]};
  margin: 0 24px;
`;

export const Description = styled.div`
  color: ${Colors["G_Grey_100"]};
  padding: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  background: ${Colors["Gray-30"]};
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
