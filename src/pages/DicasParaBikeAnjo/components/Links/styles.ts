import styled from "styled-components";

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LinkItem = styled.li`
  img {
    margin-right: 10px;
  }

  a {
    font-size: 16px;
    color: #000;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;
