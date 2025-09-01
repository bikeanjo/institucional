import styled from "styled-components";
import { Colors } from "../../styles/tokens/colors";

export const BoxTitle = styled.p`
  font-weight: 600;
  font-size: 32px;
  margin: 0;
  margin-left: 24px;
  color: #000;
`;

export const BoxDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: #606060;
  margin: 0;
`;

export const PrimaryButton = styled.button`
  background-color: ${Colors["Green-70"]};
  color: ${Colors["G-White"]};
  font-size: 24px;
  font-weight: 600;
  padding: 24px 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: auto;
`;
