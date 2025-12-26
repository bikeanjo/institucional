import styled from "styled-components";
import { Colors } from "@colors";

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    min-width: 24px;
    display: block;
  }

  a {
    font-size: 16px;
    color: ${Colors["Green_70"]};
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;
