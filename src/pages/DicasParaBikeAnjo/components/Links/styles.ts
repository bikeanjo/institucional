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

  a {
    font-size: 16px;
    color: ${Colors["Blue_60"]};
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;
